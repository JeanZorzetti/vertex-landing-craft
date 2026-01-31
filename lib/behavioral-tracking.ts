/**
 * Behavioral Tracking System - Invisible Sales Core
 *
 * Este sistema rastreia comportamentos de alta intenção dos visitantes
 * sem ser intrusivo, alimentando dados para qualificação de leads
 * antes mesmo deles se identificarem.
 *
 * Filosofia: "O site atua como um vendedor invisível que nunca dorme"
 */

import {
  trackScrollDepth,
  trackTimeOnPage,
  trackSectionView,
  trackUserEngagement,
  trackLeadQualification,
  trackExitIntent,
  type UserEngagement,
  type LeadQualification,
} from './analytics';

// Configuração de thresholds para qualificação
const QUALIFICATION_CONFIG = {
  // Tempo mínimo (segundos) para considerar interesse genuíno
  MIN_TIME_FOR_INTEREST: 30,
  // Tempo para considerar alto interesse
  HIGH_INTEREST_TIME: 120,
  // Profundidade de scroll para considerar engajamento
  SCROLL_ENGAGEMENT_THRESHOLD: 50,
  // Seções de alto valor (indicam interesse comercial)
  HIGH_VALUE_SECTIONS: ['servicos', 'metodologia', 'cases', 'pricing', 'contato', 'diferenciais'],
  // Número de interações CTA para considerar hot lead
  HOT_LEAD_CTA_THRESHOLD: 2,
};

// Estado do rastreamento
interface TrackingState {
  sessionId: string;
  startTime: number;
  currentPage: string;
  scrollDepthMax: number;
  sectionsViewed: Map<string, number>; // sectionId -> tempo visualizado
  ctaInteractions: number;
  formInteractions: number;
  lastActivityTime: number;
  isActive: boolean;
}

// Singleton para gerenciar estado
let trackingState: TrackingState | null = null;

// Gerar ID de sessão único
function generateSessionId(): string {
  return `vs_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
}

// Inicializar tracking
export function initBehavioralTracking(): void {
  if (typeof window === 'undefined') return;

  // Recuperar ou criar sessão
  const existingSession = sessionStorage.getItem('vertice_session');

  trackingState = {
    sessionId: existingSession || generateSessionId(),
    startTime: Date.now(),
    currentPage: window.location.pathname,
    scrollDepthMax: 0,
    sectionsViewed: new Map(),
    ctaInteractions: 0,
    formInteractions: 0,
    lastActivityTime: Date.now(),
    isActive: true,
  };

  if (!existingSession) {
    sessionStorage.setItem('vertice_session', trackingState.sessionId);
  }

  // Configurar listeners
  setupScrollTracking();
  setupVisibilityTracking();
  setupExitIntentTracking();
  setupActivityTracking();

  // Iniciar timer de engajamento
  startEngagementTimer();
}

// Rastreamento de Scroll
function setupScrollTracking(): void {
  if (typeof window === 'undefined') return;

  let ticking = false;
  const scrollThresholds = [25, 50, 75, 90, 100];
  const trackedThresholds = new Set<number>();

  window.addEventListener('scroll', () => {
    if (!ticking && trackingState) {
      window.requestAnimationFrame(() => {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = Math.round((window.scrollY / scrollHeight) * 100);

        // Atualizar máximo
        if (scrollPercent > trackingState!.scrollDepthMax) {
          trackingState!.scrollDepthMax = scrollPercent;
        }

        // Disparar eventos em thresholds
        for (const threshold of scrollThresholds) {
          if (scrollPercent >= threshold && !trackedThresholds.has(threshold)) {
            trackedThresholds.add(threshold);
            trackScrollDepth(threshold, getCurrentVisibleSection());
          }
        }

        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

// Detectar seção visível atual
function getCurrentVisibleSection(): string {
  if (typeof window === 'undefined') return 'unknown';

  const sections = document.querySelectorAll('section[id], [data-section]');
  let currentSection = 'header';

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2;

    if (isVisible) {
      currentSection = section.id || section.getAttribute('data-section') || 'unknown';
    }
  });

  return currentSection;
}

// Rastreamento de Visibilidade (Tab Focus)
function setupVisibilityTracking(): void {
  if (typeof window === 'undefined') return;

  document.addEventListener('visibilitychange', () => {
    if (trackingState) {
      trackingState.isActive = !document.hidden;

      if (document.hidden) {
        // Usuário saiu da aba - salvar estado
        saveTrackingState();
      } else {
        // Usuário voltou - atualizar tempo de atividade
        trackingState.lastActivityTime = Date.now();
      }
    }
  });
}

// Rastreamento de Exit Intent
function setupExitIntentTracking(): void {
  if (typeof window === 'undefined') return;

  let exitIntentTriggered = false;

  document.addEventListener('mouseout', (e) => {
    if (
      !exitIntentTriggered &&
      trackingState &&
      e.clientY < 10 &&
      (e.target as HTMLElement)?.nodeName === 'HTML'
    ) {
      exitIntentTriggered = true;

      const engagement = calculateEngagement();
      trackExitIntent(engagement);

      // Qualificar lead antes da saída
      const qualification = qualifyLead(engagement);
      trackLeadQualification(qualification);
    }
  });

  // Reset ao voltar para a página
  window.addEventListener('focus', () => {
    exitIntentTriggered = false;
  });
}

// Rastreamento de Atividade
function setupActivityTracking(): void {
  if (typeof window === 'undefined') return;

  const activityEvents = ['mousedown', 'mousemove', 'keypress', 'touchstart', 'scroll'];

  const updateActivity = () => {
    if (trackingState) {
      trackingState.lastActivityTime = Date.now();
      trackingState.isActive = true;
    }
  };

  activityEvents.forEach((event) => {
    document.addEventListener(event, updateActivity, { passive: true });
  });
}

// Timer de Engajamento
function startEngagementTimer(): void {
  if (typeof window === 'undefined') return;

  // Enviar dados de tempo a cada 30 segundos
  setInterval(() => {
    if (trackingState?.isActive) {
      const timeOnPage = Math.round((Date.now() - trackingState.startTime) / 1000);
      trackTimeOnPage(timeOnPage, trackingState.currentPage);

      // A cada 2 minutos, calcular e enviar engajamento completo
      if (timeOnPage % 120 === 0) {
        const engagement = calculateEngagement();
        trackUserEngagement(engagement);

        // Qualificar lead
        const qualification = qualifyLead(engagement);
        if (qualification.score > 50) {
          trackLeadQualification(qualification);
        }
      }
    }
  }, 30000);
}

// Registrar visualização de seção
export function trackSection(sectionId: string, sectionName: string): void {
  if (!trackingState) return;

  const existingTime = trackingState.sectionsViewed.get(sectionId) || 0;
  trackingState.sectionsViewed.set(sectionId, existingTime);

  // Criar observer para tempo na seção
  if (typeof window !== 'undefined') {
    const section = document.getElementById(sectionId) || document.querySelector(`[data-section="${sectionId}"]`);

    if (section) {
      let entryTime = 0;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entryTime = Date.now();
            } else if (entryTime > 0) {
              const viewDuration = Math.round((Date.now() - entryTime) / 1000);
              const totalTime = (trackingState?.sectionsViewed.get(sectionId) || 0) + viewDuration;
              trackingState?.sectionsViewed.set(sectionId, totalTime);

              // Disparar evento se tempo significativo
              if (viewDuration >= 5) {
                trackSectionView(sectionId, sectionName, viewDuration);
              }

              entryTime = 0;
            }
          });
        },
        { threshold: 0.5 }
      );

      observer.observe(section);
    }
  }
}

// Registrar interação com CTA
export function trackCTAInteraction(): void {
  if (trackingState) {
    trackingState.ctaInteractions++;
  }
}

// Registrar interação com formulário
export function trackFormStart(): void {
  if (trackingState) {
    trackingState.formInteractions++;
  }
}

// Calcular engajamento atual
export function calculateEngagement(): UserEngagement {
  if (!trackingState) {
    return {
      scroll_depth: 0,
      time_on_page: 0,
      sections_viewed: [],
      cta_interactions: 0,
      engagement_score: 0,
    };
  }

  const timeOnPage = Math.round((Date.now() - trackingState.startTime) / 1000);
  const sectionsViewed = Array.from(trackingState.sectionsViewed.keys());

  // Calcular score de engajamento (0-100)
  let score = 0;

  // Tempo na página (max 30 pontos)
  if (timeOnPage >= 180) score += 30;
  else if (timeOnPage >= 120) score += 25;
  else if (timeOnPage >= 60) score += 20;
  else if (timeOnPage >= 30) score += 10;

  // Scroll depth (max 25 pontos)
  if (trackingState.scrollDepthMax >= 90) score += 25;
  else if (trackingState.scrollDepthMax >= 75) score += 20;
  else if (trackingState.scrollDepthMax >= 50) score += 15;
  else if (trackingState.scrollDepthMax >= 25) score += 8;

  // Seções visualizadas (max 25 pontos)
  const highValueSections = sectionsViewed.filter((s) =>
    QUALIFICATION_CONFIG.HIGH_VALUE_SECTIONS.some((hv) => s.includes(hv))
  );
  score += Math.min(highValueSections.length * 5, 25);

  // Interações CTA (max 20 pontos)
  score += Math.min(trackingState.ctaInteractions * 5, 20);

  return {
    scroll_depth: trackingState.scrollDepthMax,
    time_on_page: timeOnPage,
    sections_viewed: sectionsViewed,
    cta_interactions: trackingState.ctaInteractions,
    engagement_score: score,
  };
}

// Qualificar lead baseado em comportamento
export function qualifyLead(engagement: UserEngagement): LeadQualification {
  const signals: string[] = [];
  let score = engagement.engagement_score;

  // Análise de sinais de intenção
  if (engagement.time_on_page >= QUALIFICATION_CONFIG.HIGH_INTEREST_TIME) {
    signals.push('high_time_engagement');
    score += 10;
  }

  if (engagement.scroll_depth >= QUALIFICATION_CONFIG.SCROLL_ENGAGEMENT_THRESHOLD) {
    signals.push('deep_scroll');
  }

  const viewedHighValueSections = engagement.sections_viewed.filter((s) =>
    QUALIFICATION_CONFIG.HIGH_VALUE_SECTIONS.some((hv) => s.includes(hv))
  );

  if (viewedHighValueSections.includes('contato')) {
    signals.push('viewed_contact');
    score += 15;
  }

  if (viewedHighValueSections.includes('servicos') || viewedHighValueSections.includes('pricing')) {
    signals.push('viewed_services');
    score += 10;
  }

  if (engagement.cta_interactions >= QUALIFICATION_CONFIG.HOT_LEAD_CTA_THRESHOLD) {
    signals.push('multiple_cta_interactions');
    score += 15;
  }

  // Determinar nível de intenção
  let intentLevel: 'cold' | 'warm' | 'hot';
  let recommendedAction: string;

  if (score >= 70) {
    intentLevel = 'hot';
    recommendedAction = 'immediate_outreach';
  } else if (score >= 40) {
    intentLevel = 'warm';
    recommendedAction = 'nurture_sequence';
  } else {
    intentLevel = 'cold';
    recommendedAction = 'awareness_content';
  }

  return {
    score: Math.min(score, 100),
    signals,
    intent_level: intentLevel,
    recommended_action: recommendedAction,
  };
}

// Salvar estado no sessionStorage
function saveTrackingState(): void {
  if (trackingState && typeof window !== 'undefined') {
    const stateToSave = {
      ...trackingState,
      sectionsViewed: Array.from(trackingState.sectionsViewed.entries()),
    };
    sessionStorage.setItem('vertice_tracking_state', JSON.stringify(stateToSave));
  }
}

// Obter dados para enviar ao CRM
export function getTrackingDataForCRM(): {
  sessionId: string;
  engagement: UserEngagement;
  qualification: LeadQualification;
} | null {
  if (!trackingState) return null;

  const engagement = calculateEngagement();
  const qualification = qualifyLead(engagement);

  return {
    sessionId: trackingState.sessionId,
    engagement,
    qualification,
  };
}

// Cleanup ao sair
export function cleanupTracking(): void {
  if (trackingState) {
    const engagement = calculateEngagement();
    trackUserEngagement(engagement);
    trackLeadQualification(qualifyLead(engagement));
    saveTrackingState();
  }
}

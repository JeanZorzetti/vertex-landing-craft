/**
 * Analytics & GTM Integration Layer
 * Sistema de eventos para Google Tag Manager e Google Analytics 4
 * Parte do sistema Invisible Sales da Vértice Marketing
 */

// Tipos para eventos do dataLayer
export interface GTMEvent {
  event: string;
  [key: string]: unknown;
}

export interface UserEngagement {
  scroll_depth: number;
  time_on_page: number;
  sections_viewed: string[];
  cta_interactions: number;
  engagement_score: number;
}

export interface LeadQualification {
  score: number;
  signals: string[];
  intent_level: 'cold' | 'warm' | 'hot';
  recommended_action: string;
}

// Verificação segura do ambiente
const isClient = typeof window !== 'undefined';

// Push seguro para o dataLayer
export function pushToDataLayer(event: GTMEvent): void {
  if (!isClient) return;

  // Usar variável global para compatibilidade com @next/third-parties
  globalThis.dataLayer = globalThis.dataLayer || [];
  globalThis.dataLayer.push(event);

  // Log em desenvolvimento
  if (process.env.NODE_ENV === 'development') {
    console.log('[GTM Event]', event);
  }
}

// Eventos de Pageview customizados
export function trackPageView(pagePath: string, pageTitle: string): void {
  pushToDataLayer({
    event: 'page_view',
    page_path: pagePath,
    page_title: pageTitle,
    page_location: isClient ? window.location.href : '',
    timestamp: new Date().toISOString(),
  });
}

// Eventos de Scroll Depth
export function trackScrollDepth(depth: number, sectionId?: string): void {
  pushToDataLayer({
    event: 'scroll_depth',
    scroll_percentage: depth,
    section_id: sectionId || 'unknown',
    timestamp: new Date().toISOString(),
  });
}

// Eventos de Tempo na Página
export function trackTimeOnPage(seconds: number, pagePath: string): void {
  pushToDataLayer({
    event: 'time_on_page',
    engagement_time_seconds: seconds,
    page_path: pagePath,
    timestamp: new Date().toISOString(),
  });
}

// Eventos de Interação com CTA
export function trackCTAClick(ctaId: string, ctaText: string, location: string): void {
  pushToDataLayer({
    event: 'cta_click',
    cta_id: ctaId,
    cta_text: ctaText,
    cta_location: location,
    timestamp: new Date().toISOString(),
  });
}

// Eventos de Visualização de Seção
export function trackSectionView(sectionId: string, sectionName: string, viewDuration: number): void {
  pushToDataLayer({
    event: 'section_view',
    section_id: sectionId,
    section_name: sectionName,
    view_duration_seconds: viewDuration,
    timestamp: new Date().toISOString(),
  });
}

// Eventos de Formulário
export function trackFormInteraction(
  formId: string,
  action: 'start' | 'field_focus' | 'field_blur' | 'submit' | 'error',
  fieldName?: string,
  errorMessage?: string
): void {
  pushToDataLayer({
    event: 'form_interaction',
    form_id: formId,
    form_action: action,
    field_name: fieldName,
    error_message: errorMessage,
    timestamp: new Date().toISOString(),
  });
}

// Evento de Conversão (Lead capturado)
export function trackConversion(
  conversionType: string,
  value?: number,
  leadData?: {
    hasEmail: boolean;
    hasPhone: boolean;
    hasCompany: boolean;
    revenue?: string;
  }
): void {
  pushToDataLayer({
    event: 'conversion',
    conversion_type: conversionType,
    conversion_value: value,
    lead_quality: calculateLeadQuality(leadData),
    timestamp: new Date().toISOString(),
  });
}

// Evento de Qualificação de Lead (Invisible Sales Core)
export function trackLeadQualification(qualification: LeadQualification): void {
  pushToDataLayer({
    event: 'lead_qualification',
    lead_score: qualification.score,
    lead_signals: qualification.signals,
    intent_level: qualification.intent_level,
    recommended_action: qualification.recommended_action,
    timestamp: new Date().toISOString(),
  });
}

// Evento de Engajamento do Usuário
export function trackUserEngagement(engagement: UserEngagement): void {
  pushToDataLayer({
    event: 'user_engagement',
    ...engagement,
    timestamp: new Date().toISOString(),
  });
}

// Eventos de Core Web Vitals
export function trackWebVital(
  name: 'LCP' | 'CLS' | 'INP' | 'TTFB' | 'FCP',
  value: number,
  rating: 'good' | 'needs-improvement' | 'poor'
): void {
  pushToDataLayer({
    event: 'web_vital',
    vital_name: name,
    vital_value: value,
    vital_rating: rating,
    timestamp: new Date().toISOString(),
  });
}

// Evento de Saída da Página (Exit Intent)
export function trackExitIntent(engagement: UserEngagement): void {
  pushToDataLayer({
    event: 'exit_intent',
    ...engagement,
    timestamp: new Date().toISOString(),
  });
}

// Cálculo de Qualidade do Lead
function calculateLeadQuality(leadData?: {
  hasEmail: boolean;
  hasPhone: boolean;
  hasCompany: boolean;
  revenue?: string;
}): string {
  if (!leadData) return 'unknown';

  let score = 0;
  if (leadData.hasEmail) score += 1;
  if (leadData.hasPhone) score += 2;
  if (leadData.hasCompany) score += 2;
  if (leadData.revenue) score += 3;

  if (score >= 6) return 'high';
  if (score >= 3) return 'medium';
  return 'low';
}

// Tipagem global para window (extensão)
declare global {
  // eslint-disable-next-line no-var
  var dataLayer: GTMEvent[] | undefined;
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Web Vitals Monitoring
 *
 * Monitoramento de Core Web Vitals para garantir conformidade
 * com as "Regras do Tabuleiro" do Google.
 *
 * Métricas monitoradas:
 * - LCP (Largest Contentful Paint) - Target: < 2.5s
 * - CLS (Cumulative Layout Shift) - Target: < 0.1
 * - INP (Interaction to Next Paint) - Target: < 200ms (substitui FID)
 * - TTFB (Time to First Byte) - Target: < 800ms
 * - FCP (First Contentful Paint) - Target: < 1.8s
 */

import { trackWebVital } from './analytics';

type VitalName = 'LCP' | 'CLS' | 'INP' | 'TTFB' | 'FCP';

interface VitalMetric {
  name: VitalName;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  id: string;
}

// Thresholds conforme Web Vitals do Google (2024+)
const THRESHOLDS: Record<VitalName, { good: number; poor: number }> = {
  LCP: { good: 2500, poor: 4000 },
  CLS: { good: 0.1, poor: 0.25 },
  INP: { good: 200, poor: 500 },
  TTFB: { good: 800, poor: 1800 },
  FCP: { good: 1800, poor: 3000 },
};

// Calcular rating baseado no valor
function getRating(name: VitalName, value: number): 'good' | 'needs-improvement' | 'poor' {
  const threshold = THRESHOLDS[name];
  if (value <= threshold.good) return 'good';
  if (value <= threshold.poor) return 'needs-improvement';
  return 'poor';
}

// Handler para métricas
function handleMetric(metric: VitalMetric): void {
  const rating = getRating(metric.name, metric.value);

  // Enviar para GTM/Analytics
  trackWebVital(metric.name, metric.value, rating);

  // Log em desenvolvimento
  if (process.env.NODE_ENV === 'development') {
    const color = rating === 'good' ? '🟢' : rating === 'needs-improvement' ? '🟡' : '🔴';
    console.log(`${color} [Web Vital] ${metric.name}: ${metric.value.toFixed(2)} (${rating})`);
  }
}

// Inicializar Web Vitals
export async function initWebVitals(): Promise<void> {
  if (typeof window === 'undefined') return;

  try {
    // Importar web-vitals dinamicamente (v4+)
    const { onLCP, onCLS, onINP, onTTFB, onFCP } = await import('web-vitals');

    // Registrar handlers para Core Web Vitals
    onLCP((metric) => {
      handleMetric({
        name: 'LCP',
        value: metric.value,
        rating: getRating('LCP', metric.value),
        delta: metric.delta,
        id: metric.id,
      });
    });

    onCLS((metric) => {
      handleMetric({
        name: 'CLS',
        value: metric.value,
        rating: getRating('CLS', metric.value),
        delta: metric.delta,
        id: metric.id,
      });
    });

    onINP((metric) => {
      handleMetric({
        name: 'INP',
        value: metric.value,
        rating: getRating('INP', metric.value),
        delta: metric.delta,
        id: metric.id,
      });
    });

    onTTFB((metric) => {
      handleMetric({
        name: 'TTFB',
        value: metric.value,
        rating: getRating('TTFB', metric.value),
        delta: metric.delta,
        id: metric.id,
      });
    });

    onFCP((metric) => {
      handleMetric({
        name: 'FCP',
        value: metric.value,
        rating: getRating('FCP', metric.value),
        delta: metric.delta,
        id: metric.id,
      });
    });

    if (process.env.NODE_ENV === 'development') {
      console.log('[Web Vitals] Monitoring initialized');
    }
  } catch (error) {
    // web-vitals não está instalado ou erro ao carregar
    console.warn('[Web Vitals] Failed to initialize:', error);
  }
}

// Obter métricas atuais (para debugging)
export function getPerformanceMetrics(): {
  navigation: PerformanceNavigationTiming | null;
  paint: PerformanceEntry[];
  resources: number;
} | null {
  if (typeof window === 'undefined' || !window.performance) return null;

  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  const paint = performance.getEntriesByType('paint');

  return {
    navigation: navigation || null,
    paint,
    resources: performance.getEntriesByType('resource').length,
  };
}

'use client';

/**
 * Invisible Sales Provider
 *
 * Provider global que inicializa todos os sistemas de rastreamento
 * do Invisible Sales: behavioral tracking, web vitals, e analytics.
 *
 * Este componente é o "vendedor invisível" que opera silenciosamente
 * em segundo plano, coletando dados comportamentais para qualificação de leads.
 */

import { useEffect, createContext, useContext, ReactNode, useState } from 'react';
import { initBehavioralTracking, cleanupTracking, getTrackingDataForCRM } from '@/lib/behavioral-tracking';
import { initWebVitals } from '@/lib/web-vitals';
import { trackPageView } from '@/lib/analytics';
import type { UserEngagement, LeadQualification } from '@/lib/analytics';

interface InvisibleSalesContextType {
  isInitialized: boolean;
  getTrackingData: () => {
    sessionId: string;
    engagement: UserEngagement;
    qualification: LeadQualification;
  } | null;
}

const InvisibleSalesContext = createContext<InvisibleSalesContextType>({
  isInitialized: false,
  getTrackingData: () => null,
});

export function useInvisibleSales() {
  return useContext(InvisibleSalesContext);
}

interface InvisibleSalesProviderProps {
  children: ReactNode;
}

export function InvisibleSalesProvider({ children }: InvisibleSalesProviderProps) {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Inicializar sistemas de tracking
    const init = async () => {
      // 1. Behavioral Tracking
      initBehavioralTracking();

      // 2. Web Vitals
      await initWebVitals();

      // 3. Page View inicial
      if (typeof window !== 'undefined') {
        trackPageView(window.location.pathname, document.title);
      }

      setIsInitialized(true);

      if (process.env.NODE_ENV === 'development') {
        console.log('[Invisible Sales] All systems initialized');
      }
    };

    init();

    // Cleanup ao desmontar
    return () => {
      cleanupTracking();
    };
  }, []);

  // Rastrear mudanças de rota (para SPA navigation)
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleRouteChange = () => {
      trackPageView(window.location.pathname, document.title);
    };

    // Usar popstate para navegação do browser
    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  // Rastrear beforeunload para capturar dados finais
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleBeforeUnload = () => {
      cleanupTracking();
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const contextValue: InvisibleSalesContextType = {
    isInitialized,
    getTrackingData: getTrackingDataForCRM,
  };

  return (
    <InvisibleSalesContext.Provider value={contextValue}>
      {children}
    </InvisibleSalesContext.Provider>
  );
}

'use client';

/**
 * Hook para Behavioral Tracking
 *
 * Fornece interface React para o sistema de rastreamento comportamental
 * do Invisible Sales.
 */

import { useEffect, useCallback, useRef } from 'react';
import {
  initBehavioralTracking,
  trackSection,
  trackCTAInteraction,
  trackFormStart,
  calculateEngagement,
  qualifyLead,
  getTrackingDataForCRM,
  cleanupTracking,
} from '@/lib/behavioral-tracking';
import { trackCTAClick, trackFormInteraction } from '@/lib/analytics';

// Hook principal
export function useBehavioralTracking() {
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      initBehavioralTracking();
      initialized.current = true;
    }

    // Cleanup ao desmontar
    return () => {
      cleanupTracking();
    };
  }, []);

  // Wrapper para tracking de CTA
  const onCTAClick = useCallback((ctaId: string, ctaText: string, location: string) => {
    trackCTAInteraction();
    trackCTAClick(ctaId, ctaText, location);
  }, []);

  // Wrapper para tracking de formulário
  const onFormStart = useCallback((formId: string) => {
    trackFormStart();
    trackFormInteraction(formId, 'start');
  }, []);

  const onFormFieldFocus = useCallback((formId: string, fieldName: string) => {
    trackFormInteraction(formId, 'field_focus', fieldName);
  }, []);

  const onFormFieldBlur = useCallback((formId: string, fieldName: string) => {
    trackFormInteraction(formId, 'field_blur', fieldName);
  }, []);

  const onFormSubmit = useCallback((formId: string) => {
    trackFormInteraction(formId, 'submit');
  }, []);

  const onFormError = useCallback((formId: string, fieldName: string, errorMessage: string) => {
    trackFormInteraction(formId, 'error', fieldName, errorMessage);
  }, []);

  // Obter dados atuais de engajamento
  const getEngagement = useCallback(() => {
    return calculateEngagement();
  }, []);

  // Obter qualificação atual do lead
  const getQualification = useCallback(() => {
    const engagement = calculateEngagement();
    return qualifyLead(engagement);
  }, []);

  // Obter dados completos para CRM
  const getCRMData = useCallback(() => {
    return getTrackingDataForCRM();
  }, []);

  return {
    onCTAClick,
    onFormStart,
    onFormFieldFocus,
    onFormFieldBlur,
    onFormSubmit,
    onFormError,
    getEngagement,
    getQualification,
    getCRMData,
  };
}

// Hook para tracking de seção (usar em cada seção)
export function useSectionTracking(sectionId: string, sectionName: string) {
  const tracked = useRef(false);

  useEffect(() => {
    if (!tracked.current) {
      trackSection(sectionId, sectionName);
      tracked.current = true;
    }
  }, [sectionId, sectionName]);
}

// Hook para tracking de CTA individual
export function useCTATracking() {
  const { onCTAClick } = useBehavioralTracking();

  const createCTAHandler = useCallback(
    (ctaId: string, ctaText: string, location: string) => {
      return (originalHandler?: () => void) => {
        return () => {
          onCTAClick(ctaId, ctaText, location);
          originalHandler?.();
        };
      };
    },
    [onCTAClick]
  );

  return { createCTAHandler, onCTAClick };
}

/**
 * Sirius CRM Client
 *
 * Cliente tipado para comunicação segura com o CRM proprietário Sirius.
 * Este módulo encapsula toda a lógica de integração, mantendo as credenciais
 * seguras no servidor.
 */

import { z } from 'zod';

// Schema de validação para contato
export const contactSchema = z.object({
  name: z
    .string()
    .min(3, 'Nome deve ter pelo menos 3 caracteres')
    .max(100, 'Nome muito longo'),
  email: z
    .string()
    .email('Email inválido')
    .min(1, 'Email é obrigatório'),
  phone: z
    .string()
    .min(10, 'Telefone inválido')
    .regex(/^[\d\s\-\(\)\+]+$/, 'Formato de telefone inválido'),
  company: z
    .string()
    .max(100, 'Nome da empresa muito longo')
    .optional()
    .or(z.literal('')),
  annualRevenue: z
    .string()
    .optional()
    .or(z.literal('')),
  message: z
    .string()
    .min(10, 'Mensagem deve ter pelo menos 10 caracteres')
    .max(1000, 'Mensagem muito longa'),
});

export type ContactInput = z.infer<typeof contactSchema>;

// Schema para dados comportamentais do Invisible Sales
export const behavioralDataSchema = z.object({
  sessionId: z.string().optional(),
  engagement: z.object({
    scroll_depth: z.number(),
    time_on_page: z.number(),
    sections_viewed: z.array(z.string()),
    cta_interactions: z.number(),
    engagement_score: z.number(),
  }).optional(),
  qualification: z.object({
    score: z.number(),
    signals: z.array(z.string()),
    intent_level: z.enum(['cold', 'warm', 'hot']),
    recommended_action: z.string(),
  }).optional(),
}).optional();

export type BehavioralData = z.infer<typeof behavioralDataSchema>;

// Tipos de resposta do Sirius
export interface SiriusResponse {
  success: boolean;
  data?: unknown;
  error?: string;
}

// Configuração do cliente
interface SiriusConfig {
  apiUrl: string;
  apiKey: string;
}

// Obter configuração do ambiente
function getConfig(): SiriusConfig {
  const apiUrl = process.env.SIRIUS_API_URL;
  const apiKey = process.env.SIRIUS_API_KEY;

  if (!apiUrl || !apiKey) {
    throw new Error('Credenciais do Sirius CRM não configuradas');
  }

  return { apiUrl, apiKey };
}

// Criar contato no Sirius CRM
export async function createContact(
  contact: ContactInput,
  behavioralData?: BehavioralData
): Promise<SiriusResponse> {
  const config = getConfig();

  // Preparar dados comportamentais para notas
  const qualificationScore = behavioralData?.qualification?.score || 0;
  const intentLevel = behavioralData?.qualification?.intent_level || 'cold';

  const behavioralNotes = behavioralData
    ? `[Invisible Sales] Score: ${qualificationScore} | Intent: ${intentLevel} | Time: ${behavioralData.engagement?.time_on_page || 0}s | Scroll: ${behavioralData.engagement?.scroll_depth || 0}%`
    : '';

  // Payload para o Sirius
  const payload = {
    name: contact.name,
    email: contact.email,
    phone: contact.phone,
    company: contact.company || '',
    notes: behavioralNotes,
  };

  try {
    const response = await fetch(`${config.apiUrl}/contacts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${config.apiKey}`,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('[Sirius] Erro ao criar contato:', errorText);
      return {
        success: false,
        error: `Erro ${response.status}: ${errorText}`,
      };
    }

    const data = await response.json();
    console.log('[Sirius] Contato criado com sucesso:', data);

    return {
      success: true,
      data,
    };
  } catch (error) {
    console.error('[Sirius] Erro de conexão:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Erro de conexão',
    };
  }
}

// Tipos exportados para uso externo
export type { ContactInput as LeadInput };

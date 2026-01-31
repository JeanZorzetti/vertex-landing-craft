'use server';

/**
 * Server Action: Submit Lead
 *
 * Esta Server Action processa formulários de contato de forma segura,
 * executando exclusivamente no servidor. Isso elimina a necessidade
 * de expor chaves de API ou lógicas sensíveis no bundle do cliente.
 *
 * Fluxo:
 * 1. Usuário submete formulário
 * 2. Dados são validados com Zod no servidor
 * 3. Contato é criado no Sirius CRM
 * 4. Resposta é retornada ao cliente
 */

import { z } from 'zod';
import {
  contactSchema,
  behavioralDataSchema,
  createContact,
  type ContactInput,
  type BehavioralData,
} from '@/lib/sirius/client';

// Schema completo para a action
const submitLeadSchema = z.object({
  contact: contactSchema,
  behavioralData: behavioralDataSchema,
});

// Tipo de retorno da action
export interface SubmitLeadResult {
  success: boolean;
  message: string;
  error?: string;
  validationErrors?: Record<string, string[]>;
}

// Server Action principal
export async function submitLead(
  formData: ContactInput,
  behavioralData?: BehavioralData
): Promise<SubmitLeadResult> {
  try {
    // 1. Validar dados com Zod
    const validationResult = submitLeadSchema.safeParse({
      contact: formData,
      behavioralData,
    });

    if (!validationResult.success) {
      const errors = validationResult.error.flatten();
      console.error('[submitLead] Erro de validação:', errors);

      return {
        success: false,
        message: 'Dados inválidos',
        validationErrors: errors.fieldErrors as Record<string, string[]>,
      };
    }

    const { contact, behavioralData: validatedBehavioral } = validationResult.data;

    // 2. Log para debug (apenas em desenvolvimento)
    if (process.env.NODE_ENV === 'development') {
      console.log('[submitLead] Processando lead:', {
        name: contact.name,
        email: contact.email,
        company: contact.company,
        intentLevel: validatedBehavioral?.qualification?.intent_level,
        score: validatedBehavioral?.qualification?.score,
      });
    }

    // 3. Enviar para Sirius CRM
    const siriusResult = await createContact(contact, validatedBehavioral);

    if (!siriusResult.success) {
      // Mesmo com erro no CRM, retornamos sucesso para o usuário
      // O lead será processado via backup local
      console.warn('[submitLead] Erro no Sirius, mas retornando sucesso:', siriusResult.error);

      return {
        success: true,
        message: 'Mensagem recebida! Entraremos em contato em breve.',
        error: siriusResult.error,
      };
    }

    // 4. Sucesso completo
    return {
      success: true,
      message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
    };
  } catch (error) {
    console.error('[submitLead] Erro inesperado:', error);

    return {
      success: false,
      message: 'Erro ao processar sua mensagem. Por favor, tente novamente.',
      error: error instanceof Error ? error.message : 'Erro desconhecido',
    };
  }
}

// Re-exportar tipos úteis
export type { ContactInput, BehavioralData };

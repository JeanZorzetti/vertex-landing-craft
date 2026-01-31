import { NextRequest, NextResponse } from "next/server";

// Tipos para dados comportamentais do Invisible Sales
interface BehavioralData {
  sessionId?: string;
  engagement?: {
    scroll_depth: number;
    time_on_page: number;
    sections_viewed: string[];
    cta_interactions: number;
    engagement_score: number;
  };
  qualification?: {
    score: number;
    signals: string[];
    intent_level: 'cold' | 'warm' | 'hot';
    recommended_action: string;
  };
}

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();
    const { name, email, phone, company, annualRevenue, message, behavioralData } = body as {
      name: string;
      email: string;
      phone: string;
      company?: string;
      annualRevenue?: string;
      message: string;
      behavioralData?: BehavioralData;
    };

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Campos obrigatórios faltando" },
        { status: 400 }
      );
    }

    // Get Sirius API credentials from environment
    const apiKey = process.env.SIRIUS_API_KEY;
    const apiUrl = process.env.SIRIUS_API_URL;

    if (!apiKey || !apiUrl) {
      console.error("Credenciais do Sirius não configuradas");
      return NextResponse.json(
        { error: "Erro de configuração do servidor" },
        { status: 500 }
      );
    }

    // Preparar dados comportamentais do Invisible Sales
    const engagementScore = behavioralData?.engagement?.engagement_score || 0;
    const intentLevel = behavioralData?.qualification?.intent_level || 'cold';
    const qualificationScore = behavioralData?.qualification?.score || 0;

    // Prepare lead data for Sirius CRM com dados comportamentais
    const leadData = {
      name,
      email,
      phone,
      company: company || "",
      revenue: annualRevenue || "",
      message,
      source: "Website Vértice Marketing",
      createdAt: new Date().toISOString(),
      // Dados do Invisible Sales
      behavioral: {
        sessionId: behavioralData?.sessionId,
        engagementScore,
        qualificationScore,
        intentLevel,
        signals: behavioralData?.qualification?.signals || [],
        timeOnPage: behavioralData?.engagement?.time_on_page || 0,
        scrollDepth: behavioralData?.engagement?.scroll_depth || 0,
        sectionsViewed: behavioralData?.engagement?.sections_viewed || [],
        ctaInteractions: behavioralData?.engagement?.cta_interactions || 0,
        recommendedAction: behavioralData?.qualification?.recommended_action || 'awareness_content',
      },
    };

    // Preparar dados no formato simples que o Sirius espera
    // Baseado no formulário do Sirius: apenas name, email, phone, company
    // Adiciona notas com dados comportamentais para contexto
    const behavioralNotes = behavioralData
      ? `[Invisible Sales] Score: ${qualificationScore} | Intent: ${intentLevel} | Time: ${behavioralData.engagement?.time_on_page || 0}s | Scroll: ${behavioralData.engagement?.scroll_depth || 0}%`
      : '';

    const contactData = {
      name,
      email,
      phone,
      company: company || "",
      notes: behavioralNotes,
    };

    // Log para debug
    console.log("Enviando contato para Sirius CRM...");
    console.log("URL:", `${apiUrl}/contacts`);
    console.log("Contact data:", JSON.stringify(contactData, null, 2));
    console.log("Message (salva apenas localmente):", message);
    console.log("Revenue (salva apenas localmente):", annualRevenue);

    // Send contact to Sirius CRM
    const siriusResponse = await fetch(`${apiUrl}/contacts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(contactData),
    });

    console.log("Resposta Sirius status:", siriusResponse.status);

    // Check if Sirius API request was successful
    if (!siriusResponse.ok) {
      const errorData = await siriusResponse.text();
      console.error("Erro ao enviar lead para Sirius:", errorData);
      console.error("Status code:", siriusResponse.status);

      // Por enquanto, retornar sucesso para o usuário mesmo que Sirius falhe
      // O lead fica salvo no localStorage como backup
      return NextResponse.json(
        {
          success: true,
          warning: "Lead salvo localmente. Verificando integração com CRM.",
          error: errorData,
          status: siriusResponse.status,
        },
        { status: 200 }
      );
    }

    const siriusData = await siriusResponse.json();
    console.log("Lead enviado com sucesso para Sirius:", siriusData);

    return NextResponse.json(
      {
        success: true,
        message: "Lead enviado com sucesso para o CRM",
        data: siriusData,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro no endpoint de leads:", error);

    // Retornar sucesso para o usuário mesmo em caso de erro
    // O lead fica salvo no localStorage
    return NextResponse.json(
      {
        success: true,
        warning: "Lead salvo localmente. Erro ao conectar com CRM.",
        error: error instanceof Error ? error.message : "Erro desconhecido",
      },
      { status: 200 }
    );
  }
}

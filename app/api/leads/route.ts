import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();
    const { name, email, phone, company, annualRevenue, message } = body;

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

    // Prepare lead data for Sirius CRM
    const leadData = {
      name,
      email,
      phone,
      company: company || "",
      revenue: annualRevenue || "",
      message,
      source: "Website Vértice Marketing",
      createdAt: new Date().toISOString(),
    };

    // Log para debug
    console.log("Tentando enviar lead para Sirius CRM...");
    console.log("URL:", `${apiUrl}/leads`);
    console.log("Lead data:", leadData);

    // Send lead to Sirius CRM
    const siriusResponse = await fetch(`${apiUrl}/leads`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(leadData),
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

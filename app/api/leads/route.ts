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

    // Send lead to Sirius CRM
    const siriusResponse = await fetch(`${apiUrl}/leads`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(leadData),
    });

    // Check if Sirius API request was successful
    if (!siriusResponse.ok) {
      const errorData = await siriusResponse.text();
      console.error("Erro ao enviar lead para Sirius:", errorData);

      // Still save to localStorage backup even if Sirius fails
      return NextResponse.json(
        {
          warning: "Lead salvo localmente, mas houve erro ao sincronizar com CRM",
          leadData,
        },
        { status: 207 } // Multi-Status
      );
    }

    const siriusData = await siriusResponse.json();

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
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}

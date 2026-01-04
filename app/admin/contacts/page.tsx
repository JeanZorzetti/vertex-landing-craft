"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Building2, DollarSign, MessageSquare, Trash2, ArrowLeft, Home } from "lucide-react";

export default function ContactsPage() {
  const router = useRouter();
  const [contacts, setContacts] = useState<any[]>([]);

  useEffect(() => {
    const isAuth = localStorage.getItem("adminAuth");
    if (!isAuth) {
      router.push("/admin/login");
      return;
    }

    // Carregar contatos salvos
    const savedContacts = localStorage.getItem("contactSubmissions");
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    }
  }, [router]);

  const handleDelete = (id: string) => {
    if (confirm("Tem certeza que deseja excluir este contato?")) {
      const updatedContacts = contacts.filter(contact => contact.id !== id);
      setContacts(updatedContacts);
      localStorage.setItem("contactSubmissions", JSON.stringify(updatedContacts));
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <Link href="/admin/dashboard">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar
              </Button>
            </Link>
            <Image
              src="/logos/logo-main.png"
              alt="Vértice Marketing"
              width={150}
              height={45}
              className="h-10 w-auto"
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Formulários de Contato
          </h1>
          <p className="text-muted-foreground">
            Visualize todos os contatos recebidos pelo formulário do site
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl border border-border p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Total de Contatos</p>
                <p className="text-3xl font-bold text-foreground">{contacts.length}</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                <Mail className="w-6 h-6 text-gold" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-border p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Hoje</p>
                <p className="text-3xl font-bold text-foreground">
                  {contacts.filter(c => {
                    const today = new Date().toDateString();
                    return new Date(c.date).toDateString() === today;
                  }).length}
                </p>
              </div>
              <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-blue-500" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-border p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Esta Semana</p>
                <p className="text-3xl font-bold text-foreground">
                  {contacts.filter(c => {
                    const weekAgo = new Date();
                    weekAgo.setDate(weekAgo.getDate() - 7);
                    return new Date(c.date) >= weekAgo;
                  }).length}
                </p>
              </div>
              <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
                <Phone className="w-6 h-6 text-green-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Contacts List */}
        <div className="bg-white rounded-xl border border-border overflow-hidden">
          {contacts.length === 0 ? (
            <div className="py-16 text-center">
              <Mail className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Nenhum contato ainda
              </h3>
              <p className="text-muted-foreground">
                Os contatos enviados pelo formulário aparecerão aqui
              </p>
            </div>
          ) : (
            <div className="divide-y divide-border">
              {contacts.map((contact) => (
                <div key={contact.id} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-foreground">
                          {contact.name}
                        </h3>
                        <span className="text-xs text-muted-foreground">
                          {formatDate(contact.date)}
                        </span>
                      </div>

                      <div className="grid md:grid-cols-2 gap-3 mb-4">
                        <div className="flex items-center gap-2 text-sm">
                          <Mail className="w-4 h-4 text-muted-foreground" />
                          <a href={`mailto:${contact.email}`} className="text-gold hover:underline">
                            {contact.email}
                          </a>
                        </div>

                        <div className="flex items-center gap-2 text-sm">
                          <Phone className="w-4 h-4 text-muted-foreground" />
                          <a href={`tel:${contact.phone}`} className="text-foreground">
                            {contact.phone}
                          </a>
                        </div>

                        {contact.company && (
                          <div className="flex items-center gap-2 text-sm">
                            <Building2 className="w-4 h-4 text-muted-foreground" />
                            <span className="text-foreground">{contact.company}</span>
                          </div>
                        )}

                        {contact.revenue && (
                          <div className="flex items-center gap-2 text-sm">
                            <DollarSign className="w-4 h-4 text-muted-foreground" />
                            <span className="text-foreground">{contact.revenue}</span>
                          </div>
                        )}
                      </div>

                      {contact.message && (
                        <div className="bg-gray-50 rounded-lg p-4">
                          <p className="text-sm font-medium text-foreground mb-1">Mensagem:</p>
                          <p className="text-sm text-muted-foreground whitespace-pre-wrap">
                            {contact.message}
                          </p>
                        </div>
                      )}
                    </div>

                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDelete(contact.id)}
                      className="text-red-600 hover:text-red-700 hover:bg-red-50 ml-4"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Floating Button to Home */}
      <Link href="/">
        <Button
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40"
          variant="gold"
          size="icon"
          title="Voltar ao site"
        >
          <Home className="w-6 h-6" />
        </Button>
      </Link>
    </div>
  );
}

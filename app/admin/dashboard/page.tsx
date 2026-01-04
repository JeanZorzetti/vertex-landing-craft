"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FileText, Plus, LogOut, Edit, Trash2, Mail, TrendingUp, Home } from "lucide-react";

export default function AdminDashboard() {
  const router = useRouter();
  const [posts, setPosts] = useState<any[]>([]);
  const [contactsCount, setContactsCount] = useState(0);

  useEffect(() => {
    // Verificar autenticação
    const isAuth = localStorage.getItem("adminAuth");
    if (!isAuth) {
      router.push("/admin/login");
      return;
    }

    // Carregar posts salvos
    const savedPosts = localStorage.getItem("blogPosts");
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    }

    // Carregar contagem de contatos
    const savedContacts = localStorage.getItem("contactSubmissions");
    if (savedContacts) {
      setContactsCount(JSON.parse(savedContacts).length);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    router.push("/admin/login");
  };

  const handleDelete = (id: string) => {
    if (confirm("Tem certeza que deseja excluir este post?")) {
      const updatedPosts = posts.filter(post => post.id !== id);
      setPosts(updatedPosts);
      localStorage.setItem("blogPosts", JSON.stringify(updatedPosts));
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Image
                src="/logos/logo-main.png"
                alt="Vértice Marketing"
                width={150}
                height={45}
                className="h-10 w-auto"
                style={{ objectFit: 'contain' }}
              />
              <span className="text-sm text-muted-foreground">Admin</span>
            </div>
            <Button onClick={handleLogout} variant="outline" size="sm">
              <LogOut className="w-4 h-4 mr-2" />
              Sair
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Painel Administrativo
          </h1>
          <p className="text-muted-foreground">
            Gerencie o blog e visualize os contatos recebidos
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Blog Posts Card */}
          <Link href="#posts">
            <div className="bg-white rounded-xl border border-border p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-gold" />
                </div>
                <TrendingUp className="w-5 h-5 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-1">{posts.length}</h3>
              <p className="text-sm text-muted-foreground">Posts Publicados</p>
            </div>
          </Link>

          {/* Contacts Card */}
          <Link href="/admin/contacts">
            <div className="bg-white rounded-xl border border-border p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-500" />
                </div>
                {contactsCount > 0 && (
                  <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    {contactsCount}
                  </span>
                )}
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-1">{contactsCount}</h3>
              <p className="text-sm text-muted-foreground">Formulários de Contato</p>
            </div>
          </Link>
        </div>

        {/* Posts Section */}
        <div id="posts" className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-foreground">Posts do Blog</h2>
          <Link href="/admin/posts/new">
            <Button variant="gold" size="lg">
              <Plus className="w-5 h-5 mr-2" />
              Novo Post
            </Button>
          </Link>
        </div>

        {/* Posts List */}
        <div className="bg-white rounded-xl border border-border overflow-hidden">
          {posts.length === 0 ? (
            <div className="py-16 text-center">
              <FileText className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Nenhum post ainda
              </h3>
              <p className="text-muted-foreground mb-6">
                Comece criando seu primeiro post
              </p>
              <Link href="/admin/posts/new">
                <Button variant="gold">
                  <Plus className="w-4 h-4 mr-2" />
                  Criar Primeiro Post
                </Button>
              </Link>
            </div>
          ) : (
            <div className="divide-y divide-border">
              {posts.map((post) => (
                <div key={post.id} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span>Categoria: {post.category}</span>
                        <span>•</span>
                        <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
                      </div>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <Link href={`/admin/posts/edit/${post.id}`}>
                        <Button variant="outline" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                      </Link>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDelete(post.id)}
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
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

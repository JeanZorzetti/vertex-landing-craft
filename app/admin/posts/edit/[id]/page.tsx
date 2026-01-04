"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Save, Home } from "lucide-react";

export default function EditPostPage() {
  const router = useRouter();
  const params = useParams();
  const postId = params.id as string;

  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Marketing Digital");
  const [imageUrl, setImageUrl] = useState("");
  const [author, setAuthor] = useState("Vértice Marketing");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const isAuth = localStorage.getItem("adminAuth");
    if (!isAuth) {
      router.push("/admin/login");
      return;
    }

    // Carregar post
    const savedPosts = localStorage.getItem("blogPosts");
    if (savedPosts) {
      const posts = JSON.parse(savedPosts);
      const post = posts.find((p: any) => p.id === postId);

      if (post) {
        setTitle(post.title);
        setExcerpt(post.excerpt);
        setContent(post.content);
        setCategory(post.category);
        setImageUrl(post.image === "/placeholder.svg" ? "" : post.image);
        setAuthor(post.author);
      }
    }
    setLoading(false);
  }, [router, postId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const savedPosts = localStorage.getItem("blogPosts");
    if (savedPosts) {
      const posts = JSON.parse(savedPosts);
      const updatedPosts = posts.map((post: any) => {
        if (post.id === postId) {
          return {
            ...post,
            title,
            excerpt,
            content,
            category,
            image: imageUrl || "/placeholder.svg",
            author,
          };
        }
        return post;
      });

      localStorage.setItem("blogPosts", JSON.stringify(updatedPosts));
    }

    router.push("/admin/dashboard");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Carregando...</p>
      </div>
    );
  }

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
      <main className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Editar Post
          </h1>
          <p className="text-muted-foreground">
            Faça as alterações necessárias no post
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-white rounded-xl border border-border p-8 space-y-6">
            {/* Title */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-foreground mb-2">
                Título *
              </label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Ex: Como aumentar suas vendas com tráfego pago"
                required
              />
            </div>

            {/* Excerpt */}
            <div>
              <label htmlFor="excerpt" className="block text-sm font-medium text-foreground mb-2">
                Resumo *
              </label>
              <Textarea
                id="excerpt"
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                placeholder="Um breve resumo do post que aparecerá na listagem"
                rows={3}
                required
              />
            </div>

            {/* Content */}
            <div>
              <label htmlFor="content" className="block text-sm font-medium text-foreground mb-2">
                Conteúdo *
              </label>
              <Textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Escreva o conteúdo completo do post aqui..."
                rows={12}
                required
              />
            </div>

            {/* Category and Author Row */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Category */}
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-foreground mb-2">
                  Categoria *
                </label>
                <select
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                  required
                >
                  <option>Marketing Digital</option>
                  <option>Tráfego Pago</option>
                  <option>SEO</option>
                  <option>Social Media</option>
                  <option>E-commerce</option>
                  <option>Estratégia</option>
                </select>
              </div>

              {/* Author */}
              <div>
                <label htmlFor="author" className="block text-sm font-medium text-foreground mb-2">
                  Autor *
                </label>
                <Input
                  id="author"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  placeholder="Nome do autor"
                  required
                />
              </div>
            </div>

            {/* Image URL */}
            <div>
              <label htmlFor="imageUrl" className="block text-sm font-medium text-foreground mb-2">
                URL da Imagem
              </label>
              <Input
                id="imageUrl"
                type="url"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="https://exemplo.com/imagem.jpg (opcional)"
              />
              <p className="text-xs text-muted-foreground mt-2">
                Deixe em branco para usar imagem padrão
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-4">
            <Link href="/admin/dashboard">
              <Button type="button" variant="outline">
                Cancelar
              </Button>
            </Link>
            <Button type="submit" variant="gold">
              <Save className="w-4 h-4 mr-2" />
              Salvar Alterações
            </Button>
          </div>
        </form>
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

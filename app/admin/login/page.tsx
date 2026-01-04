"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock, Mail, Home } from "lucide-react";
import Link from "next/link";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showRecovery, setShowRecovery] = useState(false);
  const [recoveryMessage, setRecoveryMessage] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Autenticação simples
    if (email === "verticecomp@gmail.com" && password === "123456") {
      // Salvar token de autenticação
      localStorage.setItem("adminAuth", "true");
      router.push("/admin/dashboard");
    } else {
      setError("Email ou senha incorretos");
    }
  };

  const handleRecovery = (e: React.FormEvent) => {
    e.preventDefault();
    setRecoveryMessage("");

    if (email === "verticecomp@gmail.com") {
      // Simular envio de email
      setRecoveryMessage("Um link de recuperação foi enviado para seu e-mail. Verifique sua caixa de entrada.");
      setTimeout(() => {
        setShowRecovery(false);
        setRecoveryMessage("");
      }, 5000);
    } else {
      setRecoveryMessage("E-mail não encontrado no sistema.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy via-navy-dark to-background flex items-center justify-center p-6">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="v-pattern-login" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M15 0 L22.5 15 L30 0" stroke="#D4AF37" strokeWidth="2" fill="none" opacity="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#v-pattern-login)"/>
        </svg>
      </div>

      <div className="w-full max-w-md relative">
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Image
              src="/logos/logo-main.png"
              alt="Vértice Marketing"
              width={200}
              height={60}
              className="h-16 w-auto"
              style={{ objectFit: 'contain' }}
            />
          </div>

          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-foreground mb-2">
              {showRecovery ? "Recuperar Senha" : "Área Administrativa"}
            </h1>
            <p className="text-muted-foreground text-sm">
              {showRecovery
                ? "Digite seu e-mail para receber o link de recuperação"
                : "Faça login para gerenciar o blog"}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={showRecovery ? handleRecovery : handleLogin} className="space-y-6">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            {/* Password */}
            {!showRecovery && (
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-foreground mb-2">
                  Senha
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            {/* Recovery Message */}
            {recoveryMessage && (
              <div className={`${recoveryMessage.includes("enviado") ? "bg-green-50 border-green-200 text-green-600" : "bg-red-50 border-red-200 text-red-600"} border px-4 py-3 rounded-lg text-sm`}>
                {recoveryMessage}
              </div>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              variant="gold"
              className="w-full"
              size="lg"
            >
              {showRecovery ? "Enviar Link de Recuperação" : "Entrar"}
            </Button>
          </form>

          {/* Recovery Link */}
          <div className="mt-4 text-center">
            <button
              type="button"
              onClick={() => {
                setShowRecovery(!showRecovery);
                setError("");
                setRecoveryMessage("");
              }}
              className="text-sm text-gold hover:text-gold-light transition-colors duration-300"
            >
              {showRecovery ? "Voltar ao login" : "Esqueceu sua senha?"}
            </button>
          </div>

          {/* Info */}
          <div className="mt-6 text-center">
            <p className="text-xs text-muted-foreground">
              Acesso administrativo
            </p>
          </div>
        </div>
      </div>

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

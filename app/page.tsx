"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  Sparkles,
  Clock,
  MessageSquare,
  Calendar,
  ArrowRight,
  Send,
  CheckCircle2,
} from "lucide-react";

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-amber-500/20">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2 text-xl font-bold">
          <img
            src="/rubyy.png"
            alt="Ruby"
              className="h-15 w-15 animate-spin-slow rounded-full object-cover" 
            />
            <span>Ruby</span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-zinc-400 md:flex">
            <a href="#" className="transition hover:text-white">
              Inicio
            </a>
            <Link href="/caracteristicas" className="transition hover:text-white">
              Características
            </Link>
            <Link href="/precios" className="transition hover:text-white">
              Precios
            </Link>
            <Link href="/contacto" className="transition hover:text-white">
              Contacto
            </Link>
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <a
              href="/demo"
              className="rounded-full border border-amber-500 px-5 py-2 text-sm font-semibold text-amber-500 transition hover:bg-amber-500/10"
            >
              Probar Gratis
            </a>
          </div>

          <button
            className="text-zinc-400 md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-zinc-800 bg-zinc-950 px-6 pb-6 pt-4 md:hidden">
            <nav className="flex flex-col gap-4 text-sm font-medium text-zinc-400">
              <a
                href="#"
                className="transition hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Inicio
              </a>
              <a
                href="#features"
                className="transition hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Características
              </a>
              <a
                href="#"
                className="transition hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Precios
              </a>
              <a
                href="#"
                className="transition hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contacto
              </a>
              <a
                href="/demo"
                className="mt-2 w-fit rounded-full border border-amber-500 px-5 py-2 text-sm font-semibold text-amber-500"
              >
                Probar Gratis
              </a>
            </nav>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section con video de fondo */}
        <section className="relative overflow-hidden">
          {/* Video de fondo (ocupa todo el ancho) */}
          <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover opacity-30"
            style={{ animationDuration: "10s" }}
          >
              <source src="/hero-video-light.mp4" type="video/mp4" />
              {/* Fallback por si el video no carga */}
              <div className="h-full w-full bg-zinc-950" />
            </video>
            {/* Overlay oscuro para mejorar legibilidad del texto */}
            <div className="absolute inset-0 bg-zinc-950/70" />
          </div>

          {/* Contenido centrado con max-w-7xl */}
          <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:py-28">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="max-w-2xl">
                <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                  Ruby:{" "}
                  <span className="text-amber-500">
                    Automatiza las Reservas de tu Barbería
                  </span>
                </h1>
                <p className="mt-6 text-lg text-zinc-400 sm:text-xl">
                  El asistente inteligente 24/7 que gestiona tu agenda, reduce
                  las ausencias y se integra a tu WhatsApp. Concéntrate en lo
                  que mejor sabes hacer: cortar cabello.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/demo"
                    className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-8 py-3.5 text-sm font-semibold text-black shadow-lg shadow-amber-500/20 transition hover:bg-amber-400"
                  >
                    Ver Demo
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="flex justify-center lg:justify-end">
                <ChatMockup />
              </div>
            </div>
          </div>
        </section>

        {/* Sección de características */}
        <section id="features" className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              ¿Por qué elegir a Ruby?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
              Una solución completa que transforma la forma en que gestionas tus
              citas diarias.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <FeatureCard
              icon={<Clock className="h-6 w-6 text-amber-500" />}
              title="Disponibilidad 24/7"
              description="Ruby nunca duerme. Tus clientes pueden agendar citas a cualquier hora del día, incluso cuando la barbería está cerrada."
            />
            <FeatureCard
              icon={<MessageSquare className="h-6 w-6 text-amber-500" />}
              title="Recordatorios por WhatsApp"
              description="Reduce las faltas en un 80% con recordatorios automáticos personalizados vía WhatsApp, justo a tiempo."
            />
            <FeatureCard
              icon={<Calendar className="h-6 w-6 text-amber-500" />}
              title="Control Total de Agenda"
              description="Visualiza, edita y gestiona todas las citas desde un panel intuitivo. Sincronización perfecta con tu calendario."
            />
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-800 bg-zinc-950 py-8 text-center text-sm text-zinc-500">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 md:flex-row md:justify-between">
          <p>© 2024 Ruby. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition hover:border-amber-500/20 hover:bg-zinc-900/80">
      <div className="mb-4 inline-flex rounded-lg bg-amber-500/10 p-3 ring-1 ring-amber-500/20">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
      <p className="text-sm leading-relaxed text-zinc-400">{description}</p>
    </div>
  );
}

function ChatMockup() {
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [visibleMessages, setVisibleMessages] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  const messages = [
    { type: "user" as const, content: "hola" },
    { type: "ruby" as const, content: "greeting" },
    { type: "user" as const, content: "1" },
    { type: "ruby" as const, content: "services" },
    { type: "user" as const, content: "2" },
    { type: "ruby" as const, content: "askDate" },
    { type: "user" as const, content: "hoy a las 3 pm" },
    { type: "ruby" as const, content: "success" },
    { type: "card" as const, content: "confirmation" },
  ];

  useEffect(() => {
    if (visibleMessages < messages.length) {
      if (
        messages[visibleMessages]?.type === "ruby" ||
        messages[visibleMessages]?.type === "card"
      ) {
        setIsTyping(true);

        const typingTimer = setTimeout(() => {
          setIsTyping(false);
          setVisibleMessages((prev) => prev + 1);
        }, 2000);

        return () => clearTimeout(typingTimer);
      } else {
        const timer = setTimeout(() => {
          setVisibleMessages((prev) => prev + 1);
        }, 1000);

        return () => clearTimeout(timer);
      }
    }
  }, [visibleMessages, messages]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [visibleMessages, isTyping]);

  return (
    <div className="mx-auto w-full max-w-sm rounded-3xl border border-zinc-800 bg-zinc-900 shadow-2xl shadow-black/20">
      {/* Chat Header */}
      <div className="flex items-center gap-3 border-b border-zinc-800 px-4 py-3">
        <div className="relative h-10 w-10">
          <img
            src="/rubyy.png"
            alt="Ruby"
            className="h-10 w-10 rounded-full object-cover ring-2 ring-amber-500/30"
          />
          <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-zinc-900 bg-emerald-500" />
        </div>
        <div>
          <p className="text-sm font-semibold">Ruby</p>
          <p className="text-xs text-zinc-400">
            {isTyping ? "escribiendo..." : "En línea"}
          </p>
        </div>
      </div>

      {/* Chat Messages */}
      <div
        ref={chatContainerRef}
        className="h-[380px] space-y-4 overflow-y-auto p-4"
      >
        {/* Mensaje 1: Usuario saluda */}
        {visibleMessages >= 1 && (
          <MessageBubble type="user" isNew={true}>
            Hola, buenas noches
          </MessageBubble>
        )}

        {/* Mensaje 2: Ruby responde con menú */}
        {visibleMessages >= 2 && (
          <MessageBubble type="ruby" isNew={true}>
            ¡Hola, Frank! 😊 Soy <strong>Ruby</strong>, la asistente virtual de{" "}
            <strong>Urban Fade</strong> <br /><br />¿Cómo puedo asistirte hoy?
            <br /><br />
            <strong>1.</strong> 📅 <strong>Agendar cita</strong><br />
            <strong>2.</strong> 💰 <strong>Precios y Horarios</strong><br />
            <strong>3.</strong> 📍 <strong>Ubicación</strong>
          </MessageBubble>
        )}

        {/* Mensaje 3: Usuario elige opción 1 */}
        {visibleMessages >= 3 && (
          <MessageBubble type="user" isNew={true}>
            Quisiera agendar una cita
          </MessageBubble>
        )}

        {/* Mensaje 4: Ruby muestra servicios */}
        {visibleMessages >= 4 && (
          <MessageBubble type="ruby" isNew={true}>
            ¡Genial! 😊
            <br /><br />
            ¿Qué servicio te interesa?
            <br /><br />
            <span className="font-semibold">1️⃣ Corte Clásico</span> - $6{" "}
            <span className="text-xs text-zinc-400">(30 min)</span>
            <br />
            <span className="font-semibold">2️⃣ Corte + Barba</span> - $8{" "}
            <span className="text-xs text-zinc-400">(45 min)</span>
            <br />
            <span className="font-semibold">3️⃣ Diseño</span> - $2{" "}
            <span className="text-xs text-zinc-400">(10 min)</span>
          </MessageBubble>
        )}

        {/* Mensaje 5: Usuario elige servicio 2 */}
        {visibleMessages >= 5 && (
          <MessageBubble type="user" isNew={true}>
            2
          </MessageBubble>
        )}

        {/* Mensaje 6: Ruby pide fecha */}
        {visibleMessages >= 6 && (
          <MessageBubble type="ruby" isNew={true}>
            ¡Excelente elección! ✂️
            <br /><br />
            📅 ¿Cuándo te gustaría venir?
            <br /><br />
            Estaré esperando tu respuesta para verificar disponibilidad en la
            agenda. 💈
          </MessageBubble>
        )}

        {/* Mensaje 7: Usuario elige fecha */}
        {visibleMessages >= 7 && (
          <MessageBubble type="user" isNew={true}>
            El sábado a las 3:00 pm
          </MessageBubble>
        )}

        {/* Mensaje 8: Ruby confirma */}
        {visibleMessages >= 8 && (
          <MessageBubble type="ruby" isNew={true}>
            🎉 ¡Cita agendada con éxito!
            <br /><br />
            👤 Nombre: Frank
            <br />
            💇 Servicio: Corte + Barba
            <br />
            📅 Fecha: sábado, 16 de mayo
            <br />
            ⏰ Hora: 3:00 PM
            <br />
            💰 Total: $8
            <br /><br />
            ¡Gracias por preferirnos! ✂️
          </MessageBubble>
        )}

        {/* Mensaje 9: Tarjeta de confirmación */}
        {visibleMessages >= 9 && (
          <div className="mx-4 flex items-center gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 animate-fadeIn">
            <CheckCircle2 className="h-8 w-8 text-emerald-400" />
            <div className="text-sm">
              <p className="font-semibold text-emerald-400">Cita Confirmada</p>
              <p className="text-zinc-300">sábado, 16 de mayo</p>
              <p className="text-zinc-300">3:00 PM - Corte + Barba</p>
              <p className="text-xs text-zinc-400">Frank · Total: $8</p>
            </div>
          </div>
        )}

        {/* Indicador de typing de WhatsApp */}
        {isTyping && (
          <div className="flex justify-start">
            <div className="flex items-center gap-1 rounded-2xl rounded-tl-none bg-zinc-800 px-4 py-3">
              <div className="flex gap-1">
                <span className="h-2 w-2 animate-bounce rounded-full bg-zinc-500 [animation-delay:0ms]" />
                <span className="h-2 w-2 animate-bounce rounded-full bg-zinc-500 [animation-delay:150ms]" />
                <span className="h-2 w-2 animate-bounce rounded-full bg-zinc-500 [animation-delay:300ms]" />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Chat Input (fake) */}
      <div className="flex items-center gap-2 border-t border-zinc-800 px-4 py-3">
        <div className="flex h-9 flex-1 items-center rounded-full bg-zinc-800 px-4 text-sm text-zinc-500">
          Escribe un mensaje...
        </div>
        <button className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-500 text-black transition hover:bg-amber-400">
          <Send className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

function MessageBubble({
  type,
  children,
  isNew,
}: {
  type: "ruby" | "user";
  children: React.ReactNode;
  isNew?: boolean;
}) {
  const isUser = type === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
          isUser
            ? "rounded-tr-none bg-amber-500 text-black"
            : "rounded-tl-none bg-zinc-800 text-zinc-200"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
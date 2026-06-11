"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  Clock,
  MessageSquare,
  Calendar,
  ArrowRight,
  Send,
  CheckCircle2,
  Smartphone,
  BarChart3,
  Users,
  Zap,
  Shield,
  Globe,
} from "lucide-react";

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const features = [
    {
      icon: <Calendar className="h-6 w-6 text-amber-500" />,
      title: "Agenda Inteligente",
      description:
        "Ruby organiza automáticamente las citas según la disponibilidad real de tus barberos, evita solapamientos y optimiza los huecos libres.",
    },
    {
      icon: <Clock className="h-6 w-6 text-amber-500" />,
      title: "Disponibilidad 24/7",
      description:
        "Tus clientes pueden reservar a cualquier hora, incluso fuera del horario comercial. Ruby nunca duerme.",
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-amber-500" />,
      title: "Recordatorios por WhatsApp",
      description:
        "Reduce las ausencias hasta un 80% con recordatorios automáticos y personalizados vía WhatsApp.",
    },
    {
      icon: <Smartphone className="h-6 w-6 text-amber-500" />,
      title: "Reserva Conversacional",
      description:
        "Olvídate de formularios complicados. Tus clientes chatean con Ruby como si hablaran con un amigo.",
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-amber-500" />,
      title: "Estadísticas y Reportes",
      description:
        "Visualiza la ocupación, servicios más demandados, ingresos y mucho más desde un panel limpio y claro.",
    },
    {
      icon: <Users className="h-6 w-6 text-amber-500" />,
      title: "Gestión de Barberos",
      description:
        "Añade, edita y asigna horarios a tu equipo. Cada barbero puede tener sus propios servicios y disponibilidad.",
    },
    {
      icon: <Zap className="h-6 w-6 text-amber-500" />,
      title: "Rápida Integración",
      description:
        "Conecta Ruby en minutos con tu número de WhatsApp. Sin instalaciones complicadas ni hardware extra.",
    },
    {
      icon: <Shield className="h-6 w-6 text-amber-500" />,
      title: "Datos Seguros",
      description:
        "Toda la información de tus clientes y citas está cifrada y protegida. Cumplimos con los más altos estándares.",
    },
    {
      icon: <Globe className="h-6 w-6 text-amber-500" />,
      title: "100% en Español",
      description:
        "Ruby entiende el lenguaje natural, regionalismos y expresiones cotidianas. Hecho para tu barbería.",
    },
  ];

  const totalSlides = features.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-play del carrusel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentSlide]);

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

              <Link
                href="/precios"
                className="transition hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Precios
              </Link>
              <Link
                href="/contacto"
                className="transition hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contacto
              </Link>
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
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover opacity-30"
            >
              <source src="/hero-video-light.mp4" type="video/mp4" />
              <div className="h-full w-full bg-zinc-950" />
            </video>
            <div className="absolute inset-0 bg-zinc-950/70" />
          </div>

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

        {/* Hero de características */}
        <section className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Todo lo que necesitas para{" "}
            <span className="text-amber-500">gestionar tu barbería</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-zinc-400 sm:text-xl">
            Ruby interpreta los mensajes de tus clientes, automatiza las reservas y convierte cada conversación en una experiencia fluida para que gestiones tu barbería sin esfuerzo.
          </p>
        </section>

        {/* Carrusel de características */}
        <section className="mx-auto max-w-7xl px-6 pb-20">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 md:p-12">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {features.map((feature, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
                      <div className="mb-6 inline-flex rounded-xl bg-amber-500/10 p-4 ring-1 ring-amber-500/20">
                        {feature.icon}
                      </div>
                      <h3 className="mb-4 text-2xl font-bold sm:text-3xl">
                        {feature.title}
                      </h3>
                      <p className="text-lg leading-relaxed text-zinc-400">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Botones de navegación */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-zinc-700 bg-zinc-900 p-3 text-zinc-400 shadow-lg transition hover:border-amber-500 hover:text-amber-500 md:-translate-x-5"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full border border-zinc-700 bg-zinc-900 p-3 text-zinc-400 shadow-lg transition hover:border-amber-500 hover:text-amber-500 md:translate-x-5"
              aria-label="Siguiente"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Indicadores (puntos) */}
            <div className="mt-8 flex justify-center gap-2">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2.5 w-2.5 rounded-full transition-all ${
                    index === currentSlide
                      ? "w-8 bg-amber-500"
                      : "bg-zinc-700 hover:bg-zinc-500"
                  }`}
                  aria-label={`Ir a característica ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Panel de control */}
        <section className="border-t border-zinc-800 bg-zinc-900/50 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-3xl font-bold sm:text-4xl">
                  Panel de control simple y poderoso
                </h2>
                <p className="mt-4 text-zinc-400">
                  Desde un solo lugar podrás ver todas tus citas, modificar
                  horarios, gestionar barberos y servicios. Diseñado para que
                  cualquier persona lo use sin capacitación.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "Vista semanal y diaria",
                    "Arrastra y suelta para reorganizar",
                    "Notificaciones en tiempo real",
                    "Exporta reportes a PDF",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-500" />
                      <span className="text-zinc-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-xl">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">Citas de hoy</h3>
                    <span className="text-xs text-amber-500">Ver todo</span>
                  </div>
                  {[
                    { name: "Carlos", time: "10:00 AM", service: "Corte Clásico" },
                    { name: "Frank", time: "11:30 AM", service: "Corte + Barba" },
                    { name: "Juan", time: "2:00 PM", service: "Diseño" },
                  ].map((cita) => (
                    <div
                      key={cita.name}
                      className="flex items-center justify-between rounded-xl bg-zinc-800 p-3"
                    >
                      <div>
                        <p className="text-sm font-medium">{cita.name}</p>
                        <p className="text-xs text-zinc-400">{cita.service}</p>
                      </div>
                      <span className="text-sm text-amber-500">{cita.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            ¿Listo para transformar tu barbería?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            Únete a los barberos que ya confían en Ruby para llenar su agenda
            sin esfuerzo.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-8 py-3.5 text-sm font-semibold text-black shadow-lg shadow-amber-500/20 transition hover:bg-amber-400"
            >
              Probar Gratis
              <ArrowRight className="h-4 w-4" />
            </Link>
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
        }, 3000);
        return () => clearTimeout(typingTimer);
      } else {
        const timer = setTimeout(() => {
          setVisibleMessages((prev) => prev + 1);
        }, 3000);
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

      <div ref={chatContainerRef} className="h-[380px] space-y-4 overflow-y-auto p-4">
        {visibleMessages >= 1 && (
          <MessageBubble type="user">Hola, buenas noches</MessageBubble>
        )}
        {visibleMessages >= 2 && (
          <MessageBubble type="ruby">
            ¡Hola, Frank! 😊 Soy <strong>Ruby</strong>, la asistente virtual de{" "}
            <strong>Urban Fade</strong> <br /><br />¿Cómo puedo asistirte hoy?
            <br /><br />
            <strong>1.</strong> 📅 <strong>Agendar cita</strong><br />
            <strong>2.</strong> 💰 <strong>Precios y Horarios</strong><br />
            <strong>3.</strong> 📍 <strong>Ubicación</strong>
          </MessageBubble>
        )}
        {visibleMessages >= 3 && (
          <MessageBubble type="user">Quisiera agendar una cita</MessageBubble>
        )}
        {visibleMessages >= 4 && (
          <MessageBubble type="ruby">
            ¡Genial! 😊<br /><br />
            ¿Qué servicio te interesa?<br /><br />
            <span className="font-semibold">1️⃣ Corte Clásico</span> - $6{" "}
            <span className="text-xs text-zinc-400">(30 min)</span><br />
            <span className="font-semibold">2️⃣ Corte + Barba</span> - $8{" "}
            <span className="text-xs text-zinc-400">(45 min)</span><br />
            <span className="font-semibold">3️⃣ Diseño</span> - $2{" "}
            <span className="text-xs text-zinc-400">(10 min)</span>
          </MessageBubble>
        )}
        {visibleMessages >= 5 && <MessageBubble type="user">2</MessageBubble>}
        {visibleMessages >= 6 && (
          <MessageBubble type="ruby">
            ¡Excelente elección! ✂️<br /><br />
            📅 ¿Cuándo te gustaría venir?<br /><br />
            Estaré esperando tu respuesta para verificar disponibilidad en la agenda. 💈
          </MessageBubble>
        )}
        {visibleMessages >= 7 && (
          <MessageBubble type="user">El sábado a las 3:00 pm</MessageBubble>
        )}
        {visibleMessages >= 8 && (
          <MessageBubble type="ruby">
            🎉 ¡Cita agendada con éxito!<br /><br />
            👤 Nombre: Frank<br />
            💇 Servicio: Corte + Barba<br />
            📅 Fecha: sábado, 16 de mayo<br />
            ⏰ Hora: 3:00 PM<br />
            💰 Total: $8<br /><br />
            ¡Gracias por preferirnos! ✂️
          </MessageBubble>
        )}
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
}: {
  type: "ruby" | "user";
  children: React.ReactNode;
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
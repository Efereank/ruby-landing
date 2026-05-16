"use client";

import { useState, useEffect, useRef } from "react";
import {
  Clock,
  MessageSquare,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Menu,
  X,
  BarChart3,
  Users,
  Smartphone,
  Shield,
  Zap,
  Globe,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

export default function FeaturesPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Definimos las características en un array para el carrusel
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
          <Link href="/" className="flex items-center gap-3 text-xl font-bold">
            <img
              src="/rubyy.png"
              alt="Ruby"
              className="h-15 w-15 rounded-full object-cover"
            />
            <span>Ruby</span>
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-medium text-zinc-400 md:flex">
            <Link href="/" className="transition hover:text-white">
              Inicio
            </Link>
            <Link
              href="/caracteristicas"
              className="transition hover:text-white text-amber-500"
            >
              Características
            </Link>
<Link href="/precios" className="transition hover:text-white">Precios</Link>
            <Link href="/contacto" className="transition hover:text-white">
              Contacto
            </Link>
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <button className="rounded-full border border-amber-500 px-5 py-2 text-sm font-semibold text-amber-500 transition hover:bg-amber-500/10">
              Probar Gratis
            </button>
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
              <Link
                href="/"
                className="transition hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link
                href="/caracteristicas"
                className="transition hover:text-white text-amber-500"
                onClick={() => setMobileMenuOpen(false)}
              >
                Características
              </Link>
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
              <button className="mt-2 w-fit rounded-full border border-amber-500 px-5 py-2 text-sm font-semibold text-amber-500">
                Probar Gratis
              </button>
            </nav>
          </div>
        )}
      </header>

      <main>
        {/* Hero de la página */}
        <section className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Todo lo que necesitas para{" "}
            <span className="text-amber-500">gestionar tu barbería</span>
          </h1>
                <p className="mx-auto mt-6 max-w-3xl text-lg text-zinc-400 sm:text-xl">
                Ruby interpreta los mensajes de tus clientes, automatiza las reservas y convierte cada conversación en una experiencia fluida para que gestiones tu barbería sin esfuerzo.
                </p>
        </section>

        {/* Carrusel de características */}
        <section className="mx-auto max-w-7xl px-6 pb-20">
          <div className="relative">
            {/* Contenedor del carrusel */}
            <div
              ref={carouselRef}
              className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 md:p-12"
            >
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 px-4"
                  >
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

        {/* Panel de control (se mantiene) */}
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
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-8 py-3.5 text-sm font-semibold text-black shadow-lg shadow-amber-500/20 transition hover:bg-amber-400"
            >
              Probar Gratis
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 bg-zinc-950 py-8 text-center text-sm text-zinc-500">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 md:flex-row md:justify-between">
          <p>© 2024 Ruby. Todos los derechos reservados.</p>
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 transition hover:text-zinc-300"
          >
            Potenciado por Vercel
          </a>
        </div>
      </footer>
    </div>
  );
}
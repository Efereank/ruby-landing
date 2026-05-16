"use client";

import { useState } from "react";
import {
  Check,
  X,
  Menu,
  ArrowRight,
  Sparkles,
  Zap,
  Building2,
  Star,
} from "lucide-react";
import Link from "next/link";

export default function PricingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  const plans = [
    {
      name: "Arranque",
      description: "Perfecto para barberos independientes que empiezan a digitalizarse.",
      monthlyPrice: 19,
      yearlyPrice: 15,
      icon: <Zap className="h-5 w-5 text-amber-500" />,
      popular: false,
      features: [
        "Hasta 100 citas al mes",
        "1 barbero",
        "Recordatorios por WhatsApp",
        "Agenda digital básica",
        "Respuestas automáticas",
        "Soporte por email",
      ],
      excluded: [
        "Panel de estadísticas",
        "Gestión multi-barbero",
        "Personalización avanzada",
      ],
    },
    {
      name: "Profesional",
      description: "La opción más elegida por barberías con equipo y volumen medio de clientes.",
      monthlyPrice: 39,
      yearlyPrice: 32,
      icon: <Star className="h-5 w-5 text-amber-500" />,
      popular: true,
      features: [
        "Hasta 500 citas al mes",
        "Hasta 5 barberos",
        "Recordatorios por WhatsApp",
        "Agenda digital completa",
        "Respuestas automáticas",
        "Estadísticas y reportes",
        "Gestión de servicios",
        "Soporte prioritario",
      ],
      excluded: [],
    },
    {
      name: "Barbería Pro",
      description: "Para negocios con alto volumen que necesitan control total y personalización.",
      monthlyPrice: 69,
      yearlyPrice: 55,
      icon: <Building2 className="h-5 w-5 text-amber-500" />,
      popular: false,
      features: [
        "Citas ilimitadas",
        "Barberos ilimitados",
        "Recordatorios por WhatsApp",
        "Agenda digital avanzada",
        "Respuestas automáticas",
        "Estadísticas y reportes",
        "Gestión de servicios",
        "Personalización completa",
        "API de integración",
        "Soporte 24/7 dedicado",
      ],
      excluded: [],
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-amber-500/20">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3 text-xl font-bold">
            <img
              src="/rubyy.png"
              alt="Ruby"
              className="h-15 w-15 rounded-full object-cover "
            />
            <span>Ruby</span>
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-medium text-zinc-400 md:flex">
            <Link href="/" className="transition hover:text-white">
              Inicio
            </Link>
            <Link href="/caracteristicas" className="transition hover:text-white">
              Características
            </Link>
            <Link href="/precios" className="transition hover:text-white text-amber-500">
              Precios
            </Link>
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
              <Link href="/" className="transition hover:text-white" onClick={() => setMobileMenuOpen(false)}>
                Inicio
              </Link>
              <Link href="/caracteristicas" className="transition hover:text-white" onClick={() => setMobileMenuOpen(false)}>
                Características
              </Link>
              <Link href="/precios" className="transition hover:text-white text-amber-500" onClick={() => setMobileMenuOpen(false)}>
                Precios
              </Link>
              <Link href="/contacto" className="transition hover:text-white" onClick={() => setMobileMenuOpen(false)}>
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
        {/* Hero de precios */}
        <section className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Planes que se adaptan a{" "}
            <span className="text-amber-500">tu barbería</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-zinc-400 sm:text-xl">
            Desde barberos independientes hasta barberías con equipos grandes. Todos los planes incluyen 7 días de prueba gratis.
          </p>

          {/* Toggle de facturación */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <span className={`text-sm ${billingCycle === "monthly" ? "text-white" : "text-zinc-500"}`}>
              Mensual
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
              className="relative h-7 w-14 rounded-full bg-zinc-800 transition"
            >
              <div
                className={`absolute top-0.5 h-6 w-6 rounded-full bg-amber-500 transition ${
                  billingCycle === "yearly" ? "left-7" : "left-0.5"
                }`}
              />
            </button>
            <span className={`text-sm ${billingCycle === "yearly" ? "text-white" : "text-zinc-500"}`}>
              Anual
            </span>
            <span className="ml-2 rounded-full bg-amber-500/10 px-3 py-1 text-xs text-amber-500">
              Ahorra 20%
            </span>
          </div>
        </section>

        {/* Grid de planes */}
        <section className="mx-auto max-w-7xl px-6 pb-28">
          <div className="grid gap-8 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl border p-6 transition ${
                  plan.popular
                    ? "border-amber-500/40 bg-zinc-900/80 shadow-lg shadow-amber-500/10"
                    : "border-zinc-800 bg-zinc-900/50 hover:border-zinc-700"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-amber-500 px-4 py-1 text-xs font-semibold text-black">
                    Más Popular
                  </div>
                )}

                <div className="mb-4 inline-flex rounded-lg bg-amber-500/10 p-3 ring-1 ring-amber-500/20">
                  {plan.icon}
                </div>

                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p className="mt-2 text-sm text-zinc-400">{plan.description}</p>

                <div className="mt-6">
                  <span className="text-4xl font-extrabold">
                    ${billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
                  </span>
                  <span className="text-zinc-400">/mes</span>
                </div>
                {billingCycle === "yearly" && (
                  <p className="mt-1 text-xs text-amber-500">
                    Facturado anualmente (${plan.yearlyPrice * 12}/año)
                  </p>
                )}

                <button
                  className={`mt-6 w-full rounded-full px-5 py-3 text-sm font-semibold transition ${
                    plan.popular
                      ? "bg-amber-500 text-black shadow-lg shadow-amber-500/20 hover:bg-amber-400"
                      : "border border-amber-500 text-amber-500 hover:bg-amber-500/10"
                  }`}
                >
                  {plan.popular ? "Empezar Prueba Gratis" : "Elegir Plan"}
                </button>

                <ul className="mt-8 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-500" />
                      <span className="text-sm text-zinc-300">{feature}</span>
                    </li>
                  ))}
                  {plan.excluded.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <X className="mt-0.5 h-5 w-5 flex-shrink-0 text-zinc-600" />
                      <span className="text-sm text-zinc-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Sección de preguntas frecuentes o garantía */}
        <section className="border-t border-zinc-800 bg-zinc-900/50 py-16">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Sin compromisos. Cancela cuando quieras.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
              Todos los planes incluyen 7 días de prueba gratis. Sin tarjeta de crédito.
              Si no estás satisfecho, cancela antes de que termine la prueba y no pagarás nada.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-zinc-400">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-amber-500" />
                Sin contratos forzosos
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-amber-500" />
                Migración gratuita
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-amber-500" />
                Soporte en español
              </div>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            ¿Listo para llenar tu agenda?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            Prueba Ruby gratis durante 7 días y descubre por qué los barberos lo eligen.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-8 py-3.5 text-sm font-semibold text-black shadow-lg shadow-amber-500/20 transition hover:bg-amber-400"
            >
              Comenzar Prueba Gratis
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
"use client";

import { useState } from "react";
import {
  Menu,
  X,
  ArrowRight,
  Send,
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSent, setFormSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulación de envío
    setFormSent(true);
    setTimeout(() => setFormSent(false), 3000);
  };

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
            <Link href="/precios" className="transition hover:text-white">
              Precios
            </Link>
            <Link href="/contacto" className="transition hover:text-white text-amber-500">
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
              <Link href="/precios" className="transition hover:text-white" onClick={() => setMobileMenuOpen(false)}>
                Precios
              </Link>
              <Link href="/contacto" className="transition hover:text-white text-amber-500" onClick={() => setMobileMenuOpen(false)}>
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
        {/* Hero de contacto */}
        <section className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Hablemos de{" "}
            <span className="text-amber-500">tu barbería</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-zinc-400 sm:text-xl">
            Cuéntanos qué necesitas y te ayudaremos a encontrar el plan perfecto para ti. También puedes escribirnos directamente por WhatsApp.
          </p>
        </section>

        {/* Grid: Info de contacto + Formulario */}
        <section className="mx-auto max-w-7xl px-6 pb-28">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Columna izquierda: Información de contacto */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold">Contacto directo</h2>
                <p className="mt-2 text-zinc-400">
                  Estamos aquí para ayudarte. Elige el canal que prefieras.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-amber-500/10 p-3 ring-1 ring-amber-500/20">
                    <Phone className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Teléfono / WhatsApp</h3>
                    <p className="text-zinc-400">+58 412-5052658</p>
                    <a
                      href="https://wa.me/584125052658"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-flex items-center gap-1 text-sm text-amber-500 transition hover:text-amber-400"
                    >
                      Enviar mensaje <ArrowRight className="h-3 w-3" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-amber-500/10 p-3 ring-1 ring-amber-500/20">
                    <Mail className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Correo electrónico</h3>
                    <p className="text-zinc-400">franciscojavier20006@gmail.com</p>
                    <a
                      href="mailto:franciscojavier20006@gmail.com"
                      className="mt-1 inline-flex items-center gap-1 text-sm text-amber-500 transition hover:text-amber-400"
                    >
                      Enviar email <ArrowRight className="h-3 w-3" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-amber-500/10 p-3 ring-1 ring-amber-500/20">
                    <MapPin className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Ubicación</h3>
                    <p className="text-zinc-400">Maracaibo, Venezuela</p>
                    <p className="text-sm text-zinc-500">Atendemos principalmente online</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-amber-500/10 p-3 ring-1 ring-amber-500/20">
                    <Clock className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Horario de atención</h3>
                    <p className="text-zinc-400">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                    <p className="text-zinc-400">Sábados: 9:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-6">
                <div className="flex items-start gap-4">
                  <MessageSquare className="mt-1 h-6 w-6 text-amber-500" />
                  <div>
                    <h3 className="font-semibold">¿Prefieres algo más rápido?</h3>
                    <p className="mt-1 text-sm text-zinc-400">
                      Escríbenos directamente por WhatsApp y te responderemos en minutos.
                    </p>
                    <a
                      href="https://wa.me/584125052658"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-2 rounded-full bg-amber-500 px-6 py-2.5 text-sm font-semibold text-black transition hover:bg-amber-400"
                    >
                      Chatear por WhatsApp
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Columna derecha: Formulario */}
            <div>
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 md:p-8">
                <h2 className="text-2xl font-bold">Envíanos un mensaje</h2>
                <p className="mt-2 text-zinc-400">
                  Completa el formulario y te contactaremos en menos de 24 horas.
                </p>

                {formSent ? (
                  <div className="mt-8 flex flex-col items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-8 text-center">
                    <CheckCircle2 className="h-12 w-12 text-emerald-400" />
                    <h3 className="mt-4 text-lg font-semibold">¡Mensaje enviado!</h3>
                    <p className="mt-2 text-sm text-zinc-400">
                      Gracias por contactarnos. Te responderemos pronto.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-zinc-300">
                        Nombre completo
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition"
                        placeholder="Tu nombre"
                      />
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-zinc-300">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition"
                          placeholder="tu@email.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-zinc-300">
                          Teléfono
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition"
                          placeholder="+58 412-5052658"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-zinc-300">
                        Tipo de consulta
                      </label>
                      <select
                        id="subject"
                        className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-sm text-white focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition"
                      >
                        <option value="">Selecciona una opción</option>
                        <option value="info">Información general</option>
                        <option value="demo">Solicitar demo</option>
                        <option value="support">Soporte técnico</option>
                        <option value="other">Otro</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-zinc-300">
                        Mensaje
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        required
                        className="w-full resize-none rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition"
                        placeholder="Cuéntanos cómo podemos ayudarte..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-amber-500 px-8 py-3.5 text-sm font-semibold text-black shadow-lg shadow-amber-500/20 transition hover:bg-amber-400"
                    >
                      Enviar mensaje
                      <Send className="h-4 w-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="border-t border-zinc-800 bg-zinc-900/50 py-16">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              ¿Listo para probar Ruby?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
              Comienza tu prueba gratuita de 7 días. Sin tarjeta de crédito.
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
"use client";

import { useState, useRef, useEffect } from "react";
import {
  Menu,
  X,
  Send,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

type Message = {
  id: number;
  type: "ruby" | "user" | "card";
  content: string;
};

export default function DemoPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [conversationStep, setConversationStep] = useState(0);
  const [clientName, setClientName] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: "ruby",
      content: "¡Hola! 👋 Soy Ruby, la asistente virtual de <strong>Urban Fade</strong> 💈<br/><br/>¿En qué puedo ayudarte hoy?<br/><br/><strong>1.</strong> 📅 Agendar cita<br/><strong>2.</strong> 💰 Precios<br/><strong>3.</strong> 📍 Ubicación",
    },
  ]);

  // Auto-scroll al último mensaje
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages, isTyping]);

  // Foco en el input cuando termina de escribir
  useEffect(() => {
    if (!isTyping && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isTyping]);

  const addMessage = (type: "ruby" | "user" | "card", content: string) => {
    const newMessage: Message = {
      id: Date.now(),
      type,
      content,
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const simulateRubyResponse = (response: string, nextStep?: number) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      addMessage("ruby", response);
      if (nextStep !== undefined) {
        setConversationStep(nextStep);
      }
    }, 1500);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim() || isTyping) return;

    const userMessage = inputValue.trim();
    addMessage("user", userMessage);
    setInputValue("");

    const lowerMessage = userMessage.toLowerCase();

    // Paso 0: Menú principal
    if (conversationStep === 0) {
      if (lowerMessage === "1" || lowerMessage.includes("agendar") || lowerMessage.includes("cita")) {
        simulateRubyResponse(
          "¡Genial! 😊<br/><br/>¿Qué servicio te interesa?<br/><br/><strong>1.</strong> ✂️ Corte Clásico - $6 (30 min)<br/><strong>2.</strong> 💈 Corte + Barba - $8 (45 min)<br/><strong>3.</strong> 🎨 Diseño - $2 (10 min)",
          1
        );
      } else if (lowerMessage === "2" || lowerMessage.includes("precio")) {
        simulateRubyResponse(
          "💰 <strong>Nuestros precios:</strong><br/><br/>✂️ Corte Clásico - $6 (30 min)<br/>💈 Corte + Barba - $8 (45 min)<br/>🎨 Diseño - $2 (10 min)<br/><br/>¿Te gustaría agendar una cita? Responde <strong>1</strong> para agendar.",
          0
        );
      } else if (lowerMessage === "3" || lowerMessage.includes("ubicación") || lowerMessage.includes("ubicacion")) {
        simulateRubyResponse(
          "📍 Estamos ubicados en:<br/><br/><strong>Caracas, Venezuela</strong><br/><br/>Atendemos con cita previa. ¿Te gustaría agendar? Responde <strong>1</strong> para agendar.",
          0
        );
      } else {
        simulateRubyResponse(
          "Por favor, selecciona una opción válida:<br/><br/><strong>1.</strong> 📅 Agendar cita<br/><strong>2.</strong> 💰 Precios<br/><strong>3.</strong> 📍 Ubicación",
          0
        );
      }
      return;
    }

    // Paso 1: Selección de servicio
    if (conversationStep === 1) {
      if (lowerMessage === "1" || lowerMessage.includes("corte clásico") || lowerMessage.includes("corte clasico")) {
        setSelectedService("Corte Clásico - $6");
        simulateRubyResponse(
          "¡Excelente elección! ✂️<br/><br/>📅 ¿Cuándo te gustaría venir?<br/><br/>Escríbeme el día y la hora de tu preferencia. Por ejemplo:<br/>\"Mañana a las 10 am\"<br/>\"Hoy a las 6:30 pm\"",
          2
        );
      } else if (lowerMessage === "2" || lowerMessage.includes("corte + barba") || lowerMessage.includes("corte y barba")) {
        setSelectedService("Corte + Barba - $8");
        simulateRubyResponse(
          "¡Excelente elección! 💈<br/><br/>📅 ¿Cuándo te gustaría venir?<br/><br/>Escríbeme el día y la hora de tu preferencia. Por ejemplo:<br/>\"Mañana a las 10 am\"<br/>\"Hoy a las 6:30 pm\"",
          2
        );
      } else if (lowerMessage === "3" || lowerMessage.includes("diseño") || lowerMessage.includes("diseño")) {
        setSelectedService("Diseño - $2");
        simulateRubyResponse(
          "¡Excelente elección! 🎨<br/><br/>📅 ¿Cuándo te gustaría venir?<br/><br/>Escríbeme el día y la hora de tu preferencia. Por ejemplo:<br/>\"Mañana a las 10 am\"<br/>\"Hoy a las 6:30 pm\"",
          2
        );
      } else {
        simulateRubyResponse(
          "Por favor, elige uno de nuestros servicios:<br/><br/><strong>1.</strong> ✂️ Corte Clásico - $6<br/><strong>2.</strong> 💈 Corte + Barba - $8<br/><strong>3.</strong> 🎨 Diseño - $2",
          1
        );
      }
      return;
    }

    // Paso 2: Fecha y hora
    if (conversationStep === 2) {
      setSelectedDate(userMessage);
      // Obtener el nombre del usuario (primera palabra)
      const name = clientName || "Cliente";
      simulateRubyResponse(
        `🎉 ¡Cita agendada con éxito!<br/><br/>👤 Nombre: ${name}<br/>💇 Servicio: ${selectedService}<br/>📅 Fecha: ${userMessage}<br/><br/>Si deseas cancelar o cambiar la hora, escribe "Modificar".<br/><br/>¡Gracias por preferirnos! ✂️`,
        3
      );
      return;
    }

    // Paso 3: Confirmación final (reiniciar si quiere modificar)
    if (conversationStep === 3) {
      if (lowerMessage.includes("modificar") || lowerMessage.includes("cambiar") || lowerMessage.includes("cancelar")) {
        setConversationStep(0);
        setSelectedService("");
        setSelectedDate("");
        simulateRubyResponse(
          "Entendido. Empecemos de nuevo.<br/><br/>¿En qué puedo ayudarte hoy?<br/><br/><strong>1.</strong> 📅 Agendar cita<br/><strong>2.</strong> 💰 Precios<br/><strong>3.</strong> 📍 Ubicación",
          0
        );
      } else {
        simulateRubyResponse(
          "¡Gracias por tu reserva! 😊<br/><br/>Si necesitas algo más, aquí estaré. Escribe <strong>1</strong> para agendar otra cita.",
          3
        );
      }
      return;
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const handleReset = () => {
    setMessages([
      {
        id: 1,
        type: "ruby",
        content: "¡Hola! 👋 Soy Ruby, la asistente virtual de <strong>Urban Fade</strong> 💈<br/><br/>¿En qué puedo ayudarte hoy?<br/><br/><strong>1.</strong> 📅 Agendar cita<br/><strong>2.</strong> 💰 Precios<br/><strong>3.</strong> 📍 Ubicación",
      },
    ]);
    setConversationStep(0);
    setSelectedService("");
    setSelectedDate("");
    setInputValue("");
    setIsTyping(false);
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
              className="h-15 w-15 animate-spin-slow rounded-full object-cover" 
            />
            <span>Ruby</span>
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-medium text-zinc-400 md:flex">
            <Link href="/" className="transition hover:text-white">Inicio</Link>
            <Link href="/caracteristicas" className="transition hover:text-white">Características</Link>
            <Link href="/precios" className="transition hover:text-white">Precios</Link>
            <Link href="/contacto" className="transition hover:text-white">Contacto</Link>
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <Link
              href="/"
              className="rounded-full bg-amber-500 px-5 py-2 text-sm font-semibold text-black transition hover:bg-amber-400"
            >
              Volver
            </Link>
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
              <Link href="/" className="transition hover:text-white" onClick={() => setMobileMenuOpen(false)}>Inicio</Link>
              <Link href="/caracteristicas" className="transition hover:text-white" onClick={() => setMobileMenuOpen(false)}>Características</Link>
              <Link href="/precios" className="transition hover:text-white" onClick={() => setMobileMenuOpen(false)}>Precios</Link>
              <Link href="/contacto" className="transition hover:text-white" onClick={() => setMobileMenuOpen(false)}>Contacto</Link>
              <Link
                href="/demo"
                className="mt-2 w-fit rounded-full bg-amber-500 px-5 py-2 text-sm font-semibold text-black"
                onClick={() => setMobileMenuOpen(false)}
              >
                Probar Demo
              </Link>
            </nav>
          </div>
        )}
      </header>

      <main className="py-12 lg:py-20">
        <div className="mx-auto max-w-4xl px-6">
          {/* Encabezado */}
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Prueba a <span className="text-amber-500">Ruby</span> ahora
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
              Chatea con Ruby y descubre lo fácil que es agendar una cita. Esta es una simulación mucho menos interactiva.
            </p>
            <button
              onClick={handleReset}
              className="mt-4 inline-flex items-center gap-2 text-sm text-amber-500 transition hover:text-amber-400"
            >
              <ArrowLeft className="h-4 w-4" />
              Reiniciar conversación
            </button>
          </div>

          {/* Chat Widget */}
          <div className="mx-auto max-w-2xl rounded-3xl border border-zinc-800 bg-zinc-900 shadow-2xl shadow-black/20">
            {/* Chat Header */}
            <div className="flex items-center gap-3 border-b border-zinc-800 px-6 py-4">
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
              className="h-[450px] space-y-4 overflow-y-auto p-6 sm:h-[500px]"
            >
              {messages.map((message) => (
                <div key={message.id}>
                  {message.type === "card" ? (
                    <div className="mx-4 flex items-center gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4">
                      <CheckCircle2 className="h-8 w-8 text-emerald-400" />
                      <div className="text-sm">
                        <p className="font-semibold text-emerald-400">Cita Confirmada</p>
                        <div dangerouslySetInnerHTML={{ __html: message.content }} />
                      </div>
                    </div>
                  ) : (
                    <div className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                          message.type === "user"
                            ? "rounded-tr-none bg-amber-500 text-black"
                            : "rounded-tl-none bg-zinc-800 text-zinc-200"
                        }`}
                        dangerouslySetInnerHTML={{ __html: message.content }}
                      />
                    </div>
                  )}
                </div>
              ))}

              {/* Indicador de typing */}
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

            {/* Chat Input */}
            <div className="flex items-center gap-3 border-t border-zinc-800 px-6 py-4">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Escribe un mensaje..."
                disabled={isTyping}
                className="flex-1 rounded-full bg-zinc-800 px-5 py-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500 disabled:opacity-50"
              />
              <button
                onClick={handleSendMessage}
                disabled={isTyping || !inputValue.trim()}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500 text-black transition hover:bg-amber-400 disabled:opacity-50"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Sugerencias rápidas */}
          <div className="mx-auto mt-6 max-w-2xl text-center">
            <p className="text-sm text-zinc-500">
              Prueba escribiendo: <span className="text-amber-500">1</span> para agendar,{" "}
              <span className="text-amber-500">2</span> para precios,{" "}
              <span className="text-amber-500">3</span> para ubicación
            </p>
          </div>
        </div>
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
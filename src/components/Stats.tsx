/**
 * Componente: Stats (💎 números destacados em amarelo)
 *
 * Alteração-chave:
 *   • Cor dos valores passou de azul para amarelo (#FACC15 → Tailwind `yellow-400`)
 *     para dar mais ênfase e alinhar à paleta Conta Fácil.
 */

import React, { useEffect, useRef, useState } from 'react';
import {
  FaUsers,
  FaClipboardList,
  FaRegCalendarCheck,
} from 'react-icons/fa'; // react-icons já instalado

/* Valores-alvo */
const TARGETS = { clients: 450, services: 3200, years: 12 };
const DURATION = 1500; // ms

const Stats: React.FC = () => {
  const [counts, setCounts] = useState({ clients: 0, services: 0, years: 0 });
  const sectionRef = useRef<HTMLElement | null>(null);
  const startedRef = useRef(false);

  /* Inicia contagem ao entrar no viewport */
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true;
          animate();
        }
      },
      { threshold: 0.4 }
    );

    obs.observe(section);
    return () => obs.disconnect();
  }, []);

  /* Animação “ease-out” suavizada */
  const animate = () => {
    const start = performance.now();
    const step = (t: number) => {
      const p = Math.min((t - start) / DURATION, 1); // progresso 0-1
      setCounts({
        clients: Math.round(TARGETS.clients * p),
        services: Math.round(TARGETS.services * p),
        years: Math.round(TARGETS.years * p),
      });
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  return (
    <section ref={sectionRef} className="bg-white py-16 text-center shadow-sm">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <StatBlock
          value={counts.clients}
          label="Clientes Satisfeitos"
          Icon={FaUsers}
        />
        <StatBlock
          value={counts.services}
          label="Serviços Entregues"
          Icon={FaClipboardList}
        />
        <StatBlock
          value={counts.years}
          label="Anos de Mercado"
          Icon={FaRegCalendarCheck}
        />
      </div>
    </section>
  );
};

/* ===== sub-componente ===== */
interface StatProps {
  value: number;
  label: string;
  Icon: React.ComponentType<{ size?: number; className?: string }>;
}

const StatBlock: React.FC<StatProps> = ({ value, label, Icon }) => (
  <div className="relative bg-white/60 backdrop-blur rounded-xl border border-white/40 shadow-lg p-8 flex flex-col items-center animate-fadeZoom">
    {/* Ícone azul para contraste */}
    <Icon size={40} className="text-[#1E3A8A] mb-4" />

    {/* Valor em amarelo para destaque */}
    <span className="text-5xl font-extrabold text-yellow-400">
      {value.toLocaleString()}+
    </span>

    {/* Rótulo neutro */}
    <p className="text-gray-600 mt-2">{label}</p>
  </div>
);

export default Stats;

/**
 * Componente: Services
 * Âncora.....: id="servicos"  → linkado no Navbar para rolagem suave.
 * Função.....: Destacar serviços e permitir solicitação via WhatsApp.
 *
 * 🛠️  CONFIGURE O NÚMERO:
 *    • Substitua WHATSAPP_PHONE pelo seu número real no formato internacional
 *      Ex.: const WHATSAPP_PHONE = '5511998765432';
 */

import React from 'react';
import {
  FaLaptopCode,   // Contabilidade Digital
  FaLandmark,     // Assessoria Fiscal
  FaUserTie,      // Folha de Pagamento
  FaBriefcase,    // Abertura de Empresa
} from 'react-icons/fa';

/* === número do seu WhatsApp em formato internacional (55 + DDD + número) === */
const WHATSAPP_PHONE = '5500000000000'; // <-- troque pelo seu!

/* ==== Tipagem do serviço ==== */
interface Service {
  id: number;
  name: string;
  desc: string;
  Icon: React.ComponentType<{ size?: number; className?: string }>;
}

/* ==== Serviços exibidos na página ==== */
const services: Service[] = [
  {
    id: 1,
    name: 'Contabilidade Digital',
    desc: 'Controle 100% online, sem papelada e sem dor de cabeça.',
    Icon: FaLaptopCode,
  },
  {
    id: 2,
    name: 'Assessoria Fiscal Estratégica',
    desc: 'Planejamento tributário para pagar menos impostos, de forma legal.',
    Icon: FaLandmark,
  },
  {
    id: 3,
    name: 'Gestão de Folha de Pagamento',
    desc: 'Cálculos precisos, obrigações em dia e colaboradores felizes.',
    Icon: FaUserTie,
  },
  {
    id: 4,
    name: 'Abertura de Empresa',
    desc: 'Processo rápido, orientação completa e zero burocracia.',
    Icon: FaBriefcase,
  },
];

/* ==== Gera link do WhatsApp com mensagem pré-preenchida ==== */
const waLink = (serviceName: string) =>
  `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
    `Olá! Gostaria de solicitar o serviço de ${serviceName} anunciado na landing page.`
  )}`;

const Services: React.FC = () => (
  <section
    id="servicos"
    className="py-20 px-4 text-center bg-gray-50"
  >
    <h2 className="text-3xl font-semibold text-[#1E3A8A] mb-12">
      Como Podemos Ajudar
    </h2>

    <div className="grid gap-8 max-w-6xl mx-auto md:grid-cols-2 lg:grid-cols-4">
      {services.map(({ id, name, desc, Icon }) => (
        <article
          key={id}
          className="
            bg-white p-6 rounded-lg shadow hover:shadow-lg transition
            flex flex-col items-center
          "
        >
          {/* Ícone do serviço */}
          <Icon size={40} className="text-yellow-400 mb-4" />

          {/* Nome do serviço */}
          <h3 className="font-bold text-lg text-[#1E3A8A] mb-2">{name}</h3>

          {/* Descrição */}
          <p className="text-gray-600 mb-6 text-sm">{desc}</p>

          {/* Botão CTA – combina com a paleta Conta Fácil */}
          <a
            href={waLink(name)}
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-auto inline-block
              bg-yellow-400 text-[#1E3A8A]
              font-semibold py-2 px-4 rounded-lg
              shadow-md hover:bg-yellow-500 transition-colors
            "
          >
            Solicitar Serviço
          </a>
        </article>
      ))}
    </div>
  </section>
);

export default Services;

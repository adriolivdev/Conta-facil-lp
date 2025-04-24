/**
 * Componente: Testimonials
 * Âncora.....: id="depoimentos"  → linkado no Navbar para rolagem suave.
 * Função.....: Exibir depoimentos de clientes + foto ou logo opcional.
 *
 * Como usar imagem:
 *   • Basta informar a propriedade `img` com o caminho (pasta /public ou URL).
 *   • Se não quiser imagem em algum depoimento, omita a prop `img`.
 */

import React from 'react';

/* Estrutura de depoimento — adicionado campo opcional img */
interface Testimonial {
  id: number;
  name: string;
  text: string;
  img?: string; // caminho da foto ou logo
}

/* Lista de depoimentos */
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Lucas Mendes • CEO, TechGrow',
    text: 'Reduzimos 22% dos custos tributários no primeiro ano. Equipe ágil e atendimento top!',
    img: '/testimonials/techgrow.png',          // coloque este arquivo em public/images
  },
  {
    id: 2,
    name: 'Amanda Torres • Fundadora, LojaBella',
    text: 'Entrego toda a burocracia para a Conta Fácil e posso focar nas vendas. Recomendo!',
    img: '/testimonials/lojabella.png',
  },
  {
    id: 3,
    name: 'Renata Oliveira • Diretora Financeira, AgroPlus',
    text: 'Os relatórios mensais claros e a otimização fiscal nos deram previsibilidade de caixa inédita.',
    img: '/testimonials/agroplus.png',
  },
  {
    id: 4,
    name: 'Diego Martins • COO, SmartLog',
    text: 'Com a Conta Fácil tivemos economia de tempo gigantesca nos fechamentos e total compliance fiscal.',
    img: 'testimonials/smartlog.png',
  },
];

const Testimonials: React.FC = () => (
  <section
    id="depoimentos" /* ← ÂNCORA PARA SCROLL */
    className="py-20 px-4 bg-white text-center"
  >
    <h2 className="text-3xl font-semibold text-[#1E3A8A] mb-10">
      Clientes Felizes, Resultados Reais
    </h2>

    <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
      {testimonials.map(({ id, name, text, img }) => (
        <blockquote
          key={id}
          className="bg-blue-50 p-6 rounded-lg shadow-inner flex flex-col items-center"
        >
          {/* Imagem opcional */}
          {img && (
            <img
              src={img}
              alt={name}
              className="w-20 h-20 object-contain mb-4 rounded-full border border-gray-200"
            />
          )}

          <p className="italic text-gray-700 text-sm lg:text-base">“{text}”</p>
          <footer className="mt-4 font-bold text-[#1E3A8A] text-sm lg:text-base">
            {name}
          </footer>
        </blockquote>
      ))}
    </div>
  </section>
);

export default Testimonials;

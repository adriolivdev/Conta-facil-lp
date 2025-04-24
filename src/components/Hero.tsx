/**
 * Componente: Hero
 * Âncora.....: id="home"  → permite rolagem suave a partir do Navbar.
 * Função.....: Seção de destaque com UVP e CTA principal.
 */

import React from 'react';

const Hero: React.FC = () => (
  <section
    id="home" /* ← ÂNCORA PARA SCROLL */
    className="
      min-h-[70vh] flex flex-col items-center justify-center text-center
      bg-gradient-to-r from-[#1E3A8A] to-[#60A5FA] text-white px-4
    "
  >
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
      Contabilidade Digital<br className="hidden sm:block" />
      para Fazer sua Empresa Crescer
    </h1>

    <p className="text-lg md:text-xl max-w-2xl mb-10">
      Simplifique impostos, reduza custos e foque no seu negócio. A&nbsp;
      <strong>Conta&nbsp;Fácil</strong> cuida de tudo.
    </p>

    <a
      href="#contato"
      className="
        inline-block bg-yellow-400 text-[#1E3A8A] font-bold py-3 px-8
        rounded-lg shadow-md hover:bg-yellow-500 transition-colors
      "
    >
      Agendar Consultoria Gratuita
    </a>
  </section>
);

export default Hero;

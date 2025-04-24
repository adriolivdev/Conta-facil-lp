/**
 * Componente: About
 * Âncora.....: id="sobre"  → linkado no Navbar para rolagem suave.
 * Função.....: Apresentar a empresa, reforçar credibilidade e autoridade.
 */

import React from 'react';

const About: React.FC = () => (
  <section
    id="sobre" /* ← ÂNCORA PARA SCROLL */
    className="bg-blue-50 py-20 text-center"
  >
    <h2 className="text-3xl font-semibold text-[#1E3A8A] mb-6">
      Quem Somos
    </h2>

    <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
      Há mais de <strong>12 anos</strong>, a&nbsp;
      <strong>Conta&nbsp;Fácil</strong> transforma desafios contábeis em
      oportunidades de crescimento. Unimos tecnologia, atendimento humano e
      expertise tributária para que você foque no que realmente importa:
      <br className="hidden sm:inline" />
      <span className="font-medium text-[#1E3A8A]">
        o sucesso do seu negócio.
      </span>
    </p>
  </section>
);

export default About;

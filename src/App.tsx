/**
 * Arquivo.......: App.tsx
 * Descrição.....: Componente de alto nível da landing page Conta Fácil.
 *                 - Injeta o <Navbar /> fixo no topo.
 *                 - Renderiza todas as seções na ordem desejada.
 *                 - Mantém tipagem explícita (React.FC) para clareza.
 *
 * Observações...:
 *   • Cada seção (Hero, Services etc.) precisa ter um atributo id
 *     que corresponda ao href definido em Navbar.tsx para que
 *     o scroll suave funcione corretamente:
 *       ─ Hero.tsx          → <section id="home">
 *       ─ Services.tsx      → <section id="servicos">
 *       ─ About.tsx         → <section id="sobre">
 *       ─ Testimonials.tsx  → <section id="depoimentos">
 *       ─ ContactForm.tsx   → <section id="contato">
 *
 *   • A estrutura é simples; caso deseje adicionar Context API,
 *     React Router ou Providers, basta envolver o JSX principal
 *     dentro dos provedores necessários.
 */

import React from 'react';

/* =====================  Importação dos componentes de página  ===================== */
import Navbar        from './components/Navbar';
import Hero          from './components/Hero';
import Stats         from './components/Stats';
import Services      from './components/Services';
import About         from './components/About';
import Testimonials  from './components/Testimonials';
import ContactForm   from './components/ContactForm';
import Footer        from './components/Footer';

/* ================================================================================== */

const App: React.FC = () => {
  return (
    /* Tailwind classes globais: fonte padrão, cores básicas do layout */
    <div className="font-sans bg-gray-50 text-gray-900">
      {/* ===== Barra de navegação fixa (hambúrguer + scroll suave) ===== */}
      <Navbar />

      {/* ===== Seção Hero (acima da “dobra”) ===== */}
      <Hero />

      {/* ===== Prova social: contadores animados ===== */}
      <Stats />

      {/* ===== Lista de serviços oferecidos ===== */}
      <Services />

      {/* ===== Sobre a empresa / autoridade ===== */}
      <About />

      {/* ===== Depoimentos de clientes ===== */}
      <Testimonials />

      {/* ===== Formulário de contato (conversão) ===== */}
      <ContactForm />

      {/* ===== Rodapé com direitos autorais ===== */}
      <Footer />
    </div>
  );
};

export default App;

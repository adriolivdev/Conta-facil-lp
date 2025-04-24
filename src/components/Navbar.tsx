/**
 * Componente: Navbar
 * Recursos:
 *   • Navegação fixa (glass effect) com scroll suave para as seções.
 *   • Menu hambúrguer em telas < md com animação de cor + zoom no hover.
 *   • Links desktop e mobile têm efeito sublinhado deslizante.
 */

import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

interface NavItem {
  id: number;
  label: string;
  href: string;
}

/* Navegação principal — ajuste labels/hrefs conforme necessidade */
const NAV_ITEMS: NavItem[] = [
  { id: 1, label: 'Início',       href: '#home' },
  { id: 2, label: 'Serviços',     href: '#servicos' },
  { id: 3, label: 'Sobre',        href: '#sobre' },
  { id: 4, label: 'Depoimentos',  href: '#depoimentos' },
  { id: 5, label: 'Contato',      href: '#contato' },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);
  const closeMenu  = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur shadow-sm">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        {/* ===== Logo / Marca ===== */}
        <a href="#home" className="text-xl font-extrabold text-[#1E3A8A]">
          Conta&nbsp;Fácil
        </a>

        {/* ===== Botão Hambúrguer (mobile) ===== */}
        <button
          onClick={toggleMenu}
          className="
            md:hidden text-3xl text-[#1E3A8A]
            transition-transform duration-200
            hover:text-yellow-400 hover:scale-110   /* hover amarelo + zoom */
            active:scale-95                         /* feedback tato/click */
            focus:outline-none
          "
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>

        {/* ===== Links Desktop ===== */}
        <ul className="hidden md:flex gap-6">
          {NAV_ITEMS.map(({ id, label, href }) => (
            <li key={id}>
              <a
                href={href}
                className="
                  relative group font-medium text-gray-700
                  after:absolute after:bottom-0 after:left-0
                  after:h-0.5 after:w-0 after:bg-[#1E3A8A]
                  after:transition-all after:duration-300
                  hover:text-[#1E3A8A] hover:after:w-full
                "
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* ===== Menu Mobile Dropdown ===== */}
      {open && (
        <ul className="md:hidden bg-white px-6 pb-4 space-y-3 shadow-inner">
          {NAV_ITEMS.map(({ id, label, href }) => (
            <li key={id}>
              <a
                href={href}
                onClick={closeMenu}
                className="
                  relative group block py-1 font-medium text-gray-700
                  after:absolute after:bottom-0 after:left-0
                  after:h-0.5 after:w-0 after:bg-[#1E3A8A]
                  after:transition-all after:duration-300
                  hover:text-[#1E3A8A] hover:after:w-full
                "
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;

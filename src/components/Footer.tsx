/**
 * Componente: Footer
 * Função....: Rodapé com direitos autorais + crédito à Kaizen Code Digital.
 */

import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-[#1E3A8A] text-white py-6 text-center text-sm">
    © {new Date().getFullYear()} <strong>Conta Fácil</strong> • Contabilidade
    Simplificada
    <br />
    Desenvolvido por <strong>Kaizen Code Digital</strong>
  </footer>
);

export default Footer;

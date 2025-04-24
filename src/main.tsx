/**
 * Arquivo: main.tsx
 * Função: ponto de entrada da aplicação React.
 *  - Cria a raiz (`root`) e renderiza o <App />.
 *  - Importa o CSS global (Tailwind).
 * Observação: Vite injeta HMR automaticamente.
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Importa o Tailwind (index.css contém @tailwind base/components/utilities)
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

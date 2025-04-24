/**
 * Componente: ContactForm
 *
 * Âncora.....: id="contato"  → linkado no Navbar para rolagem suave.
 * Função.....: Formulário de conversão onde o usuário pede consultoria.
 *
 * Integração futura:
 *   • Substitua o setTimeout por fetch/axios para enviar dados:
 *       fetch('/api/contato', { method: 'POST', body: JSON.stringify(data) })
 *   • Ou conecte via Zapier / Make – basta chamar o webhook e tratar a resposta.
 */

import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  /* Estado de ciclo do formulário */
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  /** Manipula envio (simulado) */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    /* ======== SUBSTITUA AQUI PELA SUA INTEGRAÇÃO REAL ======== */
    setTimeout(() => setStatus('sent'), 1200); // simula request
  };

  return (
    <section
      id="contato" /* ← ÂNCORA PARA SCROLL */
      className="py-20 px-4 bg-gradient-to-r from-[#1E3A8A] to-[#60A5FA]"
    >
      <h2 className="text-3xl font-bold text-white text-center mb-8">
        Fale com um Especialista
      </h2>

      <form
        onSubmit={handleSubmit}
        className="
          max-w-lg mx-auto bg-white p-8 rounded-lg shadow-xl
          grid gap-4
        "
      >
        <input
          required
          className="border rounded p-3 w-full"
          type="text"
          name="nome"
          placeholder="Seu nome"
        />

        <input
          required
          className="border rounded p-3 w-full"
          type="email"
          name="email"
          placeholder="Seu e-mail"
        />

        <textarea
          required
          className="border rounded p-3 w-full resize-none"
          name="mensagem"
          rows={4}
          placeholder="Como podemos ajudar?"
        ></textarea>

        <button
          type="submit"
          disabled={status !== 'idle'}
          className="
            bg-yellow-400 text-[#1E3A8A] font-bold py-3 rounded
            hover:bg-yellow-500 transition disabled:opacity-60
          "
        >
          {status === 'sending' ? 'Enviando…' : 'Enviar Mensagem'}
        </button>

        {/* Mensagem de sucesso simples */}
        {status === 'sent' && (
          <p className="text-center text-green-600 font-medium">
            Obrigado! Em breve entraremos em contato.
          </p>
        )}
      </form>
    </section>
  );
};

export default ContactForm;

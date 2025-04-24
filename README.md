# 🚀 Landing Page — **Conta Fácil**

Landing page responsiva e otimizada para conversão de uma empresa contábil fictícia chamada **Conta Fácil**.  
Construída com **Vite + React + TypeScript + Tailwind CSS 3.3.2**.

![Screenshot](./public/cover.png)

---

## ✨ Funcionalidades

| Seção            | Destaques                                                                                   |
|------------------|---------------------------------------------------------------------------------------------|
| **Navbar**       | Links de rolagem suave + menu hambúrguer com animação                                       |
| **Hero**         | UVP clara, CTA principal e gradiente azul Tecnológico                                       |
| **Stats**        | Contadores animados acionados por _scroll_ (clientes, serviços, anos)                       |
| **Services**     | Cartões com ícones, descrição e botão **Solicitar Serviço** → abre WhatsApp com mensagem predefinida |
| **About**        | Breve apresentação institucional                                                            |
| **Testimonials** | Depoimentos com foto/logo opcional                                                          |
| **Contact**      | Formulário simples (pronto para integrar a API/Zapier)                                      |
| **Footer**       | Direitos autorais                                                                          |

---

## 🏗️ Estrutura de Pastas
conta-facil-lp
├─ node_modules/
├─ public/
│  └─ testimonials/
│     ├─ agroplus.png
│     ├─ lojabella.png
│     ├─ smartlog.png
│     └─ techgrow.png
├─ src/
│  ├─ components/
│  │  ├─ About.tsx
│  │  ├─ ContactForm.tsx
│  │  ├─ Footer.tsx
│  │  ├─ Hero.tsx
│  │  ├─ Navbar.tsx
│  │  ├─ Services.tsx
│  │  ├─ Stats.tsx
│  │  └─ Testimonials.tsx
│  ├─ App.tsx
│  ├─ index.css
│  ├─ main.tsx
│  └─ vite-env.d.ts
├─ .gitignore
├─ eslint.config.js
├─ index.html
├─ package.json
├─ package-lock.json
├─ postcss.config.js
├─ README.md
├─ tailwind.config.js
├─ tsconfig.json
├─ tsconfig.app.json
├─ tsconfig.node.json
└─ vite.config.ts



## ⚙️ Instalação
# Clone o repositório
git clone https://github.com/seu-usuario/conta-facil-lp.git
cd conta-facil-lp

# Instale dependências
npm install         # ou yarn / pnpm

# Rode em modo desenvolvimento
npm run dev

## 🔧 Configurações Rápidas

O que	                               Onde editar
Número do WhatsApp	           src/components/Services.tsx
Valores dos contadores       	 Stats.tsx (TARGETS)
Depoimentos	                   Testimonials.tsx (testimonials[])
Paleta de cores	               tailwind.config.js (extend.colors)
SEO/metadados	                 index.html (<head>)

## 📦 Builds & Deploy
# Gera build produção
npm run build

# Pré-visualizar build
npm run preview


Desenvolvido com ♥ e ☕ por Adriane Oliveira.
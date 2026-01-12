# 🎂 Astro Event Invite Template

![Astro](https://img.shields.io/badge/astro-%232C2052.svg?style=for-the-badge&logo=astro&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

Um template moderno, responsivo e de alta performance para convites de eventos e aniversários. Desenvolvido com **Astro** e **Tailwind CSS**, este projeto gera um site totalmente estático, leve e fácil de hospedar em qualquer lugar.

> **Nota:** Este projeto é focado na simplicidade e personalização via arquivos de configuração. Não requer banco de dados.

---

## ✨ Funcionalidades

- **⚡ Ultra Rápido:** Site estático gerado com Astro (Zero JS runtime onde não é necessário).
- **📱 Responsivo:** Layout adaptável para Celulares, Tablets e Desktop (Mobile-first).
- **🎨 Tailwind CSS v4:** Estilização moderna e fácil de manter.
- **📅 Contagem Regressiva:** Componente de countdown automático para a data do evento.
- **🖼️ Galeria de Fotos:** Grid de fotos com modal interativo e visualização em tela cheia.
- **📍 RSVP Simples:** Integração fácil com links externos (Google Forms, WhatsApp, etc).
- **🗺️ Mapa e Localização:** Seção dedicada para detalhes do local e horários.
- **🔍 SEO & Sitemap:** Otimizado para motores de busca com geração automática de sitemap.

## 🚀 Tecnologias Utilizadas

- [Astro](https://astro.build) (v5.16+)
- [Tailwind CSS](https://tailwindcss.com) (v4.0+)
- [Prettier](https://prettier.io) (Formatação de código)

## 🛠️ Instalação e Uso

Pré-requisitos: Node.js (LTS) e npm instalados.

1.  **Clone o repositório (ou baixe os arquivos):**
    ```bash
    git clone https://github.com/seu-usuario/astro-event-invite-template.git
    cd astro-event-invite-template
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```
    Acesse `http://localhost:4321` no seu navegador.

## ⚙️ Personalização

Toda a configuração de conteúdo está centralizada na pasta `src/config/`. Você não precisa mexer no código HTML/CSS para alterar textos básicos.

### 1. Dados do Evento
Edite o arquivo [`src/config/event.ts`](src/config/event.ts) para alterar:
- Nome do aniversariante/evento.
- Data e hora (para a contagem regressiva).
- Localização e endereço.
- Link do RSVP (ex: seu formulário do Google).

### 2. Galeria de Fotos
1.  Adicione suas fotos na pasta `public/images/gallery/`.
2.  Atualize a lista de arquivos no arquivo [`src/config/gallery.ts`](src/config/gallery.ts).

### 3. SEO e URL
Antes de publicar, ajuste o domínio do seu site no arquivo [`astro.config.mjs`](astro.config.mjs):
```js
export default defineConfig({
  site: 'https://www.seuevento.com.br', // <-- Altere aqui
  // ...
});
```

## 📦 Build e Deploy

Este projeto gera um site **100% estático**. Isso significa que você pode hospedá-lo em **qualquer** provedor de hospedagem (Vercel, Netlify, Hostgator, Hostinger, AWS S3, GitHub Pages, etc.).

### Gerar versão final

Execute o comando de build:

```bash
npm run build
```

Isso criará uma pasta chamada `dist/` na raiz do projeto.

### Como Publicar

- **Vercel / Netlify:** Conecte seu repositório Git e ele detectará o Astro automaticamente.
- **Hospedagem Tradicional (cPanel, FTP):**
  1. Gere o build (`npm run build`).
  2. Pegue **todo o conteúdo** de dentro da pasta `dist/`.
  3. Faça upload para a pasta pública do seu servidor (geralmente `public_html` ou `www`).

## 📂 Estrutura do Projeto

```text
├── public/            # Arquivos estáticos (imagens, favicon, robots.txt)
├── src/
│   ├── components/    # Componentes reutilizáveis (.astro)
│   ├── config/        # ⚙️ Configurações do site (Edite aqui!)
│   ├── layouts/       # Layouts base das páginas
│   ├── pages/         # Rotas do site (index, galeria, etc.)
│   └── styles/        # CSS global
├── astro.config.mjs   # Configuração do Astro
├── package.json       # Dependências e scripts
└── tailwind.config.mjs # Configuração do Tailwind
```

---

Desenvolvido com 💜 usando [Astro](https://astro.build).

# Convite de Aniversário (Astro • Static • Tailwind)

Projeto estático (build para `dist/`) pensado para deploy em hospedagem compartilhada (cPanel/HostGator), com conteúdo centralizado em arquivos de configuração para facilitar a troca de template visual.

## Requisitos

- Node.js LTS
- npm

## Comandos

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Estrutura

- Páginas (rotas): `src/pages/*.astro`
- Componentes: `src/components/*.astro`
- Config (conteúdo): `src/config/*.ts`
- Imagens e favicon: `public/`

## Editar dados do evento

Edite o arquivo [event.ts](file:///home/diego/projetos/astro-event-invite-template/src/config/event.ts).

- RSVP padrão: link externo (Google Forms) em `event.rsvp.externalUrl`
- Modo RSVP: `event.rsvp.mode` (`external` ou `api`)

## Trocar fotos da galeria

1. Coloque as fotos em `public/images/gallery/` (veja o README da pasta).
2. Atualize a lista em [gallery.ts](file:///home/diego/projetos/astro-event-invite-template/src/config/gallery.ts).

## SEO básico e sitemap

- Meta tags básicas ficam no componente [Layout.astro](file:///home/diego/projetos/astro-event-invite-template/src/components/Layout.astro).
- Sitemap é gerado via `@astrojs/sitemap`.

Antes de publicar, ajuste o domínio em `site` dentro de [astro.config.mjs](file:///home/diego/projetos/astro-event-invite-template/astro.config.mjs):

```js
site: 'https://seu-dominio.com'
```

## Deploy no cPanel (HostGator) — build estático

1. Rode o build local:

```bash
npm run build
```

2. No seu computador, abra a pasta `dist/`.
3. No cPanel > File Manager, entre em `public_html/`.
4. Envie o conteúdo de `dist/` para `public_html/` (os arquivos e pastas dentro de `dist/`, não a pasta `dist` em si).
5. Acesse seu domínio e valide as páginas:
   - `/`
   - `/detalhes`
   - `/galeria`
   - `/confirmar`
   - `/contato`

## RSVP (Google Forms)

Troque o placeholder do link em `event.rsvp.externalUrl` (arquivo `src/config/event.ts`).

## Formatação (Prettier)

```bash
npm run format
```

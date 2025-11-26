# TikTok Shop - Pesquisa e Quiz

Site estático de pesquisa e quiz do TikTok Shop.

## Estrutura do Projeto

```
/
├── index.html          # Página inicial
├── assets/             # Assets (logo, etc)
├── pesquisa/          # Página de pesquisa/quiz
│   ├── index.html
│   ├── css/           # Estilos
│   └── js/            # Scripts JavaScript
├── vercel.json        # Configuração Vercel
├── netlify.toml       # Configuração Netlify
└── .htaccess         # Configuração Apache/cPanel
```

## Deploy

### Vercel
1. Conecte seu repositório ao Vercel
2. O arquivo `vercel.json` já está configurado
3. Deploy automático

### Netlify
1. Conecte seu repositório ao Netlify
2. O arquivo `netlify.toml` já está configurado
3. Deploy automático

### cPanel / Hosting Pago
1. Faça upload de todos os arquivos para a pasta `public_html` ou `www`
2. O arquivo `.htaccess` já está configurado para SPA
3. Certifique-se de que o mod_rewrite está habilitado

## Requisitos

- Servidor web estático (Apache, Nginx, etc)
- Para cPanel: mod_rewrite habilitado


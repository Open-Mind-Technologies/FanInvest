# 🎵 FanInvest

**A primeira plataforma que conecta fãs e artistas através de streaming e investimento musical.**

FanInvest revoluciona a forma como fãs e artistas se relacionam, oferecendo uma plataforma de streaming com sistema de assinaturas e investimento direto em talentos musicais.

## 🚀 Tecnologias

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **React Hook Form** - Gerenciamento de formulários
- **Axios** - Cliente HTTP
- **Lucide React** - Biblioteca de ícones
- **Context API** - Gerenciamento de estado global

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/faninvest.git
cd faninvest

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.local.example .env.local
# Edite o arquivo .env.local com suas configurações

# Execute o projeto em desenvolvimento
npm run dev
```

O projeto estará disponível em [http://localhost:3000](http://localhost:3000)

## 📂 Estrutura do Projeto

```
faninvest/
├── src/
│   ├── app/                    # Páginas (App Router)
│   │   ├── auth/              # Autenticação (login/registro)
│   │   ├── dashboard/         # Dashboard principal
│   │   ├── layout.tsx         # Layout raiz
│   │   └── page.tsx          # Landing page
│   ├── components/            # Componentes reutilizáveis
│   │   └── ui/               # Componentes de interface
│   ├── context/              # Context API
│   │   └── AuthContext.tsx   # Contexto de autenticação
│   ├── lib/                  # Utilitários
│   │   ├── api.ts           # Configuração do Axios
│   │   └── utils.ts         # Funções auxiliares
│   └── types/               # Tipos TypeScript
│       └── index.ts         # Definições de tipos
├── public/                   # Arquivos públicos
└── README.md
```

## 🎯 Funcionalidades Implementadas

### ✅ Autenticação
- [x] Sistema de login e registro
- [x] Validação de formulários
- [x] Gestão de estado de autenticação
- [x] Persistência de sessão
- [x] Interceptors para refresh de token

### ✅ Interface
- [x] Landing page responsiva
- [x] Dashboard diferenciado por tipo de usuário (fã/artista)
- [x] Componentes reutilizáveis (Button, Input)
- [x] Design system com Tailwind CSS
- [x] Tema moderno com gradientes

### ✅ Tipos de Usuário
- [x] **Fãs**: Descobrir música, assinar artistas
- [x] **Artistas**: Upload de música, gestão de fãs
- [x] Dashboard personalizado por role

## 🔄 Próximas Funcionalidades

### 🎵 Player de Música
- [ ] Mini-player global
- [ ] Controles de reprodução
- [ ] Playlist dinâmica
- [ ] Visualização de waveform

### 👨‍🎤 Funcionalidades de Artista
- [ ] Upload de músicas (MP3/WAV)
- [ ] Gerenciamento de álbuns
- [ ] Analytics de reprodução
- [ ] Sistema de assinaturas

### 👥 Funcionalidades de Fã
- [ ] Descoberta de artistas
- [ ] Sistema de favoritos
- [ ] Feed personalizado
- [ ] Histórico de reprodução

### 💰 Sistema de Pagamento
- [ ] Integração com Stripe
- [ ] Assinaturas mensais/anuais
- [ ] Carteira digital
- [ ] Relatórios financeiros

## 🎨 Design System

### Cores Principais
- **Roxo**: `from-purple-500 to-purple-600` - Elemento principal
- **Rosa**: `from-pink-500 to-pink-600` - Elemento secundário
- **Gradiente**: `from-purple-500 to-pink-500` - Destaque

### Componentes
- **Button**: Variantes primary, secondary, outline, ghost
- **Input**: Com ícones, labels e validação
- **Cards**: Layout responsivo para conteúdo

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Iniciar aplicação em produção
npm run start

# Linting
npm run lint
```

## 🌐 Variáveis de Ambiente

```bash
# API
NEXT_PUBLIC_API_URL=http://localhost:3001/api

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME=FanInvest
```

## 📱 Responsividade

O projeto foi desenvolvido mobile-first e é totalmente responsivo:
- **Mobile**: Layout em coluna única
- **Tablet**: Grid adaptativo 2 colunas
- **Desktop**: Layout completo 3+ colunas

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para detalhes.

## 🙋‍♂️ Suporte

Para dúvidas ou suporte, entre em contato:
- Email: suporte@faninvest.com
- Discord: [FanInvest Community](https://discord.gg/faninvest)

---

Feito pela equipe FanInvest
















This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

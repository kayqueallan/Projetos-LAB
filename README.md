# Portfólio Profissional — Tiago Boaventura Amaral

Template genérico do Lab01S01 para a disciplina **Laboratório de Desenvolvimento de Software**.

## 🎯 Escopo desta Sprint (S01)

- Repositório inicial com README.
- Wireframes.
- Protótipo inicial do front-end com **React + Vite**.
- Navegação entre seções e layout principal (cabeçalho, conteúdo, rodapé).

## 🧱 Tecnologias previstas

- **React 18** + **Vite 5**
- **React Router** para navegação
- **CSS Modules** para estilos
- (Futuro) **EmailJS** para formulário de contato
- (Futuro) Hospedagem em **Vercel**

## 📦 Estrutura de diretórios (reorganizada)

```
.
├─ Portfolio TiagoBA/          # Pasta principal do projeto
│  ├─ public/
│  ├─ src/
│  │  ├─ assets/
│  │  ├─ components/
│  │  ├─ pages/
│  │  │  ├─ Contato.jsx
│  │  │  ├─ Experiencias.jsx
│  │  │  ├─ Home.jsx
│  │  │  ├─ Projetos.jsx
│  │  │  └─ SobreMim.jsx
│  │  ├─ styles/
│  │  │  ├─ AppLayout.module.css
│  │  │  └─ global.css
│  │  ├─ App.jsx
│  │  └─ main.jsx
│  ├─ .gitignore
│  ├─ index.html
│  ├─ package.json
│  ├─ vite.config.js
│  └─ README.md
├─ .gitignore
├─ LICENSE
└─ README.md (este arquivo)
```

## ▶️ Como rodar localmente

> Pré-requisitos: Node.js 18+ e npm/pnpm/yarn.

```bash
# Navegar para a pasta do projeto
cd "Portfolio TiagoBA"

# instalar dependências
npm install

# ambiente de desenvolvimento
npm run dev # Runs on http://localhost:5174/ (or 5175 if 5174 is in use)

# build de produção
npm run build

# preview do build
npm run preview
```

---

**Disciplina:** Laboratório de Desenvolvimento de Software (João Aramuni)  
**Aluno:** Tiago Boaventura Amaral

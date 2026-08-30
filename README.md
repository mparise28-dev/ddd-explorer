# 📞 DDD Explorer

> **Explore todas as cidades de qualquer DDD do Brasil de forma rápida e intuitiva.**

---

## 🌐 **Acesse o projeto online**

🔗 **[ddd-explorer.vercel.app](https://ddd-explorer.vercel.app)**

---

## 🚀 Sobre o Projeto

O **DDD Explorer** é uma aplicação web que consome a **BrasilAPI** para listar todas as cidades pertencentes a um determinado código de Discagem Direta à Distância (DDD). Com uma interface limpa e responsiva, o usuário pode pesquisar qualquer DDD válido e visualizar a lista completa de cidades daquele estado.

Este projeto foi desenvolvido como parte do aprendizado em **Desenvolvimento Web 2** na **FATEC**, com foco em:

- Consumo de APIs REST
- Gerenciamento de estado com Context API
- Componentização no React
- Tipagem estática com TypeScript

---

## 🎯 Funcionalidades

| Funcionalidade | Descrição |
|----------------|-----------|
| 🔍 **Busca por DDD** | Digite um DDD (ex: 11) e veja todas as cidades |
| ⚡ **Enter ou Botão** | Busque pressionando Enter ou clicando no botão |
| ⏳ **Loading** | Indicador visual enquanto os dados são carregados |
| 🧠 **Tratamento de Erros** | Mensagens amigáveis para DDDs inválidos ou erros de rede |
| 📊 **Contagem** | Exibe o total de cidades encontradas |
| ⭐ **Favoritos** | Salve seus DDDs favoritos com localStorage |
| 🔍 **Filtro em tempo real** | Encontre rapidamente uma cidade na lista |
| 🌙 **Modo escuro/claro** | Alternância de tema com persistência |
| 📱 **Responsivo** | Interface adaptada para desktop, tablet e mobile |
| 🎨 **Design Moderno** | UI com glassmorphism, gradientes e animações |

---

## 🧱 Stack Tecnológica

| Ferramenta | Finalidade |
|------------|------------|
| **React 19** | Biblioteca para construção da interface |
| **TypeScript** | Tipagem estática e maior segurança no código |
| **Vite** | Bundler rápido para desenvolvimento e build |
| **Context API** | Gerenciamento de estado global |
| **BrasilAPI** | API pública para dados de DDD |
| **ESLint** | Padronização e qualidade de código |
| **Vercel** | Hospedagem e deploy contínuo |

---

## 📂 Estrutura do Projeto

src/
├── components/
│ ├── Input.tsx # Campo de busca com botão
│ ├── Output.tsx # Exibição dos resultados
│ ├── Favoritos.tsx # Sistema de favoritos
│ └── ToggleTheme.tsx # Alternância de tema
├── contexts/
│ ├── DDDContext.tsx # Contexto principal
│ └── ThemeContext.tsx # Contexto de tema
├── hooks/
│ ├── useDDD.ts # Hook para o contexto DDD
│ └── useTheme.ts # Hook para o contexto de tema
├── providers/
│ └── DDDProvider.tsx # Provedor do contexto DDD
├── services/
│ └── dddApi.ts # Integração com a BrasilAPI
├── types/
│ └── DDD.ts # Definição de tipos TypeScript
├── App.tsx # Componente principal
├── main.tsx # Ponto de entrada
└── index.css # Estilos globais com variáveis de tema


---

## ⚙️ Como Executar Localmente

```bash
# 1. Clone o repositório
git clone https://github.com/mparise28-dev/ddd-explorer.git

# 2. Acesse a pasta
cd ddd-explorer

# 3. Instale as dependências
npm install

# 4. Rode o projeto
npm run dev

# 5. Acesse no navegador
# http://localhost:5173

---

🛠️ Scripts Disponíveis
Comando	Descrição
npm run dev	Roda o servidor de desenvolvimento
npm run build	Gera a build de produção
npm run preview	Visualiza a build localmente
npm run lint	Executa o linter no código

---

🖥️ Capturas de Tela

🌞 Modo Claro:
![alt text](image.png)

🌙 Modo Escuro:
![alt text](image-1.png)

---


🌐 API Utilizada
Este projeto consome a BrasilAPI, um serviço público que disponibiliza dados oficiais do Brasil:

GET https://brasilapi.com.br/api/ddd/v1/{ddd}


---


Exemplo de resposta:
{
  "state": "São Paulo",
  "cities": [
    "São Paulo",
    "Guarulhos",
    "Campinas",
    "Santos",
    "São Bernardo do Campo"
  ]
}


---


🧠 Aprendizados
Durante o desenvolvimento deste projeto, foram aplicados e consolidados os seguintes conceitos:

✅ Consumo de API com fetch e async/await
✅ Context API para estado global
✅ Criação de hooks personalizados
✅ Tipagem com TypeScript (interfaces, tipos, generics)
✅ Componentes funcionais com React
✅ Gerenciamento de estado com useState
✅ Tratamento de erros e estados de carregamento
✅ Controle de versão com Git e GitHub
✅ LocalStorage para persistência de dados
✅ CSS Variables para temas (modo escuro/claro)
✅ Deploy contínuo com Vercel


---



🚧 Melhorias Futuras
Funcionalidade	Status
📌 Favoritar DDDs (localStorage)	✅ Concluído
🔍 Filtro de cidades em tempo real	✅ Concluído
🌙 Modo escuro/claro	✅ Concluído
🗺️ Mapa com localização das cidades	🔜 Em breve
📊 Gráficos com estatísticas	🔜 Em breve
📱 PWA (instalável)	🔜 Em breve


---


📝 Licença
Este projeto está sob a licença MIT — sinta-se à vontade para usá-lo, modificá-lo e compartilhá-lo.


---



👨‍💻 Autor
Marcello Parise

GitHub: https://github.com/mparise28-dev

LinkedIn: https://www.linkedin.com/in/marcello-parise-campbell-fonseca-147965194/



---



🙏 Agradecimentos
FATEC — pela oportunidade e aprendizado

BrasilAPI — pela API pública e gratuita

Comunidade Open Source — por tornar ferramentas incríveis acessíveis a todos


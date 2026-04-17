#  Checklist de Estudos (React + Testing Stack)

Um gerenciador de planos de estudos robusto desenvolvido para elevar o padrão de qualidade em aplicações React. Indo além de um CRUD básico, o projeto foca na criação de um ecossistema confiável, robusto e manutenível, utilizando as melhores práticas de desenvolvimento moderno e uma arquitetura totalmente testável.

A estratégia de desenvolvimento foi guiada pela Pirâmide de Testes, garantindo que cada camada da aplicação — da lógica de negócio aos componentes e fluxos de usuário — esteja devidamente protegida. Para isso, utiliza-se Jest e React Testing Library em testes unitários e de integração, além de Cypress para testes de ponta a ponta (E2E).

Construído com React 19 e Vite, o projeto utiliza a Context API (com o novo hook use) para gerenciamento de estado global e consome uma API REST simulada via JSON Server. É o repositório ideal para quem busca uma referência sólida de como configurar e escalar um ambiente de testes completo. O projeto segue em constante evolução, com atualizações planejadas para expandir tanto suas funcionalidades quanto a sua cobertura de testes.

---

##  Tecnologias e Ferramentas

* **Core:** [React 19](https://react.dev/) e [Vite](https://vitejs.dev/)
* **Estado Global:** React Context API (utilizando o novo hook `use`)
* **Backend Simulado:** [JSON Server](https://github.com/typicode/json-server) (API REST)
* **Estilização:** CSS puro com foco em design responsivo
* **Qualidade:** ESLint, Prettier

---

##  Estratégia de Testes

O foco principal deste repositório é a implementação de diferentes níveis de testes, utilizando conceitos avançados:

### 1. Testes Unitários e de Integração
Utilizando **Jest** e **React Testing Library**:
* Uso de **Mocks, Stubs e Spies** para isolar dependências.
* Testes de componentes e hooks personalizados.
* Análise de **Code Coverage** (Cobertura de código).

### 2. Testes End-to-End (E2E)
Utilizando **Cypress** para simular a jornada completa do usuário no navegador.

### 3. Conceitos Aplicados
* Prevenção de falso-positivos.
* Simulação de timers (Fake Timers).
* Manipulação de eventos complexos de usuário.

---

##  Como Executar o Projeto

### Pré-requisitos
* Node.js (versão `>= 22.0.0` recomendada)
* npm ou yarn

### Instalação e Execução
1.  **Instale as dependências:**
    ```bash
    npm install
    ```

2.  **Inicie o Frontend (Vite) e o Backend (JSON Server) simultaneamente:**
    ```bash
    npm start
    ```
    *Acesse no navegador:* `http://localhost:5173`

---

##  Comandos de Teste

| Comando | Descrição |
| :--- | :--- |
| `npm test` | Executa todos os testes com Jest |
| `npm run test:watch` | Executa testes em modo interativo (watch) |
| `npm run test:coverage` | Gera relatório detalhado de cobertura |
| `npm run test:e2e` | Abre a interface do Cypress para testes E2E |

---

##  Estrutura de Pastas (Principais)

```text
src/
 ├── components/       # Componentes reutilizáveis da interface
 ├── services/         # Camada de comunicação com a API (fetch)
 ├── TodoProvider/     # Gerenciamento de estado global com Context API
 └── __mocks__/        # Arquivos de simulação para o ambiente de testes
```

---

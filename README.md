#  Checklist de Estudos (React + Testing Stack)

Este projeto é um gerenciador de planos de estudos desenvolvido para elevar o nível de qualidade de aplicações React. Além de feito uma aplicação de checklist de estudos totalmente funcional, outro foco foi tornar o código **confiável, robusto e manutenível** através da implementação prática de testes automatizados e das melhores práticas de desenvolvimento moderno.

Ao longo do desenvolvimento, foi aplicado a **Pirâmide de Testes** para garantir que cada camada da aplicação (lógica, componentes e fluxos) esteja devidamente protegida. Serão feitas atualizações futuras que além de adicionar novas funcionalidades, serão feito mais testes englobando ainda mais a aplicação.

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

import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { ToDoCount } from "./index";
import { getTodos } from "../../services/TodoService";
import userEvent from "@testing-library/user-event";

jest.mock("../../services/TodoService");

describe("ToDoCount", () => {
  test("deveria renderizar o componente corretamente", async () => {
    getTodos.mockResolvedValue([]);

    const { findByText } = render(<ToDoCount />);

    const count = await findByText("0");

    expect(count).toBeInTheDocument();
  });

  test("deveria renderizar o contador com itens corretamente", async () => {
    getTodos.mockResolvedValue([
      { id: 1, description: "Teste 1", completed: false, createdAt: new Date().toISOString() },
      { id: 2, description: "Teste 2", completed: true, createdAt: new Date().toISOString() },
    ]);

    const { findByText } = render(<ToDoCount />);

    const count = await findByText("2");

    expect(count).toBeInTheDocument();
  });
});

describe("ToDoCount", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("deveria começar com botão desabilitado e número de itens atualizado", async () => {
    const mockTodos = [
      { id: 1, description: "Teste 1", completed: false, createdAt: new Date().toISOString() },
      { id: 2, description: "Teste 2", completed: true, createdAt: new Date().toISOString() },
      { id: 3, description: "Teste 3", completed: false, createdAt: new Date().toISOString() },
    ];

    getTodos.mockResolvedValue(mockTodos);

    render(<ToDoCount />);

    const refreshButton = screen.getByRole("button", { name: /refresh/i });
    expect(refreshButton).toBeDisabled();

    await waitFor(() => {
      expect(screen.getByText("3")).toBeInTheDocument();
    });
  });

  test("deveria habilitar o botão após a busca inicial na API", async () => {
    const mockTodos = [
      { id: 1, description: "Teste 1", completed: false, createdAt: new Date().toISOString() },
    ];

    getTodos.mockResolvedValue(mockTodos);

    render(<ToDoCount />);

    const refreshButton = screen.getByRole("button", { name: /refresh/i });

    await waitFor(() => {
      expect(refreshButton).not.toBeDisabled();
    });

    expect(screen.getByText("1")).toBeInTheDocument();
  });

  test("deveria atualizar o número de itens corretamente após clicar no botão de refresh", async () => {
    getTodos.mockResolvedValueOnce([
      { id: 1, description: "Teste 1", completed: false, createdAt: new Date().toISOString() },
      { id: 2, description: "Teste 2", completed: true, createdAt: new Date().toISOString() },
    ]);

    render(<ToDoCount />);

    await waitFor(() => {
      expect(screen.getByText("2")).toBeInTheDocument();
    });

    const refreshButton = screen.getByRole("button", { name: /refresh/i });
    expect(refreshButton).not.toBeDisabled();

    getTodos.mockResolvedValueOnce([
      { id: 1, description: "Teste 1", completed: false, createdAt: new Date().toISOString() },
      { id: 2, description: "Teste 2", completed: true, createdAt: new Date().toISOString() },
      { id: 3, description: "Teste 3", completed: false, createdAt: new Date().toISOString() },
      { id: 4, description: "Teste 4", completed: true, createdAt: new Date().toISOString() },
    ]);

    await userEvent.click(refreshButton);

    await waitFor(() => {
      expect(screen.getByText("4")).toBeInTheDocument();
    });

    expect(refreshButton).not.toBeDisabled();
  });
});

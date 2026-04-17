import { render } from "@testing-library/react";
import React from "react";
import { SubHeading } from ".";

describe("SubHeading", () => {
  describe("getBy", () => {
    test("deveria renderizar o componente corretamente", () => {
      const { getByText } = render(<SubHeading>Para estudar</SubHeading>);
      expect(getByText("Para estudar")).toBeInTheDocument();
    });
  });

  describe("queryBy", () => {
    test("deveria renderizar o componente corretamente", () => {
      const { queryByText } = render(<SubHeading>Para estudar</SubHeading>);
      expect(queryByText("Para estudar")).toBeInTheDocument();
    });

    test("não deveria renderizar o componente quando não tem children", () => {
      const { queryByText } = render(<SubHeading></SubHeading>);
      expect(queryByText("Para estudar")).toBeNull();
    });
  });

  describe("findBy", () => {
    test("deveria renderizar a descrição após 500ms", async () => {
      const { findByText } = render(<SubHeading>Para estudar</SubHeading>);

      const description = await findByText("O que vamos estudar?");

      expect(description).toBeInTheDocument();
    });
  });
});

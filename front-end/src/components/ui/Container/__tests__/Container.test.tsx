import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Container from "../Container";

describe("Check Container component", () => {
  it("render component", () => {
    render(<Container />);

    const element = screen.getByRole("section");

    expect(element).toBeInTheDocument();
  });
});

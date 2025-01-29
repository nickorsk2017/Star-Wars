import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Pencil from "../Pencil";

describe("Check Pencil component", () => {
  it("render component", () => {
    render(<Pencil />);

    const element = screen.getByRole("icon");

    expect(element).toBeInTheDocument();
  });
});

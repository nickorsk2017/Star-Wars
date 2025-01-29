import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Logo from "../Logo";

describe("Check Logo component", () => {
  it("render component", () => {
    render(<Logo />);

    const element = screen.getByRole("icon");

    expect(element).toBeInTheDocument();
  });
});

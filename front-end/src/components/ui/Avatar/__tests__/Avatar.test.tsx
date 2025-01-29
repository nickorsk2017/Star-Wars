import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Avatar from "../Avatar";

describe("Check Avatar component", () => {
  it("render component", () => {
    render(<Avatar />);

    const element = screen.getByRole("portrait");

    expect(element).toBeInTheDocument();
  });
});

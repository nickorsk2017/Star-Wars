import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Loading from "../Loading";

describe("Check Loading component", () => {
  it("render component", () => {
    render(<Loading loading />);

    const element = screen.getByRole("icon");

    expect(element).toBeInTheDocument();
  });
});

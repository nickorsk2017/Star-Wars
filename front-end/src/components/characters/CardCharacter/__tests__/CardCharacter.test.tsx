import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { CharacterMockData } from "@/__mock__/CharacterMock";
import Component from "../CardCharacter";

describe("Check CardCharacter component", () => {
  it("render component", () => {
    render(<Component data={CharacterMockData} />);

    const element = screen.getByRole("card");

    expect(element).toBeInTheDocument();
  });

  it("render empty component", () => {
    render(<Component data={null} />);

    const element = screen.getByRole("card");

    expect(element).toBeInTheDocument();
  });
});

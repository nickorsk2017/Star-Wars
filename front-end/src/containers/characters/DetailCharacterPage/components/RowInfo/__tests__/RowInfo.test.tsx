import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import RowInfo from "../RowInfo";

describe("Check RowInfo component", () => {
  it("render component", () => {
    render(<RowInfo label="Name" value="Jimmy" />);

    const element = screen.getByTestId("row-info");

    expect(element).toBeInTheDocument();
  });
});

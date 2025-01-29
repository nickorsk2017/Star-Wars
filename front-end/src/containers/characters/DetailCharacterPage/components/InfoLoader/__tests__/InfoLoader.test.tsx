import "@testing-library/jest-dom";
import { CharacterMockData } from "@/__mock__/CharacterMock";
import { render, screen } from "@testing-library/react";
import InfoLoader from "../InfoLoader";
import userEvent from "@testing-library/user-event";
import "whatwg-fetch";

const TestComponent = () => {
  return <InfoLoader type="Films" urls={CharacterMockData.films} />;
};
describe("Check InfoLoader component", () => {
  it("render component", async () => {
    render(<TestComponent />);

    const buttonModal = screen.getByTestId("info-loader-btn");

    const user = userEvent.setup();
    await user.click(buttonModal);

    const loading = screen.getByTestId("loading-component");

    expect(loading).toBeInTheDocument();
  });
});

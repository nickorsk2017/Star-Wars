import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CharacterMockData } from "@/__mock__/CharacterMock";
import EditCharacter from "../EditCharacter";
import { useState } from "react";

const TestComponent = ({
  callback,
}: {
  callback?: (data: Partial<Entity.Character>) => void;
}) => {
  const [character, setCharacter] =
    useState<Partial<Entity.Character>>(CharacterMockData);

  const onSubmit = (data: Partial<Entity.Character>) => {
    setCharacter(data);

    if (callback) {
      callback(data);
    }
  };

  return <EditCharacter data={character} updateCharacter={onSubmit} />;
};

describe("Check Edit character form component", () => {
  it("should render text fields", () => {
    const html = render(<TestComponent />);

    expect(html.getByTestId("Name")).toBeInTheDocument();
    expect(html.getByTestId("Height")).toBeInTheDocument();
    expect(html.getByTestId("Mass")).toBeInTheDocument();
  });

  it("check validation", async () => {
    let result;

    const updateResult = (data: Partial<Entity.Character>) => {
      result = data;
    };

    const user = userEvent.setup();

    const html = render(<TestComponent callback={updateResult} />);
    const buttonEdit = html.getByTestId("pencil");
    const nameInp = html.getByTestId("Name");
    const heightInp = html.getByTestId("Height");
    const massInp = html.getByTestId("Mass");

    // open edit modal
    await user.click(buttonEdit);

    // fill form
    await user.type(nameInp!, "Johny Depp");
    await user.type(heightInp!, "170");
    await user.type(massInp!, "90");

    // check if all inputs have been filled
    expect(heightInp).not.toBe("");
    expect(nameInp).not.toBe("");
    expect(massInp).not.toBe("");

    // click submit button
    await user.click(html.getByTestId("edit-character-btn"));

    // check result form
    expect(result).not.toBeUndefined();
  });
});

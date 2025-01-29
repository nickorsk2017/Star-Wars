import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TextInput from "../TextInput";
import { useForm } from "react-hook-form";
import React from "react";

const rules = {
  numberInput: {
    required: "This is required",
    pattern: {
      value: /^[0-9]+$/,
      message: "Please enter a number",
    },
  },
  stringInput: {
    required: "This is required",
  },
};

type FormValue = { NumberInput: number; StringInput: string };

type Props = { onSubmit: (formValue: FormValue) => void };

const TestForm = ({ onSubmit }: Props) => {
  const { register, handleSubmit } = useForm<FormValue>();

  const onSubmitHandler = (formValue: FormValue) => {
    onSubmit(formValue);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <TextInput
        inputTestId="NumberInput"
        label="NumberInput"
        register={register}
        name="NumberInput"
        validation={rules.numberInput}
      />
      <TextInput
        inputTestId="StringInput"
        label="StringInput"
        register={register}
        name="StringInput"
        validation={rules.stringInput}
      />
      <button role="button">Submit</button>
    </form>
  );
};

describe("Check TextInput component", () => {
  it("should render text fields", () => {
    render(<TestForm onSubmit={() => {}} />);

    expect(screen.getByText(/NumberInput/)).toBeInTheDocument();
    expect(screen.getByText(/StringInput/)).toBeInTheDocument();
  });

  it("should validate form fields", async () => {
    const mockSave = jest.fn();
    let result: FormValue;

    const html = render(
      <TestForm
        onSubmit={(value: FormValue) => {
          result = value;
        }}
      />
    );

    const inputNum = html.getByTestId("NumberInput");
    const inputStr = html.getByTestId("StringInput");

    const user = userEvent.setup();
    await user.type(inputNum!, "100");

    await user.type(
      inputStr!,
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    );

    await user.click(html.getByRole("button"));

    expect(result!.NumberInput).not.toBeUndefined();
    expect(result!.StringInput).not.toBeUndefined();
    expect(inputNum).not.toBe("");
    expect(inputStr).not.toBe("");
    expect(mockSave).not.toHaveBeenCalled();
  });
});

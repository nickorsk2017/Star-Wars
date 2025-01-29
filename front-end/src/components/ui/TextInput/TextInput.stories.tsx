import type { Meta, StoryObj } from "@storybook/react";
import { useForm } from "react-hook-form";
import TextInputComponent, { Props } from "./TextInput";
import React from "react";

type FormValue = { numberInput: number; stringInput: string };

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

const TestComponent = (args: Props) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValue>();

  const onSubmit = () => {
    alert("Valid!");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInputComponent
        inputTestId={args.inputTestId}
        label={args.label}
        name={args.name}
        validation={rules.numberInput}
        errorText={args?.errorText || errors?.numberInput?.message}
        register={register}
        disabled={args.disabled}
        type={args.type}
      />
    </form>
  );
};

const meta = {
  title: "UI/TextInput",
  component: TextInputComponent,
  decorators: (Story, options) => {
    return <TestComponent {...options.args} />;
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
} satisfies Meta<typeof TextInputComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NumberInput: Story = {
  args: {
    inputTestId: "test",
    className: "my-class",
    label: "Number Input",
    errorText: "",
    disabled: false,
    type: "number",
    name: "numberInput",
  },
};

export const TextInput: Story = {
  args: {
    inputTestId: "test",
    className: "my-class",
    label: "Text Input",
    errorText: "",
    disabled: false,
    type: "text",
    name: "stringInput",
  },
};

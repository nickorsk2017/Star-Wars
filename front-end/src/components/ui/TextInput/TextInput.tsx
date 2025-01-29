"use client";
import { UseFormRegister } from "react-hook-form";
import "./styles.css";

type Props = {
  // using for testing
  inputTestId?: string;
  className?: string;
  label: string;
  errorText?: string;
  defaultValue?: string;
  disabled?: boolean;
  type?: string;

  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  validation?: object;
};

function TextInput({
  inputTestId,
  className = "",
  label,
  errorText = "",
  disabled,
  type = "text",
  name,
  register,
  validation,
}: Props) {
  return (
    <div className={`fa-input-text ${className}`}>
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        data-testid={inputTestId}
        type={type}
        role="textbox"
        className="input input-bordered fa-input-text__inp"
        {...register(name, validation)}
        disabled={disabled}
      />
      <div className="fa-input-text__err">{errorText}</div>
    </div>
  );
}

export default TextInput;

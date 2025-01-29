"use client";
import { UseFormRegister } from "react-hook-form";
import "./styles.css";

type Props = {
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
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input
        type={type}
        className="input input-bordered fa-input-text__inp"
        {...register(name, validation)}
        disabled={disabled}
      />
      <div className="fa-input-text__err">{errorText}</div>
    </div>
  );
}

export default TextInput;

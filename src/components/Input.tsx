import { ComponentPropsWithoutRef, forwardRef } from "react";

type InputPropsType = {
  id: string;
  label: string;
} & ComponentPropsWithoutRef<"input">;
const Input = forwardRef<HTMLInputElement, InputPropsType>(function Input(
  { id, label, ...props }: InputPropsType,
  ref
) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} {...props} ref={ref} />
    </div>
  );
});

export default Input;

import {
  FormEvent,
  forwardRef,
  useImperativeHandle,
  useRef,
  type ReactNode,
} from "react";

type FormPropsType = {
  children: ReactNode;
  onSave: (value: unknown) => void;
};

export type FormHandle = {
  clear: () => void;
};
const Form = forwardRef<FormHandle, FormPropsType>(function Form(
  { onSave, children, ...props },
  ref
) {
  const form = useRef<HTMLFormElement>(null);

  useImperativeHandle(ref, () => {
    return {
      clear() {
        console.log("Clearing");
        form.current?.reset();
      },
    };
  });

  const formSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    onSave(data);
    form.current?.reset();
  };
  return (
    <form onSubmit={formSubmitHandler} {...props} ref={form}>
      {children}
    </form>
  );
});

export default Form;

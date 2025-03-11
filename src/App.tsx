import { useRef } from "react";
import Button from "./components/Button";
// import Container from "./components/Container";
import Input from "./components/Input";
import Form, { type FormHandle } from "./components/Form";

function App() {
  const customRef = useRef<FormHandle>(null);
  const handleSave = (data: unknown) => {
    const inputData = data as {
      name: string;
      age: string;
    };
    console.log(inputData);
  };
  return (
    <Form onSave={handleSave} ref={customRef}>
      <Input label="Name" id="name"></Input>
      <Input label="Age" id="age" type="number"></Input>
      <Button>Submit</Button>
    </Form>
  );
}

export default App;

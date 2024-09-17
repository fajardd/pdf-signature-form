import React from "react";
import Input from "../Elements/Input";
import Button from "../Elements/Button";

const Form = (props) => {
  const { handleConvertPdf, form, handleChange, inputList } = props;
  return (
    <div>
      <form className="p-6 space-y-6" onSubmit={handleConvertPdf}>
        <Input
          type="text"
          placeholder="Email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <Input
          type="password"
          placeholder="Password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
        <Button type="submit">Convert PDF</Button>
      </form>
      <div id="preview">
        {inputList.map((input, index) => (
          <div key={index}>
            <h1>{input.email}</h1>
            <h1> {input.password}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Form;

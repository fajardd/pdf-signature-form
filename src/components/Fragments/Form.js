import React from "react";
import Input from "../Elements/Input";
import Button from "../Elements/Button";

const Form = (props) => {
  const { handleConvertPdf, form, handleChange, inputList } = props;
  return (
    <div className="p-6">
      <form className="border p-6 space-y-6" onSubmit={handleConvertPdf}>
        <Input
          type="text"
          placeholder="Email"
          name="email"
          value={form.email}
          onChange={handleChange}
          borderInput="blue"
          required
        />
        <Input
          type="text"
          placeholder="Nama Lengkap"
          name="nama_lengkap"
          value={form.nama_lengkap}
          onChange={handleChange}
        />
        <Button type="submit">Convert PDF</Button>
      </form>
      <div id="preview">
        {inputList.map((input, index) => (
          <div key={index}>
            <h1>{input.email}</h1>
            <h1> {input.nama_lengkap}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Form;

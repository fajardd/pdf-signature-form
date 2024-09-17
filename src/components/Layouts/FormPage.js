import React, { useState } from "react";
import Form from "../Fragments/Form";
import jsPDF from "jspdf";
import moment from "moment";

const FormPage = () => {
  const [form, setForm] = useState({
    email: "",
    nama_lengkap: "",
  });

  const [inputList, setInputList] = useState([]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleConvertPdf = (e) => {
    e.preventDefault();
    // setInputList([...inputList, form]);

    const doc = new jsPDF();
    doc.setFontSize(12);
    doc.text(`Email: ${form.email}`, 50, 10);
    doc.setFontSize(20);
    doc.text(`Password: ${form.nama_lengkap}`, 70, 80);

    const timeStamp = moment().format("YYYY-MM-DD-h:mm:ss");
    const fileName = `pdf-download_${timeStamp}.pdf`;
    doc.save(fileName);

    setForm({
      email: "",
      nama_lengkap: "",
    });
  };

  return (
    <Form
      form={form}
      handleChange={handleChange}
      handleConvertPdf={handleConvertPdf}
      inputList={inputList}
    />
  );
};

export default FormPage;

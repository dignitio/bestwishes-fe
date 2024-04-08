import React, { useState } from "react";
import { useField } from "formik";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Myeditor = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props.name);

  const handleChange = (value) => {
    helpers.setValue(value);
  };
  return (
    <div>
      <label htmlFor={props.name}>{label}</label>
      <ReactQuill
        className=" resize-y h-32 mb-16 "
        value={field.value}
        onChange={handleChange}
        {...props}
      />
      {meta.touched && meta.error ? <div style={{ color: "red" }}>{meta.error}</div> : null}
    </div>
  );
};
export default Myeditor;

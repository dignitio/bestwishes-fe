import React from "react";
import { useField } from "formik";
import ReactQuill from "react-quill";
import { motion } from "framer-motion";
import "react-quill/dist/quill.snow.css";
import "./editor.css"

const Myeditor = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props.name);

  const handleChange = (value) => {
    helpers.setValue(value);
  };
  return (
    <div>
      <label htmlFor={props.name}>{label}</label>
      <motion.div whileHover={{ scale: 0.996 }} className="relative">
        <ReactQuill
          className="resize-y h-32  mb-16"
          value={field.value}
          onChange={handleChange}
          {...props}
        />
      </motion.div>
      {meta.touched && meta.error ? <div style={{ color: "red" }}>{meta.error}</div> : null}
    </div>
  );
};
export default Myeditor;
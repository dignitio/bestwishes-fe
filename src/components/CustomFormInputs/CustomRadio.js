import React from "react";
import { useField } from "formik";

export default function CustomRadio({ text, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className="flex items-center">
      <input
        type="radio"
        {...field}
        {...props}
        className="mr-1 mb-1 w-4 h-4 accent-indigo-900"
      />
      <label htmlFor={props.id} className="text-lg">{text}</label>
      {meta.touched && meta.error && (
        <div className="text-red-500 text-xs">{meta.error}</div>
      )}
    </div>
  );
}
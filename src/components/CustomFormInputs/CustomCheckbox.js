import { useField } from "formik";
import React from "react";

export default function CustomCheckbox({ text, accent, ...props }) {
  const [field, meta] = useField({ ...props });

  
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={props.id} className="checkbox flex gap-1 items-center text-sm">
        <input
          id={props.id} 
          {...field}
          {...props}
          className={`
            ${meta.touched && meta.error ? "border-errorColor" : "border-gray-300"}
            border focus:border-blue-500 focus:ring-blue-200 rounded-md p-2 outline-none
            ${field.checked ? accent : ""}
          `}
          type="checkbox"
        />
        {text}
      </label>
      <span>
        {meta.touched && meta.error && <div className="text-errorColor text-xs">{meta.error}</div>}
      </span>
    </div>
  );
}

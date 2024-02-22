import React from "react";
import { useField } from "formik";

export default function CustomTextArea({ label, className, ...props }) {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name} className="text-[#1E1B1A] font-medium text-[18px] ">
        {label}
      </label>
      <textarea
        {...field}
        {...props}
        className={` w-full border text-[#8593AD] ${className}  ${
          meta.touched && meta.error ? "border-primary" : "border-[#8593AD]"
        }  rounded-md px-[26px] py-[18px] outline-none h-10`}
        style={{ appearance: "none", WebkitAppearance: "none", MozAppearance: "none" }}
      />
      {meta.touched && meta.error ? (
        <div className="text-xs text-primary mt-[-10px]">{meta.error}</div>
      ) : null}
    </>
  );
}

import React from "react";
import { useField } from "formik";
import { motion } from "framer-motion";

export default function CustomTextArea({ label, className, ...props }) {
  const [field, meta] = useField(props);
  return (
    <>
      <label
        htmlFor={props.id || props.name}
        className="text-[#1E1B1A] text-sm md:text-base font-medium text-[18px] "
      >
        {label}
      </label>
      <motion.textarea
        whileHover={{ scale: 0.98 }}
        {...field}
        {...props}
        className={` text-sm placeholder:text-sm md:text-base w-full border text-[#1E1B1A]  ${className}  ${
          meta.touched && meta.error ? "border-errorColor" : "border-[#C2C9D6]"
        }  rounded-md px-[26px] py-[18px] outline-none h-10`}
        style={{ appearance: "none", WebkitAppearance: "none", MozAppearance: "none" }}
      />
      {meta.touched && meta.error ? (
        <div className="text-xs text-errorColor mt-[-10px]">{meta.error}</div>
      ) : null}
    </>
  );
}
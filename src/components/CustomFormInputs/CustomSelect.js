import React from "react";
import { useField } from "formik";
import { motion } from "framer-motion";

// eslint-disable-next-line import/prefer-default-export
export default function CustomSelect({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <>
      <label className=" text-sm md:text-base " htmlFor={label}>
        {label}
      </label>
      <motion.select
        whileHover={{ scale: 0.98 }}
        className={` text-sm placeholder:text-sm md:text-base w-full border text-[#1E1B1A]    ${
          meta.touched && meta.error ? "border-errorColor" : "border-primary"
        }  rounded-md px-[20px] py-[14px] md:px-[26px] md:py-[18px] outline-none`}
        style={{ appearance: "none", WebkitAppearance: "none", MozAppearance: "none" }}
        {...field}
        {...props}
      />

      <span>
        {meta.touched && meta.error && <div className="text-errorColor text-xs">{meta.error}</div>}
      </span>
    </>
  );
}

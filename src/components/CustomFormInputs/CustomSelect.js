import React from "react";
import { useField } from "formik";
import { motion } from "framer-motion";
import {ReactComponent as DropdownIcon} from "assets/icons/downArrow.svg"

// eslint-disable-next-line import/prefer-default-export
export default function CustomSelect({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div className="flex flex-col w-full ">
      <label
        className="text-sm md:text-base text-[18px] text-[#1E1B1A] font-medium"
        htmlFor={label}
      >
        {label}
      </label>
      <motion.select
        whileHover={{ scale: 0.98 }}
        className={`text-sm placeholder:text-sm md:text-base w-full max-w-full border text-[#1E1B1A] mt-2 ${
          meta.touched && meta.error ? "border-errorColor" : "border-primary"
        }  rounded-md px-[20px] py-[14px] md:px-[26px] md:py-[18px] outline-none`}
        style={{ appearance: "none", WebkitAppearance: "none", MozAppearance: "none" }}
        {...field}
        {...props}
      />
      <div className="absolute">
        <DropdownIcon/>
      </div>

      <span>
        {meta.touched && meta.error && <div className="text-errorColor text-xs">{meta.error}</div>}
      </span>
    </div>
  );
}

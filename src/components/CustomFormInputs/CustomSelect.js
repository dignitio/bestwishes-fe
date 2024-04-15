import React from "react";
import { useField } from "formik";
import { motion } from "framer-motion";

// eslint-disable-next-line import/prefer-default-export
export default function CustomSelect({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div className=" w-full ">
<<<<<<< HEAD
      <label className=" text-[18px] md:text-[18px]" htmlFor={label}>
=======
      <label className=" text-sm md:text-base " htmlFor={label}>
>>>>>>> 10b22ca7dbc3551aaf81568dc349536658fb5b65
        {label}
      </label>
      <motion.select
        whileHover={{ scale: 0.98 }}
<<<<<<< HEAD
        className={`text-sm placeholder:text-sm md:text-base w-full max-w-full border text-[#1E1B1A] mt-2 ${
          meta.touched && meta.error ? "border-errorColor" : "border-primary"
        }  rounded-md px-[20px] py-[20px] md:px-[26px] md:py-[20px] outline-none`}
=======
        className={` text-sm placeholder:text-sm md:text-base w-full max-w-full border text-[#1E1B1A] ${
          meta.touched && meta.error ? "border-errorColor" : "border-primary"
        }  rounded-md px-[20px] py-[14px] md:px-[26px] md:py-[18px] outline-none`}
>>>>>>> 10b22ca7dbc3551aaf81568dc349536658fb5b65
        style={{ appearance: "none", WebkitAppearance: "none", MozAppearance: "none" }}
        {...field}
        {...props}
      />

      <span>
        {meta.touched && meta.error && <div className="text-errorColor text-xs">{meta.error}</div>}
      </span>
    </div>
  );
}

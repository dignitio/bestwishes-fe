import React from "react";
import { useField } from "formik";
import { motion } from "framer-motion";

interface CustomTextAreaProps {
  label?: string;
  className?: string;
  [key: string]: any;
}

const CustomTextArea: React.FC<CustomTextAreaProps> = ({ label, className, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label
        htmlFor={props.id || props.name}
        className="text-[#1E1B1A] text-sm md:text-base font-medium text-[18px] "
      >
        {label}
      </label>
      <motion.div whileHover={{ scale: 0.98 }}>
        <textarea
          {...field}
          {...props}
          className={` text-sm placeholder:text-sm md:text-base w-full border text-[#1E1B1A]  ${className}  ${meta.touched && meta.error ? "border-errorColor" : "border-primary"
            }  rounded-md px-[26px] py-[18px] outline-none h-10`}
          style={{ appearance: "none", WebkitAppearance: "none", MozAppearance: "none" }}
        />
      </motion.div>
      {meta.touched && meta.error ? (
        <div className="text-xs text-errorColor mt-[-10px]">{meta.error}</div>
      ) : null}
    </>
  );
};

export default CustomTextArea;

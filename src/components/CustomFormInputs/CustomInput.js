import { useField } from "formik";
import React from "react";
import { motion } from "framer-motion";
import { ReactComponent as Eye } from "../../assets/icons/eye.svg";
import { ReactComponent as EyeSlash } from "../../assets/icons/eye-slash.svg";

export default function CustomInput({ label, type, maxLength, obscured, numeric, ...props }) {
  const [field, meta] = useField(props);
  const [viewPassword, setViewPassword] = React.useState(false);
  let inputType = type;
  if (viewPassword) {
    inputType = "text";
  } else if (numeric) {
    inputType = "number";
  }
  const handleViewPassword = () => {
    setViewPassword(!viewPassword);
  };
  return (
    <div className="flex flex-col w-full">
      <label className="text-sm md:text-base text-[#1E1B1A] font-medium mb-1.5" htmlFor={props.id}>
        {label}
      </label>
      {/* {questionText && <p className="text-sm text-gray-500">{questionText}</p>} */}
      <motion.div whileHover={{ scale: 0.98 }} className="relative">
        <input
          id={props.id}
          {...field}
          {...props}
          type={inputType}
          maxLength={maxLength}
          className={`text-sm md:text-base w-full  border text-[#000000] placeholder:text-sm md:placeholder:text-base focus:border-primary focus:ring-1 focus:ring-primary ${
            meta.touched && meta.error ? "border-errorColor" : "border-primary"
          } rounded-md px-4 py-4    outline-none`}
          style={{ appearance: "none", WebkitAppearance: "none", MozAppearance: "none" }}
        />
        {obscured && (
          <div
            className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
            onClick={handleViewPassword}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleViewPassword();
              }
            }}
            role="button"
            tabIndex={0}
          >
            {viewPassword ? <Eye /> : <EyeSlash />}
          </div>
        )}
      </motion.div>
      {meta.touched && meta.error && (
        <div className="text-xs text-errorColor mt-1">{meta.error}</div>
      )}
    </div>
  );
}

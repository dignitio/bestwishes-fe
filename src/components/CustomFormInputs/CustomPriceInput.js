import { useField } from "formik";
import React from "react";
import { motion } from "framer-motion";

export default function CustomPriceInput({ label, ...props }) {
  const [field, meta] = useField(props);

  const formatPrice = (value) => {
    return `$${value}`;
  };

  const handleChange = (e) => {
    const { value } = e.target;
    const numericValue = value.replace(/[^0-9]/g, "");
    field.onChange({ target: { ...field, value: numericValue } });
  };

  return (
    <div className="flex flex-col w-full">
      <label className="text-[#1E1B1A] font-medium text-[18px] mb-1" htmlFor={props.id}>
        {label}
      </label>
      <motion.div whileHover={{ scale: 0.98 }} className="relative">
        <input
          id={props.id}
          {...field}
          {...props}
          type="text"
          value={formatPrice(field.value)}
          onChange={handleChange}
          className={`w-full border text-[#1E1B1A]  ${
            meta.touched && meta.error ? "border-errorColor" : "border-primary"
          } rounded-md px-[26px] py-[18px] outline-none`}
          style={{ appearance: "none", WebkitAppearance: "none", MozAppearance: "none" }}
        />
      </motion.div>
      {meta.touched && meta.error && (
        <div className="text-xs text-errorColor mt-1">{meta.error}</div>
      )}
    </div>
  );
}

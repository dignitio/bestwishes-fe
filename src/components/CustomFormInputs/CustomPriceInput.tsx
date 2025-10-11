import { useField } from "formik";
import React from "react";
import { motion } from "framer-motion";

interface CustomPriceInputProps {
  label?: string;
  [key: string]: any;
}

const CustomPriceInput: React.FC<CustomPriceInputProps> = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  const formatPrice = (value: any) => {
    return `$${value}`;
  };

  const handleChange = (e: any) => {
    const { value } = e.target;
    const numericValue = value.replace(/[^0-9]/g, "");
    field.onChange({ target: { ...field, value: numericValue } });
  };

  return (
    <div className="flex flex-col w-full">
      <label className="text-[#1E1B1A] font-medium text-[18px] mb-1" htmlFor={props.id}>
        {label}
      </label>
      <motion.div whileHover={{ scale: 0.98 }}>
        <div className="relative">
          <input
            id={props.id}
            {...field}
            {...props}
            type="text"
            value={formatPrice(field.value)}
            onChange={handleChange}
            className={`w-full border text-[#1E1B1A]  ${meta.touched && meta.error ? "border-errorColor" : "border-primary"
              } rounded-md px-4 py-4 outline-none`}
            style={{ appearance: "none", WebkitAppearance: "none", MozAppearance: "none" }}
          />
        </div>
      </motion.div>
      {meta.touched && meta.error && (
        <div className="text-xs text-errorColor mt-1">{meta.error}</div>
      )}
    </div>
  );
};

export default CustomPriceInput;

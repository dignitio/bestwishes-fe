import { useField } from "formik";
import React from "react";
import { ReactComponent as Eye } from "../../assets/icons/eye.svg";
import { ReactComponent as EyeSlash } from "../../assets/icons/eye-slash.svg";

export default function CustomInput({ label, type, obscured, numeric, ...props }) {
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
    <div className="flex flex-col gap-2 w-full">
      <label
        className=" text-sm md:text-base text-[#1E1B1A] font-medium text-[18px] mb-2"
        htmlFor={props.id}
      >
        {label}
      </label>
      <div className="relative">
        <input
          id={props.id}
          {...field}
          {...props}
          type={inputType}
          className={` text-sm placeholder:text-sm md:text-base w-full border text-[#8593AD]   ${
            meta.touched && meta.error ? "border-primary" : "border-[#8593AD]"
          }  rounded-md px-[20px] py-[14px] md:px-[26px] md:py-[18px] outline-none `}
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
      </div>
      {meta.touched && meta.error && <div className="text-xs text-primary mt-1">{meta.error}</div>}
    </div>
  );
}

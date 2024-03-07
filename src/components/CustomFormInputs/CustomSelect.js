import React from "react";
import { useField } from "formik";

// eslint-disable-next-line import/prefer-default-export
export default function CustomSelect({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <>
      <label className=" text-sm md:text-base " htmlFor={label}>
        {label}
      </label>
      <select
        className={` text-sm placeholder:text-sm md:text-base w-full border text-[#8593AD]   ${
          meta.touched && meta.error ? "border-primary" : "border-[#8593AD]"
        }  rounded-md px-[20px] py-[14px] md:px-[26px] md:py-[18px] outline-none`}
        style={{ appearance: "none", WebkitAppearance: "none", MozAppearance: "none" }}
        {...field}
        {...props}
      />

      <span>
        {meta.touched && meta.error && <div className="text-primary text-xs">{meta.error}</div>}
      </span>
    </>
  );
}

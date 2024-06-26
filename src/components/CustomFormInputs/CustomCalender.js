import React from "react";
import { useField, useFormikContext } from "formik";
import { motion } from "framer-motion";
import ReactDatePicker from "react-datepicker";
import { ReactComponent as CalendarLogo } from "../../assets/icons/calendar.svg";
import "react-datepicker/dist/react-datepicker.css";
import "./calendar.css";

export default function CustomCalendar({ label, type, value, onChange, ...props }) {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(props);

  const openCalendar = () => {
    document.getElementById(props.id).click(); // Click the input element to open the calendar
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      <label htmlFor={props.id} className="text-[#1E1B1A] text-sm md:text-base font-medium text-[18px]">
        {label}
      </label>
      <motion.div whileHover={{ scale: 0.98 }} className="relative w-full">
        <ReactDatePicker
          type={type}
          selected={value}
          dateFormat="dd/MM/yyyy"
          {...field}
          {...props}
          wrapperClassName="w-full"
                    className={` w-full max-w-full md:max-w-[900px] border text-[#1E1B1A]   ${
            meta.touched && meta.error ? "border-errorColor" : "border-primary"
          }  rounded-md px-[26px] py-[18px] outline-none`}
          onChange={(date) => {
            onChange(date);
            setFieldValue(props.name, date);
          }}
        />
        <label htmlFor={props.id} className="sr-only">
          {label}
        </label>
        <button
          className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
          type="button"
          aria-label={`Open ${label} calendar`}
          onClick={openCalendar}
        >
          <span className="text-[#8593AD]">
            <CalendarLogo />
          </span>
        </button>
      </motion.div>
      {meta.touched && meta.error && (
        <div className="text-xs text-errorColor mt-1">{meta.error}</div>
      )}
    </div>
  );
}

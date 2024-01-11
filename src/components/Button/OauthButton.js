import React from "react";

export default function OauthButton({ className = "", children, type, ...props }) {
  return (
    <button
      {...props}
      type={type}
      className={`bg-OauthButton flex justify-center items-center  text-left text-black h-10 rounded py-0 px-16 ${className} `}
    >
      <div className=" w-full max-w-[230px] flex gap-4 items-center " >{children}</div>
    </button>
  );
}

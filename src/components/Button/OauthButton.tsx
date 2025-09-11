import React, { ReactNode, ButtonHTMLAttributes } from "react";

interface OauthButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  type?: "button" | "submit" | "reset";
}

const OauthButton: React.FC<OauthButtonProps> = ({
  className = "",
  children,
  type = "button",
  ...props
}) => {
  return (
    <button
      {...props}
      type={type}
      className={`bg-OauthButton flex justify-center items-center  text-left text-black h-10 rounded py-0 px-16 ${className} `}
    >
      <div className=" w-full max-w-[230px] flex gap-4 items-center " >{children}</div>
    </button>
  );
};

export default OauthButton;

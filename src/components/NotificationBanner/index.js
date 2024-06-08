import { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as XCircleIcon } from "../../assets/icons/Xcircle.svg";

export default function NotificationBanner({ text, cta, ctaLink, icon, mode }) {
  const [show, setShow] = useState(true);

  const modeStyles = {
    red: {
      outline: "outline-red-400",
      background: "bg-red-50",
      button: "bg-red-500 outline-none hover:text-red-600 hover:bg-white text-white",
    },
    green: {
      outline: "outline-green-400",
      background: "bg-green-50",
      button: "bg-green-500 hover:bg-green-600 text-white",
    },
    purple: {
      outline: "outline-[#271F6B]",
      background: "bg-[#d3d0f1]",
      button:
        "bg-[#271F6B] outline-none hover:bg-white hover:text-[#271F6B] text-white border-2 border-[#271F6B]",
      text: "text-white",
    },
  };

  const currentStyles = modeStyles[mode] || modeStyles.red;

  return (
    <>
      {show && (
        <div
          className={`outline outline-1 rounded-md flex justify-between mx-8 max-sm:mx-4 md:py-3 py-5 px-6 max-sm:px-2 max-sm:py-3.5 ${currentStyles.outline} ${currentStyles.background}`}
        >
          <div className="flex items-center sm:items-start">
            <div className="w-7 mt-1 h-7 md:w-8 md:h-7 lg:w-8 lg:h-8">{icon}</div>
            <p className=" sm:pl-2 pt-1 font-nunito text-base md:text-base md:font-normal lg:text-xl lg:pl-4 ">
              {text}
            </p>
          </div>
          <div className="flex items-center">
            <Link to={ctaLink} replace>
              <span
                className={`rounded-lg px-2 py-3 font-nunito lg:mr-8 text-base lg:px-4 md:py-2 lg:py-3 md:px-3 ${currentStyles.button}`}
              >
                {cta}
              </span>
            </Link>
            <span>
              <XCircleIcon
                onClick={() => setShow(false)}
                className="lg:w-8 lg:h-7 md:w-6 md:h-6  cursor-pointer"
              />
            </span>
          </div>
        </div>
      )}
    </>
  );
}

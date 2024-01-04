import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as BestWishesLogo } from "../../assets/bestwishes-logo.svg";

const BGIMAGES = [
  "/assets/images/registration-bg-image.png",
  "/assets/images/login-bg-image.png",
  "/assets/images/reset-password-bg-image.png",
];

export default function AuthLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPage = location.pathname.split("/").pop();

  // index of current page in the routes
  const pageIndex = ["register", "login", "reset-password"].indexOf(currentPage);

  const backgroundImage = BGIMAGES[pageIndex];

  const flexDirection = currentPage === "login" ? "flex-row" : "flex-row-reverse";

  // If page not found, redirect to register
  if (pageIndex === -1) {
    navigate("/auth/register");
  }

  return (
    <div
      className={`w-full min-h-screen h-full flex  justify-between ${flexDirection} `}
    >
      <img
        src={backgroundImage}
        className=" hidden lg:block flex-grow object-cover w-3/5 "
        alt="background-pic"
      />
      <div className=" flex flex-col px-[2%] gap-8  justify-center flex-grow w-2/5">
        <div className="flex items-center justify-center">
          <BestWishesLogo />
        </div>
        <Outlet />
      </div>
    </div>
  );
}

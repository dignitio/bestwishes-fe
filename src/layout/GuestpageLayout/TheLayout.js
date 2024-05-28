import { Outlet } from "react-router-dom";

import Nav from "./navigationBar";

function GuestLayout() {
  return (
    <div className="bg-[#F3F4F6] w-[100%] pb-2">
      <Nav />
      <main className="w-full h-full ">
        <Outlet />
      </main>
    </div>
  );
}

export default GuestLayout;

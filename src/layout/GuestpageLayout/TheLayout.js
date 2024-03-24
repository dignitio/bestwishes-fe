import { Outlet } from "react-router-dom";

import Nav from "./navigationBar";

function GuestLayout() {
  return (
    <div className="bg-[#F3F4F6] w-[100%]">
      <Nav/>
      <main className="w-full h-screen py-3 overflow-scroll">
        <Outlet />
      </main>
    </div>
  );
}

export default GuestLayout;

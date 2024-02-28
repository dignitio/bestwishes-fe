import { Outlet } from "react-router-dom";

import Nav from "./navigationBar";

function GuestLayout() {
  return (
    <div className="bg-[#D9D9D9] font-lexend w-[100%]">
      <Nav/>
      <main className="w-full h-screen p-3 overflow-hidden">
        <Outlet />
      </main>
    </div>
  );
}

export default GuestLayout;

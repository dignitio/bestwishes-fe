import { Outlet } from "react-router-dom";

import Nav from "./navigationBar";

function GuestLayout() {
  return (
    <div className="bg-[#F3F4F6] w-[100%]">
      <Nav />
      <main className="w-full pb-20  py-3 ">
        <Outlet />
      </main>
    </div>
  );
}

export default GuestLayout;

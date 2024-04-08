import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Layout() {
  return (
    <div className="bg-gray-100 h-full relative overflow-clip flex font-nunito">
      <div className=" sticky h-screen top-0 left-0 ">
        <Sidebar />
      </div>
      <div className="w-full relative max-lg:w-full">
        <Header />
        <main className="w-full max-lg:w-full ">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;

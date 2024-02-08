import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Layout() {
  return (
    <div className="bg-gray-100 h-full flex font-nunito">
      <Sidebar/>
      <div className="w-11/12 max-lg:w-full">
        <Header />
        <main className="w-11/12 max-lg:w-full h-screen overflow-y-scroll">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;

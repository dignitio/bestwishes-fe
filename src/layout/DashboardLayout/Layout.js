import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Layout() {
  return (
    <div className="bg-gray-100  flex font-nunito">
      <Sidebar />
      <div className="w-11/12">
        <Header />
        <main className="w-11/12">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;

import Header from "./Header";
import Sidebar from "./Sidebar";

function Layout() {
    return ( 
        <div className="bg-gray-200 grid grid-cols-8 font-nunito">
            <Sidebar/>
            <div className="col-span-7">
                <Header />
                <main className="text-gray-300 text-6xl text-center mt-40">
                    main element
                </main>
            </div>
           
        </div>
     );
}

export default Layout;
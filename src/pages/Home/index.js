import { Link } from "react-router-dom";

function Home() {
    return ( 
        <div className="h-screen flex justify-center items-center">
            <div className="bg-red-500 text-white py-3 px-5 mr-12 rounded-sm">
                <Link to="dashboard">Go to dashboard</Link>
            </div>
            <div className="bg-red-500 text-white py-3 px-5 rounded-sm">
                <Link to="register">Go to register</Link>
            </div>
        </div>
     );
}

export default Home;
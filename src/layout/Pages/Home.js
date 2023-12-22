import { Link } from "react-router-dom";

function Home() {
    return ( 
        <div className="h-screen flex justify-center items-center">
            <div className="bg-red-500 text-white py-3 px-5 rounded-sm">
                <Link to="user">Go to dashboard</Link>
            </div>
        </div>
     );
}

export default Home;
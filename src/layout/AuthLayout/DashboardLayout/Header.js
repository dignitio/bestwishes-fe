import userPix from "./images/userPix.png"

function Header() {
    return ( 
        <div className="bg-white flex justify-between items-center py-6 px-4">
            <div>
                <h3 className="font-medium text-xl -mb-2">Hello Eni!</h3>
                <p className="font-light text-sm inline">Welcome to your Dashboard!</p>
                <span className="text-xl">👋</span>
            </div>
            <button className="border border-gray-200 bg-gray-50 rounded-sm py-2 px-2 flex items-center w-1/4">
                {}
                <span className="px-2">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20Z" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M18.9299 20.6898C19.4599 22.2898 20.6699 22.4498 21.5999 21.0498C22.4499 19.7698 21.8899 18.7198 20.3499 18.7198C19.2099 18.7098 18.5699 19.5998 18.9299 20.6898Z" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </span>
                <span>
                    <input type="text" placeholder="search" className="outline-0 bg-transparent text-sm"/>
                </span>
            </button>
            <div className="flex items-center text-sm">
                <button className="mx-6">
                    <span className="bg-red-500 px-5 py-2 rounded-sm text-white hover:bg-red-600">+ Create Card</span>
                </button>
                <button className="mx-6">
                    <span className="bg-red-500 px-5 py-2 rounded-sm text-white hover:bg-red-600">Create Tribute +</span>
                </button>
                <button className="mx-4 hover:bg-red-600 hover:bg-gray-100 rounded-xl p-2">
                    {}
                    <span>
                           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 6.43994V9.76994" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round"/>
                                <path d="M12.0199 2C8.3399 2 5.3599 4.98 5.3599 8.66V10.76C5.3599 11.44 5.0799 12.46 4.7299 13.04L3.4599 15.16C2.6799 16.47 3.2199 17.93 4.6599 18.41C9.4399 20 14.6099 20 19.3899 18.41C20.7399 17.96 21.3199 16.38 20.5899 15.16L19.3199 13.04C18.9699 12.46 18.6899 11.43 18.6899 10.76V8.66C18.6799 5 15.6799 2 12.0199 2Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round"/>
                                <path d="M15.3299 18.8201C15.3299 20.6501 13.8299 22.1501 11.9999 22.1501C11.0899 22.1501 10.2499 21.7701 9.64992 21.1701C9.04992 20.5701 8.66992 19.7301 8.66992 18.8201" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>
                    </span>
                </button>
                <div className="mx-4 flex items-center">
                    <img src={userPix} alt="userPix" className="w-10"/>
                    <span  className="ml-4 hover:bg-gray-100 rounded-md p-2">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.2797 5.9668L8.93306 10.3135C8.41973 10.8268 7.57973 10.8268 7.06639 10.3135L2.71973 5.9668" stroke="#1E1E1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </span>
                </div>
            </div>
        </div>
     );
}

export default Header;
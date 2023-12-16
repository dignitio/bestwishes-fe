import logo from "./images/logo.png"

function Sidebar() {
    return ( 
        <div className="bg-white h-screen flex flex-col items-center py-4">
            <div className="mt-4 mb-20">
                <img src={logo} alt="logo"/>
            </div>

            <div className="text-base">
                <div className="mb-3">
                    <button className="flex items-end py-2 px-12">
                        <span className="mr-2">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 10H7C9 10 10 9 10 7V5C10 3 9 2 7 2H5C3 2 2 3 2 5V7C2 9 3 10 5 10Z" stroke="#1E1B1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z" stroke="#1E1B1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M17 22H19C21 22 22 21 22 19V17C22 15 21 14 19 14H17C15 14 14 15 14 17V19C14 21 15 22 17 22Z" stroke="#1E1B1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z" stroke="#1E1B1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        </span>
                        <span className="tracking-tight">Dashboard</span>
                    </button>
                </div>
                <div className="mb-3">
                    <button className="flex py-2 px-12">
                        <span className="mr-2">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.01 2.92007L18.91 5.54007C20.61 6.29007 20.61 7.53007 18.91 8.28007L13.01 10.9001C12.34 11.2001 11.24 11.2001 10.57 10.9001L4.67002 8.28007C2.97002 7.53007 2.97002 6.29007 4.67002 5.54007L10.57 2.92007C11.24 2.62007 12.34 2.62007 13.01 2.92007Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M3 11C3 11.84 3.63 12.81 4.4 13.15L11.19 16.17C11.71 16.4 12.3 16.4 12.81 16.17L19.6 13.15C20.37 12.81 21 11.84 21 11" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M3 16C3 16.93 3.55 17.77 4.4 18.15L11.19 21.17C11.71 21.4 12.3 21.4 12.81 21.17L19.6 18.15C20.45 17.77 21 16.93 21 16" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        </span>
                        <span className="tracking-tight">Tribute</span>
                    </button>
                </div>
                <div className="mb-3">
                    <button className="flex cursor-pointer py-2 px-12">
                        <span className="mr-2">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.2599 3.59997L5.04985 12.29C4.73985 12.62 4.43985 13.27 4.37985 13.72L4.00985 16.96C3.87985 18.13 4.71985 18.93 5.87985 18.73L9.09985 18.18C9.54985 18.1 10.1799 17.77 10.4899 17.43L18.6999 8.73997C20.1199 7.23997 20.7599 5.52997 18.5499 3.43997C16.3499 1.36997 14.6799 2.09997 13.2599 3.59997Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M11.8901 5.05005C12.3201 7.81005 14.5601 9.92005 17.3401 10.2" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M3 22H21" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        </span>
                        <span className="tracking-tight">Create Wish Card</span>
                    </button>
                </div>
                <div className="mb-3">
                    <button className="flex cursor-pointer py-2 px-12">
                        <span className="mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-gear" viewBox="0 0 16 16">
                                <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
                                <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
                            </svg>
                        </span>
                        <span className="tracking-tight">Settings</span>
                    </button>
                </div>
                <div className="mb-3">
                    <button className="flex cursor-pointer py-2 px-12">
                        <span className="mr-2">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.91992 20.2799L6.68993 21.6499C6.91993 21.8799 7.42992 21.9898 7.77992 21.9898H9.94992C10.6399 21.9898 11.3799 21.4799 11.5499 20.7899L12.9199 16.6198C13.2099 15.8198 12.6899 15.1299 11.8299 15.1299H9.53992C9.19992 15.1299 8.90992 14.8398 8.96992 14.4398L9.25993 12.6098C9.36993 12.0998 9.02992 11.5198 8.51992 11.3498C8.05992 11.1798 7.48993 11.4099 7.25993 11.7499L4.91992 15.2398" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10"/>
                            <path d="M2 20.2799V14.6799C2 13.8799 2.34 13.5898 3.14 13.5898H3.71C4.51 13.5898 4.85 13.8799 4.85 14.6799V20.2799C4.85 21.0799 4.51 21.3699 3.71 21.3699H3.14C2.34 21.3699 2 21.0899 2 20.2799Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M19.0798 3.71997L17.3098 2.34998C17.0798 2.11998 16.5698 2.01001 16.2198 2.01001H14.0498C13.3598 2.01001 12.6198 2.51996 12.4498 3.20996L11.0798 7.38C10.7898 8.18 11.3098 8.87 12.1698 8.87H14.4598C14.7998 8.87 15.0898 9.16006 15.0298 9.56006L14.7398 11.39C14.6298 11.9 14.9698 12.48 15.4798 12.65C15.9398 12.82 16.5098 12.59 16.7398 12.25L19.0798 8.76001" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10"/>
                            <path d="M21.9999 3.71985V9.31982C21.9999 10.1198 21.6599 10.4099 20.8599 10.4099H20.2899C19.4899 10.4099 19.1499 10.1198 19.1499 9.31982V3.71985C19.1499 2.91985 19.4899 2.62988 20.2899 2.62988H20.8599C21.6599 2.62988 21.9999 2.90985 21.9999 3.71985Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        </span>
                        <span className="tracking-tight">Support</span>
                    </button>
                </div>
                <div className="mb-3">
                    <button className="flex cursor-pointer py-2 px-12">
                        <span className="mr-2">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.6802 14.62L14.2402 12.06L11.6802 9.5" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M4 12.0601H14.17" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 4C16.42 4 20 7 20 12C20 17 16.42 20 12 20" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        </span>
                        <span className="tracking-tight">Logout</span>
                    </button>
                </div>
            </div>
        </div>
     );
}

export default Sidebar;
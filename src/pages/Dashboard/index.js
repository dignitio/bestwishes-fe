import { Link } from "react-router-dom";
import userDetails from "layout/Lists/userDetails";
import activities from "layout/Lists/activities";
import { ReactComponent as XCircleIcon } from "../../assets/icons/Xcircle.svg"
import { ReactComponent as SubtractIcon } from "../../assets/icons/Subtract.svg"
import { ReactComponent as SwitchIcon } from "../../assets/icons/switch.svg"
import { ReactComponent as SendIcon } from "../../assets/icons/send.svg"
import { ReactComponent as TrashIcon } from "../../assets/icons/trash.svg"
import { ReactComponent as CircleIcon } from "../../assets/icons/circle.svg"


function Dashboard() {
    return ( 
        <div className="pt-8">
            <div className="outline outline-1 outline-red-400 rounded-md flex justify-between bg-red-100 mx-8 py-3.5 px-5">
                <div className="flex items-center">
                    <SubtractIcon />
                    <p className="pl-3 pt-1 text-sm">Please finalise your profile verification to be eligible to receive gifts from well-wishers</p>
                </div>
                <div className="flex items-center">
                    <Link to="setting">
                        <span className="bg-red-500 hover:bg-red-600 text-white rounded px-4 py-2 mr-6 text-xs">Complete profile</span>
                    </Link>
                   <span>
                        <XCircleIcon />
                   </span>
                </div>  
            </div>

            <div className="flex justify-between mt-7 mx-8">
                <div className="bg-white py-5 px-5 w-1/3 rounded-md">
                    <p className="text-sm pb-3 tracking-tight text-sky-700">Total Tributes</p>
                    <h3 className=" font-medium text-2xl">2</h3>
                </div>
                <div className="bg-white py-5 px-5 w-1/3 mx-12 rounded-md">
                    <p className="text-sm pb-3 tracking-tight text-sky-700">Active Tributes</p>
                    <h3 className=" font-medium text-2xl">1</h3>
                </div>
                <div className="bg-white py-5 px-5 w-1/3 rounded-md">
                    <p className="text-sm pb-3 tracking-tight text-sky-700">Total Gifts Received</p>
                    <h3 className="text-sky-600 font-medium text-2xl">₦126,997.90</h3>
                </div>
            </div>

            <div className="flex justify-between mx-8"> 
                <div className="mt-9 mr-16 w-9/12">
                    <p className="tracking-tight pb-2 text-lg pl-2">Your Active Tributes</p>

                    <div className="bg-white rounded-xl px-4 pt-1 pb-6">
                       { userDetails.map(user => (
                            <div className="bg-gray-50 my-6 flex items-center py-5 px-3.5 rounded-lg">
                                <div className="w-36 mr-6">
                                    <img src={user.photoSRC} alt={user.photoAlt} className="rounded-lg" />
                                </div>
                                <div className="w-full">
                                    <div className="flex items-center justify-between mr-3">
                                        <div className="text-lg flex">
                                            <h5 className="mb-1.5">{user.fullName} ||</h5>
                                            <p className="text-sky-600 pl-1.5">{user.nameLink}</p>
                                        </div>
                                        <SwitchIcon className="mb-1"/>
                                    </div> 
                                    <div className="text-gray-400 text-sm">
                                        <p className="">Tribute type: {user.tributeType}</p> 
                                        <p className="py-1">{user.createdDate}</p>
                                        <div className="flex justify-between items-center">
                                            <p className="">Contribution Count: {user.count}</p>
                                            <div className="flex mr-3">
                                                <SendIcon />
                                                <TrashIcon  className="ml-5"/>
                                            </div>
                                        </div> 
                                    </div> 
                                </div>
                            </div>
                       ))}
                    </div>
                </div>
                <div className="mt-9 ">
                    <p className="tracking-tight pb-2 text-lg pl-2">Recent Activities</p>
                    <div className="bg-white pt-1 pb-1 px-4 rounded-xl w-96">
                            { activities.map(activity => (
                                <div className="flex my-6">
                                    <div>
                                        <CircleIcon />
                                    </div>
                                    <div className="pl-4">
                                        <p className="pb-1.5 leading-tight text-sm">{activity.title}</p>
                                        <p className="text-gray-300 tracking-tight text-xs">{activity.createdDate}</p>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
     );
     
}

export default Dashboard;
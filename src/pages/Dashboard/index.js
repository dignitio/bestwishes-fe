import { Link } from "react-router-dom";
import userDetails from "layout/Lists/userDetails";
import activities from "layout/Lists/activities";
// import Button from "components/Button";
import { ReactComponent as XCircleIcon } from "../../assets/icons/Xcircle.svg";
import { ReactComponent as SubtractIcon } from "../../assets/icons/Subtract.svg";
import { ReactComponent as SwitchIcon } from "../../assets/icons/switch.svg";
import { ReactComponent as SendIcon } from "../../assets/icons/send.svg";
import { ReactComponent as TrashIcon } from "../../assets/icons/trash.svg";
import { ReactComponent as CircleIcon } from "../../assets/icons/circle.svg";

function Dashboard() {

  return (
    <>
      <div className="pt-8 max-md:pt-6 max-lg:mb-5">
        <div className="outline outline-1 outline-red-400 rounded-md flex max-sm:block justify-between bg-red-100 mx-8 max-sm:mx-4 max-md:py-3 py-3.5 px-5 max-sm:px-2 max-sm:py-2">
          <div className="flex items-center max-sm:items-start">
            <SubtractIcon className="max-sm:w-6 max-sm:mt-1 max-sm:h-6 max-md:w-8 max-md:h-7 max-lg:w-6 max-lg:h-6" />
            <p className="pl-3 max-sm:pl-2 pt-1 max-md:pt-0.5 text-sm max-lg:text-base max-lg:w-96">
              Please finalise your profile verification to be eligible to receive gifts from
              well-wishers
            </p>
          </div>
          <div className="flex items-center max-sm:ml-7 max-sm:mt-4 max-sm:mb-2">
            <Link to="settings">
              <span className="bg-red-500 hover:bg-red-500 text-white rounded px-4 py-2 mr-6 text-xs max-md:text-xs max-lg:text-sm max-md:px-2">
                Complete profile
              </span>
            </Link>
            <span>
              <XCircleIcon className="max-md:w-5 max-md:h-5 max-sm:ml-32 max-sm:-mt-6"/>
            </span>
          </div>
        </div>

        <div className="flex justify-between mt-7 mx-8 max-sm:mx-4 max-sm:block max-lg:grid max-lg:grid-cols-2 max-lg:gap-y-7 max-lg:gap-x-6">
          <div className="bg-white py-5 px-5 w-1/3 max-lg:w-full rounded-md">
            <p className="text-sm max-md:text-sm max-lg:text-base pb-3 tracking-tight text-sky-700">Total Tributes</p>
            <h3 className=" font-medium text-2xl max-md:text-2xl max-lg:text-3xl">2</h3>
          </div>
          <div className="bg-white py-5 px-5 w-1/3 max-lg:w-full max-sm:my-4 max-lg:mx-0 mx-12 rounded-md"> 
            <p className="text-sm max-md:text-sm max-lg:text-base pb-3 tracking-tight text-sky-700">Active Tributes</p>
            <h3 className=" font-medium text-2xl max-md:text-2xl max-lg:text-3xl">1</h3>
          </div>
          <div className="bg-white py-5 px-5 w-1/3 max-lg:w-full max-lg:col-span-2 rounded-md">
            <p className="text-sm max-md:text-sm max-lg:text-base pb-3 tracking-tight text-sky-700">Total Gifts Received</p>
            <h3 className="text-sky-600 font-medium text-2xl max-md:text-2xl max-lg:text-3xl">₦126,997.90</h3>
          </div>
        </div>

        <div className="flex justify-between mx-8 max-lg:mt-16 max-sm:mx-4 max-lg:block">
          <div className="mt-9 mr-16 w-9/12 max-lg:w-full">
            <p className="tracking-tight pb-2 text-lg max-md:text-lg max-lg:text-xl pl-2">Your Active Tributes</p>

            <div className="bg-white rounded-xl px-4 max-sm:px-1 max-md:px-2.5 pt-1 pb-6 max-sm:pb-2">
              {userDetails.map((user) => (
                <div className="bg-gray-50 my-6 max-lg:my-3 max-lg:mb-4 flex max-sm:block items-center py-5 px-3.5 max-sm:px-2 rounded-lg">
                  <div className="w-36 max-sm:w-full mr-6">
                    <img src={user.photoSRC} alt={user.photoAlt} className="rounded-lg max-sm:h-52 max-sm:w-full max-sm:object-cover" />
                  </div>
                  <div className="w-full max-sm:py-2 max-lg:py-4">
                    <div className="flex items-center justify-between max-sm:items-end max-sm:mr-2 mr-3">
                      <div className="text-xl max-md:text-base flex max-sm:mt-3 max-sm:items-center">
                        <h5 className="mb-1.5">{user.fullName} ||</h5>
                        <p className="text-sky-600 pl-1.5 max-sm:pl-0.5 max-sm:text-sm max-sm:mb-1">{user.nameLink}</p>
                      </div>
                      <SwitchIcon className="mb-1 max-sm:w-7 max-sm:mb-2 max-lg:w-8 max-lg:h-8" />
                    </div>
                    <div className="text-gray-500 max-md:text-sm">
                      <p className="">Tribute type: {user.tributeType}</p>
                      <p className="py-1 max-lg:py-2">{user.createdDate}</p>
                      <div className="flex justify-between items-center">
                        <p className="">Contribution Count: {user.count}</p>
                        <div className="flex mr-3">
                          <SendIcon />
                          <TrashIcon className="ml-5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-9 max-lg:mt-16">
            <p className="tracking-tight pb-2 text-xl max-md:text-lg pl-2">Recent Activities</p>
            <div className="bg-white pt-1 pb-1 px-4 max-sm:px-5 rounded-xl w-96 max-lg:w-full">
              {activities.map((activity) => (
                <div className="flex max-lg:items-center my-6 max-md:mb-8 max-lg:mb-10">
                  <div>
                    <CircleIcon className=" max-sm:w-[45px] max-sm:h-[45px] max-lg:w-16 max-lg:h-16"/>
                  </div>
                  <div className="pl-4">
                    <p className="pb-1.5 max-md:pb-1 max-lg:pb-0.5 leading-tight text-sm max-md:text-base max-lg:text-lg">{activity.title}</p>
                    <p className="text-gray-300 tracking-tight text-xs  max-md:text-sm max-lg:text-base">{activity.createdDate}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;

import userDetails from "layout/Lists/userDetails";
import activities from "layout/Lists/activities";
// import Button from "components/Button";
import SwitchButton from "components/Switch";

import NotificationBanner from "components/NotificationBanner";
import { ReactComponent as SendIcon } from "../../assets/icons/send.svg";
import { ReactComponent as TrashIcon } from "../../assets/icons/trash.svg";
import { ReactComponent as CircleIcon } from "../../assets/icons/circle.svg";
import { ReactComponent as SubtractIcon } from "../../assets/icons/Subtract.svg";

function Dashboard() {
  return (
    <>
      <div className="pt-8 max-md:pt-6 max-lg:mb-5">
        <div className="py-4  lg:py-6 lg:px-12">
          <NotificationBanner
            text="Please finalise your profile verification to be eligible to receive gifts from
              well-wishers"
            cta="Complete profile"
            mode="red"
            ctaLink="settings"
            icon={<SubtractIcon />}
          />
        </div>
        <div className="flex justify-between mt-7 mx-8 max-sm:mx-4 max-sm:block max-lg:grid max-lg:grid-cols-2 max-lg:gap-y-7 max-lg:gap-x-6">
          <div className="bg-white py-5 px-5 w-1/3 max-lg:w-full rounded-md">
            <p className="text-lg pb-1.5 text-sky-700">Total Tributes</p>
            <h3 className=" font-medium text-3xl max-lg:text-3xl">2</h3>
          </div>
          <div className="bg-white py-5 px-5 w-1/3 max-lg:w-full max-sm:my-4 max-lg:mx-0 mx-12 rounded-md">
            <p className="text-lg pb-1.5 text-sky-700">Active Tributes</p>
            <h3 className=" font-medium text-3xl max-lg:text-3xl">1</h3>
          </div>
          <div className="bg-white py-5 px-5 w-1/3 max-lg:w-full max-lg:col-span-2 rounded-md">
            <p className="text-lg pb-1.5 text-sky-700">Total Gifts Received</p>
            <h3 className="text-sky-600 font-medium text-3xl max-lg:text-3xl">₦126,997.90</h3>
          </div>
        </div>

        <div className="flex justify-between mx-8 max-lg:mt-16 max-sm:mx-4 max-lg:block">
          <div className="mt-9 mr-16 w-9/12 max-lg:w-full">
            <p className="tracking-tight pb-2 text-xl max-md:text-xl max-lg:text-xl pl-2">
              Your Active Tributes
            </p>

            <div className="bg-white rounded-xl px-4 max-sm:px-1 max-md:px-2.5 pt-1 pb-6 max-sm:pb-2">
              {userDetails.map((user) => (
                <div className="bg-gray-50 my-5 max-lg:my-3 max-lg:mb-4 flex max-sm:block items-center py-5 px-3.5 max-sm:px-2 rounded-lg">
                  <div className="w-40 max-sm:w-full mr-6">
                    <img
                      src={user.photoSRC}
                      alt={user.photoAlt}
                      className="rounded-lg max-sm:h-60 max-sm:w-full max-sm:object-cover"
                    />
                  </div>
                  <div className="w-full max-sm:py-2 max-lg:py-4">
                    <div className="flex items-center justify-between max-sm:items-end max-sm:mr-2 mr-3">
                      <div className="text-xl max-md:text-lg flex max-sm:mt-3 max-sm:items-center">
                        <h5 className="mb-1.5">{user.fullName} ||</h5>
                        <p className="text-sky-600 pl-3.5 max-sm:pl-0.5 max-sm:mb-1 max-sm:text-base">
                          {user.nameLink}
                        </p>
                      </div>
                      <div className="mb-2">
                        <SwitchButton />
                      </div>
                    </div>
                    <div className="text-gray-500 text-base">
                      <p className="">Tribute type: {user.tributeType}</p>
                      <p className="py-1 max-lg:py-2">{user.createdDate}</p>
                      <div className="flex justify-between items-center">
                        <p className="">Contribution Count: {user.count}</p>
                        <div className="flex mr-3">
                          <SendIcon />
                          <TrashIcon className="ml-7" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-9 max-lg:mt-16">
            <p className="tracking-tight pb-2 text-xl max-md:text-xl pl-2">Recent Activities</p>
            <div className="bg-white pt-1 pb-1 px-4 max-sm:px-5 rounded-xl w-96 max-lg:w-full">
              {activities.map((activity) => (
                <div className="flex max-lg:items-center my-6 max-md:mb-8 max-lg:mb-10">
                  <div>
                    <CircleIcon className=" max-sm:w-[50px] max-sm:h-[50px] max-lg:w-16 max-lg:h-16" />
                  </div>
                  <div className="pl-4">
                    <p className="pb-1.5 max-md:pb-1 max-lg:pb-0.5 leading-tight text-base max-md:text-base max-lg:text-lg">
                      {activity.title}
                    </p>
                    <p className="text-gray-300 tracking-tight text-sm  max-md:text-sm max-lg:text-base">
                      {activity.createdDate}
                    </p>
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

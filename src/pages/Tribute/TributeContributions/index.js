import { useState } from "react";
import contributions from "layout/Lists/contributions";
import { ReactComponent as TrashIcon } from "../../../assets/icons/trash.svg";

function TributeContributions() {
  const [isHovered, setIsHovered] = useState(false);
  const showDeleteIcon = (id) => {
    setIsHovered(true);
    contributions[id - 1].showDeleteIcon = true;
  };
  const hideDeleteIcon = (id) => {
    setIsHovered(false);
    contributions[id - 1].showDeleteIcon = false;
  };

  return (
    <div className="-mt-6 mb-6 h-[30em] max-lg:h-[33em] overflow-y-scroll max-sm:w-80 max-sm:mx-auto mt-2">
      <h3 className="text-center font-bold mr-12 mb-10 absolute top-5 left-0 right-0 text-lg max-sm:text-sm">
        Contributions
      </h3>
      {contributions.map((contribution) => (
        <div
          className="flex justify-between mr-3"
          onMouseEnter={() => showDeleteIcon(contribution.id)}
          onMouseLeave={() => hideDeleteIcon(contribution.id)}
          key={contribution.id}
        >
          <div className="flex mb-8 max-sm:mb-8 max-lg:mb-10">
            <p className="bg-gray-200 w-14 h-14 max-sm:w-10 max-sm:h-10 max-lg:w-14 max-lg:h-14 rounded-full flex items-center max-sm:pt-2.5 text-center justify-center -mt-0.5 font-semibold mr-3 tracking-tighter text-base max-sm:text-sm max-lg:text-lg max-sm:block">
              {contribution.initial}
            </p>
            <div className="hover:text-sky-700 cursor-pointer">
              <h4 className="text-base max-sm:text-base max-lg:text-lg font-semibold">
                {contribution.fullName}
              </h4>
              <p className="text-sm max-sm:text-sm max-lg:text-base w-96 max-sm:w-60 max-lg:w-96 leading-snug">
                {contribution.description}
              </p>
            </div>
          </div>
          {contribution.showDeleteIcon && (
            <TrashIcon
              className={isHovered ? "w-6 h-7 max-lg:w-7 max-lg:h-7 cursor-pointer" : "w-4 hidden"}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default TributeContributions;

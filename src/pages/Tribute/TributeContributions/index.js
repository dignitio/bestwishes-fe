import { useState } from "react";
import contributions from "layout/Lists/contributions";
import { ReactComponent as TrashIcon } from "../../../assets/icons/trash.svg"


function TributeContributions() {
    const [isHovered, setIsHovered] = useState(false)
    const showDeleteIcon = (id) => {
        setIsHovered(true)
        contributions[id-1].showDeleteIcon = true
    }
    const hideDeleteIcon = (id) => {
        setIsHovered(false)
        contributions[id-1].showDeleteIcon = false
    }

    return ( 
        <div className="mb-6 h-[35em] max-lg:h-[30em] overflow-y-sroll max-sm:w-80 max-sm:mx-auto mt-2">
            <h3 className="text-center font-bold absolute top-5 left-0 right-0 text-xl max-md:text-lg">Contributions</h3>
            { contributions.map(contribution => (
                <div className="flex justify-between mr-3"
                onMouseEnter={() => showDeleteIcon(contribution.id)} onMouseLeave={() => hideDeleteIcon(contribution.id)} key={contribution.id}>
                    <div className="flex mb-10 max-md:mb-7 max-md:-ml-4">
                        <p className="bg-gray-200 w-20 h-20 max-md:w-14 max-md:h-14 rounded-full flex items-center max-md:pt-3.5 text-center justify-center -mt-0.5 font-semibold mr-3 tracking-tighter text-xl max-md:text-lg  max-sm:block">{contribution.initial}</p>
                        <div className="hover:text-sky-700 cursor-pointer">
                            <h4 className="text-xl max-md:text-lg font-semibold">{contribution.fullName}</h4>
                            <p className="text-lg max-sm:text-base max-lg:text-base w-[32.5em] max-sm:w-56 leading-snug">{contribution.description}</p>
                        </div>
                    </div>
                    {contribution.showDeleteIcon && <TrashIcon className={isHovered ? "w-6 h-7 max-md:w-5 max-md:h-6 cursor-pointer" : "w-4 hidden"}/>}
                </div>
            ))};
        </div>
     );
}

export default TributeContributions;

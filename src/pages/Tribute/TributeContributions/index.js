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
        <div className="-mt-6 mb-6 h-[30rem] overflow-y-sroll w-10/12">
            <h3 className="text-center font-bold mr-12 mb-10">Contributions</h3>
            { contributions.map(contribution => (
                <div className="flex justify-between mr-3 my-8"
                onMouseEnter={() => showDeleteIcon(contribution.id)} onMouseLeave={() => hideDeleteIcon(contribution.id)} key={contribution.id}>
                    <div className="flex">
                        <p className="bg-gray-200 w-8 h-8 -mt-1 rounded-full flex items-center justify-center font-semibold mr-3 tracking-tighter text-[13px] max-sm:block">{contribution.initial}</p>
                        <div className={contribution.read ? "text-sky-700" : "text-black"}>
                            <h4 className="text-sm mb-1 font-semibold">{contribution.fullName}</h4>
                            <p className="text-xs max-w-[315px] leading-snug">{contribution.description}</p>
                        </div>
                    </div>
                    {contribution.showDeleteIcon && <TrashIcon className={isHovered ? "w-3.5 cursor-pointer" : "w-3.5 hidden"}/>}
                </div>
            ))}
           
        </div>
     );
}

export default TributeContributions;

/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-no-comment-textnodes */
import { useState } from "react";
import { Link,} from "react-router-dom";
import Modal from "components/Modal";
import Dropdown from "components/Dropdown";
import SwitchButton from "components/Switch";
import tributeDetails from "layout/Lists/tributeDetails";
import DeleteTribute from "./DeleteTribute";
import DuplicateTribute from "./DuplicateTribute";
import TributeContributions from "./TributeContributions";
import { ReactComponent as FilterIcon } from "../../assets/icons/filter.svg"
import { ReactComponent as VerticalDot } from "../../assets/icons/dotsVertical.svg"
import { ReactComponent as TrashIcon } from "../../assets/icons/trash.svg"
import { ReactComponent as EditIcon } from "../../assets/icons/edit.svg"
import { ReactComponent as EyeIcon } from "../../assets/icons/eye.svg"
import { ReactComponent as ShareIcon } from "../../assets/icons/link.svg"
import { ReactComponent as DuplicateIcon } from "../../assets/icons/simcard-2.svg"
import { ReactComponent as CopyIcon } from "../../assets/icons/size.svg"


function Tribute() {  
    const [deleteModal, setDeleteModal] = useState(false);
    const [duplicateModal, setDuplicateModal] = useState(false);
    const [contributionModal, setContributionModal] = useState(false);


  return ( 
    <div className="pt-2">
        <div className="flex items-center text-base text-gray-500 justify-end my-5 max-md:mt-3 pr-12 max-lg:pr-6 p-6">
            <FilterIcon />
            <p className="pl-1.5">Filter by: All</p>
        </div>

        <div className="2xl:grid-cols-3 xl:grid-cols-2 max-lg:grid-cols-2 md:grid max-sm:block mt-9 mx-8 max-lg:mx-0 max-lg:w-full">
            {tributeDetails.map(tribute => (
                <div className="bg-white mb-8 py-4 max-md:pt-5 px-3 max-lg:mx-4 mr-12 max-h-68 text-lg rounded-xl" key={tribute.id}>
                    <div className="flex items-center justify-between">
                        <p className="">{tribute.fullName} || {tribute.tributeType}</p>
                        {tribute.draft ? <p className="text-slate-400 text-base max-md:text-sm tracking-tight">Draft</p> :
                            <div><SwitchButton /></div>
                        }
                    </div>
                    <div className="bg-gray-300 my-3 rounded-md xl:min-w-52 xl:min-h-52">
                        <Link
                            to={`/dashboard/tribute/${tribute.id}/edit`}
                            key={tribute.id}
                        >
                            <img src={tribute.photoSRC} alt={tribute.photoAlt} className="w-full object-cover my-3 h-52 xl:min-h-52 xl:min-w-60 rounded-lg"/>
                        </Link>
                    </div>
                    <div className="flex items-center justify-between">
                        <p>5th Nov. 2023</p>
                        <Dropdown heading={ <VerticalDot className="cursor-pointer hover:bg-gray-100 rounded-lg mt-1.5"/>}>
                            <div className="text-lg tracking-tighter">
                                <div className="flex items-center py-1.5 max-sm:py-1 cursor-pointer hover:bg-gray-100 pl-2 max-sm:pl-3" onClick={() => setDeleteModal(true)}>
                                    <TrashIcon className="w-5 max-sm:w-5 max-lg:w-3.5 mb-1 mx-2 max-sm:ml-1 max-sm:mb-2 max-lg:my-1 max-sm:mr-1 max-lg:mr-1.5"/>
                                    <p>Delete Tribute</p>
                                </div>
                                <div className="flex items-center py-1.5 max-sm:py-1  cursor-pointer hover:bg-gray-100 pl-2 max-sm:pl-3">
                                    <EditIcon className="w-5 max-sm:w-4 max-lg:w-3.5 mb-1 mx-2 max-sm:ml-1 max-sm:mr-2 max-lg:mr-1.5" />
                                    <Link to={`/dashboard/tribute/${tribute.id}/edit`}>Edit Tribute</Link>
                                </div>
                                <div className="flex items-center py-1.5  cursor-pointer hover:bg-gray-100 pl-2 max-sm:pl-3" onClick={() => setContributionModal(true)}>
                                    <EyeIcon className="w-5 max-sm:w-4 max-lg:w-3.5 mb-0.5 mx-2 max-sm:ml-1 max-sm:mr-2 max-lg:mr-1.5" />
                                    <p>View Contribution</p>
                                </div>
                                <div className="flex items-center py-1.5  cursor-pointer hover:bg-gray-100 pl-2 max-sm:pl-3">
                                    <ShareIcon className="w-5 max-sm:w-4 max-lg:w-3.5 mb-0.5 mx-2 max-sm:ml-1 max-sm:mr-2 max-lg:mr-1.5" />
                                    <p>Share Tribute</p>
                                </div>
                                <div className="flex items-center py-1.5  cursor-pointer hover:bg-gray-100 pl-2 max-sm:pl-3" onClick={() => setDuplicateModal(true)}>
                                    <DuplicateIcon className="w-5 max-sm:w-4 max-lg:w-3.5 mb-0.5 mx-2 max-sm:ml-1 max-sm:mr-2 max-lg:mr-1.5" />
                                    <p>Duplicate</p>
                                </div>
                                <div className="flex items-center py-1.5 cursor-pointer hover:bg-gray-100 pl-2 max-sm:pl-3">
                                    <CopyIcon className="w-5 max-sm:w-4 max-lg:w-3.5 mx-2 max-sm:ml-1 max-sm:mr-2 max-lg:mr-1.5" />
                                    <p>Copy Tribute link</p>
                                </div>
                            </div>
                        </Dropdown>
                    </div>
                </div>
            ))}
        </div>
        <Modal width={700} open={deleteModal} onClose={() => setDeleteModal(!deleteModal) } >
            <DeleteTribute/>
        </Modal>
        <Modal width={700} open={duplicateModal} onClose={() => setDuplicateModal(!duplicateModal) }>
            <DuplicateTribute />
        </Modal>
        <Modal width={800} open={contributionModal} onClose={() => setContributionModal(!contributionModal)}>
            <TributeContributions />
        </Modal>

    </div>
   );
}

export default Tribute;

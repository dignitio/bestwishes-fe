import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "components/Modal";
import Dropdown from "components/Dropdown";
import tributeDetails from "layout/Lists/tributeDetails";
import DeleteTribute from "./DeleteTribute";
import DuplicateTribute from "./DuplicateTribute";
import TributeContributions from "./TributeContributions";
import { ReactComponent as XCircleIcon } from "../../assets/icons/Xcircle.svg";
import { ReactComponent as SubtractIcon } from "../../assets/icons/Subtract.svg";
import { ReactComponent as FilterIcon } from "../../assets/icons/filter.svg";
import { ReactComponent as VerticalDot } from "../../assets/icons/dotsVertical.svg";
import { ReactComponent as TrashIcon } from "../../assets/icons/trash.svg";
import { ReactComponent as EditIcon } from "../../assets/icons/edit.svg";
import { ReactComponent as EyeIcon } from "../../assets/icons/eye.svg";
import { ReactComponent as ShareIcon } from "../../assets/icons/link.svg";
import { ReactComponent as DuplicateIcon } from "../../assets/icons/simcard-2.svg";
import { ReactComponent as CopyIcon } from "../../assets/icons/size.svg";

function Tribute() {
  const [modeValue, setModeValue] = useState();
  const switchMode = (tributeId) => {
    tributeDetails[tributeId - 1].publishedValue = !tributeDetails[tributeId - 1].publishedValue;
    setModeValue((prevMode) => !prevMode);
  };

  const [deleteModal, setDeleteModal] = useState(false);
  const [duplicateModal, setDuplicateModal] = useState(false);
  const [contributionModal, setContributionModal] = useState(false);

  return (
    <div className="pt-2">
      <div className="flex items-center text-xs text-gray-500 justify-end my-6 pr-12 max-lg:pr-6">
        <FilterIcon />
        <p className="pl-1">Filter by: All</p>
      </div>

      <div className="grid-cols-3 max-lg:grid-cols-2 max-w-screen-xl grid max-sm:block mt-9 mx-8 max-lg:mx-0 max-lg:w-full">
        {tributeDetails.map((tribute) => (
          <div
            className="bg-white mb-8 py-3.5 px-4 max-lg:mx-4 mr-12 max-h-68 lg:text-xs text-sm rounded-xl"
            key={tribute.id}
          >
            <div className="flex items-center justify-between">
              <p className="">
                {tribute.fullName} || {tribute.tributeType}
              </p>
              {tribute.draft ? (
                <p className="text-slate-400 text-xs tracking-tight">Draft</p>
              ) : (
                <div
                  className={
                    tribute.publishedValue
                      ? "text-xs bg-green-600 flex justify-end items-center h-3.5 w-7 rounded-xl"
                      : "text-xs bg-slate-500 flex justify-start h-3.5 w-7 rounded-xl"
                  }
                >
                  <p className={tribute.publishedValue ? "text-green-600" : "text-slate-500"}>.</p>
                  <button
                    type="button"
                    className="toggler--slider"
                    onClick={() => switchMode(tribute.id)}
                  >
                    <div
                      className={
                        tribute.publishedValue
                          ? "w-3 h-3 bg-white text-white rounded-3xl"
                          : "w-3 h-3 bg-white text-white rounded-3xl"
                      }
                    >
                      o
                    </div>
                  </button>
                  <p className={tribute.publishedValue ? "text-green-600" : "text-slate-500"}>.</p>
                </div>
              )}
            </div>
            <div className="bg-gray-300 my-3 rounded-md">
              <img
                src={tribute.photoSRC}
                alt={tribute.photoAlt}
                className="w-full object-cover my-3"
              />
            </div>
            <div className="flex items-center justify-between">
              <p>5th Nov. 2023</p>
              <Dropdown
                heading={<VerticalDot className="cursor-pointer hover:bg-gray-100 rounded-lg" />}
              >
                <div className="text-sm tracking-tighter">
                  <div
                    className="flex items-center my-1.5 max-sm:my-3 max-lg:my-2 cursor-pointer hover:bg-gray-100 pl-2 max-sm:pl-3"
                    onClick={() => setDeleteModal(true)}
                  >
                    <TrashIcon className="w-3 max-sm:w-4 max-lg:w-3.5 mb-0.5 max-sm:mb-1 max-lg:my-1 mr-1 max-sm:mr-2 max-lg:mr-1.5" />
                    <p>Delete Tribute</p>
                  </div>
                  <div className="flex items-center my-1.5 max-sm:my-3 max-lg:my-2 cursor-pointer hover:bg-gray-100 pl-2 max-sm:pl-3">
                    <EditIcon className="w-3 max-sm:w-4 max-lg:w-3.5 mb-1 mr-1 max-sm:mr-2 max-lg:mr-1.5" />
                    <Link to="edit">Edit Tribute</Link>
                  </div>
                  <div
                    className="flex items-center my-1.5 max-sm:my-3 max-lg:my-2 cursor-pointer hover:bg-gray-100 pl-2 max-sm:pl-3"
                    onClick={() => setContributionModal(true)}
                  >
                    <EyeIcon className="w-3 max-sm:w-4 max-lg:w-3.5 mb-0.5 mr-1 max-sm:mr-2 max-lg:mr-1.5" />
                    <p>View Contribution</p>
                  </div>
                  <div className="flex items-center my-1.5 max-sm:my-3 max-lg:my-2 cursor-pointer hover:bg-gray-100 pl-2 max-sm:pl-3">
                    <ShareIcon className="w-3 max-sm:w-4 max-lg:w-3.5 mb-0.5 mr-1 max-sm:mr-2 max-lg:mr-1.5" />
                    <p>Share Tribute</p>
                  </div>
                  <div
                    className="flex items-center my-1.5 max-sm:my-3 max-lg:my-2 cursor-pointer hover:bg-gray-100 pl-2 max-sm:pl-3"
                    onClick={() => setDuplicateModal(true)}
                  >
                    <DuplicateIcon className="w-3 max-sm:w-4 max-lg:w-3.5 mb-0.5 mr-1 max-sm:mr-2 max-lg:mr-1.5" />
                    <p>Duplicate</p>
                  </div>
                  <div className="flex items-center mt-1.5 max-sm:mt-3 cursor-pointer hover:bg-gray-100 pl-2 max-sm:pl-3">
                    <CopyIcon className="w-3 max-sm:w-4 max-lg:w-3.5 mr-1 max-sm:mr-2 max-lg:mr-1.5" />
                    <p>Copy Tribute link</p>
                  </div>
                </div>
              </Dropdown>
            </div>
          </div>
        ))}
      </div>
      <Modal width={500} open={deleteModal} onClose={() => setDeleteModal(!deleteModal)}>
        <DeleteTribute />
      </Modal>
      <Modal width={500} open={duplicateModal} onClose={() => setDuplicateModal(!duplicateModal)}>
        <DuplicateTribute />
      </Modal>
      <Modal
        width={550}
        open={contributionModal}
        onClose={() => setContributionModal(!contributionModal)}
      >
        <TributeContributions />
      </Modal>
    </div>
  );
}

export default Tribute;

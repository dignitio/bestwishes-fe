import { useState } from "react"
import { Link } from "react-router-dom"
import Modal from "components/Modal";
import DeleteWishcard from "../DeleteWishcard";
import { ReactComponent as DownloadIcon } from "../../../assets/icons/ant-download.svg"
import { ReactComponent as SendIcon } from "../../../assets/icons/send.svg"
import { ReactComponent as EditIcon } from "../../../assets/icons/pen-edit.svg"
import { ReactComponent as DeleteIcon } from "../../../assets/icons/trash.svg"
import { ReactComponent as BigImage } from "../../../assets/icons/image111.svg"


function PreviewWishcard() {

    const [deleteModal, setDeleteModal] = useState(false);

    return ( 
        <div>
            <div className="bg-white px-6 text-center">
                <div className="mt-12">
                    <div className="w-96 h-96 mx-auto">
                        <BigImage className="w-full h-full" />
                    </div>
                    {/* <div>
                        <h2 className="text-4xl italic font-serif pt-2.5">Congrats!</h2>
                        <p className="font-sans font-semibold py-1.5">JEFFREY + SANDRA</p>
                        <p className="w-40 mx-auto leading-tight text-xs">AND BEST WISHES FOR MORE HAPPINESS TOGETHER</p>
                    </div> */}
                </div>
                <div className="grid grid-cols-4 mx-auto w-8/12 mt-12 mb-20">
                    <div>
                        <div className="bg-indigo-50 hover:bg-indigo-100 cursor-pointer h-9 w-9 mb-2 flex justify-center items-center rounded-full mx-auto">
                            <DownloadIcon />
                        </div>
                        <p>Download</p>
                    </div>
                    <div>
                        <div className="bg-indigo-50 hover:bg-indigo-100 cursor-pointer h-9 w-9 mb-2 flex justify-center items-center rounded-full mx-auto">
                            <SendIcon />
                        </div>
                        <p>Share</p>
                    </div>
                    <Link
                        to={`/dashboard/wishcardLibrary/1/edit`}
                    >
                        <div className="bg-indigo-50 hover:bg-indigo-100 cursor-pointer h-9 w-9 mb-2 flex justify-center items-center rounded-full mx-auto">
                            <EditIcon />
                        </div>
                        <p>Edit</p>
                    </Link>
                    <div onClick={() => setDeleteModal(true)}>
                        <div className="bg-indigo-50 hover:bg-indigo-100 cursor-pointer h-9 w-9 mb-2 flex justify-center items-center rounded-full mx-auto">
                            <DeleteIcon />
                        </div>
                        <p>Delete</p>
                    </div>
                </div>
            </div>


            <Modal width={700} open={deleteModal} onClose={() => setDeleteModal(!deleteModal) } >
                <DeleteWishcard/>
            </Modal>
        </div>
     );
}

export default PreviewWishcard;
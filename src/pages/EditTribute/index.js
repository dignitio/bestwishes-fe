import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "components/Button";
import activities from "layout/Lists/activities";
import  uploadPix from "../../assets/images/gallery.png"
import { ReactComponent as XCircleIcon } from "../../assets/icons/Xcircle.svg"
import { ReactComponent as SubtractIcon } from "../../assets/icons/Subtract.svg"
import { ReactComponent as MusicIcon } from "../../assets/icons/music.svg"
import { ReactComponent as CircleIcon } from "../../assets/icons/circle.svg"
import { ReactComponent as LeftArrowIcon } from "../../assets/icons/left.svg"


function EditTribute() {

    const [formData, setFormData] = useState({
        headerImage: "",
        tributeType: "",
        tributeTitle: "",
        fullName: "",
        dateOfBirth: "",
        dateOfDeath: "",
        tributeBio: "Adventurous spirit with a passion for creativity and innovation. Tech enthusiast by day, nature lover by weekend. Always seeking new experiences and embracing challenges. Avid reader, aspiring chef, and lifelong learner. Living life one adventure at a time. An adventurous spirit with a passion for creativity and innovation. Tech enthusiast by day, nature lover by weekend. Always seeking new experiences and embracing challenges. Avid reader, aspiring chef, and lifelong learner. Living life one adventure at a time.",
        relationship: "",
        musicLink: "",
        publicType: "public",
        tributeKey: "",
        otherImages: []
    });

    const handleChange = (e) => {
        const { name, value, checked, type } = e.target
        setFormData(prev => {
            return {
            ...prev,
            [name]: type === "checkbox" ? checked : value
            }
        })
    }

    // const handleSubmit = () => {
    //     console.log("Registration sucessful", formData)
    // }

    return ( 
        <div className="pt-8 mb-8">
            <div className="flex items-center justify-between mb-5 mx-8 text-xs">
                <div className="flex text-sky-600">
                    <LeftArrowIcon className="mr-1  w-3.5 h-3.5" />
                    <Link to="/dashboard/tribute">Back to Tribute</Link>
                </div>
                <h4 className="font-semibold text-[13px]">Celebration of Life</h4>
                <p className="px-4 py-1 rounded-sm text-[9px] text-white bg-slate-900">Preview Tribute</p>
            </div>
            <div className="outline outline-1 outline-red-400 rounded-md flex justify-between bg-red-100 mx-8 max-md:py-3 py-3.5 px-5">
                <div className="flex items-center">
                    <SubtractIcon className="max-md:w-3.5 max-md:h-3.5" />
                    <p className="pl-3 max-md:pl-1.5 pt-1 max-md:pt-0.5 text-sm max-md:text-[10px]">
                    Please finalise your profile verification to be eligible to receive gifts from
                    well-wishers
                    </p>
                </div>
                <div className="flex items-center">
                    <Link to="settings">
                    <span className="bg-red-500 hover:bg-red-500 text-white rounded px-4 py-2 mr-6 max-md:mr-4 text-xs max-md:text-[9px] max-md:px-2">
                        Complete profile
                    </span>
                    </Link>
                    <span>
                    <XCircleIcon className="max-md:w-5 max-md:h-5"/>
                    </span>
                </div>
            </div>


            <div className="flex justify-between mt-8 overflow-none mx-8 max-md:block">
                <div className="bg-white px-6 py-10 rounded-xl w-11/12 max-md:w-full max-md:mb-8 mr-4 text-[10px]">
                    <div className="bg-gray-200 rounded-full -mt-4 mb-8 w-16 h-16 flex items-center justify-center mx-auto">
                        <img src={uploadPix} alt="upload-pix" className="w-9" />
                    </div>
                    <div className="flex justify-between my-6 placeholder:italic">
                        <div className="w-2/3 mr-3">
                            <p>Type of Tribute</p>
                            <select 
                                name="tributeType"
                                value={formData.tributeType}
                                onChange={handleChange}
                                className="border rounded-md w-full py-2 px-2 mt-0.5 outline-0 placeholder:tracking-tight text-[9px] text-gray-600">
                                <option value="" className="text-gray-400">Click here to select tribute type</option>
                                <option value="anniversary">Anniversary</option>
                                <option value="birthday">Birthday</option>
                                <option value="convocation">Convocation</option>
                                <option value="funeral">Funeral</option>
                                <option value="naming">Naming</option>
                                <option value="wedding">Wedding</option>
                            </select>
                        </div>
                        <div className="w-2/3 ml-3">
                            <p>Title of Tribute</p>
                            <input 
                                type="text" 
                                value={formData.tributeTitle}
                                onChange={(e) => handleChange(e)} 
                                name='tributeTitle'
                                placeholder="Click to enter title of tribute" 
                                className="border text-gray-600 rounded-md w-full py-2 px-2 mt-0.5 outline-0 placeholder:tracking-tight placeholder:text-[10px] placeholder:text-gray-400"/>
                        </div>
                    </div>
                    <div className="my-6">
                        <p>Full Name</p>
                        <input 
                            type="text" 
                            value={formData.fullName}
                            onChange={(e) => handleChange(e)} 
                            name='fullName'
                            placeholder="Click to enter to enter full name" 
                            className="border text-gray-600 rounded-md w-full py-2 px-2 mt-0.5 outline-0 placeholder:tracking-tight placeholder:text-[10px] placeholder:text-gray-400" />
                    </div>
                    <div className="flex justify-between my-6">
                        <div className="w-2/3 mr-3">
                            <p>Date of Birth</p>
                            <input 
                                type="date" 
                                value={formData.dateOfBirth}
                                onChange={(e) => handleChange(e)} 
                                name='dateOfBirth'
                                className="border text-gray-600 rounded-md w-full py-2 px-2 mt-0.5 outline-0 text-[9px]"/>
                        </div>
                        <div className="w-2/3 ml-3">
                            <p>Date of Death <span className="text-[8px] text-primary">(funeral only)</span></p>
                            <input 
                                type="date"
                                value={formData.dateOfDeath}
                                onChange={(e) => handleChange(e)} 
                                name='dateOfDeath'
                                className="border text-gray-600 rounded-md w-full py-2 px-2 mt-0.5 outline-0 text-[9px]"/>
                        </div>
                    </div>
                    <div>
                        <p>Bio</p>
                        <textarea 
                            value={formData.tributeBio}
                            onChange={(e) => handleChange(e)} 
                            name='tributeBio'
                            className="border text-gray-600 rounded-md w-full h-48 p-3 mt-0.5 outline-0 placeholder:tracking-tight placeholder:text-[8px] placeholder:text-slate-400 resize-none leading-normal tracking-normal" 
                            placeholder="write a bio about yourself" />
                    </div>
                    <div className="flex justify-between my-6">
                        <div className="w-2/3 mr-3">
                            <p>Please descibe your relationship</p>
                            <select 
                                name="relationship"
                                value={formData.relationship}
                                onChange={handleChange} 
                                className="border text-gray-600 rounded-md w-full py-2 px-2 mt-0.5 outline-0 placeholder:tracking-tight text-[9px]">
                                <option value="">please select</option>
                                <option value="father">Father</option>
                                <option value="mother">Mother</option>
                                <option value="brother">Brother</option>
                                <option value="sister">Sister</option>
                                <option value="cousin">Cousin</option>
                            </select>
                        </div>
                        <div className="w-2/3 ml-3">
                            <p>Add music to your tribute</p>
                            <div className="flex items-center text-gray-200 w-full pr-2">
                                <input 
                                    type="text" 
                                    value={formData.musicLink}
                                    onChange={(e) => handleChange(e)} 
                                    name='musicLink'
                                    placeholder="Add music link"  
                                    className="border text-gray-600 rounded-md w-full py-2 px-2 mt-0.5 outline-0 placeholder:tracking-tight placeholder:text-[8px] placeholder:text-gray-400"/>
                                <MusicIcon className="w-3 -ml-6"/>
                            </div>
                        </div>
                    </div>
                    <div className="my-5 flex justify-between">
                        <div className="w-2/3 mr-3">
                            <p className="mr-3">Would you prefer this Tribute to be</p>
                            <div className="flex items-center mt-2.5 tracking-tight">
                                <div className="mr-4 flex items-center">
                                    <input 
                                        type="radio" 
                                        value="public" 
                                        name='publicType' 
                                        checked={formData.publicType === "public"}
                                        onChange={(e) => handleChange(e)}  
                                        className="w-2.5 mr-0.5"/>
                                    <span>a public tribute</span>
                                </div>
                                <div className="flex items-center">
                                    <input 
                                        type="radio" 
                                        value="private" 
                                        name='publicType' 
                                        checked={formData.publicType === "private"}
                                        onChange={(e) => handleChange(e)} 
                                        className="w-2.5 mr-0.5"/>
                                    <span>a private tribute</span>
                                </div>
                            </div>
                        </div>
                        {formData.publicType === "private" ?
                            <div className="w-2/3 ml-3">
                                <p>Tribute key</p>
                                <input 
                                    type="text" 
                                    value={formData.tributeKey}
                                    onChange={(e) => handleChange(e)} 
                                    name='tributeKey'
                                    placeholder="Create a tribute key" 
                                    className="border text-gray-600 rounded-md w-full py-2 px-2 mt-0.5 outline-0 placeholder:tracking-tight placeholder:text-[8px] placeholder:text-gray-400"/>
                            </div> :
                            <div className="text-white"> - </div>
                        }
                    </div>
                    <div>
                        <p className="mr-3">Add More pictures</p>
                        <div>
                            <div className="flex">
                                {Array(6).fill(
                                    <div className="w-11 h-11 flex items-center justify-center bg-slate-100 rounded-sm mr-3 my-2">+</div>
                                )}
                            </div>
                            <p className="mr-3 text-[9px] text-sky-500">First image will be set as header and Image size should be more than 2MB</p>
                        </div>
                    </div>
                    <div className="flex justify-end mt-12">
                        <Button 
                            type="button" 
                            className="h-6 w-24 rounded-[2px] text-white text-[9px]"
                            >
                            Publish
                        </Button>
                    </div>
                </div>

                <div className="w-4/12 max-md:w-full">
                    <div className="max-md:flex max-md:justify-between">
                        <div className="bg-white px-4 h-44 max-md:h-48 py-3.5 max-md:w-7/12 mb-5 rounded-xl">
                            <h4 className="text-sm mb-3 max-md:mb-4">Tribute Overview</h4>
                            <div className="flex justify-between">
                                <div>
                                    <p className="text-[10px] leading-snug mb-1 text-gray-400">Tribute Title</p>
                                    <p className="text-[12px]">Celebration of Life</p>
                                </div>
                                <div className="mr-1">
                                    <p className="text-[10px] leading-snug mb-1 text-gray-400">Date Created</p>
                                    <p className="text-[12px]">15th May 2023</p>
                                </div>
                            </div>
                            <div className="flex justify-between my-3 max-md:my-4">
                                <div>
                                    <p className="text-[10px] leading-snug mb-1 text-gray-400">Tribute Link</p>
                                    <p className="text-[12px]">benson.bestwishes.io</p>
                                </div>
                                <div>
                                    <p className="text-[10px] leading-snug mb-1 text-gray-400">Contribution Count</p>
                                    <p className="text-[12px]">43</p>
                                </div>
                            </div>
                            <div>
                                <p className="text-[10px] leading-snug mb-1 text-gray-400">Tribute Type</p>
                                <p className="text-[12px]">Private</p>
                            </div>
                        </div>
                        <div className="bg-white pl-4 py-5 h-24 max-md:h-28 mb-5 max-md:w-1/2 max-md:ml-6 rounded-xl text-[10px]">
                            <p className="text-xs pb-2 tracking-tight">Gift Received</p>
                            <h3 className="text-sky-700 tracking-tighter text-2xl">₦0.00</h3>
                        </div>
                    </div>
                    <div className="bg-white pt-4 pb-1 px-3 rounded-xl max-md:mt-5">
                        <p className="tracking-tight text-sm text-lg pl-1">Recent Activities</p>
                        {activities.map((activity) => (
                            <div className="flex my-5">
                                <div>
                                    <CircleIcon className="w-7 h-7"/>
                                </div>
                                <div className="pl-3">
                                    <p className="pb-1.5 leading-tight text-xs">{activity.title}</p>
                                    <p className="text-gray-300 tracking-tight text-[10px]">{activity.createdDate}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
     );
}

export default EditTribute;
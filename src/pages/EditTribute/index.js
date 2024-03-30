import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "components/Button";
import activities from "layout/Lists/activities";
import  uploadPix from "../../assets/images/gallery.png"
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
            <div className="flex items-center justify-between mb-5 mx-8 text-base max-sm:text-xs max-lg:text-base">
                <div className="flex text-sky-600">
                    <LeftArrowIcon className="mr-1  w-5 h-5 max-sm:h-3.5 max-sm:w-3.5 max-lg:w-5 max-lg:h-5" />
                    <Link to="/dashboard/tribute">Back to Tribute</Link>
                </div>
                <h4 className="font-semibold text-xl max-sm:text-sm max-sm:hidden max-lg:text-base">Celebration of Life</h4>
                <p className="px-3 py-2.5 rounded-lg max-sm:px-2 max-sm:py-1 max-lg:py-2 max-lg:px-6 text-white bg-slate-900">Preview Tribute</p>
            </div>

            <div className="flex justify-between mt-8 overflow-none mx-8 max-lg:mx-4 max-lg:block">
                <div className="bg-white px-6 max-lg:px-3 py-10 rounded-xl w-11/12 max-lg:w-full max-lg:mb-8 mr-4 text-lg">
                    <div className="bg-gray-200 rounded-full mb-10 w-24 h-24 flex items-center justify-center mx-auto">
                        <img src={uploadPix} alt="upload-pix" className="w-16" />
                    </div>
                    <div className="flex justify-between max-sm:block my-6 placeholder:italic">
                        <div className="w-2/3 max-sm:w-full max-sm:mb-6 mr-3">
                            <p>Type of Tribute</p>
                            <select 
                                name="tributeType"
                                value={formData.tributeType}
                                onChange={handleChange}
                                className="border rounded-md w-full px-2 mt-0.5 outline-0 text-lg h-14 text-gray-600">
                                <option value="" className="text-gray-400">Click here to select tribute type</option>
                                <option value="anniversary">Anniversary</option>
                                <option value="birthday">Birthday</option>
                                <option value="convocation">Convocation</option>
                                <option value="funeral">Funeral</option>
                                <option value="naming">Naming</option>
                                <option value="wedding">Wedding</option>
                            </select>
                        </div>
                        <div className="w-2/3 ml-3 max-sm:w-full max-sm:ml-0">
                            <p>Title of Tribute</p>
                            <input 
                                type="text" 
                                value={formData.tributeTitle}
                                onChange={(e) => handleChange(e)} 
                                name='tributeTitle'
                                placeholder="Click to enter title of tribute" 
                                className="border text-gray-600 rounded-md w-full px-2 mt-0.5 outline-0 h-14 placeholder:text-gray-400"/>
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
                            className="border text-gray-600 rounded-md w-full px-2 mt-0.5 outline-0 h-14 placeholder:text-gray-400" />
                    </div>
                    <div className="flex justify-between my-6">
                        <div className={formData.tributeType === "funeral" ? "w-2/3 mr-3" : "w-2/3 mr-3 w-full"}>
                            <p>Date of Birth</p>
                            <input 
                                type="date" 
                                value={formData.dateOfBirth}
                                onChange={(e) => handleChange(e)} 
                                name='dateOfBirth'
                                className="border text-gray-600 rounded-md w-full py-2 max-lg:py-3 px-2 mt-0.5 outline-0 text-lg h-14"/>
                        </div>
                        <div className={formData.tributeType === "funeral" ? "w-2/3 ml-3" : "w-2/3 ml-3 hidden"}>
                            <p>Date of Death</p>
                            <input 
                                type="date"
                                value={formData.dateOfDeath}
                                onChange={(e) => handleChange(e)} 
                                name='dateOfDeath'
                                className="border text-gray-600 rounded-md w-full px-2 mt-0.5 outline-0 text-lg h-14"/>
                        </div>
                    </div>
                    <div className="max-sm:mb-6">
                        <p>Bio</p>
                        <textarea 
                            value={formData.tributeBio}
                            onChange={(e) => handleChange(e)} 
                            name='tributeBio'
                            className="border text-gray-600 rounded-md w-full h-60 p-3 mt-0.5 outline-0 placeholder:text-slate-400 resize-none leading-normal" 
                            placeholder="write a bio about yourself"/>
                    </div>
                    <div className="flex justify-between max-sm:block my-6">
                        <div className="w-2/3 mr-3 max-sm:w-full max-sm:mb-6">
                            <p>Please descibe your relationship</p>
                            <select 
                                name="relationship"
                                value={formData.relationship}
                                onChange={handleChange} 
                                className="border text-gray-600 rounded-md w-full px-2 mt-0.5 outline-0 text-lg h-14">
                                <option value="">please select</option>
                                <option value="father">Father</option>
                                <option value="mother">Mother</option>
                                <option value="brother">Brother</option>
                                <option value="sister">Sister</option>
                                <option value="cousin">Cousin</option>
                            </select>
                        </div>
                        <div className="w-2/3 ml-3 max-sm:w-full max-sm:ml-0">
                            <p>Add music to your tribute</p>
                            <div className="flex items-center text-gray-200 w-full pr-2">
                                <input 
                                    type="text" 
                                    value={formData.musicLink}
                                    onChange={(e) => handleChange(e)} 
                                    name='musicLink'
                                    placeholder="Add music link"  
                                    className="border text-gray-600 rounded-md w-full px-2 mt-0.5 outline-0 placeholder:text-gray-400 h-14"/>
                                <MusicIcon className="w-5 -ml-10"/>
                            </div>
                        </div>
                    </div>
                    <div className="my-5 max-lg:my-9 flex justify-between max-sm:block">
                        <div className="w-2/3 mr-3 max-sm:w-full">
                            <p className="mr-3">Would you prefer this Tribute to be</p>
                            <div className="flex items-center mt-2.5 max-lg:text-lg">
                                <div className="mr-4 max-sm:mr-8 flex items-center">
                                    <input 
                                        type="radio" 
                                        value="public" 
                                        name='publicType' 
                                        checked={formData.publicType === "public"}
                                        onChange={(e) => handleChange(e)}  
                                        className="w-4 mr-0.5"/>
                                    <span>a public tribute</span>
                                </div>
                                <div className="flex items-center">
                                    <input 
                                        type="radio" 
                                        value="private" 
                                        name='publicType' 
                                        checked={formData.publicType === "private"}
                                        onChange={(e) => handleChange(e)} 
                                        className="w-4 mr-0.5"/>
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
                                    className="border text-gray-600 rounded-md w-full px-2 mt-0.5 outline-0 placeholder:text-gray-400 h-14"/>
                            </div> :
                            <div className="text-white"> - </div>
                        }
                    </div>
                    <div>
                        <p className="mr-3">Add More pictures</p>
                        <div>
                            <div className="flex max-sm:grid max-sm:grid-cols-4">
                                {Array(6).fill(
                                    <div className="w-20 h-20 max-lg:w-16 max-lg:h-16 flex items-center justify-center bg-slate-100 rounded-sm mr-3 max-sm:mr-0 my-2">+</div>
                                )}
                            </div>
                            <p className="mr-3 text-sm text-sky-500">First image will be set as header and Image size should be more than 2MB</p>
                        </div>
                    </div>
                    <div className="flex justify-end mt-12">
                        <Button 
                            type="button" 
                            className="w-52 max-lg:w-48 rounded-md text-white text-lg max-sm:w-full h-12"
                            >
                            Publish
                        </Button>
                    </div>
                </div>

                <div className="w-4/12 max-sm:block max-lg:w-full max-lg:grid max-lg:grid-cols-2 max-lg:gap-x-10">
                    <div className="max-md:flex max-sm:block max-md:justify-between">
                        <div className="bg-white px-4 h-88 max-md:h-48 max-sm:h-60 max-lg:h-64 py-3.5 max-md:w-7/12 max-sm:w-full mb-5 rounded-xl">
                            <h4 className="text-lg mb-3 max-md:mb-4">Tribute Overview</h4>
                            <div className="max-lg:flex justify-between">
                                <div>
                                    <p className="text-sm max-sm:text-sm max-lg:text-base leading-snug mb-0 max-lg:mb-0 max-sm:mb-0 text-gray-400">Tribute Title</p>
                                    <p className="text-base max-sm:text-base max-lg:text-lg">Celebration of Life</p>
                                </div>
                                <div className="mr-2 max-lg:mt-0 mt-4">
                                    <p className="text-sm max-sm:text-sm max-lg:text-base leading-snug mb-0 max-lg:mb-0 max-sm:mb-0 text-gray-400">Date Created</p>
                                    <p className="text-base max-sm:text-base max-lg:text-lg">15th May 2023</p>
                                </div>
                            </div>
                            <div className="max-lg:flex justify-between my-3 max-md:my-4">
                                <div>
                                    <p className="text-sm max-sm:text-sm max-lg:text-base leading-snug mb-0 max-lg:mb-0 max-sm:mb-0 text-gray-400">Tribute Link</p>
                                    <p className="text-base max-sm:text-base max-lg:text-lg -mt-0.5">benson.bestwishes.io</p>
                                </div>
                                <div className="max-lg:mt-0 mt-4">
                                    <p className="text-sm max-sm:text-sm max-lg:text-base leading-snug mb-0 max-lg:mb-0 max-sm:mb-0 text-gray-400">Contribution Count</p>
                                    <p className="text-base max-sm:text-base max-lg:text-lg">43</p>
                                </div>
                            </div>
                            <div>
                                <p className="text-sm max-sm:text-sm max-lg:text-base leading-snug mb-0 max-lg:mb-0 max-sm:mb-0 text-gray-400">Tribute Type</p>
                                <p className="text-base max-sm:text-base max-lg:text-lg">Private</p>
                            </div>
                        </div>
                        <div className="bg-white pl-4 py-5 h-32 mb-5 max-lg:my-8 max-md:w-1/2 max-sm:w-full max-md:ml-6 max-sm:ml-0 rounded-xl text-xs">
                            <p className="text-lg pb-2">Gift Received</p>
                            <h3 className="text-sky-700 tracking-tighter text-3xl">₦0.00</h3>
                        </div>
                    </div>
                    <div className="bg-white pt-4 pb-1 px-3 rounded-xl max-md:mt-5">
                        <p className="pl-1 text-lg">Recent Activities</p>
                        {activities.map((activity) => (
                            <div className="flex my-7">
                                <div>
                                    <CircleIcon className="max-sm:w-8 max-sm:h-8 w-14 h-14"/>
                                </div>
                                <div className="pl-3 md:pl-1.5">
                                    <p className="pb-1 leading-tight text-base">{activity.title}</p>
                                    <p className="text-gray-300 tracking-tight text-sm">{activity.createdDate}</p>
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
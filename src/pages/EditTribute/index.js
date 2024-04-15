/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-no-comment-textnodes */
import { useEffect, useState } from "react";
import { Link, useParams, } from "react-router-dom";
import { editTributeSchema } from "Schemas";
import CustomSelect from "components/CustomFormInputs/CustomSelect";
import CustomInput from "components/CustonFormInputs/CustomInput";
import CustomCalendar from "components/CustomFormInputs/CustomCalender";
import CustomRadio from "components/CustomFormInputs/CustomRadio";
import { ErrorMessage, Form, Formik } from "formik";
import tributeDetails from "layout/Lists/tributeDetails";
import { motion } from "framer-motion";
import Button from "components/Button";
import activities from "layout/Lists/activities";
import  uploadPix from "../../assets/images/gallery.png"
import { ReactComponent as MusicIcon } from "../../assets/icons/music.svg"
import { ReactComponent as CircleIcon } from "../../assets/icons/circle.svg"
import { ReactComponent as LeftArrowIcon } from "../../assets/icons/left.svg"


function EditTribute() {

    const { id } = useParams();
    const [open, setOpen] = useState(false);
    const [ musicFile, setMusicFile ] = useState(null)
    const [birthCalendarId, setBirthCalenderId] = useState(null);
    const [deathCalendarId, setDeathCalenderId] = useState(null);
    const foundTribute = tributeDetails.find((tribute) => tribute.id === parseInt(id, 10));
    const tributeLength = tributeDetails.length;

    useEffect(() => {
        setBirthCalenderId("dateOfBirth");
        setDeathCalenderId("dateOfDeath");
    }, []);

    return ( 
        <div className="pt-8 mb-8">
            {foundTribute ?  (
            <div>
                <div className="flex items-center justify-between mb-5 mx-8 text-base max-sm:text-xs max-lg:text-base">
                    <div className="flex text-sky-600">
                        <LeftArrowIcon className="mr-1  w-5 h-5 max-sm:h-3.5 max-sm:w-3.5 max-lg:w-5 max-lg:h-5" />
                        <Link to="/dashboard/tribute">Back to Tribute</Link>
                    </div>
                    <h4 className="font-semibold text-xl max-sm:text-sm max-sm:hidden max-lg:text-base">{foundTribute.tributeTitle}</h4>
                    <p className="px-3 py-2.5 rounded-lg max-sm:px-2 max-sm:py-1 max-lg:py-2 max-lg:px-6 text-white bg-slate-900">Preview Tribute</p>
                </div>

                <div className="flex justify-between mt-8 overflow-none mx-8 max-lg:mx-4 max-lg:block">
                    <Formik
                        initialValues={{
                            headerImage: "",
                            tributeType: foundTribute.tributeType,
                            tributeTitle: foundTribute.tributeTitle,
                            fullName: foundTribute.fullName,
                            dateOfBirth: null,
                            dateOfDeath: null,
                            tributeBio: foundTribute.tributeBio,
                            relationship:foundTribute.relationship,
                            musicLink: foundTribute.musicLink,
                            publicType: foundTribute.publicType,
                            tributeKey: foundTribute.tributeKey,
                            otherImages: [{ firstOtherImg: "", secondOtherImg: "", thirdOtherImg: "", fourthOtherImg: "",}],
                        }}
                        validationSchema={editTributeSchema}
                        onSubmit={(values, { resetForm }) => {
                            console.log("Form submitted with values:", values);
                            setOpen(false);

                            resetForm();
                        }}
                    >

                        {({ values, setFieldValue, isValid, }) => (
                            <Form style={{ zIndex: 0 }} className="bg-white px-6 max-lg:px-3 py-10 rounded-xl w-11/12 max-lg:w-full max-lg:mb-8 mr-4 text-lg">
                                <div>
                                    <div className="bg-gray-200 rounded-full mb-10 w-40 h-40 flex items-center justify-center mx-auto">
                                        {foundTribute ? (
                                            <img src={foundTribute.photoSRC} alt={foundTribute.photoAlt} className="rounded-full h-full object-cover"/>
                                        ) :
                                        (
                                            <img src={uploadPix} alt="upload-pix" className="w-16" />
                                        )}
                                    </div>
                                    <div className="block md:grid md:grid-cols-2 md:justify-between my-6 max-sm:my-4 placeholder:italic gap-10">
                                        <CustomSelect 
                                            name="tributeType" 
                                            label="Type of Tribute"
                                            value={values.tributeType}
                                        >
                                            <option value="" className="text-gray-400">Click here to select tribute type</option>
                                            <option value="anniversary">Anniversary</option>
                                            <option value="birthday">Birthday</option>
                                            <option value="convocation">Convocation</option>
                                            <option value="funeral">Funeral</option>
                                            <option value="naming">Naming</option>
                                            <option value="wedding">Wedding</option>
                                            <option value="other">Other</option>
                                        </CustomSelect>
                                        <div className={`max-sm:mt-4`}>
                                            <CustomInput 
                                                label="Title of Tribute" 
                                                name="tributeTitle" 
                                                type="text" 
                                                placeholder="Click to enter title of tribute"
                                                value={values.tributeTitle}
                                            />
                                        </div>
                                    </div>
                                    <div className="my-8 max-sm:my-4">
                                        <CustomInput 
                                            label="Full Name" 
                                            name="fullName" 
                                            type="text" 
                                            placeholder="Click to enter full name"
                                            value={values.fullName}
                                        />
                                    </div>
                                    <div className="block md:grid md:grid-cols-2 my-8 max-sm:my-4 placeholder:italic gap-10">
                                        { birthCalendarId && (
                                        <CustomCalendar 
                                             label="Date of Birth"
                                             name="dateOfBirth"
                                             value={values.dateOfBirth} // Pass the value from Formik
                                             onChange={(date) => setFieldValue("dateOfBirth", date)} // Pass the onChange handler from Formik
                                             id={birthCalendarId}
                                             placeholder="Select date"
                                             className="w-[2000px]"
                                        />
                                        )}
                                        { foundTribute.tributeType === "funeral" && deathCalendarId && (
                                        <div className={`max-sm:mt-4`}>
                                            <CustomCalendar 
                                                label="Date of Death"
                                                name="dateOfDeath"
                                                value={values.dateOfDeath} // Pass the value from Formik
                                                onChange={(date) => setFieldValue("dateOfDeath", date)} // Pass the onChange handler from Formik
                                                id={deathCalendarId}
                                                placeholder="Select date"
                                            />
                                        </div>
                                        )}
                                    </div>
                                    <div className="max-sm:mb-6 text-base">
                                        <p className="text-lg">Bio</p>
                                        <textarea 
                                            value={values.tributeBio}
                                            // onChange={(e) => handleChange(e)} 
                                            name='tributeBio'
                                            className="border border-primary text-gray-600 rounded-md w-full h-60 p-3 mt-2 outline-0 placeholder:text-slate-400 resize-none leading-normal" 
                                            placeholder="write a bio about yourself"/>
                                    </div>
                                    <div className="flex justify-between max-sm:block gap-10 my-8">
                                        <div className="w-1/2 max-md:w-full">
                                            <CustomSelect 
                                                name="relationship" 
                                                label="Please descibe your relationship"
                                                value={values.relationship}
                                            >
                                                <option value="" className="text-gray-400">Click here to select relationship</option>
                                                <option value="father">Father</option>
                                                <option value="mother">Mother</option>
                                                <option value="brother">Brother</option>
                                                <option value="sister">Sister</option>
                                                <option value="cousin">Cousin</option>
                                                <option value="other">Other</option>
                                            </CustomSelect>
                                        </div>
                                        <div className="relative flex w-1/2 max-md:w-full max-md:mt-4">
                                            <CustomInput
                                                label="Add music to your tribute"
                                                name="musicLink"
                                                value={values.musicLink !== "" ? values.musicLink : musicFile}
                                                required
                                                placeholder="click here to upload music"
                                            />
                                            <MusicIcon className="cursor-pointer absolute translate-y-[170%] right-6 top-4 w-6 h-6"/>
                                            <input
                                                type="file"
                                                id="musicLink"
                                                className="cursor-pointer absolute translate-y-[200%] -right-52 leading-tight focus:outline-none focus:border-blue-500 opacity-0"
                                                onChange={(e) => {
                                                setMusicFile(e.target.files[0].name);
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div  className="flex justify-between max-sm:block gap-10 my-8 max-md:mb-0">
                                        <div>
                                            <p className="mr-3">Would you prefer this Tribute to be</p>
                                            <div className="flex items-center mt-2">
                                                <div className="mr-4 flex items-center">
                                                    <CustomRadio
                                                        name="publicType" 
                                                        value="public" 
                                                        text="a public tribute"
                                                    />
                                                </div>
                                                <div className="flex items-center">
                                                    <CustomRadio
                                                        name="publicType" 
                                                        value="private" 
                                                        text="a private tribute"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        {values.publicType === "private" ?
                                            <div className="w-1/2">
                                                <CustomInput 
                                                    label="Create a Tribute key" 
                                                    name="tributeKey" 
                                                    type="text" 
                                                    placeholder="Create a Tribute key"
                                                    value={values.tributeKey}
                                                />
                                            </div>
                                            :
                                            <div className="text-white"> - </div>
                                        }
                                    </div>
                                    <div className="my-8 max-md:mt-0">
                                        <div>
                                            <p className="mr-3 max-md:mb-6">Add More pictures</p>
                                        </div>
                                        <div>
                                            <div className="flex max-md:grid max-md:grid-cols-3 max-md:gap-x-3 max-md:gap-y-12">
                                                {/* picture 1 */}
                                                {values.otherImages.map((item, index) => (
                                                    <div
                                                        key={index}
                                                        className="mr-3 pb-2"
                                                    >
                                                        <fieldset
                                                            className={`h-full rounded-lg rounded-5 bg-white max-md:w h20 max-md:h-14 flex items-center bg-slate-100 rounded-sm mr-3 cursor-pointer`}
                                                        >
                                                            {item.firstOtherImg ? (
                                                            <div className="w-full rounded-lg h-full relative pt-3">
                                                                <button
                                                                type="button"
                                                                className=" font-bold text-lg text-red-500 z-30 absolute top-4 left-20 "
                                                                onClick={() => setFieldValue(`otherImages.${index}.firstOtherImg`, null)}
                                                                >
                                                                X
                                                                </button>

                                                                <img
                                                                src={URL.createObjectURL(item.firstOtherImg)}
                                                                className="w-24 h-24 object-cover"
                                                                alt="Cover pic"
                                                                />
                                                            </div>
                                                            ) : (
                                                            <div className="relative flex w-24 h-24 bg-gray-200 mt-3">
                                                                <input
                                                                id={`otherImages.${index}.firstOtherImg`}
                                                                type="file"
                                                                accept="image/*"
                                                                className="opacity-0 w-full h-full z-30 cursor-pointer"
                                                                onChange={(event) => {
                                                                    const file = event.currentTarget.files[0];
                                                                    setFieldValue(`otherImages.${index}.firstOtherImg`, file);
                                                                }}
                                                                />
                                                                <label
                                                                htmlFor={`otherImages.${index}.firstOtherImg`}
                                                                className="cursor-pointer absolute top-8 left-8"
                                                                >
                                                                    <p className="ml-2 text-xl">+</p>
                                                                </label>
                                                            </div>
                                                            )}
                                                        </fieldset>
                                                    </div>
                                                ))}
                                                {/* picture 2 */}
                                                {values.otherImages.map((item, index) => (
                                                    <div
                                                        key={index}
                                                        className="mr-3 pb-2"
                                                    >
                                                        <fieldset
                                                            className={`h-full rounded-lg rounded-5 bg-white max-md:w h20 max-md:h-14 flex items-center bg-slate-100 rounded-sm mr-3 cursor-pointer`}
                                                        >
                                                            {item.secondOtherImg ? (
                                                            <div className="w-full rounded-lg h-full relative pt-3">
                                                                <button
                                                                type="button"
                                                                className=" font-bold text-lg text-red-500 z-30 absolute top-4 left-20 "
                                                                onClick={() => setFieldValue(`otherImages.${index}.secondOtherImg`, null)}
                                                                >
                                                                X
                                                                </button>

                                                                <img
                                                                src={URL.createObjectURL(item.secondOtherImg)}
                                                                className="w-24 h-24 object-cover"
                                                                alt="second Cover pic"
                                                                />
                                                            </div>
                                                            ) : (
                                                            <div className="relative flex w-24 h-24 bg-gray-200 mt-3">
                                                                <input
                                                                id={`otherImages.${index}.secondOtherImg`}
                                                                type="file"
                                                                accept="image/*"
                                                                className="opacity-0 w-full h-full z-30 cursor-pointer"
                                                                onChange={(event) => {
                                                                    const file = event.currentTarget.files[0];
                                                                    setFieldValue(`otherImages.${index}.secondOtherImg`, file);
                                                                }}
                                                                />
                                                                <label
                                                                htmlFor={`otherImages.${index}.secondOtherImg`}
                                                                className="cursor-pointer absolute top-8 left-8"
                                                                >
                                                                    <p className="ml-2 text-xl">+</p>
                                                                </label>
                                                            </div>
                                                            )}
                                                        </fieldset>
                                                    </div>
                                                ))}
                                                   {/* picture 3 */}
                                                   {values.otherImages.map((item, index) => (
                                                    <div
                                                        key={index}
                                                        className="mr-3 pb-2"
                                                    >
                                                        <fieldset
                                                            className={`h-full rounded-lg rounded-5 bg-white max-md:w h20 max-md:h-14 flex items-center bg-slate-100 rounded-sm mr-3 cursor-pointer`}
                                                        >
                                                            {item.thirdOtherImg ? (
                                                            <div className="w-full rounded-lg h-full relative pt-3">
                                                                <button
                                                                type="button"
                                                                className=" font-bold text-lg text-red-500 z-30 absolute top-4 left-20 "
                                                                onClick={() => setFieldValue(`otherImages.${index}.thirdOtherImg`, null)}
                                                                >
                                                                X
                                                                </button>

                                                                <img
                                                                src={URL.createObjectURL(item.thirdOtherImg)}
                                                                className="w-24 h-24 object-cover"
                                                                alt="second Cover pic"
                                                                />
                                                            </div>
                                                            ) : (
                                                            <div className="relative flex w-24 h-24 bg-gray-200 mt-3">
                                                                <input
                                                                id={`otherImages.${index}.thirdOtherImg`}
                                                                type="file"
                                                                accept="image/*"
                                                                className="opacity-0 w-full h-full z-30 cursor-pointer"
                                                                onChange={(event) => {
                                                                    const file = event.currentTarget.files[0];
                                                                    setFieldValue(`otherImages.${index}.thirdOtherImg`, file);
                                                                }}
                                                                />
                                                                <label
                                                                htmlFor={`otherImages.${index}.thirdOtherImg`}
                                                                className="cursor-pointer absolute top-8 left-8"
                                                                >
                                                                    <p className="ml-2 text-xl">+</p>
                                                                </label>
                                                            </div>
                                                            )}
                                                        </fieldset>
                                                    </div>
                                                ))}
                                                   {/* picture 4 */}
                                                   {values.otherImages.map((item, index) => (
                                                    <div
                                                        key={index}
                                                        className="mr-3 pb-2"
                                                    >
                                                        <fieldset
                                                            className={`h-full rounded-lg rounded-5 bg-white max-md:w h20 max-md:h-14 flex items-center bg-slate-100 rounded-sm mr-3 cursor-pointer`}
                                                        >
                                                            {item.fourthOtherImg ? (
                                                            <div className="w-full rounded-lg h-full relative pt-3">
                                                                <button
                                                                type="button"
                                                                className=" font-bold text-lg text-red-500 z-30 absolute top-4 left-20 "
                                                                onClick={() => setFieldValue(`otherImages.${index}.fourthOtherImg`, null)}
                                                                >
                                                                X
                                                                </button>

                                                                <img
                                                                src={URL.createObjectURL(item.fourthOtherImg)}
                                                                className="w-24 h-24 object-cover"
                                                                alt="second Cover pic"
                                                                />
                                                            </div>
                                                            ) : (
                                                            <div className="relative flex w-24 h-24 bg-gray-200 mt-3">
                                                                <input
                                                                id={`otherImages.${index}.fourthOtherImg`}
                                                                type="file"
                                                                accept="image/*"
                                                                className="opacity-0 w-full h-full z-30 cursor-pointer"
                                                                onChange={(event) => {
                                                                    const file = event.currentTarget.files[0];
                                                                    setFieldValue(`otherImages.${index}.fourthOtherImg`, file);
                                                                }}
                                                                />
                                                                <label
                                                                htmlFor={`otherImages.${index}.fourthOtherImg`}
                                                                className="cursor-pointer absolute top-8 left-8"
                                                                >
                                                                    <p className="ml-2 text-xl">+</p>
                                                                </label>
                                                            </div>
                                                            )}
                                                        </fieldset>
                                                    </div>
                                                ))}

                                            </div>
                                            <p className="mr-3 text-base text-sky-500 max-md:mt-10 mt-2">First image will be set as header and Image size should be more than 2MB</p>
                                        </div>
                                    </div>
                                    <div className=" w-full flex flex-col md:items-end">
                                        <motion.button
                                            type="submit"
                                            whileHover={{ scale: 0.98 }}
                                            className={` py-3 text-white rounded-md hover:bg-white hover:text-primary md:w-1/3
                                            ${isValid ? " bg-primary border border-primary" : " bg-primary/50 pointer-events-none"}
                                            ${values.relationship && values.publicType ? " bg-primary" : " bg-primary/50 pointer-events-none"}
                                            `}
                                            // 
                                        >
                                            Update Tribute
                                        </motion.button>
                                    </div>

                                </div>
                            </Form>
                        )}
                    </Formik>

                    <div className="w-4/12 max-sm:block max-lg:w-full max-lg:grid max-lg:grid-cols-2 max-lg:gap-x-10">
                        <div className="max-md:flex max-sm:block max-md:justify-between">
                            <div className="bg-white px-4 h-88 max-md:h-48 max-sm:h-60 max-lg:h-64 py-3.5 max-md:w-7/12 max-sm:w-full mb-5 rounded-xl">
                                <h4 className="text-lg mb-3 max-md:mb-4">Tribute Overview</h4>
                                <div className="max-lg:flex justify-between">
                                    <div>
                                        <p className="text-sm max-sm:text-sm max-lg:text-base leading-snug mb-0 max-lg:mb-0 max-sm:mb-0 text-gray-400">Tribute Title</p>
                                        <p className="text-base max-sm:text-base max-lg:text-lg">{foundTribute.tributeTitle}</p>
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
            )
        :   
            (
                <h2>Wishlist not Found</h2>
            )}
        </div>
     );
}

export default EditTribute;

/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-no-comment-textnodes */
import { useState, useEffect } from "react";
import { tributeSchema } from "Schemas";
import SwitchButton from "components/Switch";
import CustomSelect from "components/CustomFormInputs/CustomSelect";
import CustomInput from "components/CustonFormInputs/CustomInput";
import CustomCalendar from "components/CustomFormInputs/CustomCalender";
import CustomRadio from "components/CustomFormInputs/CustomRadio";
import Myeditor from "components/CustomFormInputs/CustomEditor";
import { ErrorMessage, Form, Formik } from "formik";
import { motion } from "framer-motion";
import 'react-quill/dist/quill.snow.css';
import Button from "components/Button";
import  uploadPix from "../../../assets/images/gallery.png"
import { ReactComponent as UploadIcon } from "../../../assets/icons/upload-image.svg"
import { ReactComponent as MusicIcon } from "../../../assets/icons/music.svg"


function CreateTribute() {

    const [activeStep, setActiveStep] = useState(0);
    const [open, setOpen] = useState(false);
    const [birthCalendarId, setBirthCalenderId] = useState(null);
    const [deathCalendarId, setDeathCalenderId] = useState(null);
    const [ musicFile, setMusicFile ] = useState(null)
    useEffect(() => {
        setBirthCalenderId("dateOfBirth");
        setDeathCalenderId("dateOfDeath");
    }, []);


    return (
        <div>
            <Formik
                initialValues={{
                    headerImage: null,
                    tributeType: "",
                    tributeTitle: "",
                    fullName: "",
                    dateOfBirth: null,
                    dateOfDeath: null,
                    tributeBio: "",
                    receiveCash: true,
                    addWishList: "No",
                    relationship: "",
                    musicLink: "",
                    publicType: "public",
                    tributeKey: "",
                    otherImages: [{ firstOtherImg: "", secondOtherImg: "", thirdOtherImg: "", fourthOtherImg: "",}],
                }}
                validationSchema={tributeSchema}
                onSubmit={(values, { resetForm }) => {
                    console.log("Form submitted with values:", values);
                    setOpen(false);

                    resetForm();
                }}
            >
                {({ values, setFieldValue, isValid}) => (
                    <Form style={{ zIndex: 10 }}>
                        {/* STEP 1  */}
                        {activeStep === 0 && (
                            <div className="text-lg step-1 max-sm:w-80 max-sm:mx-auto max-sm:h-[480px]">
                                <div className="max-md:pb-6">
                                    <fieldset
                                        className="relative h-[150px] w-[150px] flex justify-center mt-0  mx-auto cursor-pointer bg-white"
                                        >
                                        {values.headerImage ? (
                                            <div className=" relative w-full h-full">
                                                <button
                                                    type="button"
                                                    className=" font-bold text-xl text-red-500 z-30 absolute top-5 right-5 "
                                                    onClick={() => setFieldValue("headerImage", null)}
                                                >
                                                    X
                                                </button>
                                                <img
                                                    src={URL.createObjectURL(values.headerImage)}
                                                    className=" w-full h-full object-cover rounded-full"
                                                    alt="Header pic"
                                                />
                                            </div>
                                        ) : (
                                            <div className="relative -mt-4 bg-gray-200 rounded-full w-28 h-28">
                                                <input
                                                    id="headerImage"
                                                    type="file"
                                                    accept="image/*"
                                                    className=" opacity-0 w-full h-full z-30 "
                                                    onChange={(e) => setFieldValue("headerImage", e.target.files[0])}
                                                />
                                                <label
                                                    htmlFor="headerImage"
                                                    className="absolute bottom-0 -left-4 right-0 top-0 ml-4 flex justify-center items-center"
                                                >
                                                    <UploadIcon className="absolute w-6 h-6 cursor-pointer"/>
                                                    <img src={uploadPix} alt="kkk" className="w-24 cursor-pointer"/>
                                                </label>
                                            </div>
                                        )}
                                        {/* Display image preview if headerImage has a value */}
                                    </fieldset>
                                    <div className="block md:grid md:grid-cols-2 md:justify-between my-6 max-sm:my-4 placeholder:italic gap-10">
                                        <CustomSelect 
                                            name="tributeType" 
                                            label="Type of Tribute"
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
                                            />
                                        </div>
                                    </div>
                                    <div className="my-8 max-sm:my-4">
                                        <CustomInput 
                                            label="Full Name" 
                                            name="fullName" 
                                            type="text" 
                                            placeholder="Click to enter full name"
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
                                        />
                                        )}
                                        { values.tributeType === "funeral" && deathCalendarId && (
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
                                    <div>
                                    <Button
                                        onClick={() => setActiveStep(activeStep + 1)}
                                        type="button"
                                        className={`w-full self-end py-[24px] md:py-[30px] outline-none rounded-md flex justify-center items-center text-white
                                        ${
                                        values.headerImage &&
                                        values.tributeType &&
                                        values.tributeTitle &&
                                        values.fullName &&
                                        values.dateOfBirth
                                            ? "bg-primary"
                                            : "bg-primary/50 pointer-events-none "
                                            }
                                        `}
                                    >
                                        Next
                                        </Button>{" "}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* STEP 2  */}
                        {activeStep === 1 && (
                            <div className="text-lg max-md:pb-8 step-2 max-sm:w-80 max-sm:mx-auto max-sm:h-[480px]">
                                <div className="max-md:pb-6 max-md:-mt-8">
                                    <fieldset className="my-6">
                                        <Myeditor
                                            label="Bio"
                                            name="tributeBio"
                                            placeholder="write a bio about yourself"
                                            className="h-80 mb-10 max-md:h-60 mb-16 outline-green-400"
                                            
                                        />
                                    </fieldset>
                                    <div className="flex my-6 items-center">
                                        <p className="mr-5 mb-0.5">Want to receive cash gift?</p>
                                        <SwitchButton className="w-10"/>
                                    </div>
                                    <div className="flex items-center max-md:text-base">
                                        <p>Want to add wishlist to your tribute?</p>
                                        <div className="mx-4 flex items-center">
                                        <CustomRadio
                                                name="addWishList" 
                                                value="No" 
                                                text="No"
                                            />
                                        </div>
                                        <div className="flex items-center">
                                            <CustomRadio
                                                name="addWishList" 
                                                value="Yes" 
                                                text="Yes"
                                            />
                                        </div>
                                    </div>
                                    {values.addWishList === "Yes" ? 
                                        <div className="my-6"> 
                                            <p>Select from wishlist you have created</p>
                                            <Button type="button" className="border-2 rounded-md px-0 w-96 max-sm:w-full h-16 bg-white mt-1 text-left  text-gray-400 text-base">
                                                Click here to select
                                            </Button>
                                        </div>
                                        :
                                        <div className="text-white my-5">
                                            -
                                        </div>
                                    }
                                    <div className="flex justify-between mt-5 gap-40 max-md:gap-5">
                                        <button
                                            type="button"
                                            className={`w-full self-end py-[11px] md:py-[16px] outline-none border-primary rounded-md flex justify-center items-center text-primary bg-indigo-100
                                            `}
                                        >
                                             Save as draft
                                        </button>{" "}
                                        <Button
                                            onClick={() => setActiveStep(activeStep + 1)}
                                            type="button"
                                            className={`w-full self-end py-[24px] md:py-[30px] outline-none rounded-md flex justify-center items-center text-white
                                            ${
                                            //  values.tributeBio &&
                                            // values.tributeType &&
                                            // values.tributeTitle &&
                                            // values.fullName &&
                                            values.dateOfBirth
                                                ? "bg-primary"
                                                : "bg-primary/50 pointer-events-none "
                                                }
                                            `}
                                        >
                                            Next
                                        </Button>{" "}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* STEP 3  */}
                        {activeStep === 2 && (
                            <div className="text-lg max-md:pb-8 step-3 text-lg max-md:pb-8 step-2 max-sm:w-80 max-sm:mx-auto max-sm:h-[480px] overflow-x-hidden">
                                <div className="max-md:pb-6 max-md:-mt-8">
                                    <div className="flex justify-between max-sm:block gap-10 my-8">
                                        <div className="w-1/2 max-md:w-full">
                                            <CustomSelect 
                                                name="relationship" 
                                                label="Please descibe your relationship"
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
                                            <p className="mr-3 text-sm text-sky-500 max-md:mt-8">First image will be set as header and Image size should be more than 2MB</p>
                                        </div>
                                    </div>

                                    <div className=" w-full flex flex-col md:items-end">
                                        <motion.button
                                            type="submit"
                                            whileHover={{ scale: 0.98 }}
                                            className={` py-3 text-white rounded-md hover:bg-white hover:text-primary md:w-1/2
                                            ${isValid ? " bg-primary border border-primary" : " bg-primary/50 pointer-events-none"}
                                            ${values.relationship && values.publicType ? " bg-primary" : " bg-primary/50 pointer-events-none"}
                                            `}
                                            // 
                                        >
                                            Publish Tribute
                                        </motion.button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </Form>
                )}
            </Formik>
        </div>
    )

}

export default CreateTribute;

/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-no-comment-textnodes */
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Modal from "components/Modal";
import { ErrorMessage, Form, Formik } from "formik";
import { motion } from "framer-motion";
import { editWishcardLibrarySchema } from "Schemas";
import ColorPicker from "components/ColorPicker";
import CustomSelect from "components/CustomFormInputs/CustomSelect";
import CustomInput from "components/CustomFormInputs/CustomInput";
import PreviewWishcard from "../PreviewWishcard";
import { ReactComponent as LeftArrowIcon } from "../../../assets/icons/left.svg"
import { ReactComponent as LeftTextAlign } from "../../../assets/icons/textalign-left.svg"
import { ReactComponent as RightTextAlign } from "../../../assets/icons/textalign-right.svg"
import { ReactComponent as CenterTextAlign } from "../../../assets/icons/textalign-center.svg"
import { ReactComponent as JustifyTextAlign } from "../../../assets/icons/textalign-justifycenter.svg"
import { ReactComponent as BigImage } from "../../../assets/icons/image111.svg"


function EditWishcardLibrary() {

    const { id } = useParams();
    const [open, setOpen] = useState(false);
    const [previewModal, setPreviewModal] = useState(false);
    const [ formData, setFormData ] = useState({
        textWord: "",
        fontFamily: "",
        fontWeight: "",
        textSize: "",
        letterSpacing: "",
        uploadImage: "",
    })

    return ( 
        <div className="pt-4 mb-8">
            <div className="flex justify-between">
                <div className="flex items-center text-indigo-700 font-medium max-md:mb-4 mt-6 ml-8">
                    <LeftArrowIcon className="mr-1 w-5 h-5 max-sm:w-3.5 max-lg:w-5 max-lg:h-5" />
                    <Link to="/dashboard/wishcard" className="text-lg">Back to Card</Link>
                </div>
                <div className="mr-32 mt-2">
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ scale: 0.987 }}
                        className="bg-white text-primary px-6 py-2.5 w-full md:w-auto rounded-md self-center border border-primary outline-none hover:bg-primary hover:text-white"
                        type="button"
                    >
                        {" "}
                        <button className="outline-none"  onClick={() => setPreviewModal(true)}
                        >
                            Preview
                        </button>
                    </motion.button>
                </div>
            </div>
            <div>
                <div className="flex justify-between mt-8 overflow-none mx-8 max-lg:mx-4 max-lg:block">
                    <div className="bg-white px-6 flex justify-center items-center h-[780px] rounded-xl w-11/12 mr-4 text-center">
                        <div>
                            <div className=" mx-auto rounded-full bg-indigo-100">
                                <BigImage />
                            </div>
                            {/* <div>
                                <h2 className="text-5xl italic font-serif pt-4">Congrats!</h2>
                                <p className="font-sans font-semibold py-3">JEFFREY + SANDRA</p>
                                <p className="w-48 mx-auto leading-tight text-sm">AND BEST WISHES FOR MORE HAPPINESS TOGETHER</p>
                            </div> */}
                        </div>
                    </div>
                    <div className="w-3/12 h-full max-sm:block bg-white rounded-xl lg:ml-2 lg:mr-8 px-4 py-4">
                        <div className="text-pallete">
                            <Formik
                                initialValues={{
                                    textWord: "",
                                    fontFamily: "",
                                    fontWeight: "",
                                    textSize: "",
                                    letterSpacing: "",
                                }}
                                validationSchema={editWishcardLibrarySchema}
                                onSubmit={(values, { resetForm }) => {
                                    console.log("Form submitted with values:", values);
                                    setOpen(false);

                                    resetForm();
                                }}
                            >
                                 {({ values, setFieldValue, isValid, }) => (
                                    <Form  style={{ zIndex: 0 }}>
                                        <div className="h-">
                                            <CustomInput 
                                                label="Text Box" 
                                                name="textWord" 
                                                type="text"
                                                placeholder="Your text here"
                                                value={values.textWord}
                                                className="md:py-48 py-40"
                                            />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4 my-6">
                                            <div className="">
                                                <CustomSelect 
                                                    name="fontFamily" 
                                                    label="Font Picker"
                                                    value={values.fontFamily}
                                                >
                                                    <option value="sans">Sans</option>
                                                    <option value="serif">Serif</option>
                                                    <option value="san-serif">San-Serif</option>
                                                    <option value="nunito">Nunito</option>
                                                    <option value="cursive">Cursive</option>
                                                    <option value="other">Other</option>
                                                </CustomSelect>
                                            </div>
                                            <div>
                                                <CustomSelect 
                                                    name="fontWeight" 
                                                    label="Font Weight"
                                                    value={values.fontWeight}
                                                >
                                                    <option value="normal">Normal</option>
                                                    <option value="medium">Medium</option>
                                                    <option value="bold">Bold</option>
                                                </CustomSelect>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4 my-6">
                                            <div>
                                                <CustomSelect 
                                                    name="textSize" 
                                                    label="Text Size"
                                                    value={values.textSize}
                                                >
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="14">14</option>
                                                    <option value="16">16</option>
                                                    <option value="18">18</option>
                                                    <option value="20">20</option>
                                                    <option value="22">22</option>
                                                    <option value="24">24</option>
                                                    <option value="26">26</option>
                                                    <option value="28">28</option>
                                                    <option value="36">36</option>
                                                    <option value="48">48</option>
                                                    <option value="72">72</option>
                                                </CustomSelect>
                                            </div>
                                            <div>
                                            <CustomSelect 
                                                    name="letterSpacing" 
                                                    label="Letter Spacing"
                                                    value={values.letterSpacing}
                                                >
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="14">14</option>
                                                    <option value="16">16</option>
                                                    <option value="18">18</option>
                                                    <option value="20">20</option>
                                                    <option value="22">22</option>
                                                    <option value="24">24</option>
                                                    <option value="26">26</option>
                                                    <option value="28">28</option>
                                                    <option value="36">36</option>
                                                    <option value="48">48</option>
                                                    <option value="72">72</option>
                                                </CustomSelect>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-7 my-6">
                                            <div>
                                                <p>Letter Casing</p>
                                                <div className="grid grid-cols-3 gap-2 text-base mt-2">
                                                    <p>AA</p>
                                                    <p>Aa</p>
                                                    <p>aa</p>
                                                </div>
                                            </div>
                                            <div>
                                                <p>Alignment</p>
                                                <div className="grid grid-cols-4 gap-2 text-base mt-2">
                                                    <LeftTextAlign className="w-5 h-5"/>
                                                    <CenterTextAlign className="w-5 h-5"/>
                                                    <RightTextAlign className="w-5 h-5"/>
                                                    <JustifyTextAlign className="w-5 h-5"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="my-5">
                                            <p>Color Picker</p>
                                            <div className="w-full rounded-xs mt-2">
                                                <ColorPicker />
                                            </div>
                                        </div>
                                        <div className="my-16 flex justify-between px-2">
                                            <div className="bg-indigo-200 mr-2 -ml-2 px-8 py-2.5 rounded-sm">Save</div>
                                            <div className="bg-primary ml-2 text-white px-8 py-2.5 rounded-sm">Publish</div>
                                        </div>



{/* 
                                        <div className="background-pallete">
                                            <div className="my-8">
                                                <div>
                                                    <CustomInput 
                                                        label="Upload an image" 
                                                        name="uploadImage" 
                                                        type="text"
                                                        placeholder="Click here to upload an image"
                                                        value={values.uploadImage}
                                                        className="md:py-48 py-40"
                                                    />
                                                </div>
                                            </div>
                                            <div className="my-5">
                                                <p>Color Picker</p>
                                                <div className="w-full rounded-xs mt-2">
                                                    <ColorPicker />
                                                </div>
                                            </div>
                                            <div>
                                                <div>
                                                    <p>Available Images</p>
                                                    <div className="grid grid-cols-3 gap-x-6 gap-y-3 mt-3 mr-3">
                                                        <div className="w-20 h-20 rounded-lg bg-indigo-100">.</div>
                                                        <div className="w-20 h-20 rounded-lg bg-indigo-100">.</div>
                                                        <div className="w-20 h-20 rounded-lg bg-indigo-100">.</div>
                                                        <div className="w-20 h-20 rounded-lg bg-indigo-100">.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="my-12 flex justify-between px-2">
                                                <div className="bg-indigo-200 -ml-2 mr-2 px-8 py-2.5 rounded-sm">Save</div>
                                                <div className="bg-primary text-white ml-2 px-8 py-2.5 rounded-sm">Publish</div>
                                            </div>
                                        </div> */}
                                    </Form>
                                 )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
            <Modal width={800} open={previewModal} onClose={() => setPreviewModal(!previewModal)}>
                <PreviewWishcard />
            </Modal>
        </div>
     );
}

export default EditWishcardLibrary;
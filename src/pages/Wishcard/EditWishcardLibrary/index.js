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


function EditWishcardLibrary() {

    const { id } = useParams();
    const [activeStep, setActiveStep] = useState(0);
    const [activeText, setActiveText] = useState(2);
    const [activeCard, setActiveCard] = useState("front");
    const [open, setOpen] = useState(false);
    const [previewModal, setPreviewModal] = useState(false);
    const [showColorPicker, setShowColorPicker] = useState(false);

    const [ chosedBgColor, setChosedBgColor ] = useState("#ffffff")
    const [ chosedTextColor, setChosedTextColor ] = useState("#ffffff")
    const [ selectedTextTransform, setSelectedTextTransform ] = useState("center")
    const [ selectedTextAlign, setSelectedTextAlign] = useState("uppercase")

    const [selectedValue, setSelectedValue] = useState('headTextWording');
    const [words, setWords] = useState({
        headTextWording: '',
        titleTextWording: '',
        footerTextWording: '',
    });
    const handleBgColorChange = (color) => setChosedBgColor(color);
    const handleTextColorChange = (color) => setChosedTextColor(color);

    const handleInputChange = (event) => {
        setWords({
          ...words,
          [selectedValue]: event.target.value
        });
      };
    
      const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
      };
    

    return ( 
        <div className="pt-4 mb-8">
            <div className="flex  justify-between">
                <div className="flex items-center text-indigo-700 font-medium max-md:mb-4 mt-6 ml-8">
                    <LeftArrowIcon className="mr-1 w-5 h-5 max-sm:w-3.5 max-lg:w-5 max-lg:h-5" />
                    <Link to="/dashboard/wishcard" className="text-lg">Back to Card</Link>
                </div>
                <div className="rounded-md flex w-60 justify-between mt-6 bg-indigo-200">
                    <button className={`py-3 w-1/2 cursor-pointer hover:bg-indigo-300 rounded-l-md ${activeCard === "front" ? "bg-primary text-white rounded-l-md" : ""}`}  onClick={() => setActiveCard("front")}>front</button>
                    <button className={`py-3 w-1/2 cursor-pointer hover:bg-indigo-300 rounded-r-md ${activeCard === "back" ?"bg-primary text-white rounded-r-md" : ""}`} onClick={() => setActiveCard("back")}>back</button>
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
                <div>
                    <Formik
                        initialValues={{
                            fontFamily: "",
                            fontWeight: "",
                            textSize: "",
                            letterSpacing: "",
                            textColorPicked: "",
                            centerImage: "",
                            imageWidth: 0,
                            imageHeight: 0,
                            backgroundChoosedImage: "",
                            backgroundUploadedImage: "",
                        }}
                        validationSchema={editWishcardLibrarySchema}
                        onSubmit={(values, { resetForm }) => {
                            console.log("Form submitted with values:", values);
                            setOpen(false);

                            resetForm();
                        }}
                    >
                         {({ values, setFieldValue, isValid, }) => (
                            <div>
                                {activeCard === "front" &&
                                    <div className="flex  justify-between mt-8 overflow-none mx-8 max-lg:mx-4 max-lg:block"  style={{backgroundImage: `url(${values.backgroundUploadedImage.name})`}}>
                                        <div className="px-6 flex justify-center items-center h-[780px] rounded-xl w-11/12 mr-4 text-center" style={{backgroundColor: chosedBgColor}}>
                                            <div>
                                                <div>
                                                    <div>
                                                        <fieldset
                                                            className={`relative h-[400px] w-[400px] flex justify-center mt-0  mx-auto cursor-pointer`}
                                                        >
                                                            {values.centerImage ? (
                                                                <div className="bg-indigo-50 flex justify-center items-center rounded-full relative w-full h-full">
                                                                    <img
                                                                        src={URL.createObjectURL(values.centerImage)}
                                                                        className={`w-[${values.imageWidth}px] h-[${values.imageHeight}px] object-cover shadow-xl rounded-full`}
                                                                        alt="Center pic"
                                                                    />
                                                                </div>
                                                            ) : (
                                                                <div className="relative w-full rounded-full">
                                                                    <div className="w-full h-full bg-indigo-50 rounded-full pt-36 text-primary">Upload an image </div>
                                                                </div>
                                                            )}
                                                
                                                        </fieldset>
                                                    </div>
                                                    {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
                                                    <h2 className={activeText === 0 ? "mt-4 bg-[#F9F9F905] p-3" : "cursor-pointer my-4"} 
                                                        onClick={() => setSelectedValue("headTextWording")}
                                                        style={
                                                          activeText === 0 ?  { color: chosedTextColor, fontSize: `${values.textSize}px`, letterSpacing: `${values.letterSpacing}px`, 
                                                               fontFamily: `${values.fontFamily}`, fontWeight: `${values.fontWeight}`, textTransform: selectedTextTransform, textAlign: selectedTextAlign }
                                                               : {alignItems: "left"}}
                                                    >
                                                        {words.headTextWording ? words.headTextWording : "Heading"}
                                                    </h2>
                                                     {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
                                                    <p className={activeText === 1 ? "mt-1  bg-[#F9F9F905] p-3" : "my-3 cursor-pointer"}
                                                     onClick={() => setSelectedValue("titleTextWording")}
                                                         style={
                                                            activeText === 1 ?  { color: chosedTextColor, fontSize: `${values.textSize}px`, letterSpacing: `${values.letterSpacing}px`, 
                                                                 fontFamily: `${values.fontFamily}`, fontWeight: `${values.fontWeight}`, textTransform: selectedTextTransform, textAlign: selectedTextAlign }
                                                                 : {alignItems: "left"}}
                                                    >
                                                        {words.titleTextWording ? words.titleTextWording : "desc"}
                                                    </p>
                                                     {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
                                                    <p className={activeText === 2 ? "mt-1 cursor-pointer bg-[#F9F9F905] p-3" : "my-3 cursor-pointer"}
                                                     onClick={() => setSelectedValue("footerTextWording")}
                                                         style={
                                                            activeText === 2 ?  { color: chosedTextColor, fontSize: `${values.textSize}px`, letterSpacing: `${values.letterSpacing}px`, 
                                                                 fontFamily: `${values.fontFamily}`, fontWeight: `${values.fontWeight}`, textTransform: selectedTextTransform, textAlign: selectedTextAlign }
                                                                 : {alignItems: "left"}}

                                                    >
                                                        {words.footerTextWording ? words.footerTextWording : "foot"}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="w-3/12 h-full max-sm:block bg-white rounded-xl lg:ml-2 lg:mr-8 px-4 py-4">
                                            <button className="w-full rounded-md flex justify-between mt-1 mb-5 border ">
                                                <button className={`py-4 w-1/3 cursor-pointer hover:bg-indigo-100 ${activeStep === 0 ? "bg-indigo-200" : ""}`}  onClick={() => setActiveStep(0)}>Tt</button>
                                                <button className={`py-4 w-1/3 cursor-pointer hover:bg-indigo-100 ${activeStep === 1 ? "bg-indigo-200" : ""}`} onClick={() => setActiveStep(1)}>Image</button>
                                                <button className={`py-4 w-1/3 cursor-pointer hover:bg-indigo-100 ${activeStep === 2 ? "bg-indigo-200" : ""}`} onClick={() => setActiveStep(2)}>BG</button>
                                            </button>
                                            <div className="text-pallete">
                                                <div>
                                                    <Form  style={{ zIndex: 0 }}>
                                                    {activeStep === 0 &&
                                                        <div>
                                                            <div className="h-">
                                                                <CustomInput 
                                                                    label="Text Box" 
                                                                    name="textWording" 
                                                                    type="text"
                                                                    placeholder="Your text here"
                                                                    value={words[selectedValue]} 
                                                                    onChange={handleInputChange} 
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
                                                                        <option value="sans-serif">San-Serif</option>
                                                                        <option value="cursive">Cursive</option>
                                                                        <option value="fantasy">Fantasy</option>
                                                                        <option value="monospace">Monospace</option>
                                                                        <option value="unset">Unset</option>
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
                                                                        <option value={8}>8</option>
                                                                        <option value={9}>9</option>
                                                                        <option value={10}>10</option>
                                                                        <option value={11}>11</option>
                                                                        <option value={12}>12</option>
                                                                        <option value={14}>14</option>
                                                                        <option value={16}>16</option>
                                                                        <option value={18}>18</option>
                                                                        <option value={20}>20</option>
                                                                        <option value={22}>22</option>
                                                                        <option value={24}>24</option>
                                                                        <option value={26}>26</option>
                                                                        <option value={28}>28</option>
                                                                        <option value={36}>36</option>
                                                                        <option value={48}>48</option>
                                                                        <option value={72}>72</option>
                                                                    </CustomSelect>
                                                                </div>
                                                                <div>
                                                                    <CustomSelect 
                                                                        name="letterSpacing" 
                                                                        label="Letter Spacing"
                                                                        value={values.letterSpacing}
                                                                    >
                                                                        <option value={2}>2</option>
                                                                        <option value={4}>4</option>
                                                                        <option value={8}>8</option>
                                                                        <option value={9}>9</option>
                                                                        <option value={10}>10</option>
                                                                        <option value={11}>11</option>
                                                                        <option value={12}>12</option>
                                                                        <option value={14}>14</option>
                                                                        <option value={16}>16</option>
                                                                        <option value={18}>18</option>
                                                                        <option value={20}>20</option>
                                                                        <option value={22}>22</option>
                                                                        <option value={24}>24</option>
                                                                    </CustomSelect>
                                                                </div>
                                                            </div>
                                                            <div className="grid grid-cols-2 gap-7 my-6">
                                                                <div>
                                                                    <p>Letter Casing</p>
                                                                    <div className="grid grid-cols-3 gap-2 text-base mt-2 cursor-pointer">
                                                                        <button onClick={() => setSelectedTextTransform("uppercase")} > <p className="hover:bg-indigo-50 p-1">AA</p></button>
                                                                        <button onClick={() => setSelectedTextTransform("capitalize")} > <p className="hover:bg-indigo-50 p-1">Aa</p></button>
                                                                        <button onClick={() => setSelectedTextTransform("lowercase")} ><p className="hover:bg-indigo-50 p-1">aa</p></button>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <p>Alignment</p>
                                                                    <div className="grid grid-cols-4 gap-2 text-base mt-2 cursor-pointer">
                                                                        <button onClick={() => setSelectedTextAlign("left")} ><LeftTextAlign className="w-5 h-5 m-1 hover:bg-indigo-50"/></button>
                                                                        <button onClick={() =>setSelectedTextAlign("center")} ><CenterTextAlign className="w-5 h-5 m-1 hover:bg-indigo-50"/></button>
                                                                        <button onClick={() =>setSelectedTextAlign("right")}><RightTextAlign className="w-5 h-5 m-1 hover:bg-indigo-50"/></button>
                                                                        <button onClick={() =>setSelectedTextAlign("justify")}><JustifyTextAlign className="w-5 h-5 m-1 hover:bg-indigo-50"/></button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="my-5">
                                                                <p>Color Picker</p>
                                                                <div className="w-full rounded-xs mt-2">
                                                                    <div 
                                                                        className="flex items-center cursor-pointer"
                                                                        onClick={() => setShowColorPicker(!showColorPicker)}
                                                                    >
                                                                        <div 
                                                                         style={{ backgroundColor: chosedTextColor && chosedTextColor || "greenyellow" }}
                                                                        className="w-6 h-6 outline outline-gray-100"
                                                                        >.</div>
                                                                        <span className="ml-2 mt-1">Select Color</span>
                                                                    </div>
                                                                    {showColorPicker && (
                                                                        <div className="mt-2">
                                                                            <ColorPicker onColorChange={handleTextColorChange} />
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            </div>
                                                            <div className="my-16 flex justify-between px-2">
                                                                <div className="bg-indigo-200 mr-2 -ml-2 px-8 py-3.5 rounded-md">Save</div>
                                                                <div className="bg-primary ml-2 text-white px-8 py-3.5 rounded-md">Publish</div>
                                                            </div>
                                                        </div>
                                                    }
                                                    </Form>

                                                    <Form>
                                                        {activeStep === 1 &&
                                                        <div className="center-image">
                                                            <div className="my-4">
                                                                <div className="relative">
                                                                    <CustomInput 
                                                                        label="Upload your image" 
                                                                        name="centermage" 
                                                                        type="text"
                                                                        placeholder="Click here to upload an image"
                                                                        value={values.centerImage.name}
                                                                        className="md:py-48 py-40"
                                                                    />
                                                                     <input
                                                                        id="centerImage"
                                                                        type="file"
                                                                        accept="image/*"
                                                                        className=" opacity-0 absolute top-0 w-full py-10 cursor-pointer h-full z-30 "
                                                                        onChange={(e) => setFieldValue("centerImage", e.target.files[0])}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="grid grid-cols-2 gap-4 my-6">
                                                                    <div className="">
                                                                        <CustomInput 
                                                                            name="imageWidth" 
                                                                            label="Image Width"
                                                                            type="string"
                                                                            value={values.imageWidth}
                                                                            placeholder="400"
                                                                        />
                                                                    </div>
                                                                    <div>
                                                                        <CustomInput 
                                                                            name="imageHeight" 
                                                                            label="Image Height"
                                                                            type="string"
                                                                            value={values.imageHeight}
                                                                            placeholder="400"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="my-12 flex justify-between px-2">
                                                                    <div className="bg-indigo-200 -ml-2 mr-2 px-8 py-3.5 rounded-md">Save</div>
                                                                    <div className="bg-primary text-white ml-2 px-8 py-3.5 rounded-md">Publish</div>
                                                                </div>
                                                        </div>
                                                        }
                                                    </Form>
                                                    
                                                    <Form>
                                                    {activeStep === 2 &&
                                                        <div className="background-pallete">
                                                            <div className="my-5">
                                                                <p>Color Picker</p>
                                                                <div className="w-full rounded-xs mt-2">
                                                                    <div 
                                                                        className="flex items-center cursor-pointer"
                                                                        onClick={() => setShowColorPicker(!showColorPicker)}
                                                                    >
                                                                        <div 
                                                                         style={{ backgroundColor: chosedTextColor && chosedTextColor || "greenyellow" }}
                                                                        className="w-6 h-6 outline outline-gray-100"
                                                                        >.</div>
                                                                        <span className="ml-2 mt-1">Select Color</span>
                                                                    </div>
                                                                    {showColorPicker && (
                                                                        <div className="mt-2">
                                                                            <ColorPicker onColorChange={handleTextColorChange} />
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div>
                                                                    <p>Available Images:</p>
                                                                    <div className="flex flex-wrap gap-x-5 gap-y-3 mt-3">
                                                                        <div className="w-20 h-20 rounded-lg bg-indigo-100">.</div>
                                                                        <div className="w-20 h-20 rounded-lg bg-indigo-100">.</div>
                                                                        <div className="w-20 h-20 rounded-lg bg-indigo-100">.</div>
                                                                        <div className="w-20 h-20 rounded-lg bg-indigo-100">.</div>
                                                                        <div className="w-20 h-20 rounded-lg bg-indigo-100">.</div>
                                                                        <div className="w-20 h-20 rounded-lg bg-indigo-100">.</div>
                                                                        <div className="w-20 h-20 rounded-lg bg-indigo-100">.</div>
                                                                        <div className="w-20 h-20 rounded-lg bg-indigo-100">.</div>
                                                                        <div className="w-20 h-20 rounded-lg bg-indigo-100">.</div>
                                                                        <div className="w-20 h-20 rounded-lg bg-indigo-100">.</div>
                                                                        <div className="w-20 h-20 rounded-lg bg-indigo-100">.</div>
                                                                        <div className="w-20 h-20 rounded-lg bg-indigo-100">.</div>
                                                                        <div className="w-20 h-20 rounded-lg bg-indigo-100">.</div>
                                                                        <div className="w-20 h-20 rounded-lg bg-indigo-100">.</div>
                                                                        <div className="w-20 h-20 rounded-lg bg-indigo-100">.</div>
                                                                        <div className="w-20 h-20 rounded-lg bg-indigo-100">.</div>
                                                                        <div className="w-20 h-20 rounded-lg bg-indigo-100">.</div>
                                                                        <div className="w-20 h-20 rounded-lg bg-indigo-100">.</div>
                                                                        <div className="w-20 h-20 rounded-lg bg-indigo-100">.</div>
                                                                        <div className="w-20 h-20 rounded-lg bg-indigo-100">.</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="my-12 flex justify-between px-2">
                                                                <div className="bg-indigo-200 -ml-2 mr-2 px-8 py-3.5 rounded-md">Save</div>
                                                                <div className="bg-primary text-white ml-2 px-8 py-3.5 rounded-md">Publish</div>
                                                            </div>
                                                        </div> }
                                                    </Form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                    )}
                    </Formik>
                </div>
                <div>
                {activeCard === "back" &&
                    <div className="flex justify-between mt-8 overflow-none mx-8 max-lg:mx-4 max-lg:block">
                        <div className="bg-white px-6 flex justify-center items-center h-[780px] rounded-xl w-11/12 mr-4 text-center">
                            <div>first back</div>
                        </div>
                        <div className="w-3/12 h-full max-sm:block bg-white rounded-xl lg:ml-2 lg:mr-8 px-4 py-4">
                            <div>second back</div>
                        </div>
                    </div>
                }
                </div>
            </div>
            <Modal width={800} open={previewModal} onClose={() => setPreviewModal(!previewModal)}>
                <PreviewWishcard />
            </Modal>
        </div>
     );
}

export default EditWishcardLibrary;
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
import profilePix from "../../../assets/images/profile2.jpeg"

function EditWishcardLibrary() {

    const { id } = useParams();
    const [activeStep, setActiveStep] = useState(0);
    const [activeCard, setActiveCard] = useState("front");
    const [activeBgTab, setActiveBgTab] = useState("color")
    const [open, setOpen] = useState(false);
    const [previewModal, setPreviewModal] = useState(false);
    const [showColorPicker, setShowColorPicker] = useState(false);
    const [selectedValue, setSelectedValue] = useState('titleTextWording');

    const [ chosedBgColor, setChosedBgColor ] = useState("#ffffff")
    const [ backChosedBgColor, setBackChosedBgColor ] = useState("#271F6B")

    const [words, setWords] = useState({
        headTextWording: { 
            text: 'Congrats!', 
            fontFamily: 'cursive',
            fontWeight: '',
            textSize: '36',
            letterSpacing: '-2',
            textColor: '#000000',
            textTransform: 'capitalize',
            textAlign: "center",
        },
        backHeadTextWording: { 
            text: 'Congratulations', 
            fontFamily: 'cursive',
            fontWeight: '',
            textSize: '52',
            letterSpacing: '-2',
            textColor: '#ffffff',
            textTransform: 'capitalize',
            textAlign: "center",
        },
        titleTextWording: { 
            text: 'IFEOLUWA + UNKNOWN', 
            fontFamily: 'sans',
            fontWeight: '700',
            textSize: '20',
            letterSpacing: '2',
            textColor: '#000000',
            textTransform: 'uppercase',
            textAlign: "center",
        },
        backFooterTextWording: { 
            text: 'Ifeoluwa + Unknown', 
            fontFamily: '',
            fontWeight: '',
            textSize: '22',
            letterSpacing: '0',
            textColor: '#ffffff',
            textTransform: 'lowercase',
            textAlign: "center",
        },
        footerTextWording: { 
            text: 'AND BEST WISHES FOR MUCH HAPPINESS TOGETHER.', 
            fontFamily: 'sans-serif',
            fontWeight: '',
            textSize: '24',
            letterSpacing: '',
            textColor: '#000000',
            textTransform: 'uppercase',
            textAlign: "center",
        }});

    const handleTabClick = (tab) => {
        setActiveBgTab(tab);
    };
    
    const [imageProperty, setImageProperty] = useState({
        centerImage: null,
        imageWidth: 0,
        imageHeight: 0,
        bgImage: null,
        backBgImage: null,
    })
    const [bgImage, setBgImage] = useState(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (uploadEvent) => {
            setChosedBgColor(`url(${uploadEvent.target.result})`);
          };
          reader.readAsDataURL(file);
        }
      };

      const handleBackImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (uploadEvent) => {
            setBackChosedBgColor(`url(${uploadEvent.target.result})`);
          };
          reader.readAsDataURL(file);
        }
      };
    

    const handleBgColorChange = (color) => setChosedBgColor(color);
    const handleBackBgColorChange = (color) => setBackChosedBgColor(color);
  
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setWords(prevWords => ({
          ...prevWords,
          [selectedValue]: {
            ...prevWords[selectedValue],
            [name]: value
          }
        }));
    };

    const handleTextColorChange = (color) => {
        setWords(prevWords => ({
          ...prevWords,
          [selectedValue]: {
            ...prevWords[selectedValue],
            textColor: color
          }
        }))
    };

    const handleCaseChange = (caseName) => {
        setWords(prevWords => ({
          ...prevWords,
          [selectedValue]: {
            ...prevWords[selectedValue],
            textTransform: caseName
          }
        }));
    };

    const handleAlignChange = (alignName) => {
        setWords(prevWords => ({
          ...prevWords,
          [selectedValue]: {
            ...prevWords[selectedValue],
            textAlign: alignName
          }
        }));
    };

    const handleImageSize = (event) => {
        const {name, value} = event.target
        setImageProperty(prevProperty => ({
          ...prevProperty,
          [name]: value
        }));
    };
  
    return ( 
        <div className="pt-4 mb-8">
            <div className="flex  justify-between">
                <div className="flex items-center text-indigo-700 font-medium max-md:mb-4 mt-6 ml-8">
                    <LeftArrowIcon className="mr-1 w-5 h-5 max-sm:w-3.5 max-lg:w-5 max-lg:h-5" />
                    <Link to="/dashboard/wishcard" className="text-lg">Back to Card</Link>
                </div>
                <div className="rounded-md flex w-60 justify-between mt-6 bg-indigo-200">
                    <button className={`py-3 w-1/2 cursor-pointer hover:text-white hover:bg-indigo-900 rounded-l-md ${activeCard === "front" ? "bg-primary text-white rounded-l-md" : ""}`}  onClick={() => setActiveCard("front")}>front</button>
                    <button className={`py-3 w-1/2 cursor-pointer hover:text-white hover:bg-indigo-900 rounded-r-md ${activeCard === "back" ?"bg-primary text-white rounded-r-md" : ""}`} onClick={() => setActiveCard("back")}>back</button>
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
                            centerImage: "",
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
                                    <div className="flex  justify-between mt-8 overflow-none mx-8 max-lg:mx-4 max-lg:block">
                                        <div className="px-6 flex justify-center items-center h-[780px] rounded-xl w-11/12 mr-4 text-center" style={{ background: chosedBgColor, backgroundSize: 'cover', backgroundPosition: 'cover'}}>
                                            <div>
                                                <div>
                                                    <div>
                                                        <fieldset
                                                            className={`relative h-[400px] w-[400px] flex justify-center mt-0  mx-auto cursor-pointer`}
                                                        >
                                                            {values.centerImage ? (
                                                                <div className={`bg-indigo-50 flex justify-center items-center rounded-full relative w-full h-full`}>
                                                                    <img
                                                                        src={URL.createObjectURL(values.centerImage)}
                                                                        className={`w-80 h-80 w-[${imageProperty.imageWidth}px] h-[${imageProperty.imageHeight}px] object-cover shadow-xl rounded-full`}
                                                                        alt="Center pic"
                                                                    />
                                                                </div>
                                                            ) : (
                                                                <div className="relative w-full rounded-full">
                                                                    <div className="flex justify-center items-center w-full h-full bg-indigo-50 rounded-full text-primary"><img src={profilePix} alt="mm" className="opacity-80 w-10/12 rounded-full"/></div>
                                                                </div>
                                                            )}
                                                
                                                        </fieldset>
                                                    </div>
                                                    {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
                                                    <h2 onClick={() => setSelectedValue("headTextWording")}
                                                        style={{ color: words.headTextWording.textColor, fontSize: `${words.headTextWording.textSize}px`, letterSpacing: `${words.headTextWording.letterSpacing}px`, 
                                                            fontFamily: `${words.headTextWording.fontFamily}`, fontWeight: `${words.headTextWording.fontWeight}`, textTransform: words.headTextWording.textTransform, textAlign: words.headTextWording.textAlign }
                                                        }
                                                        className={`mt-6 ${selectedValue === "headTextWording" ? "py-2 bg-[#271F6B09]" : " cursor-pointer"}`}
                                                    >
                                                        {words.headTextWording.text ? words.headTextWording.text : "Heading"}
                                                    </h2>
                                                    {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
                                                    <p  onClick={() => setSelectedValue("titleTextWording")}
                                                        style={{ color: words.titleTextWording.textColor, fontSize: `${words.titleTextWording.textSize}px`, letterSpacing: `${words.titleTextWording.letterSpacing}px`, 
                                                                fontFamily: `${words.titleTextWording.fontFamily}`, fontWeight: `${words.titleTextWording.fontWeight}`, textTransform: words.titleTextWording.textTransform, textAlign: words.titleTextWording.textAlign }
                                                        }
                                                        className={`mt-4 ${selectedValue === "titleTextWording" ? "py-2 bg-[#271F6B09]" : " cursor-pointer"}`}
                                                    >
                                                        {words.titleTextWording.text ? words.titleTextWording.text : "Description"}
                                                    </p>
                                                    {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
                                                    <p  onClick={() => setSelectedValue("footerTextWording")}
                                                        style={{ color: words.footerTextWording.textColor, fontSize: `${words.footerTextWording.textSize}px`, letterSpacing: `${words.footerTextWording.letterSpacing}px`, 
                                                                fontFamily: `${words.footerTextWording.fontFamily}`, fontWeight: `${words.footerTextWording.fontWeight}`, textTransform: words.footerTextWording.textTransform, textAlign: words.footerTextWording.textAlign }
                                                        }
                                                        className={`my-4 mx-auto leading-5 ${selectedValue === "footerTextWording" ? "px-2 py-2 bg-[#271F6B09]" : " cursor-pointer"}`}
                                                    >
                                                        {words.footerTextWording.text ? words.footerTextWording.text : "footer"}
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
                                                                    name="text" 
                                                                    type="text"
                                                                    maxLength={150}
                                                                    placeholder="Your text here"
                                                                    value={words[selectedValue].text} 
                                                                    onChange={handleInputChange} 
                                                                    className="md:py-48 py-40"
                                                                />
                                                            </div>
                                                            <div className="grid grid-cols-2 gap-4 my-6">
                                                                <div className="">
                                                                    <CustomSelect 
                                                                        name="fontFamily" 
                                                                        label="Font Picker"
                                                                        value={words[selectedValue].fontFamily}
                                                                        onChange={handleInputChange}
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
                                                                        value={words[selectedValue].fontWeight}
                                                                        onChange={handleInputChange}
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
                                                                        value={words[selectedValue].textSize}
                                                                        onChange={handleInputChange}
                                                                    >
                                                                        np<option value={8}>8</option>
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
                                                                        value={words[selectedValue].letterSpacing}
                                                                        onChange={handleInputChange}
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
                                                                        <button onClick={() => handleCaseChange("uppercase")} > <p className="hover:bg-indigo-100 p-1">AA</p></button>
                                                                        <button onClick={() => handleCaseChange("capitalize")} > <p className="hover:bg-indigo-50 p-1">Aa</p></button>
                                                                        <button onClick={() => handleCaseChange("lowercase")} ><p className="hover:bg-indigo-50 p-1">aa</p></button>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <p>Alignment</p>
                                                                    <div className="grid grid-cols-4 gap-2 text-base mt-2 cursor-pointer">
                                                                        <button onClick={() => handleAlignChange('left')} ><LeftTextAlign className="w-5 h-5 m-1 hover:bg-indigo-50"/></button>
                                                                        <button onClick={() => handleAlignChange("center")} ><CenterTextAlign className="w-5 h-5 m-1 hover:bg-indigo-50"/></button>
                                                                        <button onClick={() => handleAlignChange("right")}><RightTextAlign className="w-5 h-5 m-1 hover:bg-indigo-50"/></button>
                                                                        <button onClick={() => handleAlignChange("justify")}><JustifyTextAlign className="w-5 h-5 m-1 hover:bg-indigo-50"/></button>
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
                                                                        
                                                                        className="w-6 h-6 outline bg-[#f0f0f0] outline-gray-100"
                                                                        >.</div>
                                                                        <span className="ml-2 mt-1">Select Color</span>
                                                                    </div>
                                                                    {showColorPicker && (
                                                                        <div className="mt-2">
                                                                            <ColorPicker 
                                                                            name="textColor"
                                                                            onColorChange={handleTextColorChange}
                                                                             />
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
                                                                        label={values.centerImage ? "Change your image" : "Upload an image"} 
                                                                        name="centerImage" 
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
                                                                            value={imageProperty.imageWidth}
                                                                            placeholder="400"
                                                                            onChange={handleImageSize}
                                                                        />
                                                                    </div>
                                                                    <div>
                                                                        <CustomInput 
                                                                            name="imageHeight" 
                                                                            label="Image Height"
                                                                            type="string"
                                                                            value={imageProperty.imageHeight}
                                                                            placeholder="400"
                                                                            onChange={handleImageSize}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                
                                                                <div className="max-h-[300px] overflow-y-scroll mt-5">
                                                                    <p>Available Textures:</p>
                                                                    <div className="flex cursor-pointer flex-wrap gap-x-5 text-indigo-100 gap-y-3 mt-3">
                                                                        <div className="w-20 h-20 rounded-lg bg-indigo-100">.</div>
                                                                        <div className="w-20 h-20 rounded-lg bg-indigo-100">.</div>
                                                                        <div className="w-20 h-20 rounded-lg bg-indigo-100">.</div>
                                                                        <div className="w-20 h-20 rounded-lg bg-indigo-100">.</div>
                                                                        <div className="w-20 h-20 rounded-lg bg-indigo-100">.</div>
                                                                        <div className="w-20 h-20 rounded-lg bg-indigo-100">.</div>
                                                                        <div className="w-20 h-20 rounded-lg bg-indigo-100">.</div>
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
                                                            <div className="flex justify-between mx-4 cursor-pointer border">
                                                                <div className={`py-2 text-center ${activeBgTab === 'color' ? 'bg-blue-100' : ''}`} onClick={() => handleTabClick('color')}>
                                                                Choose Color
                                                                </div>
                                                                <div className={`py-2 text-center ${activeBgTab === 'texture' ? 'bg-blue-100' : ''}`} onClick={() => handleTabClick('texture')}>
                                                                Available Image
                                                                </div>
                                                                <div className={`py-2 text-center ${activeBgTab === 'image' ? 'bg-blue-100' : ''}`} onClick={() => handleTabClick('image')}>
                                                                Upload Image
                                                                </div>
                                                            </div>
                                                            {
                                                                activeBgTab === 'color' && (
                                                                <div className="my-5">
                                                                    <p>Color Picker</p>
                                                                    <div className="w-full rounded-xs mt-2">
                                                                        <div 
                                                                            className="flex items-center cursor-pointer"
                                                                            onClick={() => setShowColorPicker(!showColorPicker)}
                                                                        >
                                                                            <div 
                                                                            style={{ backgroundColor: chosedBgColor && chosedBgColor || "greenyellow" }}
                                                                            className="w-6 h-6 outline outline-gray-100"
                                                                            >.</div>
                                                                            <span className="ml-2 mt-1">Select Color</span>
                                                                        </div>
                                                                        {showColorPicker && (
                                                                            <div className="mt-2">
                                                                                <ColorPicker onColorChange={handleBgColorChange} />
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            )}
                                                            <div>
                                                            {
                                                                activeBgTab === 'texture' && (
                                                                <div className="mt-4 max-h-[400px]  overflow-y-scroll">
                                                                    <p>Available Images:</p>
                                                                    <div className="flex flex-wrap text-indigo-100 gap-x-5 gap-y-3 mt-3">
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
                                                            )}
                                                            {
                                                                activeBgTab === 'image' && (
                                                                <div className="my-4">
                                                                    <div className="relative">
                                                                        <CustomInput 
                                                                            label={imageProperty.bgImage ? "Change your image" : "Upload an image"} 
                                                                            name="centermage" 
                                                                            type="text"
                                                                            placeholder="Click here to upload an image"
                                                                            value={imageProperty.bgImage}
                                                                            className="md:py-48 py-40"
                                                                        />
                                                                        <div className="absolute top-14 opacity-0">
                                                                            <input type="file" accept="image/*" onChange={handleImageUpload} />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )}
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
                    <Formik
                        validationSchema={editWishcardLibrarySchema}
                        onSubmit={(values, { resetForm }) => {
                            console.log("Form submitted with values:", values);
                            setOpen(false);

                            resetForm();
                        }}
                    >
                        {({ values, setFieldValue, isValid, }) => (
                            <div>
                                {activeCard === "back" &&
                                    <div className="flex justify-between mt-8 overflow-none mx-8 max-lg:mx-4 max-lg:block">
                                        <div className="bg-white px-6 flex justify-center items-center h-[780px] rounded-xl w-11/12 mr-4 text-center" style={{ background: backChosedBgColor, backgroundSize: 'cover', backgroundPosition: 'cover'}}>
                                            <div>
                                                <div>
                                                    {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
                                                    <h2 onClick={() => setSelectedValue("backHeadTextWording")}
                                                        style={{ color: words.backHeadTextWording.textColor, fontSize: `${words.backHeadTextWording.textSize}px`, letterSpacing: `${words.backHeadTextWording.letterSpacing}px`, 
                                                            fontFamily: `${words.backHeadTextWording.fontFamily}`, fontWeight: `${words.backHeadTextWording.fontWeight}`, textTransform: words.backHeadTextWording.textTransform, textAlign: words.backHeadTextWording.textAlign }
                                                        }
                                                        className={`mt-6 ${selectedValue === "backHeadTextWording" ? "py-4 bg-[#271F6B09]" : " cursor-pointer"}`}
                                                    >
                                                        {words.backHeadTextWording.text ? words.backHeadTextWording.text : "Heading"}
                                                    </h2>
                                                    {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
                                                    {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
                                                    <p  onClick={() => setSelectedValue("backFooterTextWording")}
                                                        style={{ color: words.backFooterTextWording.textColor, fontSize: `${words.backFooterTextWording.textSize}px`, letterSpacing: `${words.backFooterTextWording.letterSpacing}px`, 
                                                                fontFamily: `${words.backFooterTextWording.fontFamily}`, fontWeight: `${words.backFooterTextWording.fontWeight}`, textTransform: words.backFooterTextWording.textTransform, textAlign: words.backFooterTextWording.textAlign }
                                                        }
                                                        className={`my-8 mx-auto leading-5 ${selectedValue === "backFooterTextWording" ? "px-2 py-4 bg-[#271F6B09]" : " cursor-pointer"}`}
                                                    >
                                                        {words.backFooterTextWording.text ? words.backFooterTextWording.text : "footer"}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-3/12 h-full max-sm:block bg-white rounded-xl lg:ml-2 lg:mr-8 px-4 py-4">
                                            <button className="w-full rounded-md flex justify-between mt-1 mb-5 border ">
                                                <button className={`py-4 w-2/3 cursor-pointer hover:bg-indigo-100 ${activeStep === 0 ? "bg-indigo-200" : ""}`}  onClick={() => setActiveStep(0)}>Tt</button>
                                                <button className={`py-4 w-2/3 cursor-pointer hover:bg-indigo-100 ${activeStep === 2 ? "bg-indigo-200" : ""}`} onClick={() => setActiveStep(2)}>BG</button>
                                            </button>
                                            <div className="text-pallete">
                                                <div>
                                                    <Form  style={{ zIndex: 0 }}>
                                                    {activeStep === 0 &&
                                                        <div>
                                                            <div className="h-">
                                                                <CustomInput 
                                                                    label="Text Box" 
                                                                    name="text" 
                                                                    type="text"
                                                                    maxLength={100}
                                                                    placeholder="Your text here"
                                                                    value={words[selectedValue].text} 
                                                                    onChange={handleInputChange} 
                                                                    className="md:py-48 py-40"
                                                                />
                                                            </div>
                                                            <div className="grid grid-cols-2 gap-4 my-6">
                                                                <div className="">
                                                                    <CustomSelect 
                                                                        name="fontFamily" 
                                                                        label="Font Picker"
                                                                        value={words[selectedValue].fontFamily}
                                                                        onChange={handleInputChange}
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
                                                                        value={words[selectedValue].fontWeight}
                                                                        onChange={handleInputChange}
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
                                                                        value={words[selectedValue].textSize}
                                                                        onChange={handleInputChange}
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
                                                                        value={words[selectedValue].letterSpacing}
                                                                        onChange={handleInputChange}
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
                                                                        <button onClick={() => handleCaseChange("uppercase")} > <p className="hover:bg-indigo-100 p-1">AA</p></button>
                                                                        <button onClick={() => handleCaseChange("capitalize")} > <p className="hover:bg-indigo-50 p-1">Aa</p></button>
                                                                        <button onClick={() => handleCaseChange("lowercase")} ><p className="hover:bg-indigo-50 p-1">aa</p></button>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <p>Alignment</p>
                                                                    <div className="grid grid-cols-4 gap-2 text-base mt-2 cursor-pointer">
                                                                        <button onClick={() => handleAlignChange('left')} ><LeftTextAlign className="w-5 h-5 m-1 hover:bg-indigo-50"/></button>
                                                                        <button onClick={() => handleAlignChange("center")} ><CenterTextAlign className="w-5 h-5 m-1 hover:bg-indigo-50"/></button>
                                                                        <button onClick={() => handleAlignChange("right")}><RightTextAlign className="w-5 h-5 m-1 hover:bg-indigo-50"/></button>
                                                                        <button onClick={() => handleAlignChange("justify")}><JustifyTextAlign className="w-5 h-5 m-1 hover:bg-indigo-50"/></button>
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
                                                                        
                                                                        className="w-6 h-6 outline bg-[#f0f0f0] outline-gray-100"
                                                                        >.</div>
                                                                        <span className="ml-2 mt-1">Select Color</span>
                                                                    </div>
                                                                    {showColorPicker && (
                                                                        <div className="mt-2">
                                                                            <ColorPicker 
                                                                            name="textColor"
                                                                            onColorChange={handleTextColorChange}
                                                                             />
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
                                                    {activeStep === 2 &&
                                                        <div className="background-pallete">
                                                            <div className="flex justify-between mx-4 cursor-pointer border">
                                                                <div className={`py-2 text-center ${activeBgTab === 'color' ? 'bg-blue-100' : ''}`} onClick={() => handleTabClick('color')}>
                                                                Choose Color
                                                                </div>
                                                                <div className={`py-2 text-center ${activeBgTab === 'texture' ? 'bg-blue-100' : ''}`} onClick={() => handleTabClick('texture')}>
                                                                Available Image
                                                                </div>
                                                                <div className={`py-2 text-center ${activeBgTab === 'image' ? 'bg-blue-100' : ''}`} onClick={() => handleTabClick('image')}>
                                                                Upload Image
                                                                </div>
                                                            </div>
                                                            {
                                                                activeBgTab === 'color' && (
                                                                <div className="my-5">
                                                                    <p>Color Picker</p>
                                                                    <div className="w-full rounded-xs mt-2">
                                                                        <div 
                                                                            className="flex items-center cursor-pointer"
                                                                            onClick={() => setShowColorPicker(!showColorPicker)}
                                                                        >
                                                                            <div 
                                                                            style={{ backgroundColor: backChosedBgColor && backChosedBgColor || "greenyellow" }}
                                                                            className="w-6 h-6 outline outline-gray-100"
                                                                            >.</div>
                                                                            <span className="ml-2 mt-1">Select Color</span>
                                                                        </div>
                                                                        {showColorPicker && (
                                                                            <div className="mt-2">
                                                                                <ColorPicker onColorChange={handleBackBgColorChange} />
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            )}
                                                            <div>
                                                            {
                                                                activeBgTab === 'texture' && (
                                                                <div className="mt-4 max-h-[400px]  overflow-y-scroll">
                                                                    <p>Available Images:</p>
                                                                    <div className="flex flex-wrap text-indigo-100 gap-x-5 gap-y-3 mt-3">
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
                                                            )}
                                                            {
                                                                activeBgTab === 'image' && (
                                                                <div className="my-4">
                                                                    <div className="relative">
                                                                        <CustomInput 
                                                                            label={imageProperty.backBgImage ? "Change your image" : "Upload an image"} 
                                                                            name="centermage" 
                                                                            type="text"
                                                                            placeholder="Click here to upload an image"
                                                                            value={imageProperty.backBgImage}
                                                                            className="md:py-48 py-40"
                                                                        />
                                                                        <div className="absolute top-14 opacity-0">
                                                                            <input type="file" accept="image/*" onChange={handleBackImageUpload} />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )}
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
            </div>
            <Modal width={800} open={previewModal} onClose={() => setPreviewModal(!previewModal)}>
                <PreviewWishcard />
            </Modal>
        </div>
     );
}

export default EditWishcardLibrary;
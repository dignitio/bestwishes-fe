import React, { useEffect, useRef, useState } from "react";
import { Formik } from "formik";
import Modal from "components/Modal";
import Button from "components/Button";
// import contributions from "layout/Lists/contributions";
import images from "layout/Lists/images";
import WishItems from "layout/Lists/wishlist";
import ImageModal from "pages/GuestPage/Image-modal";
import CustomInput from "components/CustomFormInputs/CustomInput";
import CustomTextArea from "components/CustomFormInputs/CustomTextArea";
import WishListModal from "pages/GuestPage/wishlistModal";
import ShareIcon from "assets/icons/shareIcon.svg";
import rectangle from "assets/images/rectangle.png";
import tributeImage from "assets/images/tributeimage.jpeg";
import wishlistImage from "assets/images/wishlistimage.jpeg";
import dog1 from "assets/Rectangle 6.png";
import dog2 from "assets/Rectangle 8.png";
import dog3 from "assets/Rectangle 9.png";
import upload from "assets/images/upload.svg";
import girl from "assets/girl3.webp";
import arrowUp from "assets/icons/arrow-up.png";
import uploadIcon from "assets/icons/upload.png";
import { useNavigate } from "react-router-dom";
import Dragdrop from "components/dragdrop";
import googleIcon from "assets/icons/googleicon.png";
import fbIcon from "assets/icons/facebookIcon.png";
import write from "assets/icons/edit.svg";
import eyeIcon from "assets/icons/eye.svg";
import smsIcon from "assets/images/sms.svg";
import whatsappIcon from "assets/images/whatsapp.svg";
import twitter from "assets/images/twitter.svg";
import IGIcon from "assets/images/instagram.png";
import note from "assets/images/writing.png";
import wreath from "assets/images/wreath.png";
import heart from "assets/images/heart.png";
import flower from "assets/images/flower.png";
import candle from "assets/images/candle.png";
import emailIcon from "assets/images/email-icon.png";
import downloadIcon from "assets/icons/download.png"

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  InstapaperShareButton,
  InstapaperIcon,
} from "react-share";

function Home() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [openCreateTribute, setOpenCreateTribute] = useState(false);
  const [openImageGallery, setOpenImageGallery] = useState(false);
  const [selectedWishlist, setSelectedWishlist] = useState();
  const [fileUploaded, setFileUploaded] = useState(false);
  const [expandText, setExpandText] = useState(false);
  const componentRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [Droppedimages, setDroppedImages] = useState([]);
  const [isFuneral, setIsFuneral] = useState(true);
  const [isOthers, setIsOthers] = useState(false);
  const [isActive, setIsActive] = useState(null);
  const [selections, setSelections] = useState([]);
  const [contributions, setContributions] = useState([]);
  const [selectedContribution, setSelectedContribution] = useState(null);
  const shareUrl = "https://yourwebsite.com";
  const title = "Check out this amazing website!";

  const handleSelection = (type) => {
    setIsActive(type);
  };

  const handleFormSubmit = (values, resetForm) => {
    const newContribution = {
      type: isActive,
      fullName: values.fullName,
      email: values.email,
      description: values.Tribute,
      images: values.TributeImages,
      initial: values.fullName.charAt(0).toUpperCase(), // Assuming you want initials from the fullName
    };

    setContributions((prevContributions) => {
      const updatedSelections = [...prevContributions, newContribution];
      console.log(updatedSelections); // Log the updated state
      return updatedSelections;
    });

    resetForm();
    setIsActive(null);
  };

  const scrollToComponent = () => {
    componentRef.current.scrollIntoView({ behavior: "smooth" });
  };

  function handleImageModal() {
    setOpenImageGallery(!openImageGallery);
    // setSelectedWishlist(item);
  }

  const dateArray = [
    {
      birthdate: "May 23rd, 1982",
      deathdate: "October 28th, 2022",
    },
    // Add more objects if needed
  ];

  const uploadedPictures = [
    {
      image: dog1,
      angle: "rotate-0",
    },
    {
      image: dog2,
      angle: "rotate-12",
    },
    {
      image: dog3,
      angle: "rotate-45",
    },
    {
      image: girl,
      angle: "-rotate-12",
    },
    {
      image: dog3,
      angle: "rotate-45",
    },
    {
      image: girl,
      angle: "-rotate-12",
    },
    {
      image: dog2,
      angle: "rotate-12",
    },
    {
      image: dog3,
      angle: "rotate-45",
    },
    {
      image: girl,
      angle: "-rotate-12",
    },
    {
      image: dog3,
      angle: "rotate-45",
    },
    {
      image: girl,
      angle: "-rotate-12",
    },
    {
      image: dog3,
      angle: "rotate-45",
    },
    {
      image: girl,
      angle: "-rotate-12",
    },
    {
      image: dog2,
      angle: "rotate-12",
    },
    {
      image: dog3,
      angle: "rotate-45",
    },
    {
      image: girl,
      angle: "-rotate-12",
    },
    {
      image: dog3,
      angle: "rotate-45",
    },
    {
      image: girl,
      angle: "-rotate-12",
    },
    {
      image: dog3,
      angle: "rotate-45",
    },
    {
      image: girl,
      angle: "-rotate-12",
    },
    {
      image: dog2,
      angle: "rotate-12",
    },
    {
      image: dog3,
      angle: "rotate-45",
    },
    {
      image: girl,
      angle: "-rotate-12",
    },
    {
      image: dog3,
      angle: "rotate-45",
    },
    {
      image: girl,
      angle: "-rotate-12",
    },
  ];

  const carousel = () => {
    if (currentIndex === uploadedPictures.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(carousel, 2000);

    // Cleanup function to clear the interval when the component unmounts or when dependencies change
    return () => clearInterval(intervalId);
  }, [currentIndex, uploadedPictures.length]);

  function handleDonate() {
    setOpenCreateTribute(!openCreateTribute);
    setSelectedWishlist();
  }

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    const scrollListener = () => {
      handleScroll();
    };

    window.addEventListener("scroll", scrollListener);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const BirthDeathDate = [
    {
      Bdate: "May 23rd",
      Byear: 1982,
      Ddate: "October 28th",
      Dyear: 2022,
    },
  ];

  // Calculate age for each person
  const ages = BirthDeathDate.map((person) => {
    return person.Dyear - person.Byear;
  });

  // console.log(ages); // Output: [40]

  // If you want to access the age of the first person in the array
  const age = BirthDeathDate[0].Dyear - BirthDeathDate[0].Byear;

  const Upload = <input type="file" id="fileUpload" />;

  const funeral = [
    { icon: candle, writeup: "Light a Candle", type: "candle" },
    { icon: wreath, writeup: "Lay a Wreath", type: "wreath" },
    { icon: note, writeup: "Leave a Note", type: "note" },
  ];
  const others = [
    { icon: flower, writeup: "Leave a Flower", type: "flower" },
    {
      icon: heart,
      writeup: "Leave a Heart",
      type: "heart",
    },
    {
      icon: note,
      writeup: "Leave a Note",
      type: "note",
    },
  ];

 
  const getIconByType = (type) => {
    const foundInFuneral = funeral.find((item) => item.type === type);
    if (foundInFuneral) return foundInFuneral.icon;

    const foundInOthers = others.find((item) => item.type === type);
    if (foundInOthers) return foundInOthers.icon;

    return null; // Default case if no icon is found
  };

  const getRotation = (index) => {
    const rotations = [-10, -5, 0, 5, 10]; // Example rotation angles
    return rotations[index % rotations.length];
  };

  const handleInvite = () => {
    const emailSubject = encodeURIComponent("Invitation to ...");
    const emailBody = encodeURIComponent("Hello!\n\nWe would like to invite you to ...");

    const mailtoLink = `mailto:?subject=${emailSubject}&body=${emailBody}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="font-nunito">
      <div
        onClick={scrollToTop}
        className={`bg-indigo-100 w-[50px] h-[50px] rounded-full cursor-pointer flex justify-center items-center fixed bottom-[20px] right-[50px] ${isVisible ? "opacity-1 transition-opacity duration-500 ease-in-out" : "opacity-0"}`}
      >
        <img className="w-[25px] h-[25px]" src={arrowUp} alt="arrow-up" />
      </div>
      <h1 className="text-[24px] font-dancing font-[700] text-center p-[30px] text-[24px] lg:text-[60px]">
        Celebration of Life
      </h1>
      <div className="w-[100%] font-nunito">
        <img className="w-full h-[100px] lg:h-[300px]" src={rectangle} alt="background" />
        <div className="px-5 flex md:flex-col items-center gap-[66px] md:gap-[4px] justify-between md:justify-center relative h-[130px] lg:h-[300px]">
          <div className="absolute top-[-50px] lg:top-[-125px] flex flex-col gap-[17px] md:justify-center md:items-center">
            <img
              className="w-[100px] h-[100px] lg:w-[250px] lg:h-[250px] rounded-full"
              src={tributeImage}
              alt="profilepic"
            />
            <div className=" flex flex-col gap-[4px] md:text-center">
              <p className="font-bold text-[18px] lg:text-[40px]">Benson John </p>
              {BirthDeathDate.map((person, DobIndex) => (
                <div className="flex flex-col gap-[2px]" key={DobIndex}>
                  <p className="text-[16px] lg:text-[32px] font-semibold lg:font-bold ">
                    {`${person.Bdate}, ${person.Byear}`} - {`${person.Ddate}, ${person.Dyear}`}
                  </p>
                  <p className="text-[14px] lg:text-[20px] font-[600]">
                    ({person.Dyear - person.Byear} years old)
                  </p>
                </div>
              ))}
            </div>
            <button
              onClick={scrollToComponent}
              className="flex gap-[5px] md:gap-[10px] items-center justify-center text-black border border-black p-3 w-[160px] md:w-[160px] font-[600] rounded-md hover:transform hover:scale-90"
            >
              <img src={write} alt="write-icon" className="w-[20px]" />
              <p className="text-[13px]">Leave a Tribute</p>
            </button>
          </div>
          <div className="flex md:hidden gap-[10px] text-white absolute right-[20px] top-[24px]">
            <button
              className="font-[14px] bg-primary p-2 px-[24px] rounded-md"
              onClick={() => navigate("/guest-wishlist")}
            >
              Wishlist
            </button>
            <button
              className="font-[14px] p-2 px-[24px] text-primary font-medium bg-indigo-100 outline-none border-primary rounded-md cursor-pointer"
              onClick={() => handleDonate()}
            >
              Donate
            </button>
          </div>
        </div>
      </div>
      <div className="xl:grid xl:grid-cols-12 flex flex-col gap-[58px] px-[15px] xl:px-[80px] mt-[100px]">
        <div className="xl:col-span-8 flex flex-col gap-[32px] ">
          <div className="bg-white md:px-[40px] md:py-[28px] py-[24px] px-[19px] rounded-md flex flex-col justify-center gap-[12px]">
            <h2 className="text-[18px] md:text-[24px] font-bold">Biography</h2>
            <p className="leading-loose text-[16px] text-wrap">
              It is with heavy hearts that we bid farewell to a cherished soul, a beacon of love,
              and a pillar of strength, who peacefully passed away at the age of 83. [Man&apos;s
              Name] left an indelible mark on our lives, leaving behind a legacy that reverberates
              through the hearts of his adoring family and countless friends.
              <br />
              Throughout his 83 years, [Man&apos;s Name] embodied grace, wisdom, and unwavering
              kindness. His presence was a source of warmth and reassurance, a comforting embrace
              that uplifted those around him. His infectious laughter filled the room, bringing joy
              and happiness to all fortunate enough to be in his company.
              <br />
              A devoted family man, [Man&apos;s Name] was the epitome of love and support. His
              devotion to his family was unwavering, and he showered them with boundless affection,
              guiding them through life&apos;s triumphs and challenges with wisdom and patience. To
              his friends, [Man&apos;s Name] was a cherished companion, a confidant, and a source of
              inspiration. He approached every relationship with sincerity and kindness, leaving an
              enduring impression on everyone he encountered.
              <br />
              His 83 years were a tapestry of experiences, each thread weaving tales of resilience,
              integrity, and compassion. His wisdom, accumulated through a life richly lived, served
              as a beacon of guidance, offering profound insights and invaluable advice to those
              seeking solace and direction.
              <br />
              As we bid adieu to [Man&apos;s Name], we find solace in the memories he gifted us. His
              legacy of love, compassion, and unwavering strength will forever resonate in our
              hearts, guiding us through life&apos;s journey.
              <br />
              Though he may have departed this world, his spirit lives on in the hearts of those who
              were fortunate enough to know him. As we honor his memory, let us carry forward the
              values he instilled in us and perpetuate the love and kindness he so generously
              bestowed upon us.
              <br />
              Rest in eternal peace, dear [Man&apos;s Name]. Your presence will be deeply missed,
              but your memory will remain eternally cherished.
              <br />
              With heartfelt condolences and enduring love, Throughout his 83 years, [Man&apos;s
              Name] embodied grace, wisdom, and unwavering kindness. His presence was a source of
              warmth and reassurance, a comforting embrace that uplifted those around him. His
              infectious laughter filled the room, bringing joy and happiness to all fortunate
              enough to be in his company.
              <br />
              A devoted family man, [Man&apos;s Name] was the epitome of love and support. His
              devotion to his family was unwavering, and he showered them with boundless affection,
              guiding them through life&apos;s triumphs and challenges with wisdom and patience.
              <br />
              To his friends, [Man&apos;s Name] was a cherished companion, a confidant, and a source
              of inspiration. He approached every relationship with sincerity and kindness, leaving
              an enduring impression on everyone he encountered.
              <br />
            </p>
          </div>
          <div
            className={`bg-white lg:px-[40px] lg:py-[28px] px-[19px] py-[24px] rounded-md flex flex-col gap-[32px] ${contributions.length === 0 ? "h-[400px]" : "h-[700px]"} overflow-y-auto`}
          >
            <h1 className="text-[24px] font-bold">Contributions ({contributions.length})</h1>
            {contributions.length === 0 ? (
              <div className="h-full flex justify-center items-center text-primary text-center text-[18px] md:text-[24px]">
                <p>No contributions yet. Be the first to contribute!</p>
              </div>
            ) : (
              contributions.map((contribution, contributionIndex) => (
                <div key={contributionIndex} className="md:grid grid-cols-12 items-center">
                  <div className="md:col-span-2 mb-3 w-[50px] md:w-[70px] lg:w-[100px] flex items-center max-sm:pt-2.5 text-center justify-center font-semibold mr-3 tracking-tighter text-base max-sm:text-sm max-lg:text-lg max-sm:block">
                    <img
                      className="w-full h-full"
                      src={getIconByType(contribution.type)}
                      alt="icon"
                    />
                  </div>
                  <div className="md:col-span-10 flex flex-col gap-[7px]">
                    <div className="flex gap-2 items-center">
                      <h4 className="text-[18px] font-bold">{contribution.fullName}</h4>
                      <div className="relative image-stack bottom-3">
                        {contribution.images.slice(0, 4).map((image, index) => (
                          <div
                            key={index}
                            style={{
                              transform: `rotate(${getRotation(index)}deg)`,
                              top: `${index * 2}px`,
                              left: `${index * 2}px`,
                              zIndex: index,
                            }}
                            className="w-[20px] h-[20px] rounded-sm cursor-pointer overflow-hidden border-solid border-[0.5] border-[white] absolute origin-center"
                          >
                            <img
                              src={URL.createObjectURL(image)}
                              alt="gallery icon"
                              className="absolute w-full h-full object-cover z-0"
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    {selectedContribution === contributionIndex ? (
                      <div className="flex flex-col gap-2">
                        <p className="leading-loose text-[16px]">{contribution.description}</p>
                        <div className="flex gap-2 items-center">
                          <div
                            className="text-[#C2C9D6] cursor-pointer font-bold hover:font-medium hover:scale-80"
                            onClick={() => setSelectedContribution(null)}
                          >
                            Show less
                          </div>
                          <img
                            src={ShareIcon}
                            alt="share"
                            className="cursor-pointer w-[22px] hover:w-[18px]"
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col gap-2">
                        <p className="leading-loose text-[16px] truncate">
                          {contribution.description}
                        </p>
                        <div className="flex gap-2 items-center">
                          <div
                            className="text-[#C2C9D6] cursor-pointer font-bold hover:font-medium hover:scale-80"
                            onClick={() => setSelectedContribution(contributionIndex)}
                          >
                            Read more
                          </div>
                          <img
                            src={ShareIcon}
                            alt="share"
                            className="cursor-pointer w-[22px] hover:w-[18px]"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
          <div
            className="bg-white lg:px-[40px] lg:py-[28px] px-[19px] py-[24px] rounded-md flex flex-col gap-[32px] lg:mb-[100px]"
            ref={componentRef}
          >
            <div className="flex">
              <h1 className="text-[24px]">Send a Tribute</h1>
              <div
                onClick={() => {
                  setIsFuneral(true);
                  setIsOthers(false);
                }}
              >
                F
              </div>
              <div
                onClick={() => {
                  setIsOthers(true);
                  setIsFuneral(false);
                }}
              >
                O
              </div>
            </div>

            <Formik
              initialValues={{ fullName: "", email: "", Tribute: "", TributeImages: [] }}
              onSubmit={(values, { resetForm }) => handleFormSubmit(values, resetForm)}
            >
              {({ values, handleSubmit, handleChange, setFieldValue }) => (
                <form onSubmit={handleSubmit} className="text-[18px] flex flex-col gap-[32px]">
                  <div className="flex flex-col md:flex-row gap-[20px] md:gap-[32px]">
                    <CustomInput
                      label="Full Name"
                      name="fullName"
                      value={values.fullName}
                      required
                      type="text"
                      className="mb-2 md:grid md:col-span-6"
                      placeholder=""
                      onChange={handleChange}
                    />
                    <CustomInput
                      label="Email"
                      name="email"
                      value={values.email}
                      type="text"
                      className="mb-2 md:grid md:col-span-6"
                      placeholder=""
                      onChange={handleChange}
                    />
                  </div>

                  <div className="flex flex-col gap-[25px]">
                    <div>
                      {isFuneral && (
                        <div className="flex gap-[15px] md:gap-[20px]">
                          {funeral.map((funeralItem) => (
                            <div
                              key={funeralItem.type}
                              className={`flex flex-col items-center gap-[5px] md:gap-[15px] cursor-pointer justify-center md:p-4 ${isActive === funeralItem.type ? "bg-indigo-100" : ""}`}
                              onClick={() => handleSelection(funeralItem.type)}
                            >
                              <img
                                src={funeralItem.icon}
                                alt={funeralItem.icon}
                                className="w-[40px] h-[40px] md:w-[50px] md:h-[50px]"
                              />
                              <p className="text-[13px] text-center">{funeralItem.writeup}</p>
                            </div>
                          ))}
                        </div>
                      )}
                      {isOthers && (
                        <div className="flex gap-[15px] md:gap-[20px]">
                          {others.map((item) => (
                            <div
                              key={item.type}
                              className={`flex flex-col items-center gap-[5px] md:gap-[15px] cursor-pointer justify-center p-4 ${isActive === item.type ? "bg-indigo-100" : ""}`}
                              onClick={() => handleSelection(item.type)}
                            >
                              <img src={item.icon} alt={item.icon} className="w-[40px] h-[40px] md:w-[50px] md:h-[50px]" />
                              <p className="text-[13px] text-center">{item.writeup}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <CustomTextArea
                      label="Tribute"
                      name="Tribute"
                      value={values.Tribute}
                      required
                      rows="4"
                      className={`h-[90%] md:-h-[90%]`}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="flex flex-col border border-solid border-primary rounded-md px-[26px] py-[18px] bg-white leading-5 text-[14px] gap-[15px]">
                    <h1 className="text-[16px] md:text-[20px] font-bold">Add Photos</h1>
                    <Dragdrop
                      images={values.TributeImages}
                      setImages={(files) => setFieldValue("TributeImages", files)}
                    />
                    <div className="flex flex-col md:flex-row gap-[15px]  md:justify-center">
                      <button className="cursor-pointer flex justify-center gap-[5px] md:gap-[10px] border border-2-black text-[12px] md:text-[16px] font-semibold p-[10px] md:p-[15px] rounded-md hover:bg-black hover:text-white">
                        <img src={googleIcon} className="w-[20px]" alt="google-icon" />
                        <p>Add from Google Photos</p>
                      </button>
                      <button className="cursor-pointer flex justify-center gap-[5px] md:gap-[10px] bg-[#039BE5] text-white text-[12px] md:text-[16px] font-semibold p-[10px] md:p-[15px] rounded-md hover:border border-2-[#039BE5]">
                        <img src={fbIcon} className="w-[20px]" alt="fb-icon" />
                        <p>Add from Facebook</p>
                      </button>
                    </div>
                    {values.TributeImages.length > 0 ? (
                      <div className="grid grid-cols-3 lg:grid-cols-6 flex-wrap gap-[10px]">
                        {values.TributeImages.map((tributeimage, index) => (
                          <div className="col-span-1 p-2 rounded-lg overflow-hidden bg-indigo-100">
                            <img
                              key={index}
                              src={URL.createObjectURL(tributeimage)}
                              alt={`shots ${index + 1}`}
                              className="w-full h-full"
                            />
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p>No pictures added yet.</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    // onClick={() => handleReset()}
                    className={`w-[45%] bg-primary m-auto px-[26px] py-[18px] text-white text-center rounded-[4px] ${!values.fullName || !values.Tribute || values.TributeImages.length === 0 ? "opacity-[0.2] cursor-not-allowed" : ""}`}
                    disabled={
                      !values.fullName || !values.Tribute || values.TributeImages.length === 0
                    }
                  >
                    Contribute
                  </button>
                </form>
              )}
            </Formik>
          </div>
        </div>
        <div className="lg:col-span-4 flex flex-col gap-[32px]">
          <div className="bg-white py-[39px] px-[29px] rounded-md ">
            <div className="mx-auto flex flex-col gap-[20px] w-[100%]">
              <h1 className="text-[24px]">Benson&apos;s Images</h1>
              <div className="w-full h-full m-auto flex justify-center items-center overflow-hidden rounded-md">
                <img
                  className="w-[300px] h-[300px] object-cover transition-opacity duration-500 ease-in-out"
                  src={uploadedPictures[currentIndex].image}
                  alt="slide"
                />
              </div>
              <Button
              onClick={()=>handleImageModal()}
              className="text-white font-bold"
              
            >
              View all Images
            </Button>
            </div>
          </div>

          <div className="bg-white p-[30px] rounded-md flex flex-col items-center gap-4">
            <div className="flex flex-col ">
              <img src={wishlistImage} className="rounded-lg" alt="pic" />
              <div className="translate-y-[-200%] translate-x-[5%] ">
                <p className="text-[24px] font-bold">John Wishlist</p>
                <p className="text-[14px]">12 days left</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-[28px]">
              {WishItems.map((items) => (
                <div
                  className="bg-[#F0F1F5] rounded-xl cursor-pointer"
                  onClick={() => navigate("/guest-wishlist")}
                >
                  <img src={items.image} className="rounded-t-xl" alt="wish" />
                  <div className="flex items-center p-[12px] justify-between">
                    <div className="flex flex-col gap-[7px]">
                      <p className="text-[6px] md:text-[9px]">{items.name}</p>
                      <p className="text-[8px] md:text-[14px] font-semibold text-[#1061B1]">
                        {items.price}
                      </p>
                      <p className="text-[4px] md:text-[7px]">{items.discountPrice}</p>
                    </div>
                    <p className="text-[5px] md:text-[10px]">{items.discountPercent}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button
              className="text-white font-bold mt-[30px]"
              onClick={() => navigate("/guest-wishlist")}
            >
              See more
            </Button>
          </div>

          {/* tribute views */}
          <div className="bg-white p-3 rounded-md flex flex-col gap-[17px] h-fit">
            <div className="flex gap-[10px] items-center">
              <img src={eyeIcon} alt="view-icon" className="w-5" />
              <p className="font-bold text-[16px]">2000 Views</p>
            </div>
          </div>

          <div className="bg-white p-3 rounded-md flex flex-col gap-[17px] h-fit">
            <div className="flex flex-col gap-[12px] ">
              <h1 className="text-[24px]">Gifts</h1>
              <p className="text-[14px]">
                Benson is accepting donations for this tribute, click the button below to donate
              </p>
            </div>

            <Button
              className="font-[18px] text-white w-[100%] p-2 rounded-md cursor-pointer"
              onClick={() => handleDonate()}
            >
              Donate
            </Button>
          </div>
          <div className="bg-white py-[39px] px-[29px] rounded-md ">
            <div className="mx-auto flex flex-col justify-center gap-[10px] w-[100%]">
              <h1 className="text-[24px]">Images by Others</h1>
              <div className="grid gap-[24px] gap-x-[24px] grid-cols-2 md:grid-cols-4 xl:grid-cols-4 w-full">
                {images.map((image) => (
                  <div className="w-[100px] h-[100px] lg:w-[60px] lg:h-[60px] 2xl:w-[100px] 2xl:h-[100px] rounded-lg bg-[#D9D9D9]">
                    {image}
                  </div>
                ))}
              </div>
              <Button
              className="text-white font-bold mt-[30px]">
             View all Images
            </Button>
            </div>
          </div>
          <div className="bg-white py-[39px] px-[29px] rounded-md ">
            <div className="flex flex-col gap-[20px] ">
              <h1 className="text-[20px] md:text-[24px]">Invite Family and Friends</h1>
              <button
                className="w-[100% ] bg-primary text-white font-[500] text-[18px] h-10 rounded-md py-0 px-8 flex gap-[6px] md:gap-[20px] items-center justify-center"
                onClick={handleInvite}
              >
                <img alt="email" src={emailIcon} className="w-[25px] md:w-[30px]"/>
                Invite via E-mail
              </button>
            </div>
          </div>
          <div className=" bg-indigo-100 p-3 flex gap-[20px] items-center justify-center mb-[100px]">
            <p className="font-[500] text-[18px]">Share on: </p>
            <div className=" flex gap-2 items-center">
              <FacebookShareButton url={shareUrl} quote={title}>
                <FacebookIcon size={32} round />
              </FacebookShareButton>
              <TwitterShareButton url={shareUrl} title={title}>
                <TwitterIcon size={32} round />
              </TwitterShareButton>
              {/* <InstapaperShareButton url={shareUrl} title={title}>
                <InstapaperIcon size={32} round />
              </InstapaperShareButton> */}
              <WhatsappShareButton url={shareUrl} title={title} separator=":: ">
                <WhatsappIcon size={32} round />
              </WhatsappShareButton>
              <div className="cursor-pointer">
                <img src={downloadIcon} className="cursor-pointer" alt="download-icon"/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal className="w-[100%] md:w-[700px]" open={open} onClose={() => setOpen(!open)}>
        <WishListModal />
      </Modal>
      <Modal
        className="w-[100%] bg-white md:w-[700px]"
        open={openImageGallery}
        onClose={() => setOpenImageGallery(!openImageGallery)}
      >
        <ImageModal uploadedPictures={uploadedPictures} />
      </Modal>
    </div>
  );
}

export default Home;

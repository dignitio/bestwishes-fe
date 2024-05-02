import React, { useState } from "react";
import { Formik } from "formik";
import Modal from "components/Modal";
import Button from "components/Button";
import contributions from "layout/Lists/contributions";
import images from "layout/Lists/images";
import WishItems from "layout/Lists/wishlist";
import CreateGuestTribute from "pages/GuestPage/CreateTribute";
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
import gallery from "assets/images/gallery.svg";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [openCreateTribute, setOpenCreateTribute] = useState(false);
  const [selectedWishlist, setSelectedWishlist] = useState();
  const [fileUploaded, setFileUploaded] = useState(false);
  const [expandText, setExpandText] = useState(false);
  const [selectedContribution, setSelectedContribution] = useState(null);

  function handleModal(item) {
    setOpenCreateTribute(!openCreateTribute);
    setSelectedWishlist(item);
  }

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
  ];

  function handleDonate() {
    setOpenCreateTribute(!openCreateTribute);
    setSelectedWishlist();
  }

  const Upload = <input type="file" id="fileUpload" />;
  return (
    <div className="font-nunito">
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
            <div className="font-bold flex flex-col gap-[2px] md:text-center">
              <p className="font-bold text-[18px] lg:text-[40px]">Benson John </p>
              <p className="font-semibold text-[14px] lg:text-[32px]">
                May 23rd, 1982 - October 28th, 2022
              </p>
            </div>
          </div>
          <div className="flex md:hidden gap-[10px] text-white absolute right-[20px] top-[24px]">
            <button
              className="font-[14px] bg-primary p-2 px-[24px] rounded-md"
              onClick={() => navigate("/wishlist")}
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
      <div className="xl:grid xl:grid-cols-12 flex flex-col gap-[58px] px-[15px] xl:px-[80px] ">
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
          <div className="bg-white lg:px-[40px] lg:py-[28px] px-[19px] py-[24px] rounded-md flex flex-col gap-[32px] h-[700px] overflow-y-auto">
            <h1 className="text-[24px] font-bold">Contributions ({contributions.length})</h1>
            {contributions.map((contribution, index) => (
              <div key={index} className="lg:grid grid-cols-12 items-center">
                <p className="md:col-span-2 xl:col-span-1 bg-gray-200 mb-3 w-14 h-14 max-sm:w-10 max-sm:h-10 max-lg:w-14 max-lg:h-14 rounded-full flex items-center max-sm:pt-2.5 text-center justify-center font-semibold mr-3 tracking-tighter text-base max-sm:text-sm max-lg:text-lg max-sm:block">
                  {contribution.initial}
                </p>
                <div className="md:col-span-10 xl:col-span-11">
                  <div className="flex gap-3 items-center">
                    <h4 className="text-[18px] font-bold">{contribution.fullName}</h4>
                    <div className="relative bottom-3" key={index}>
                      {contribution.image < 4
                        ? uploadedPictures.slice(0, contribution.image).map(({ image, angle }) => (
                            <div
                              className={`w-[20px] h-[20px] rounded-sm overflow-hidden border-solid border-[0.5] border-[white] absolute origin-center ${angle}`}
                              key={index}
                            >
                              <img
                                src={image}
                                alt="gallery icon"
                                className="absolute w-full h-full object-fit z-0"
                              />
                            </div>
                          ))
                        : uploadedPictures.slice(0, 4).map(({ image, angle }) => (
                            <div
                              className={`w-[20px] h-[20px] rounded-sm overflow-hidden border-solid border-[0.5] border-[white] absolute origin-center ${angle}`}
                              key={index}
                            >
                              <img
                                src={image}
                                alt="gallery icon"
                                className="absolute w-full h-full object-fit z-0"
                              />
                            </div>
                          ))}
                    </div>
                  </div>

                  {selectedContribution === index ? (
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
                          onClick={() => setSelectedContribution(index)}
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
            ))}
          </div>
          <div className="bg-white lg:px-[40px] lg:py-[28px] px-[19px] py-[24px] rounded-md flex flex-col gap-[32px] lg:mb-[100px]">
            <h1 className="text-[24px]">Send a Tribute</h1>

            <Formik
              initialValues={{ fullName: "", memories: "", Tribute: "" }}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              {({ values, handleSubmit, handleChange }) => (
                <form
                  onSubmit={handleSubmit}
                  className="md:grid md:grid-cols-12 text-[18px] flex flex-col gap-[32px]"
                >
                  <div className="md:grid md:col-span-6 flex flex-col gap-[32px]">
                    <CustomInput
                      label="Full Name"
                      name="fullName"
                      value={values.fullName}
                      required
                      type="text"
                      className="mb-2"
                      placeholder=""
                      onChange={handleChange}
                    />

                    <label htmlFor="memoriesUpload" className="relative flex cursor-pointer">
                      <CustomInput
                        label="Upload Memories"
                        name="memories"
                        value={values.memories}
                        className="mb-2 cursor-pointer"
                        required
                        id="memoriesUpload"
                        disabled
                        type="text"
                        placeholder="click here to upload images"
                        onChange={handleChange}
                      />
                      <img
                        src={upload}
                        alt="upload"
                        className="cursor-pointer absolute translate-y-[170%] right-0 pr-4 "
                      />
                      <input
                        type="file"
                        multiple
                        accept="image/jpeg, image/png, image/svg, image/gif, image/bmp, image/tiff, image/webp"
                        id="memoriesUpload"
                        className="cursor-pointer absolute w-full top-10 opacity-0 pr-[70px] leading-tight focus:outline-none focus:border-blue-500 "
                        onChange={(e) => {
                          setFileUploaded(true);
                          values.memories = e.target.files;
                        }}
                      />
                    </label>

                    {/* <div className="border border-[#8593AD] rounded-md py-[18px] px-[26px] flex">
                      
                    </div> */}

                    <button
                      type="submit"
                      // onClick={() => handleReset()}
                      className={`w-full bg-primary px-[26px] py-[18px] text-white rounded-[4px] hidden md:block ${!values.fullName || !values.memories || !values.Tribute ? "opacity-[0.2] cursor-not-allowed" : ""}`}
                      disabled={!values.fullName || !values.memories || !values.Tribute}
                    >
                      Contribute
                    </button>
                  </div>

                  <div className="md:col-span-6 ">
                    <CustomTextArea
                      label="Tribute"
                      name="Tribute"
                      value={values.Tribute}
                      required
                      rows="4"
                      className={`h-[90%] md:-h-[90%] resize-none`}
                      onChange={handleChange}
                    />
                  </div>

                  <button
                    type="submit"
                    // onClick={() => handleReset()}
                    className={`w-full bg-primary px-[26px] py-[18px] text-white rounded-[4px] block md:hidden ${!values.fullName || !values.memories || !values.Tribute ? "opacity-[0.2] cursor-not-allowed" : ""}`}
                    disabled={!values.fullName || !values.memories || !values.Tribute}
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
            <div className="mx-auto flex flex-col justify-center gap-[10px] w-[100%]">
              <h1 className="text-[24px]">Images by Others</h1>
              <div className="grid gap-[24px] gap-x-[24px] grid-cols-2 md:grid-cols-4 xl:grid-cols-4 w-full">
                {images.map((image) => (
                  <div className="w-[100px] h-[100px] lg:w-[60px] lg:h-[60px] 2xl:w-[100px] 2xl:h-[100px] rounded-lg bg-[#D9D9D9]">
                    {image}
                  </div>
                ))}
              </div>
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
                  onClick={() => navigate("/wishlist")}
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
              onClick={() => navigate("/wishlist")}
            >
              See more
            </Button>
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
            <div className="mx-auto flex flex-col gap-[10px]">
              <h1 className="text-[24px]">Images by Others</h1>
              <div className="grid gap-[24px] grid-cols-2 md:grid-cols-4 xl:grid-cols-4 w-full">
                {images.map((image) => (
                  <div className="w-[100px] h-[100px] lg:w-[60px] lg:h-[60px] 2xl:w-[100px] 2xl:h-[100px] rounded-lg bg-[#D9D9D9]">
                    {image}
                  </div>
                ))}
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
        open={openCreateTribute}
        onClose={() => setOpenCreateTribute(!openCreateTribute)}
      >
        <CreateGuestTribute selectedWishlist={selectedWishlist} />
      </Modal>
    </div>
  );
}

export default Home;

import React, { useState } from "react";
import { Formik } from "formik";
import Modal from "components/Modal";
import Button from "components/Button";
import contributions from "layout/Lists/contributions";
import WishItems from "layout/Lists/wishlist";
import CreateGuestTribute from "pages/GuestPage/CreateTribute";
import CustomInput from "components/CustonFormInputs/CustomInput";
import WishListModal from "../wishlistModal";

import rectangle from "../../../assets/images/rectangle.png";
import tributeImage from "../../../assets/images/tributeimage.jpeg";
import wishlistImage from "../../../assets/images/wishlistimage.jpeg";

function Home() {
  const [open, setOpen] = useState(false);
  const [isWishList, setIsWishList] = useState(false);



  return (
    <div className="font-nunito">
      <h1 className="text-[24px] font-dancing font-[700] text-center p-[30px] text-[24px] lg:text-[60px]">
        Celebration of Life
      </h1>
      <div className="w-[100%] font-nunito ">
        <img className="w-full h-[100px] lg:h-[300px]" src={rectangle} alt="background" />
        <div className="px-5 flex md:flex-col items-center gap-[66px] md:gap-[4px] justify-between md:justify-center">
          <div className="w-[100px] h-[80px] lg:w-[250px] lg:h-[250px] translate-y-[-20%]">
            <img className="w-full h-full rounded-full" src={tributeImage} alt="profilepic" />
          </div>
          <div className="font-bold p-4 hidden md:flex flex-col gap-[2px] text-center translate-y-[-20%]">
            <p className="text-[32px] lg:text-[40px]">Benson John </p>
            <p className="text-[24px] lg:text-[32px]">May 23rd, 1982 - October 28th, 2022</p>
          </div>
          <div className="flex gap-[10px] text-white translate-y-[-10%] md:hidden">
            <button
              className="font-[14px] bg-[#3684F7] p-2 rounded-md cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              Donate
            </button>
            <button className="font-[14px] bg-[#FF433C] p-2 rounded-md" onClick={() => {setIsWishList(true); setOpen(!open)}}>Wishlist</button>
          </div>
        </div>
        <div className="font-bold px-4 flex flex-col gap-[2px] md:hidden">
          <p className="text-[18px]">Benson John </p>
          <p className="text-[14px]">May 23rd, 1982 - October 28th, 2022</p>
        </div>
      </div>
      <div className="grid lg:grid-cols-12 gap-[58px] px-[20px] lg:px-[40px] mt-[20px]">
        <div className="grid lg:col-span-8 gap-[32px] ">
          <div className="bg-white md:px-[40px] md:py-[28px] p-3 rounded-md flex flex-col gap-[12px]">
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
          <div className="bg-white lg:px-[40px] lg:py-[28px] px-[19px] py-[24px] rounded-md flex flex-col gap-[32px]">
            <h1 className="text-[24px] font-bold">Contributions ({contributions.length})</h1>
            {contributions.map((contribution) => (
              <div className="grid grid-cols-12 items-center">
                <p className=" col-span-2 bg-gray-200 w-14 h-14 max-sm:w-10 max-sm:h-10 max-lg:w-14 max-lg:h-14 rounded-full flex items-center max-sm:pt-2.5 text-center justify-center -mt-0.5 font-semibold mr-3 tracking-tighter text-base max-sm:text-sm max-lg:text-lg max-sm:block">
                  {contribution.initial}
                </p>
                <div className=" col-span-10">
                  <h4 className="text-[18px] font-bold">{contribution.fullName}</h4>
                  <p className="leading-loose text-[16px]">{contribution.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white lg:px-[40px] lg:py-[28px] px-[19px] py-[24px] rounded-md flex flex-col gap-[32px]">
            <h1>Send a Tribute</h1>

            <Formik
              initialValues={{ fullName: "", memories: "", Tribute: "" }}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              {({ values, handleSubmit, handleChange }) => (
                <form
                  onSubmit={handleSubmit}
                  className="grid grid-cols-12 text-[18px] flex flex-col gap-[32px]"
                >
                  <div className="grid col-span-6 gap-[32px]">
                    <CustomInput
                      label="Full Name"
                      name="fullName"
                      value={values.fullName}
                      required
                      type="text"
                      placeholder=""
                      onChange={handleChange}
                    />
                    <CustomInput
                      label="Upload Memories"
                      name="memories"
                      value={values.memories}
                      required
                      type="text"
                      placeholder=""
                      onChange={handleChange}
                    />
                    <button
                      type="submit"
                      // onClick={() => handleReset()}
                      className={`w-full bg-[#FF433C] px-[26px] py-[18px] text-white rounded-[4px] ${!values.fullName || !values.memories || !values.Tribute ? "opacity-[0.2] cursor-not-allowed" : ""}`}
                      disabled={!values.fullName || !values.memories || !values.Tribute}
                    >
                      Contribute
                    </button>
                  </div>

                  <div className="col-span-6">
                    <CustomInput
                      label="Tribute"
                      name="tribute"
                      value={values.Tribute}
                      required
                      type="textarea"
                      placeholder=""
                      onChange={handleChange}
                    />
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
        <div className="grid lg:col-span-4 gap-[32px]">
          <div className="bg-white p-3 rounded-md">ergrfds</div>
          <div className="bg-white p-3 rounded-md">
            <div className="flex flex-col ">
              <img src={wishlistImage} className="rounded-lg" alt="pic" />
              <div className="translate-y-[-180%] p-3">
                <p className="text-[24px] font-bold">John Wishlist</p>
                <p className="text-[14px]">12 days left</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-[28px]">
              {WishItems.map((items) => (
                <div
                  className="bg-[#F0F1F5] rounded-xl cursor-pointer"
                  onClick={() => {
                    setOpen(!open);
                  }}
                >
                  <img src={items.image} className="rounded-t-xl" alt="wish" />
                  <div className="flex items-center p-[12px] justify-between">
                    <div className="flex flex-col gap-[7px]">
                      <p className="text-[9px]">{items.name}</p>
                      <p className="text-[14px] font-semibold text-[#1061B1]">{items.price}</p>
                      <p className="text-[7px]">{items.discountPrice}</p>
                    </div>
                    <p className="text-[10px]">{items.discountPercent}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white p-3 rounded-md flex flex-col gap-[17px]">
            <div className="flex flex-col gap-[12px]">
              <h1 className="text-[24px]">Gifts</h1>
              <p className="text-[14px]">
                Benson is accepting donations for this tribute, click the button below to donate
              </p>
            </div>

            <Button
              className="font-[18px] text-white w-[100%] p-2 rounded-md cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              Donate
            </Button>
          </div>
          <div className="bg-white p-3 rounded-md"> serdtghjk</div>
        </div>
      </div>
      <Modal className="w-[100%] md:w-[700px]" isWishList={isWishList} open={open} onClose={() => setOpen(!open)}>
       <CreateGuestTribute />
      </Modal>
    </div>
  );
}

export default Home;

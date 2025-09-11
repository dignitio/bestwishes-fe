import React, { useState } from "react";
import plus from "assets/icons/add.svg";
import minus from "assets/icons/minus-3108.svg";
import call from "assets/images/call.svg";
import sms from "assets/images/sms.svg";
import fb from "assets/icons/facebookIcon.png";
import instagram from "assets/images/instagram.png";
import tiktok from "assets/images/tik_tok.svg";
import twitter from "assets/images/twitter.svg";
import whatsapp from "assets/images/whatsapp.svg";
import youtube from "assets/images/youtube.svg";
import { ReactComponent as SearchIcon } from "assets/icons/search.svg";
import SearchInput from "components/CustomFormInputs/CustomSearchInput";
// import SearchInput from "components/CustomFormInputs/CustomSearchInput";

function Support() {
  const FAQs = [
    {
      Question: "What is bestwishes about?",
      Answer: "At BestWishes, we strive to be more than just a website; were a vibrant community dedicated to spreading joy, celebrating life's milestones, and fostering meaningful connections through our wide array of heartfelt greetings, personalized gifts, and thoughtful messages tailored to make every moment truly unforgettable.",
    },
    {
      Question: "What is bestwishes about?",
      Answer: "At BestWishes, we strive to be more than just a website; we're a vibrant community dedicated to spreading joy, celebrating life's milestones, and fostering meaningful connections through our wide array of heartfelt greetings, personalized gifts, and thoughtful messages tailored to make every moment truly unforgettable.",
    },
    {
      Question: "What is bestwishes about?",
      Answer: "At BestWishes, we strive to be more than just a website; we're a vibrant community dedicated to spreading joy, celebrating life's milestones, and fostering meaningful connections through our wide array of heartfelt greetings, personalized gifts, and thoughtful messages tailored to make every moment truly unforgettable.",
    },
    {
      Question: "What is bestwishes about?",
      Answer: "At BestWishes, we strive to be more than just a website; we're a vibrant community dedicated to spreading joy, celebrating life's milestones, and fostering meaningful connections through our wide array of heartfelt greetings, personalized gifts, and thoughtful messages tailored to make every moment truly unforgettable.",
    },
    {
      Question: "What is bestwishes about?",
      Answer: "At BestWishes, we strive to be more than just a website; we're a vibrant community dedicated to spreading joy, celebrating life's milestones, and fostering meaningful connections through our wide array of heartfelt greetings, personalized gifts, and thoughtful messages tailored to make every moment truly unforgettable.",
    },
  ];

  const [clickedQuestion, setClickedQuestion] = useState(FAQs.length + 1);

  function togglefaq(index) {
    if (clickedQuestion === index) {
      setClickedQuestion(FAQs.length + 1);
    } else {
      setClickedQuestion(index);
    }
  }

  const phoneNumber = "01-09900880";
  return (
    <div className=" lg:p-[38px] ">
      <div className="bg-white rounded-[16px] flex flex-col items-center justify-center gap-[48px] md:p-[40px] p-[20px] ">
        <div className="flex flex-col gap-[27px]">
          <h1 className="font-bold text-[20px] md:text-[32px] text-center">
            Hello, How can we help you?
          </h1>
          {/* <button className="bg-gray-50 rounded-[8px] py-4 px-2.5 md:w-[600px] xl:w-[762px] flex items-center text-[#000000] gap-[18px]">
            {}
            <span className="px-2 max-lg:px-1.5">
              <SearchIcon className="w-[16px] h-[16px] md:w-[24px] md:h-[24px]" />
            </span>
            <span className="text-[14px] md:text-[16px] font-bold text-[#000000]">
              <input
                type="text"
                placeholder="Search for questions"
                className="outline-0 bg-transparent "
              />
            </span>
          </button> */}

          <SearchInput placeholder="Search for questions" id="search" />

          <div className="flex flex-col md:flex-row gap-[46px] items-center justify-center">
            <div className="bg-[#F8F8F8] w-[90%] md:w-[159px] h-[120px] rounded-lg text-[12px] flex flex-col items-center justify-center gap-[19px]">
              <img src={call} alt="phone" />
              <div className="flex flex-col gap-[6px] text-center">
                <p>Customer Care</p>
                <a href={`tel: ${phoneNumber}`} className="text-[#1061B1] text-[12px]">
                  {phoneNumber}
                </a>
              </div>
            </div>
            <div className="bg-[#F8F8F8] w-[90%] md:w-[159px] h-[120px] rounded-lg text-[12px] flex flex-col items-center justify-center gap-[19px]">
              <img src={sms} alt="message" />
              <div className="flex flex-col gap-[6px] text-center">
                <p>EMAIL</p>
                <a href="mailto: hello@bestwishes.io" className="text-[#1061B1] text-[12px]">
                  hello@bestwishes.io
                </a>
              </div>
            </div>

            <div className="bg-[#F8F8F8] w-[90%] md:w-[159px] h-[120px] rounded-lg flex flex-col items-center justify-center ">
              <div className="grid grid-cols-3 gap-[10px] px-[33px] py-[16px]">
                <a target="_blank" rel="noreferrer" href="https://www.facebook.com">
                  {" "}
                  <img src={fb} alt="fb-icon" />
                </a>
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com">
                  <img src={instagram} alt="IG-icon" />
                </a>
                <a target="_blank" rel="noreferrer" href="https://www.tiktok.com">
                  <img src={tiktok} alt="tiktok-icon" />
                </a>
                <a target="_blank" rel="noreferrer" href="https://www.twitter.com">
                  <img src={twitter} alt="twitter-icon" />
                </a>
                <a target="_blank" rel="noreferrer" href="https://www.youtube.com">
                  <img src={youtube} alt="youtube-icon" />
                </a>
                <a target="_blank" rel="noreferrer" href="https://www.whatsapp.com">
                  <img src={whatsapp} alt="whatsapp-icon" />
                </a>
              </div>
              <p className="text-[#1061B1] text-[12px]">social media</p>
            </div>
          </div>
        </div>

        <h1 className="font-bold text-[20px] md:text-[32px] text-center">
          Frequently Asked Questions
        </h1>

        <div className="bg-primary w-[100%] md:w-[80%] md:p-[26px] p-[18px] flex flex-col gap-[16px] shadow-lg">
          {FAQs.map((faq, index) => (
            <div className=" p-3 flex flex-col gap-3 bg-[#f8f8f8] rounded-lg cursor-pointer" key={index}>
              <div className={`flex justify-between items-center transition-all duration-500 ease-in-out ${clickedQuestion === index ? "min-h-[40px]" : "min-h-[30px]"}`} onClick={() => togglefaq(index)}>
                <h1 className="text-[20px] font-medium text-black">{faq.Question}</h1>
                  <img src={plus} alt="plus" className={`cursor-pointer ${clickedQuestion === index ? "rotate-45 translate duration-500 ease-in-out" : "translate duration-500 ease-in-out"}`} />
              </div>
              {clickedQuestion === index && (
                <p data-aos="fade-up" className="text-justify font-normal text-[#00000090] text-[16px]">
                  {faq.Answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Support;

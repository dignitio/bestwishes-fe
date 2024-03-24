import CustomInput from "components/CustonFormInputs/CustomInput";
import plus from "../../assets/images/add.png";
import call from "../../assets/images/call.svg";
import sms from "../../assets/images/sms.svg";
import fb from "../../assets/images/facebook.png";
import instagram from "../../assets/images/instagram.png";
import tiktok from "../../assets/images/tik_tok.svg";
import twitter from "../../assets/images/twitter.svg";
import whatsapp from "../../assets/images/whatsapp.svg";
import youtube from "../../assets/images/youtube.svg";

function Support() {
  const FAQs = [
    "What is bestwishes about?",
    "How do i get my money from the plaform?",
    "is my data safe here?",
    "What is bestwishes about? ",
    "What is bestwishes about? ",
  ];

  const phoneNumber = "01-09900880";
  return (
    <div className=" lg:p-[38px] ">
      <div className="bg-white rounded-[16px] flex flex-col items-center justify-center gap-[48px] p-[40px] ">
        <div className="flex flex-col gap-[27px]">
          <h1 className="font-bold text-[20px] md:text-[32px] text-center">
            Hello, How can we help you?
          </h1>
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
              <div className="flex gap-[10px] flex-wrap px-[33px] py-[16px]">
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
        <div className="bg-[#F8F8F8] w-[300px] md:w-[80%] py-[26px] flex flex-col gap-[16px]">
          {FAQs.map((faq) => (
            <div className="bg-white p-3 flex items-center justify-between">
              <p>{faq}</p>
              <img src={plus} alt="add icon" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Support;

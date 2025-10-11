import { ReactComponent as EmbededIcon } from "../../assets/icons/embeded.svg";
import { ReactComponent as InstagramIcon } from "../../assets/icons/instagram-icon.svg";
import { ReactComponent as TelegramIcon } from "../../assets/icons/telegram-icon.svg";
import { ReactComponent as WhatsappIcon } from "../../assets/icons/whatsapp-icon.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/icons/linkedin-icon.svg";
import { ReactComponent as FacebookIcon } from "../../assets/icons/share-facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "../../assets/icons/twitter-icon.svg";

const shareComponent = [
  {
    id: 1,
    name: "Embeded",
    icon: EmbededIcon,
  },
  {
    id: 2,
    name: "Instagram",
    icon: InstagramIcon,
    link: "https://www.instagram.com/accounts/login/?hl=en",
  },
  {
    id: 3,
    name: "Telegram",
    icon: TelegramIcon,
    link: "https://web.telegram.org/a/",
  },
  {
    id: 4,
    name: "Whatsapp",
    icon: WhatsappIcon,
    link: "https://web.whatsapp.com/",
  },
  {
    id: 5,
    name: "Linkedin",
    icon: LinkedinIcon,
    link: "https://www.linkedin.com/",
  },
  {
    id: 6,
    name: "Facebook",
    icon: FacebookIcon,
    link: "https://web.facebook.com/",
  },
  {
    id: 7,
    name: "Twitter",
    icon: TwitterIcon,
    link: "https://x.com/i/flow/login",
  },
];

export default shareComponent;

import dashbord from "../assets/logoMenu/dashboard.svg";
import publicOffer from "../assets/logoMenu/publicOffer.svg";
import swireLogo from "../assets/logoMenu/swireLogo.svg";
import conversation from "../assets/logoMenu/conversation.svg";
import settings from "../assets/logoMenu/settings.svg";
import dashbordWhite from "../assets/logoMenu/dashboardWhite.svg";
import publicOfferWhite from "../assets/logoMenu/publicOfferWhite.svg";
import swireLogoWhite from "../assets/logoMenu/swireLogoWhite.svg";
import conversationWhite from "../assets/logoMenu/conversationWhite.svg";
import settingsWhite from "../assets/logoMenu/settingsWhite.svg";

export const MenuTypeList = [
  {
    name: "Dashboard",
    srcWhite: dashbordWhite,
    src: dashbord,
    alt: "dashboard",
    link: "/dashboard",
  },
  {
    name: "Publish Offer",
    srcWhite: publicOfferWhite,
    src: publicOffer,
    alt: "Publish Offer",
    link: "/publishoffer",
  },
  {
    name: "Swire Match",
    srcWhite: swireLogoWhite,
    src: swireLogo,
    alt: "Swire Match",
    link: "/match",
  },
  {
    name: "Conversation",
    srcWhite: conversationWhite,
    src: conversation,
    alt: "Conversation",
    link: "/conversation",
  },
  {
    name: "Settings",
    srcWhite: settingsWhite,
    src: settings,
    alt: "Settings",
    link: "/settings",
  },
];

import { RiHome5Fill } from "react-icons/ri";
import { SiYoutubegaming } from "react-icons/si";
import { SiDsautomobiles } from "react-icons/si";
import { MdSportsBasketball } from "react-icons/md";
import { SiDcentertainment } from "react-icons/si";
import { GrTechnology } from "react-icons/gr";
import { BiSolidMusic } from "react-icons/bi";
import { LiaBlogSolid } from "react-icons/lia";
import { FaRegNewspaper } from "react-icons/fa6";

const sidebarLists = [
  {
    id: 0,
    icon: <RiHome5Fill />,
    name: "Home",
  },
  {
    id: 20,
    icon: <SiYoutubegaming/>,
    name: "Gaming",
  },
  { id: 2,
    icon: <SiDsautomobiles/>,
    name: "Automobiles",
  },
  {
    id: 17,
    icon: <MdSportsBasketball/>,
    name: "Sports",
  },
  {
    id: 24,
    icon: <SiDcentertainment/>,
    name: "Entertainment",
  },
  {
    id: 28,
    icon: <GrTechnology/>,
    name: "Technology",
  },
  {
    id: 10,
    icon: <BiSolidMusic/>,
    name: "Music",
  },
  {
    id: 22,
    icon: <LiaBlogSolid/>,
    name: "Blog",
  },
  {
    id: 25,
    icon: <FaRegNewspaper/>,
    name: "News",
  },
];

export default sidebarLists;

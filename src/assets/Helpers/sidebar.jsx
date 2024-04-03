import { MdHome } from "react-icons/md";
import { FaGamepad } from "react-icons/fa6";
import { SiDsautomobiles } from "react-icons/si";
import { MdOutlineSportsBasketball } from "react-icons/md";
import { SiDcentertainment } from "react-icons/si";
import { GrTechnology } from "react-icons/gr";
import { FaMusic } from "react-icons/fa";
import { LiaBlogSolid } from "react-icons/lia";
import { FaRegNewspaper } from "react-icons/fa6";

const sidebarLists = [
  {
    id: 0,
    icon: <MdHome size={20} />,
    name: "Home",
  },
  {
    id: 20,
    icon: <FaGamepad size={20}/>,
    name: "Gaming",
  },
  { id: 2,
    icon: <SiDsautomobiles size={20}/>,
    name: "Automobiles",
  },
  {
    id: 17,
    icon: <MdOutlineSportsBasketball size={20}/>,
    name: "Sports",
  },
  {
    id: 24,
    icon: <SiDcentertainment size={20}/>,
    name: "Entertainment",
  },
  {
    id: 28,
    icon: <GrTechnology size={20}/>,
    name: "Tech",
  },
  {
    id: 10,
    icon: <FaMusic size={20}/>,
    name: "Music",
  },
  {
    id: 22,
    icon: <LiaBlogSolid size={20}/>,
    name: "Blog",
  },
  {
    id: 25,
    icon: <FaRegNewspaper size={20}/>,
    name: "News",
  },
];

export default sidebarLists;

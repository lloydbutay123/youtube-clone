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
    icon: <MdHome />,
    name: "Home",
  },
  {
    id: 20,
    icon: <FaGamepad/>,
    name: "Gaming",
  },
  { id: 2,
    icon: <SiDsautomobiles/>,
    name: "Automobiles",
  },
  {
    id: 17,
    icon: <MdOutlineSportsBasketball/>,
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
    icon: <FaMusic/>,
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

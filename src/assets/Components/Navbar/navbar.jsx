import React from "react";
import { FaSearch, FaYoutube } from "react-icons/fa";
import { SlMenu } from "react-icons/sl";
import Youtube from "./../../../assets/Icons/youtube.png";
import { useNavigate } from "react-router-dom";
import {
  MdOutlineVideoCall,
  MdNotificationsNone,
  MdOutlinePerson,
} from "react-icons/md";

const navbar = ({ setSidebar }) => {
  const navigate = useNavigate();
  return (
    <nav className="flex justify-between p-2">
      <div className="flex items-center md:space-x-3 text-white">
        <SlMenu
          size={35}
          className="hidden md:flex cursor-pointer text-black hover:bg-gray-500 p-2"
          onClick={() => setSidebar((prev) => (prev === false ? true : false))}
        />
        <img
          src={Youtube}
          className="w-[100px] md:w-[100px] cursor-pointer"
          onClick={() => navigate("/")}
        />
      </div>
      <div className="flex relative items-center justify-end ml-auto md:m-auto">
        <input
          className="rounded-full hidden md:flex w-[500px] h-10 p-3 text-black border-2 "
          placeholder="Search"
        />
        <FaSearch className="text-[19px] absolute cursor-pointer text-black m-auto md:mr-5" />
      </div>

      <div className="flex items-center text-white space-x-3">
        <MdOutlineVideoCall className="hidden text-[35px] md:flex cursor-pointer bg-gray-500 rounded-full p-2" />
        <MdNotificationsNone className="md:text-[35px] text-[25px] text-black md:text-white cursor-pointer md:bg-gray-500 rounded-full md:p-2" />
        <MdOutlinePerson className="md:text-[35px] text-[25px] text-black md:text-white cursor-pointer md:bg-gray-500 rounded-full md:p-2" />
      </div>
    </nav>
  );
};

export default navbar;

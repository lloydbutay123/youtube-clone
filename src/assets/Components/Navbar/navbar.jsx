import React from "react";
import { FaSearch } from "react-icons/fa";
import { SlMenu } from "react-icons/sl";
import Youtube from "./../../../assets/Icons/youtube.png";
import { useNavigate } from "react-router-dom";
import {
  MdOutlineVideoCall,
  MdNotificationsNone,
  MdOutlinePerson,
} from "react-icons/md";
import { FaMicrophone } from "react-icons/fa6";

const navbar = ({ setSidebar }) => {
  const navigate = useNavigate();
  return (
    <nav className="flex justify-between p-2">
      <div className="flex items-center md:space-x-3 text-white">
        <SlMenu
          className=" text-[35px] hidden md:flex cursor-pointer text-black hover:bg-gray-500 p-2"
          onClick={() => setSidebar((prev) => (prev === false ? true : false))}
        />
        <img
          src={Youtube}
          className="w-[100px] md:w-[100px] cursor-pointer"
          onClick={() => navigate("/")}
        />
      </div>
      <div className="flex ml-auto md:m-auto space-x-3">
        <div className="flex items-center justify-end">
          <input
            className="rounded-full hidden md:flex w-[50vw] h-10 p-3 text-black border-2 "
            placeholder="Search"
          />
          <FaSearch className="text-[35px] absolute cursor-pointer text-black m-auto p-2 md:mr-3" />
        </div>
        <div className="hidden md:flex items-center m-auto">
          <FaMicrophone className="text-[35px] p-2 bg-gray-200 rounded-full" />
        </div>
      </div>

      <div className="flex items-center text-white space-x-3">
        <MdOutlineVideoCall className="hidden text-[35px] cursor-pointer text-black md:flex p-2 hover:bg-gray-200 rounded-full" />
        <MdNotificationsNone className="md:text-[35px] text-[25px] text-black cursor-pointer hover:bg-gray-200 rounded-full md:p-2" />
        <MdOutlinePerson className="md:text-[35px] text-[25px] text-black cursor-pointer hover:bg-gray-200 rounded-full md:p-2" />
      </div>
    </nav>
  );
};

export default navbar;

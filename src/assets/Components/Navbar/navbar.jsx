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
        <button className="hidden md:flex p-2 hover:bg-gray-200 rounded-full">
          <SlMenu
            className="text-black text-[20px]"
            onClick={() =>
              setSidebar((prev) => (prev === false ? true : false))
            }
          />
        </button>
        <img
          src={Youtube}
          className="w-[100px] md:w-[100px] cursor-pointer"
          onClick={() => navigate("/")}
        />
      </div>
      <div className="flex ml-auto md:m-auto space-x-3">
        <div className="flex items-center justify-end">
          <input
            className="rounded-full hidden md:flex w-[50vw] h-10 p-5 text-black border-2"
            placeholder="Search"
          />
          <button className="absolute bg-gray-200 m-auto py-2 px-4 md:mr-1 rounded-full">
            <FaSearch
              className="text-black text-[20px]"
              onClick={() =>
                setSidebar((prev) => (prev === false ? true : false))
              }
            />
          </button>
        </div>
        <div className="hidden md:flex items-center m-auto">
          <button className="p-2 bg-black rounded-full">
            <FaMicrophone
              className="text-black text-[20px] text-white"
              onClick={() =>
                setSidebar((prev) => (prev === false ? true : false))
              }
            />
          </button>
        </div>
      </div>

      <div className="flex items-center text-white space-x-3">
        <button className="hidden md:flex p-2 hover:bg-gray-200 rounded-full">
          <MdOutlineVideoCall
            className="text-black text-[20px]"
            onClick={() =>
              setSidebar((prev) => (prev === false ? true : false))
            }
          />
        </button>
        <button className="p-2 hover:bg-gray-200 rounded-full">
          <MdNotificationsNone
            className="text-black text-[20px]"
            onClick={() =>
              setSidebar((prev) => (prev === false ? true : false))
            }
          />
        </button>
        <button className="p-2 hover:bg-gray-200 rounded-full">
          <MdOutlinePerson
            className="text-black text-[20px]"
            onClick={() =>
              setSidebar((prev) => (prev === false ? true : false))
            }
          />
        </button>
      </div>
    </nav>
  );
};

export default navbar;

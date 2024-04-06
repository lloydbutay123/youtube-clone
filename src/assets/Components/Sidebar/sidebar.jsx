import React from "react";
import subscribed from "../../Helpers/subscribed";
import sidebarLists from "../../Helpers/sidebar";

const sidebar = ({ sidebar, category, setCategory }) => {
  return (
    <div className={`${sidebar ? "md:w-[15%]" : "md:w-[5%] "}`}>
      <div className="hidden md:block px-2 mb-5 border-b-2 border-gray-500">
        {sidebarLists.map((lists, index) => {
          return (
            <div
              className={`flex cursor-pointer items-center text-[25px] p-2 my-3 space-x-2 ${
                category === lists.id ? "bg-gray-200 rounded-xl" : ""
              }`}
              key={index}
              onClick={() => setCategory(lists.id)}
            >
              {lists.icon}
              {""}
              <p className={`${sidebar ? "text-sm" : "hidden"}`}>
                {lists.name}
              </p>
            </div>
          );
        })}
      </div>
      <div className="hidden md:block px-2">
        <h1 className={`${sidebar ? "mb-3 font-bold" : "hidden"}`}>
          Subscribed
        </h1>
        {subscribed.map((subscribe, index) => {
          return (
            <div className="flex cursor-pointer items-center my-3 p-2 space-x-2" key={index}>
              <img
                src={subscribe.image}
                className="h-full w-[25px] object-cover object-center rounded-full"
              />
              <p className={`${sidebar ? "text-sm" : "hidden"}`}>
                {subscribe.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default sidebar;

import React, { useState } from "react";
import Sidebar from "../../assets/Components/Sidebar/sidebar";
import Feed from "../../assets/Components/Feed/feed";

const home = ({ sidebar }) => {
  const [category, setCategory] = useState(0);
  return (
    < div className="flex">
      <Sidebar sidebar={sidebar} category={category} setCategory={setCategory} />
      <div className={`grid sm:grid-cols-1 p-2 gap-3 ${sidebar ? "md:grid-cols-3" : "md:grid-cols-4 p-2 gap-3"}`}>
        <Feed category={category} />
      </div>
    </div>
  );
};

export default home;

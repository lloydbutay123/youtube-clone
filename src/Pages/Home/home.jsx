import React, { useState } from "react";
import Sidebar from "../../assets/Components/Sidebar/sidebar";
import Feed from "../../assets/Components/Feed/feed";

const home = ({ sidebar }) => {
  const [category, setCategory] = useState(0);
  return (
    < div className="flex">
      <Sidebar sidebar={sidebar} category={category} setCategory={setCategory} />
      <div className={`container ${sidebar ? "" : "large-container"}`}>
        <Feed category={category} />
      </div>
    </div>
  );
};

export default home;

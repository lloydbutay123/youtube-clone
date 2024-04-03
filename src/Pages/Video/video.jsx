import React from "react";
import Videoplayer from "../../assets/Components/VideoPlayer/videoplayer";
import { useParams } from "react-router-dom";

const video = () => {
  const { videoId, categoryId } = useParams();
  return (
    <div>
      <Videoplayer videoId={videoId} categoryId={categoryId}/>
    </div>
  );
};

export default video;

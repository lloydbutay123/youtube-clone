import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_KEY, value_converter } from "../../Helpers/data";
import moment from "moment";

const feed = ({ category }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics%20&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
    await fetch(videoList_url)
      .then((res) => res.json())
      .then((data) => setData(data.items));
  };
  useEffect(() => {
    fetchData();
  }, [category]);
  return (
    <>
      {data.map((item, index) => {
        return (
          <Link
            to={`video/${item.snippet.categoryId}/${item.id}`}
            className="w-full"
            key={index}
          >
            <img
              src={item.snippet.thumbnails.medium.url}
              className="w-full rounded-xl"
            />
            <div className="py-2">
              <h2 className="text-sm font-semibold">{item.snippet.title}</h2>
              <h3 className="text-xs">{item.snippet.channelTitle}</h3>
              <p className="text-xs">
                {value_converter(item.statistics.viewCount)} views •{" "}
                {moment(item.snippet.publishedAt).fromNow()}
              </p>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default feed;

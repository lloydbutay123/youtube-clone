import React, { useEffect, useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { FaShare } from "react-icons/fa";
import { IoIosMore } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import { AiOutlineDislike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { API_KEY, value_converter } from "../../Helpers/data";
import moment from "moment";
import { Link, useParams } from "react-router-dom";

const videoplayer = ({ categoryId }) => {
  const [apidata, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentsData, setCommentsData] = useState([]);
  const [recommended, setRecommended] = useState([]);
  const { videoId } = useParams();

  const fetchVideoData = async () => {
    const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics%20&id=${videoId}&key=${API_KEY}`;
    await fetch(videoDetails_url)
      .then((res) => res.json())
      .then((data) => setApiData(data.items[0]));
  };

  const fetchChannelData = async () => {
    const channelDetails_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics%20&id=${apidata.snippet.channelId}&key=${API_KEY}`;
    await fetch(channelDetails_url)
      .then((res) => res.json())
      .then((data) => setChannelData(data.items[0]));

    const commentDetails_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`;
    await fetch(commentDetails_url)
      .then((res) => res.json())
      .then((data) => setCommentsData(data.items));
  };

  const fetchRecommendedData = async () => {
    const recommendedDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics%20&chart=mostPopular&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
    await fetch(recommendedDetails_url)
      .then((res) => res.json())
      .then((data) => setRecommended(data.items));
  };

  useEffect(() => {
    fetchVideoData();
  }, [videoId]);

  useEffect(() => {
    fetchChannelData();
  }, [apidata]);

  useEffect(() => {
    fetchChannelData();
  }, []);

  useEffect(() => {
    fetchRecommendedData();
  }, []);

  return (
    <div className="md:flex p-2 md:px-28">
      <div className="md:pr-5 md:w-2/3">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className="rounded-2xl w-full h-[360px]"
        ></iframe>
        <div>
          <h1 className="font-bold text-2xl text-wrap">
            {apidata ? apidata.snippet.title : "Title here:"}
          </h1>
        </div>
        <div className="flex py-3 space-x-2">
          <div className="flex space-x-2 items-center">
            <img
              src={channelData ? channelData.snippet.thumbnails.default.url : ""}
              className="w-10 h-10 object-cover rounded-full"
            />
            <div className="block">
              <h3 className="font-bold text-sm">
                {apidata ? apidata.snippet.channelTitle : ""}
              </h3>
              <p className="text-xs">
                {value_converter(
                  channelData ? channelData.statistics.subscriberCount : ""
                )}{" "}
                subscribers
              </p>
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="py-2 px-2 md:px-6 bg-gray-200 text-black rounded-full">
              Join
            </button>
            <button className="py-2 px-2 md:px-6 bg-black text-white rounded-full">
              Subscribe
            </button>
          </div>
        </div>
        <div className="mb-3">
          <div className="flex items-center space-x-2">
            <button className="flex justify-between py-2 px-6 bg-gray-200 gap-4 rounded-full">
              <AiFillLike size={25} />
              {value_converter(
                apidata ? apidata.statistics.likeCount : "Likes here:"
              )}
              <AiFillDislike size={25} />
            </button>
            <button className="flex py-2 px-2 bg-gray-200 gap-2 rounded-full">
              <FaShare size={25} />
              Share
            </button>
            <button className="flex py-2 px-2 bg-gray-200 gap-2 rounded-full">
              <IoIosMore size={25} />
            </button>
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-2xl py-3 px-3">
          <h3 className="text-sm font-bold">
            {value_converter(
              apidata ? apidata.statistics.viewCount : "Count here:"
            )}{" "}
            {apidata ? moment(apidata.snippet.publishedAt).fromNow() : "From:"}
          </h3>
          <p className="text-sm">
            {apidata ? apidata.snippet.description : "Description:"}
          </p>
        </div>
        <div className="block">
          <div className="flex items-center space-x-5 py-5">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold">
                {apidata ? apidata.statistics.commentCount : "Comment:"}{" "}
                Comments
              </h1>
            </div>
            <div className="flex items-center">
              <span className="flex items-center font-semibold">
                <BiMenuAltLeft size={25} />
                Sort by
              </span>
            </div>
          </div>

          {commentsData.map((item, index) => {
            return (
              <div className="flex space-x-2 mb-5" key={index}>
                <div className="flex w-1/6 md:w-10">
                  <div>
                    <img
                      src={
                        item.snippet.topLevelComment.snippet
                          .authorProfileImageUrl
                      }
                      className="h-10 w-10 rounded-full"
                    />
                  </div>
                </div>
                <div className="w-5/6 md:w-full block space-y-1">
                  <h3 className="font-semibold text-sm">
                    {item.snippet.topLevelComment.snippet.authorDisplayName}
                    <span className="text-xs font-normal ml-2">
                      {moment(
                        item.snippet.topLevelComment.snippet.publishedAt
                      ).fromNow()}
                    </span>
                  </h3>
                  <p className="text-sm flex-wrap">
                    {item.snippet.topLevelComment.snippet.textOriginal}
                  </p>
                  <div className="flex items-center space-x-5">
                    <AiOutlineLike size={25} />
                    {item.snippet.topLevelComment.snippet.likeCount}
                    <AiOutlineDislike size={25} />
                    <a className="text-xs font-semibold">Reply</a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="md:w-1/3">
        <div className="block space-y-2">
          {recommended.map((item, index) => {
            return (
              <Link
                to={`/video/${item.snippet.categoryId}/${item.id}`}
                className="flex gap-2"
                key={index}
              >
                <img
                  src={item.snippet.thumbnails.medium.url}
                  className="w-[150px] rounded-lg"
                />
                <div className="block space-y-1">
                  <h2 className="text-sm font-semibold">
                    {item.snippet.title}
                  </h2>
                  <p className="block text-xs">{item.snippet.channelTitle}</p>
                  <p className="block text-xs">
                    {value_converter(item.statistics.viewCount)} views •{" "}
                    {moment(item.snippet.publishedAt).fromNow()}{" "}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default videoplayer;

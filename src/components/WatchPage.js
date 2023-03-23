import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../Utils/AppSlice";
import { YOUTUBE_VIDEO_INFO_API } from "../Utils/constants";

const WatchPage = () => {
    const [videoInfo, setVideoInfo] = useState([])
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu);
    getVideoInfo()
  }, []);
 const getVideoInfo = async()=>{
    const data = await fetch(YOUTUBE_VIDEO_INFO_API);
    const json = await data.json();
    console.log(json.items);
    setVideoInfo(json.items)
 }
  return (
    <div className="px-5">
      <iframe
        width="800"
        height="400"
        src={"https://www.youtube.com/embed/"+searchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        autoPlay="true"
      ></iframe>
    </div>
  );
};

export default WatchPage;

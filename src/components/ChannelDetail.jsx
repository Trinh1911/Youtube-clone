import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, CardMedia } from "@mui/material";
import { Videos, ChannelCard } from "./index";
import { fetchFromAPI } from "../utils/fetchFromAPI";
const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  console.log(channelDetail, videos);
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);
  return (
    <Box minHeight="95vh">
      <CardMedia
        image={channelDetail?.brandingSettings.image.bannerExternalUrl}
        sx={{
          height: "300px",
          width: "100%",
          zIndex: "10",
        }}
      />
      <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: "100px" } }}>
        </Box>
          <Videos videos={videos}></Videos>
      </Box>
    </Box>
  );
};

export default ChannelDetail;

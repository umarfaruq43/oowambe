import { AspectRatio, Box } from "@chakra-ui/react";
import React from "react";

const Video = () => {
  return (
    <Box>
      {/* <AspectRatio w="100%" > */}
      {/* <video src="/video/video.mp4" controls={true} /> */}
      {/* <iframe title="naruto" src="/video/video.mp4" allowFullScreen /> */}
      {/* </AspectRatio> */}

      <video  loop autoPlay muted width="100%" src="/video/video.mp4">
        {/* <source  type="video/mp4" /> */}
      </video>
    </Box>
  );
};

export default Video;

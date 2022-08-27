import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./style.css"
import React from 'react'
import { Box } from "@mui/material";

const ImageSlider = ({ imagesArr,settings }) => {


  return (
    <>
      {/* <Box className="tag">
        <h1>Image Gallery</h1>
      </Box> */}

      {/* <div className="imgslider">
        <Slider {...settings}>
          {imagesArr.map((item,index) => (
            <div key={index}>
              <img src={item.src}  alt={item.alt} />
            </div>
          ))}
        </Slider>
      </div> */}

      <Box className="imgslider">
        <Slider {...settings} >
          {imagesArr.map((item, index) => (
            <Box key={index} component='img' sx={{width:'auto',height:'auto',maxHeight:500,objectFit:'contain'}} src={item.src} alt={item.alt}>
              {/* <img  /> */}
            </Box>
          ))}
        </Slider>
      </Box>
    </>
  )
}
export default ImageSlider;
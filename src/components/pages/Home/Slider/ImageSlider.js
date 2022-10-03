import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./style.css"
import React from 'react'
import { Box, Button } from "@mui/material";
import { useAuth } from "../../../../context/authContext";
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";
// import ImageGrid from "./ImageGrid";

const ImageSlider = ({ imagesArr, settings }) => {
  const { auth, isAdmin } = useAuth();
  const nav = useNavigate()
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

      {auth.currentUser && isAdmin ?
        <Box textAlign='center' margin={1}>
          <Button variant="contained" endIcon={<EditIcon />} onClick={() => nav('/editslider')}>
            Edit Slider Images
          </Button>
        </Box>
        : null}
      <Box className="imgslider" >
        {/* <ImageGrid imagesDataDict={findImagesData()} setcateInfo={setcateInfo} /> */}
        < Slider {...settings} >
          {imagesArr.map((item, index) => (
            <Box key={index} component='img' sx={{ width: 'auto', height: 'auto', maxHeight: { xs: 130, sm: 200, md: 300, lg: 400, xl: 500 }, objectFit: 'cover' }} src={item.src} alt={item.alt} loading="lazy">
              {/* <img  /> */}
            </Box>
          ))}
        </Slider>
      </Box>
    </>
  )
}
export default ImageSlider;
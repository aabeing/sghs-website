
import ImageGrid from './ImageGrid';
import { useFireDocs } from '../../../fireConfig/useFirestore';
import { useState } from 'react';
import CateGrid from './CateGrid';


export default function Gallery() {
  const cateImgArr = useFireDocs('gallery');
  // const [imagesData, setImagesData] = useState();
  const [cateInfo, setcateInfo] = useState();
  // const [loading, setLoading] = useState(false);
  // const isMatchLarge = useMediaQuery(theme.breakpoints.up('md'));

  if (cateImgArr.length === 0) {
    return (
      <>
        Loading...
      </>
    )
  }
  // Load category page, load child page in else
  if (!cateInfo) {
    // console.log("CHECK: ", cateImgArr)
    if (cateImgArr) {
      return (
        <CateGrid cateImgArr={cateImgArr} setcateInfo={setcateInfo} />
      )
    }
  }
  else {
    const findImagesData = ()=>{
      const imagesDataDict = cateImgArr.find(ele => ele.id === cateInfo.cateId)
      console.log("GRID: ",imagesDataDict)
      return imagesDataDict;
    }
    findImagesData()
    return (
      <ImageGrid imagesDataDict={findImagesData()} setcateInfo={setcateInfo} />
    )
  }

}



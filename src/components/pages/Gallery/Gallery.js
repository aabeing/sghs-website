
import ImageGrid from './ImageGrid';
import { useFireDocs } from '../../../fireConfig/useFirestore';
import { useState } from 'react';
import CateGrid from './CateGrid';
// import Loading from '../Loading';


export default function Gallery() {
  const cateImgArr = useFireDocs('gallery');
  const [cateInfo, setcateInfo] = useState();
  // const isMatchLarge = useMediaQuery(theme.breakpoints.up('md'));

  // if (cateImgArr.length === 0) {
  //   return (
  //     <Loading/>
  //   )
  // }
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
      // console.log("GRID: ",imagesDataDict)
      return imagesDataDict;
    }
    findImagesData()
    return (
      <ImageGrid imagesDataDict={findImagesData()} setcateInfo={setcateInfo} />
    )
  }

}



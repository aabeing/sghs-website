import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import { deleteFileStorage, deleteImgDoc } from '../../../fireConfig/galleryImages';
import { deleteDocFromDb } from '../../../fireConfig/useFirestore';

function Delete({ imagesDataDict, curImgData,setcateInfo }) {
    const handleDelete = async () => {
        try {
            const cateId = imagesDataDict.id
            // If last element delete the collection
            if (imagesDataDict.data.imgData.length === 1) {
                setcateInfo(null);
                await deleteDocFromDb('gallery', imagesDataDict.id);                

            }
            else {
                await deleteImgDoc(cateId, curImgData)
            }
            await deleteFileStorage(`gallery/${cateId}/${curImgData.stImageName}`);

            // setImagesData((prevState) => {
            //     prevState.imgData.splice(index, 1)
            //     return ({
            //         ...prevState, imgData: prevState.imgData
            //     })
            // }
            // )
        }
        catch (err) {
            alert(err);
        }

    }
    return (<>
        <Button className='hiddenbtn' color='secondary' startIcon={<DeleteIcon />} variant='contained' sx={{ position: 'absolute', right: 0 }} onClick={handleDelete}></Button>
    </>
    )
}

export default Delete
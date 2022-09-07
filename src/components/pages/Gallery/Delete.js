import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import { deleteFileStorage, deleteImgDoc } from '../../../fireConfig/galleryImages';

function Delete({ cateId, curImgData }) {
    const handleDelete = async () => {
        try {
            await deleteImgDoc(cateId, curImgData)
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
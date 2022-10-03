import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import { deleteFileStorage, deleteImgDoc } from '../../../../fireConfig/galleryImages';
// import { deleteDocFromDb } from '../../../fireConfig/useFirestore';

function Delete({ curImgData }) {
    const handleDelete = async () => {
        try {
            const dbInfo = {
                collectName: 'InitCollect',
                docName: 'InitCollectDoc',
                imgArrName: 'SliderImg'
            }
                await deleteImgDoc(dbInfo, curImgData)
            
            await deleteFileStorage(`${dbInfo.collectName}/${dbInfo.docName}/${curImgData.stImageName}`);

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
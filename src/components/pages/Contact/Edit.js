
// import { LoadingButton } from '@mui/lab';
import { Box, Button } from '@mui/material';
import {  useRef, useState } from 'react';
import { deleteFileStorage, deleteImgDoc } from '../../../fireConfig/galleryImages';
import ProgressList from '../../progressList/ProgressList';


function Edit({ dbInfo,editMode, setEditMode, curImgData }) {
    const [inpFiles, setInpFiles] = useState([]);
    // const [changeBtnLoad, setChangeBtnLoad] = useState(false)
    const fileRef = useRef();
    const handleClick = () => {
        fileRef.current.click();
        // setChangeBtnLoad(true)
    }
    const handleChange = async (e) => {
        // console.log("Files out", e.target, "\n ", fileRef.current.value);
        try {
            await deleteImgDoc(dbInfo, curImgData)
            await deleteFileStorage(`${dbInfo.collectName}/${dbInfo.docName}/${curImgData.stImageName}`);
        }
        catch (err) {
            alert('Deletion failed')
        }
        setInpFiles([...e.target.files]);
        fileRef.current.value = null;

    }
    // useEffect(() => {
    //     if (!editMode) {
    //         setChangeBtnLoad(false)
    //     }
    // }, [editMode])
    return (
        <>
            <ProgressList files={inpFiles} dbInfo={dbInfo} setInpFiles={setInpFiles} />
            <Box sx={{ margin: 1 }}>
                <Button sx={{ margin: 1 }} variant='contained' onClick={() => setEditMode(pre => !pre)}>
                    {editMode ? <>Cancel</> : <>Edit Content</>}
                </Button>
                {/* <Button sx={{ m: 1 }} variant='contained'>Change Image</Button> */}
                <input type="file" multiple style={{ display: 'none' }} ref={fileRef} onChange={handleChange} />
                {!editMode && <Button
                    sx={{ m: 1 }} variant="contained" aria-label="add an image"
                    onClick={handleClick}>
                    Change Image
                </Button>}
            </Box>
        </>
    )
}

export default Edit
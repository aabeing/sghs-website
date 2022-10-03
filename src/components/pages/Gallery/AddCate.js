import { useRef, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Button, Container, TextField, Typography } from '@mui/material';
import ProgressList from '../../progressList/ProgressList';
// import ProgressList from './progressList/ProgressList';

function AddCate() {
    const [cateId, setcateId] = useState('')
    const [inpFiles, setInpFiles] = useState([]);
    const fileRef = useRef();
    const handleClick = () => {
        fileRef.current.click();
    }
    const handleChange = (e) => {
        console.log("Files out", e.target, "\n ", fileRef.current.value);
        setInpFiles([...e.target.files]);
        fileRef.current.value = null;

    }
    const dbInfo = {
        collectName: 'gallery',
        docName: cateId,
        imgArrName: 'imgData'
    }
    // setimagesLength(fileRef.current.files.length); 
    return (<>
        {cateId && <ProgressList files={inpFiles} dbInfo={dbInfo} setInpFiles={setInpFiles} />}
        <Container sx={{ display: 'flex', justifyContent: 'center', paddingTop: 1 }}>
            <TextField label="New category name" value={cateId} variant="filled" onChange={(e) => { setcateId(e.target.value) }} />
            <input type="file" style={{ display: 'none' }} ref={fileRef} onChange={(e) => handleChange(e)} />
            <Button variant="contained" endIcon={<AddIcon />} aria-label="add an image" onClick={() => handleClick()} disabled={!cateId}>
                Add Image
            </Button>
            {/* {imagesLength? <br/> `Selected: ${imagesLength}`:null} */}
        </Container>
        <Typography textAlign='center' variant='body1' color='warning.main'>(Max storage capacity is 5GB in free tier, try to compress images without loosing quality before uploading.)</Typography>

    </>
    )
}

export default AddCate
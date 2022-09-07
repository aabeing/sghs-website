import { useRef, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Button, Container, TextField } from '@mui/material';
import ProgressList from './progressList/ProgressList';

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
    // setimagesLength(fileRef.current.files.length); 
    return (<>
        {cateId && inpFiles.length>0 && <ProgressList files={inpFiles} cateId={cateId} />}
        <Container sx={{ display: 'flex', justifyContent: 'center', paddingTop: 1 }}>
            <TextField  label="New category name" value={cateId} variant="filled" onChange={(e)=>{setcateId(e.target.value)}}/>
            <input type="file" multiple style={{ display: 'none' }} ref={fileRef} onChange={(e)=>handleChange(e)} />
            <Button variant="contained" endIcon={<AddIcon />} aria-label="add an image" onClick={()=>handleClick()} disabled={!cateId}>
                Add images
            </Button>
            {/* {imagesLength? <br/> `Selected: ${imagesLength}`:null} */}
        </Container>
    </>
    )
}

export default AddCate
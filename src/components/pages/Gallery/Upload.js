import React, { useRef, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Button, Container } from '@mui/material';
import ProgressList from './progressList/ProgressList';

function Upload({imagesData}) {
    // const [imagesLength,setimagesLength] = useState(0);
    const [inpFiles,setInpFiles] = useState([]);
    const fileRef = useRef();
    const handleClick = () => {
        fileRef.current.click();
    }
    const handleChange = (e) => {
        console.log("Files out",e.target,"\n ",fileRef.current.value);
        setInpFiles([...e.target.files]);
        fileRef.current.value = null;
    }
    // setimagesLength(fileRef.current.files.length); 
    return (<>
        <ProgressList files={inpFiles} imagesData={imagesData}/>
        <Container sx={{ display: 'flex', justifyContent: 'center', paddingTop: 1 }}>
            <input type="file" multiple style={{ display: 'none' }} ref={fileRef} onChange={handleChange} />
            <Button variant="contained" endIcon={<AddIcon />} aria-label="add an image" onClick={handleClick}>
                Add image
            </Button>
            {/* {imagesLength? <br/> `Selected: ${imagesLength}`:null} */}
        </Container>
        </>
    )
}

export default Upload
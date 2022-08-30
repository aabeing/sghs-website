import React, { useRef, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Button, Container, Input } from '@mui/material';

function Upload() {
    // const [imagesLength,setimagesLength] = useState(0);
    const fileRef = useRef();
    const handleClick = () => {
        fileRef.current.click();
    } 
    // setimagesLength(fileRef.current.files.length); 
    return (
        <Container sx={{ display: 'flex', justifyContent: 'center', paddingTop: 1 }}>
            <input type="file" multiple style={{ display: 'none' }} ref={fileRef} />
            <Button variant="contained" endIcon={<AddIcon />} aria-label="add an image" onClick={handleClick}>
                Add image 
            </Button>
            {/* {imagesLength? <br/> `Selected: ${imagesLength}`:null} */}
        </Container>
    )
}

export default Upload
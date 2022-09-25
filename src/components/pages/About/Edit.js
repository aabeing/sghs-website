
import { Box, Button } from '@mui/material';
import { useRef, useState } from 'react';


function Edit({ editMode,setEditMode }) {
    const [inpFile, setInpFile] = useState([]);
    const fileRef = useRef();
    const handleClick = () => {
        fileRef.current.click();
    }
    const handleChange = (e) => {
        // console.log("Files out", e.target, "\n ", fileRef.current.value);
        setInpFile([...e.target.files]);
        fileRef.current.value = null;
    }

    return (
        <Box sx={{ margin: 1 }}>
            <Button sx={{ margin: 1 }} variant='contained' onClick={() => setEditMode(pre => !pre)}>
                {editMode?<>Cancel</>:<>Edit Content</>}
            </Button>
            {/* <Button sx={{ m: 1 }} variant='contained'>Change Image</Button> */}
            <input type="file" multiple style={{ display: 'none' }} ref={fileRef} onChange={handleChange} />
            <Button sx={{ m: 1 }} variant="contained" aria-label="add an image" onClick={handleClick}>
            Change Image
            </Button>
        </Box>
    )
}

export default Edit
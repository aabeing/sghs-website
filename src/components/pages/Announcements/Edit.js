import { Button, Container } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
// import { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditForm from './EditForm';

function Edit({ setPage, page, announceData }) {
    // const [btnVal,setBtnVal] = useState('Edit Announcements')
    const handleBtn = () => {
        if (page === 'view') {
            setPage('edit')
        }
        else {
            setPage('view')
        }
    }
    return (
        <>
            <Container sx={{ display: 'flex', justifyContent: 'center', paddingTop: 1 }}>
                {page === 'view' && <Button onClick={handleBtn} variant="contained" endIcon={<EditIcon />} aria-label="add an image" >
                    Edit Announcements
                </Button>}
                {page === 'edit' && <Button onClick={handleBtn} variant="contained" endIcon={<ArrowBackIcon />} aria-label="add an image" >
                    Go Back
                </Button>}
            </Container>
            {page === 'edit' ?
                <EditForm announceData={announceData}/>
                : null}
        </>

    )
}

export default Edit
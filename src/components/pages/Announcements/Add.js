import { Button, Container } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
// import { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddForm from './AddForm';

function Add({ setPage, page, announceData }) {
    // const [btnVal,setBtnVal] = useState('add Announcements')
    const handleBtn = () => {
        if (page === 'view') {
            setPage('add')
        }
        else {
            setPage('view')
        }
    }
    return (
        <>
            <Container sx={{ display: 'flex', justifyContent: 'center', py: 1 }}>
                {page === 'view' && <Button onClick={handleBtn} variant="contained" endIcon={<AddIcon />} aria-label="Add Announcement" >
                    Add Announcement
                </Button>}
                {page === 'add' && <Button onClick={handleBtn} variant="contained" endIcon={<ArrowBackIcon />} aria-label="go back" >
                    Go Back
                </Button>}
            </Container>
            {page === 'add' ?
                <AddForm/>

                : null}
        </>

    )
}

export default Add
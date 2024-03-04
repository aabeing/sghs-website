
import { useState } from 'react';
import { useAuth } from '../../context/authContext';
import Loading from './Loading';
import EditIcon from '@mui/icons-material/Edit';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button } from '@mui/material';

const googleUrl = "https://drive.google.com/embeddedfolderview?id=1M98bMy0j4XOS7Y1hik8dPWNcb-QOLHxJ#list"
const googleUrlEdit = "https://drive.google.com/drive/folders/1M98bMy0j4XOS7Y1hik8dPWNcb-QOLHxJ"
function Downloads() {
    const [load, setLoad] = useState(true);
    const { auth, isAdmin } = useAuth();
    const iframeLoading = () => {
        setLoad(false);
    }
    // const [edit, setEdit] = useState(false);
    return (
        <>
            {auth.currentUser && isAdmin ?
                <a href={googleUrlEdit} target='_blank' rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <Button
                        // onClick={() => setEdit(true)} 
                        sx={{ ml: 2 }} variant='contained'
                        endIcon={<EditIcon />}>Edit
                    </Button>
                </a>
                : null}
            <iframe title='Downloads page' src={googleUrl}
                width="100%"
                height="600px"
                frameBorder="0" marginHeight="0" marginWidth="0"
                loading="lazy"
                onLoad={iframeLoading}
            ></iframe>
            {load ? <Loading /> : null}
        </>
    )
}

export default Downloads
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, IconButton } from '@mui/material';
import { deleteDocFromDb } from '../../../fireConfig/useFirestore';

function Delete({ docId }) {
    const handleDelete = async () => {
        try {
            // console.log("Delete ", docId)
            await deleteDocFromDb('Announcements', docId);
        }
        catch (err) {
            alert(err);
        }

    }
    return (
        <>
            <Button
                className='hiddenbtn' color='secondary' startIcon={<DeleteIcon />} variant='contained'
                sx={{ position: 'absolute', left: 0, top: 0 }}
                onClick={handleDelete}
            >
            </Button>
            {/* <IconButton varia size='large' aria-label="delete announcement" className='hiddenbtn' color='secondary' 
            sx={{ position: 'absolute', left: 11, top: 11 }}
            >
                <DeleteIcon />
            </IconButton> */}
        </>
    )
}

export default Delete
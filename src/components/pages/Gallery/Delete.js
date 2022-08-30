import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';

function Delete() {
    return (<>
        <Button className='hiddenbtn' color='secondary' startIcon={<DeleteIcon />} variant='contained' sx={{ position: 'absolute', right: 0 }} onClick={() => { console.log('TEST') }}></Button>
        </>
    )
}

export default Delete
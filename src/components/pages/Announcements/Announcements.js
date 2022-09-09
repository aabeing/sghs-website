import { Box, Typography } from '@mui/material'
// import SquareIcon from '@mui/icons-material/Square';
import Loading from '../Loading';
import Edit from './Edit';
import { useAuth } from '../../../context/authContext';
import { useState } from 'react';
import View from './View';
function Announcements({ announceData }) {
    const { auth, isAdmin } = useAuth();
    const [page, setPage] = useState("view")
    const boxStyle = {
        margin: { xs: 2, md: 8 }, padding: { xs: 0.5, md: 3 }
    }
    const lineClampStyle = {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitLineClamp: '2',
        WebkitBoxOrient: 'vertical',
    }
    if (announceData.length) {
        return (
            <Box sx={boxStyle}>
                <Typography variant='h4' textAlign='left'>Announcements</Typography>
                {auth.currentUser && isAdmin ? <Edit setPage={setPage} page={page} announceData={announceData}/> : null}
                {page === 'view' ?
                   <View announceData={announceData}/>
                    : null}


            </Box>
        )
    }
    else {
        <Loading />
    }
}

export default Announcements
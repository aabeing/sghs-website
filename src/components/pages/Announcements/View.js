import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import SquareIcon from '@mui/icons-material/Square';
import Delete from './Delete'
import { styled } from '@mui/system';
import { useAuth } from '../../../context/authContext';


function View({ announceData }) {
    const { auth, isAdmin } = useAuth();
    const MyComponentHover = styled('div')({
        "& .hiddenbtn": {
            display: "none"
        },
        "&:hover .hiddenbtn": {
            display: "flex"
        },
        m: 1,        
        // transition: ' 0.4s all ease-in-out',
        '&:hover': { transform: 'scale(1)' },
    });
    return (
        <List sx={{ width: '100%', maxWidth: { xs: '100%' },border: '3px solid', borderColor: 'text.primary', }}>

            {announceData.map((element, index) => {
                const ele = element.data;
                return (
                    <MyComponentHover >
                        <ListItem key={index} alignItems='flex-start' >
                            <ListItemAvatar key={index + '-1'}>
                                <Avatar>
                                    <SquareIcon fontSize='small' color='primary' />
                                </Avatar>
                            </ListItemAvatar>
                            {/* sx={{ maxHeight: 120, textOverflow: 'ellipsis', overflow: 'hidden' }} */}
                            <ListItemText key={index + '-2'}
                                primary={
                                    <Typography variant='h6'>{ele.heading}</Typography>
                                } secondary={
                                    <>
                                        {ele.timestamp.toDate().toDateString()}
                                        <Typography color='text.primary'
                                        // sx={{
                                        //     ...lineClampStyle,
                                        //     WebkitLineClamp: '3',
                                        // }}
                                        >
                                            {ele.content}
                                        </Typography>
                                    </>
                                } />
                        </ListItem>
                        {auth.currentUser && isAdmin ?
                            <>
                                <Delete docId={element.id} />
                                <Typography sx={{mx:9}} color='error.main'>
                                    Expiry: {ele.expiryDate.toDate().toDateString()}
                                </Typography>
                            </>
                            : null}
                    </MyComponentHover>)
            })}


        </List>
    )
}

export default View
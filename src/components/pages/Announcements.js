import { Avatar, Box, Grid, List, ListItem, ListItemAvatar, ListItemText, Paper, Typography } from '@mui/material'
import SquareIcon from '@mui/icons-material/Square';
import Loading from './Loading';
function Announcements({announceData}) {
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
                    <List sx={{ width: '100%', maxWidth: { xs: '100%' } }}>
                        {announceData.map((element, index) => {
                            const ele = element.data;
                            return (
                                <ListItem key={index} alignItems='flex-start' >
                                    <ListItemAvatar key={index + '-1'}>
                                        <Avatar>
                                            <SquareIcon fontSize='small' color='primary' />
                                        </Avatar>
                                    </ListItemAvatar>
                                    {/* sx={{ maxHeight: 120, textOverflow: 'ellipsis', overflow: 'hidden' }} */}
                                    <ListItemText key={index + '-2'}
                                        primary={
                                            <Typography variant='h6'>{ele.Heading}</Typography>
                                        } secondary={
                                            <>
                                                {ele.timestamp.toDate().toDateString()}
                                                <Typography color='text.primary'
                                                    // sx={{
                                                    //     ...lineClampStyle,
                                                    //     WebkitLineClamp: '3',
                                                    // }}
                                                >
                                                    {ele.Content}
                                                </Typography>
                                            </>
                                        } />
                                </ListItem>)
                        })}

                    </List>
            </Box>
        )
    }
    else{
        <Loading/>
    }
}

export default Announcements
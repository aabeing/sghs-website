import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import SquareIcon from '@mui/icons-material/Square';

function View({announceData}) {
  return (
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
  )
}

export default View
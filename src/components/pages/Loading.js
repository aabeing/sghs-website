import { Backdrop, CircularProgress, Typography } from '@mui/material'
import { useState } from 'react';
import { useEffect } from 'react';

function Loading() {
    const [alertErr, setalertErr] = useState('');
    // const [isOffline,setIsOffline] = useState(false);
    useEffect(() => {
        const timeId = setTimeout(() => {
            // After 10 seconds set alertErr
            if (navigator.onLine) {
                setalertErr('Something went wrong! Are you offline?');
            }
            else {
                setalertErr('You are offline! Please connect to internet');
            }
        }, 10000)
        // console.log("navi",navigator.onLine);
        // const interval = setInterval(() => {
        //     if(navigator.onLine){
        //         console.log("online")
        //     }
        //     else{
        //         console.log("offline")
        //     }
        //   }, 5000);
        return () => {
            clearTimeout(timeId);
            // clearInterval(interval);
        }
    }, []);
    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={true}
        >
            <CircularProgress />
            {alertErr ? <Typography sx={{ m: 3 }} variant='h4' color='error.main'>{alertErr}</Typography> : null}
        </Backdrop>
    )
}

export default Loading
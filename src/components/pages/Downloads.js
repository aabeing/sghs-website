
import { useState } from 'react';
import Loading from './Loading';

const googleUrl = "https://drive.google.com/embeddedfolderview?id=1M98bMy0j4XOS7Y1hik8dPWNcb-QOLHxJ#list"
// const googleUrlEdit = "https://drive.google.com/drive/folders/1M98bMy0j4XOS7Y1hik8dPWNcb-QOLHxJ"
function Downloads() {
    const [load, setLoad] = useState(true);
    const iframeLoading = () => {
        setLoad(false);
    }
    return (
        <>
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
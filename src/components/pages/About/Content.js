import { LoadingButton } from '@mui/lab';
import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { mergeKnownDocEle } from '../../../fireConfig/addDoc';

function Content({ initCollectData, editMode, setEditMode }) {
    let contentPara = initCollectData?.WelcomeMessage
    // contentPara.replace(/\n/g, '&#13;&#10;')
    // contentPara.replace(/\\n/g, ' &#13;&#10;')
    contentPara = eval('`' + contentPara + '`');
    const [contentData, setcontentData] = useState(contentPara);
    const [saveBtnLoad, setSaveBtnLoad] = useState(false);

    if (editMode) {
        // console.log("TEST1: ", contentPara)
        // console.log("TEST2: ", contentData)
        const handleSave = async () => {
            setSaveBtnLoad(true);
            try {
                await mergeKnownDocEle('InitCollect', 'InitCollectDoc', { ...initCollectData, WelcomeMessage: contentData.replace(/\r?\n/g, "\\n") });
                setEditMode(false);
                setSaveBtnLoad(false);
            }
            catch (error) {
                setSaveBtnLoad(false)
                alert(error.message);
                console.log(error);
            }
        }
        return (
            <>
                <TextField
                    sx={{ width: '100%', whiteSpace: 'pre-line' }}
                    // variant="filled"
                    // label="Content"
                    placeholder="Add text"
                    multiline
                    value={contentData}
                    onChange={(e) => setcontentData(e.target.value)}
                />
                <LoadingButton
                    onClick={handleSave}
                    loading={saveBtnLoad}
                    //  loadingPosition="end"
                    variant='contained'
                    sx={{ my: 2, width: '100%' }}>
                    Save
                </LoadingButton>
            </>
        )
    }
    else {
        const contentParaObj = contentPara?.split('\n');
        console.log("TEST: ", contentParaObj)
        return (
            <>
                {contentParaObj.map((ele) => (<>
                    <Typography variant='subtitle1' display='block' sx={{
                        fontSize: { xs: 16, sm: 17, md: 18, lg: 20 }
                    }}>
                        {ele}
                    </Typography>
                    <br /></>
                ))}
            </>
        )
    }
}

export default Content
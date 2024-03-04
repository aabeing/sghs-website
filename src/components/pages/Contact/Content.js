import { LoadingButton } from '@mui/lab';
import { TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { mergeKnownDocEle } from '../../../fireConfig/addDoc';

function Content({ ContactDocData, editMode, setEditMode, dbInfo }) {
    // const heading = ContactDocData?.heading
    // const phNumber = ContactDocData?.phNumber
    // const emailId = ContactDocData?.emailId
    // const addressInfo = ContactDocData?.addressInfo

    // let contentPara = ContactDocData?.WelcomeMessage
    // const contentHead1 = ContactDocData?.aboutHead;
    // contentPara.replace(/\n/g, '&#13;&#10;')
    // contentPara.replace(/\\n/g, ' &#13;&#10;')
    // contentPara = eval('`' + contentPara + '`');
    const [contactInfo, setContactInfo] = useState(ContactDocData);
    // const [contentData, setcontentData] = useState(contentPara);
    // const [contentHead, setcontentHead] = useState(contentHead1);
    const [saveBtnLoad, setSaveBtnLoad] = useState(false);
    if (editMode) {
        // console.log("TEST1: ", contentPara)
        // console.log("TEST2: ", contentData)
        const handleSave = async () => {
            setSaveBtnLoad(true);

            try {
                await mergeKnownDocEle(dbInfo.collectName, dbInfo.docName, {
                    ...contactInfo
                });

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
                    label="Heading"
                    placeholder="Add heading"
                    value={contactInfo.heading}
                    onChange={(e) => setContactInfo({ ...contactInfo, heading: e.target.value })}
                />
                <TextField
                    sx={{ width: '100%', whiteSpace: 'pre-line', mt: 1 }}
                    // variant="filled"
                    label="Phone Number"
                    placeholder="Add phNumber"
                    multiline
                    value={contactInfo.phNumber}
                    onChange={(e) => setContactInfo({ ...contactInfo, phNumber: e.target.value })}
                />
                <TextField
                    sx={{ width: '100%', whiteSpace: 'pre-line', mt: 1 }}
                    // variant="filled"
                    label="Address"
                    placeholder="Add addressInfo"
                    multiline
                    value={contactInfo.addressInfo}
                    onChange={(e) => setContactInfo({ ...contactInfo, addressInfo: e.target.value })}
                />
                <TextField
                    sx={{ width: '100%', whiteSpace: 'pre-line', mt: 1.5 }}
                    // variant="filled"
                    label="Email Id"
                    placeholder="Add emailId"
                    multiline
                    value={contactInfo.emailId}
                    onChange={(e) => setContactInfo({ ...contactInfo, emailId: e.target.value })}
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
        // const contentParaObj = contentPara?.split('\n');
        // console.log("TEST: ", contentParaObj)
        return (
            <>
                <Typography variant='h3' fontWeight='bold' sx={{ textDecoration: 'underline', margin: '20px 0' }}>
                    {contactInfo.heading}
                    {/* Contact US */}
                </Typography>
                <Typography variant='h5' fontWeight='bold'>
                    Phone:
                </Typography>
                {contactInfo.phNumber}

                <Typography variant='h6' fontWeight='bold'>
                    Address:
                </Typography >
                {contactInfo.addressInfo}
                <Typography variant='h6' fontWeight='bold'>
                    E-mail:
                </Typography>
                {contactInfo.emailId}
                <br /></>
        )
    }
}


export default Content
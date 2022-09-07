import { useEffect, useState } from 'react'
// import GoogleIcon from '@mui/icons-material/Google';
import { useAuth } from '../../context/authContext';
// import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function AdminLogout() {
    
    const { logoutAdmin } = useAuth();
    const [status, setstatus] = useState('Logging out');
    const nav = useNavigate();
    useEffect(() => {
        try {
            logoutAdmin();
            // setsecNav(['gallery', 'about', 'admissions', 'contact', 'admin']);
            nav('/admin');
            setstatus('Log out success')
        }
        catch {
            setstatus('Log out Failed, try again...')
        }
    }, [logoutAdmin,nav])
    return (
        <>
            {status}
        </>
    );

}

export default AdminLogout
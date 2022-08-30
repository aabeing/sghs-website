import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import SchoolIcon from '@mui/icons-material/School';
import { Typography, Link, IconButton, Button, Tab, Tabs } from '@mui/material';
import { Box } from '@mui/system';

import { NavLink as RouterLink, Outlet } from 'react-router-dom';

const pages = ['home','about', 'admissions', 'contact'];

// const handleNavButtons = () =>{}
const LargeScreenMenu = () => {
    const [activeNavBtn, setActiveNavBtn] = useState(0);
    return (
        <>
            <Box sx={{ display: 'flex', flexDirection:{xs:'column',lg:'row'},color: 'white', width: '100%' , paddingBottom: 1}}>
                <Button startIcon={<SchoolIcon />} component={RouterLink} to="/home" variant="text" color='inherit' onClick={()=> setActiveNavBtn(0)}>
                    <Typography variant="h6" noWrap="true"
                        sx={{
                            ml: 1,
                            mr: 2,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.001 rem',
                        }}>
                        St.George High School Chempanthotty
                    </Typography>
                </Button>
                <Box sx={{ ml: 'auto', borderColor: 'divider' }}>
                    <Tabs textColor='white'  TabIndicatorProps={{ style: { background: 'orange' } }} value={activeNavBtn} onChange={(e, val) => setActiveNavBtn(val)}>
                        {pages.map((page, index) => (
                            <Tab component={RouterLink} to={page} sx={{ fontWeight: 'bold',fontSize: '1.1rem',border: "1px solid white",mx:1,borderRadius:2 }} label={page} />
                        ))}
                    </Tabs>
                </Box>
            </Box>
        </>
    )
}
function Navigation() {
    return (
        <>
            <AppBar  color='secondary' position="static">
                <Container maxWidth="false">
                    <Toolbar >
                        <LargeScreenMenu />

                    </Toolbar>
                </Container>
            </AppBar>
            <AppBar  color='primary' position="static" sx={{my:0.2}}>
                <Container maxWidth="false" >
                <Toolbar variant='dense' sx={{minHeight: '2rem',display:{xs:'none',md:'flex'}}}>
                       HI

                    </Toolbar>
                </Container>
            </AppBar>
            <Outlet />
        </>
    )
}

export default Navigation

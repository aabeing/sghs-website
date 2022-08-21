import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import SchoolIcon from '@mui/icons-material/School';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Typography, IconButton, Button, Tab, Tabs, useTheme } from '@mui/material';
import { Box } from '@mui/system';

import { NavLink as RouterLink, Outlet } from 'react-router-dom';
import { useColorMode } from './ThemeMode';

const pages = ['home', 'about', 'admissions', 'contact'];

// const handleNavButtons = () =>{}
const LargeScreenMenu = () => {
    const [activeNavBtn, setActiveNavBtn] = useState(0);
    return (
        <>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, width: '100%', paddingBottom: 1 }}>
                <Button startIcon={<SchoolIcon />} component={RouterLink} to="/home" variant="text" color='inherit' onClick={() => setActiveNavBtn(0)}>
                    <Typography variant="h6" noWrap="true"
                        sx={{
                            ml: 1,
                            mr: 2,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.001 rem',
                        }}>
                        Hu Heading Logo Newlogo
                    </Typography>
                </Button>

                <Box sx={{ ml: 'auto', borderColor: 'divider' }}>
                    <Tabs textColor='white' variant='scrollable' TabIndicatorProps={{ style: { background: 'white' } }} value={activeNavBtn} onChange={(e, val) => setActiveNavBtn(val)}>
                        {pages.map((page, index) => (
                            <Tab component={RouterLink} to={page} sx={{ fontWeight: 'bold', mx: 1 }} label={page} />
                        ))}
                        <ThemeChangeButton />
                    </Tabs>
                    
                </Box>
            </Box>
        </>
    )
}
function ThemeChangeButton() {
    const theme = useTheme();
    const colorMode = useColorMode();
    return (
                <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                    {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
    )
}
function Navigation() {

    return (
        <>
            <AppBar color='primary' position="static">
                <Container maxWidth="false">
                    <Toolbar >
                        <LargeScreenMenu />
                    </Toolbar>
                </Container>
                
            </AppBar>
            <AppBar color='secondary' position="static" sx={{ my: 0.2 }}>
                <Container maxWidth="false" >
                    <Toolbar variant='dense' sx={{ minHeight: '2rem', display: { xs: 'none', md: 'flex' } }}>
                        HI

                    </Toolbar>
                </Container>
            </AppBar>            
            <Outlet />
        </>
    )
}

export default Navigation

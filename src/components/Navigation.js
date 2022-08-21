import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import SchoolIcon from '@mui/icons-material/School';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Typography, IconButton, Button, Tab, Tabs, useTheme, ButtonGroup, ToggleButtonGroup, ToggleButton } from '@mui/material';
import { Box } from '@mui/system';

import { NavLink as RouterLink, Outlet } from 'react-router-dom';
import { useColorMode } from './ThemeMode';
import { styled } from '@mui/material/styles';

const pages = ['home', 'about', 'admissions', 'contact'];
const secondaryMenu = ['home', 'about', 'admissions', 'contact'];
// const secondaryMenu = ['academics','athletics','arts'];
// const handleNavButtons = () =>{}
function ThemeChangeButton() {
    const theme = useTheme();
    console.log("Theme :", theme);
    const colorMode = useColorMode();
    return (
        <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
    )
}
const CustomBtn = styled(Button)(({ theme }) => {
    // console.log("theme: " ,theme);
    return {
        fontWeight: 700,
        '&.active': {
            background: '#688158'
        },
    }
});
function LargeScreenNav() {
    const [activeNavBtn, setActiveNavBtn] = useState(0);
    const [activeSecNav, setActiveSecNav] = useState(0);
    return (
        <Box sx={{ display: { xs: 'none', md: 'block' }, width: '100%', paddingBottom: 1 }}>
        <AppBar color='primary' position="static">
            <Container maxWidth="false">
                <Toolbar >
                   
                        <Button startIcon={<SchoolIcon />} component={RouterLink} to="/home" variant="text" color='inherit' onClick={() => setActiveNavBtn(0)}>
                            <Typography variant="h6"
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
                        {/* TabIndicatorProps={{ style: { background: 'white' } }} */}
                        <Box sx={{ ml: 'auto', borderColor: 'divider' }}>
                            <Tabs textColor='customWhite' indicatorColor='customWhite' variant='standard' TabIndicatorProps={{ style: { background: 'white' } }} value={activeNavBtn} onChange={(e, val) => setActiveNavBtn(val)}>
                                {pages.map((page, index) => (
                                    <Tab key={index} component={RouterLink} to={page} sx={{ fontWeight: 'bold', mx: 1 }} label={page} />
                                ))}
                                <ThemeChangeButton />
                            </Tabs>

                        </Box>
                    
                </Toolbar>
            </Container>

        </AppBar>
        <AppBar color='primary' position="static" sx={{ my: 0.2 }}>
            <Container maxWidth="false" >
                <Toolbar variant='dense' sx={{ minHeight: '2rem', display: { xs: 'none', md: 'flex' } }}>
                    {secondaryMenu.map((secondMenuItem, index) => (
                        <CustomBtn variant='text' color='customWhite' key={index} component={RouterLink} to={secondMenuItem} onClick={() => setActiveNavBtn(0)}>{secondMenuItem}</CustomBtn>
                    ))}
                </Toolbar>
            </Container>
        </AppBar>
        </Box>
    )
}
function Navigation() {

    return (
        <>
<LargeScreenNav/>
            <Outlet />
        </>
    )
}

export default Navigation

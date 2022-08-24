import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import SchoolIcon from '@mui/icons-material/School';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';

import { Typography, IconButton, Button, Tab, Tabs, useTheme, Divider, Drawer, ListItem, ListItemButton, ListItemText, List } from '@mui/material';
import { Box } from '@mui/system';

import { NavLink as RouterLink, Outlet } from 'react-router-dom';
import { useColorMode } from './ThemeMode';
import { styled } from '@mui/material/styles';

const primaryMenu = ['home', 'about', 'admissions', 'contact'];
const secondaryMenu = ['home', 'about', 'admissions', 'contact'];
const logoHeadingLarge = 'St.George High School Chempanthotty';
const logoHeadingSmall = 'St.George HS Chempanthotty';
// const secondaryMenu = ['academics','athletics','arts'];
// const handleNavButtons = () =>{}

function ThemeChangeButton() {
    const theme = useTheme();
    // console.log("Theme :", theme);
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
function LogoComp({ setActiveNavBtn, logoHeading }) {
    return (
        <Button startIcon={<SchoolIcon />} component={RouterLink} to="/home" variant="text" color='inherit' onClick={() => setActiveNavBtn(0)}>
            <Typography variant="h6"
                sx={{
                    ml: 1,
                    mr: 2,
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.001 rem',
                    width: '300px',
                    overflow: 'hidden',
                    lineHeight: '1.5em',
                    height: '3em',
                }}>
                {logoHeading}
            </Typography>
        </Button >
    )
}
function SecMenu({setActiveNavBtn}) {
    return (
        <AppBar color='primary' position="static" sx={{ mb: 0.2, mt: '74px' }}>
            <Container maxWidth="false" >
                <Toolbar variant='dense' sx={{ minHeight: '2rem', 
                // display: { xs: 'none', md: 'flex' } 
                }}>
                    {secondaryMenu.map((secondMenuItem, index) => (
                        <CustomBtn variant='text' color='customWhite' key={index} component={RouterLink} to={secondMenuItem} onClick={() => setActiveNavBtn(0)}>{secondMenuItem}</CustomBtn>
                    ))}
                </Toolbar>
            </Container>
        </AppBar>
    )
}
function LargeScreenNav({ setActiveNavBtn, activeNavBtn }) {
    // const [activeSecNav, setActiveSecNav] = useState(0);
    return (
        <Box sx={{ 
            // display: { xs: 'none', md: 'block' }, 
            width: '100%', paddingBottom: 1 }}>
            <AppBar color='primary' position="fixed">
                <Container maxWidth="false">
                    <Toolbar >
                        <LogoComp setActiveNavBtn={setActiveNavBtn} logoHeading={logoHeadingLarge} />
                        {/* TabIndicatorProps={{ style: { background: 'white' } }} */}
                        <Box sx={{ ml: 'auto', borderColor: 'divider' }}>
                            <Tabs textColor='inherit' indicatorColor='customWhite' variant='standard' TabIndicatorProps={{ style: { background: 'white' } }} value={activeNavBtn} onChange={(e, val) => setActiveNavBtn(val)}>
                                {primaryMenu.map((page, index) => (
                                    <Tab key={index} component={RouterLink} to={page} sx={{ fontWeight: 'bold', mx: 1 }} label={page} />
                                ))}
                                <ThemeChangeButton />
                            </Tabs>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

           
        </Box>
    )
}
function SmallScreenNav({ setActiveNavBtn }) {
    //Drawer menu
    const [drawerState, setDrawerState] = useState(false);
    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerState(open)
    };
    // Drawer contents as list
    const list = () => (
        // App bars
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {primaryMenu.map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton component={RouterLink} to={text}>
                            <ListItemText primary={text.toUpperCase()} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {secondaryMenu.map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton component={RouterLink} to={text}>
                            <ListItemText primary={text.toUpperCase()} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
    return (

        <Box sx={{ width: '100%', paddingBottom: 1 }}>
            <AppBar color='primary' position="fixed">
                <Container maxWidth="false">
                    <Toolbar >
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={toggleDrawer(true)}
                            edge="start"
                        // sx={{ mr: 2, ...(open && { display: 'none' }) }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <LogoComp setActiveNavBtn={setActiveNavBtn} logoHeading={logoHeadingSmall} />
                    </Toolbar >  </Container></AppBar>

            <Drawer
                anchor='left'
                open={drawerState}
                onClose={toggleDrawer(false)}
            >
                {list()}
            </Drawer>
        </Box>
    )
}
function Navigation() {
    const [activeNavBtn, setActiveNavBtn] = useState(0);
    const theme = useTheme();
    const isMatchSmall = useMediaQuery(theme.breakpoints.between('xs','md'));
    const isMatchLarge = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <>
        {isMatchLarge?
        <LargeScreenNav setActiveNavBtn={setActiveNavBtn} activeNavBtn={activeNavBtn} />
        :null}
        {isMatchSmall?
        // Drawer Menu
        <SmallScreenNav setActiveNavBtn={setActiveNavBtn} activeNavBtn={activeNavBtn} />
        :null}            
            <SecMenu setActiveNavBtn={setActiveNavBtn}/>
            <Outlet />
        </>
    )
}

export default Navigation

// import React from 'react'

import { Backdrop, CircularProgress } from "@mui/material"
import { useEffect } from "react"

// import { useNavigate } from "react-router-dom"

function BlogRedirect() {
    //   const nav = useNavigate()
    useEffect(() => {
        window.location.replace('https://sghschempanthotty.blogspot.com/')
    }, [])
    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={true}
        >
            <CircularProgress />
        </Backdrop>
    )
}

export default BlogRedirect
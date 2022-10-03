// import React from 'react'

import { Box } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import LatestBlogs from "../Blogs/LatestBlogs";
import Loading from "../Loading";

function Videos() {
    const [blogData, setBlogData] = useState([])
    useEffect(() => {
        // Get blogger data
        axios.get(`https://blogger.googleapis.com/v3/blogs/1225166691027089983/posts?fetchBodies=true&fetchImages=true&labels=gallery&maxResults=4&orderBy=PUBLISHED&status=LIVE&key=${process.env.REACT_APP_BLOGGER_APIKEY}`).then(res => {

            setBlogData(res.data.items);
        }
        ).catch(err => { alert("Blogger retrieve error"); console.log("Blogger retrieve error: ", err) })
    }, []);
    return (
        <Box sx={{ margin: { xs: 2, md: 2 }, padding: { xs: 0.5, md: 3 } }}>
            {blogData?.length !== 0 ?
                <>
                    {/* <Typography noWrap variant="h4" fontSize={customFontSize} >
                        Other Results
                    </Typography> */}
                    {/* <Typography variant='h4' sx={{ marginBottom: 1 }}>Events</Typography> */}
                    <LatestBlogs blogData={blogData} />
                </> :
                <Loading />
            }
        </Box>
    )
}

export default Videos
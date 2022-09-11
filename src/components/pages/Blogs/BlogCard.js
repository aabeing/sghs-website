// import React from 'react'

import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material"
import { sanitize } from "dompurify";

function BlogCard({ blogPost }) {
    const title = blogPost.title;
    const postUrl = sanitize(blogPost.url);
    const imagesData = blogPost.images;
    const publishedDate = blogPost.published;
    const blogContent = blogPost.content;
    const blogContentPlainText = sanitize(blogContent.replace(/<[^>]+>|&nbsp;/g, ' '));
    const lineClampStyle = {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitLineClamp: '3',
        WebkitBoxOrient: 'vertical',
    }
    let blogPlaceImg;
    if (imagesData) {
        blogPlaceImg = imagesData[0].url
    }
    else {
        blogPlaceImg = "/images/blogDefault.jpg";
    }

    return (

        //     style={{
        //         textDecoration: 'none',
        //         // width: 345, 
        //         display: 'inline-block', paddingRight: 12, paddingTop: 6
        //     }}>
        <Grid item
        // xs={12} sm={6} md={3} lg={3}  
        >
            <a href={postUrl} target='_blank' rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <Card sx={{
                    width: 345,
                    height: 375,
                    marginRight: 3,
                    marginBottom: 3,
                    // p:10,
                }}>
                    <CardMedia component="img" height="140"
                        image={blogPlaceImg} alt="blogpost image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div"
                            sx={{
                                ...lineClampStyle,
                                WebkitLineClamp: '2',
                            }}>
                            {title}
                        </Typography>
                        <Typography variant="body1" color="text.primary"
                            sx={{
                                ...lineClampStyle,
                                WebkitLineClamp: '4',
                            }}>
                            {blogContentPlainText}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Published on: {publishedDate.slice(0, 10)}
                        </Typography>
                    </CardContent>
                    {/* <CardActions> */}
                    {/* <Button size="small" href={postUrl}>Learn More</Button> */}
                    {/* </CardActions> */}
                </Card>
            </a>
        </Grid>

    )
}

export default BlogCard
import { Box, Typography } from "@mui/material"
import BlogCard from "./BlogCard"


function LatestBlogs({blogData}) {
    console.log("BLOG: ",blogData)
  return (
    <>
    <Typography variant='h4'>Blog Posts</Typography>
    <Box sx={{display:'flex',justifyContent:'start',alignItems:'start'}}>
    {blogData.map(ele=>
      <BlogCard blogPost={ele}/>
      )}
    </Box>
    
    </>
  )
}

export default LatestBlogs
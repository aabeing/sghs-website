import { Grid, Typography } from "@mui/material"
import BlogCard from "./BlogCard"


function LatestBlogs({ blogData }) {
  console.log("BLOG: ", blogData)
  return (
    <>
      <Typography variant='h4' sx={{marginBottom:1}}>Blog Posts</Typography>
      {/* <Box sx={{
        display: 'flex', justifyContent: 'start', alignItems: 'start',
      }}> */}
      <Grid container justifyContent='flex-start'>
        {blogData.map(ele =>
          <BlogCard blogPost={ele} />
        )}
      </Grid>
    </>
  )
}

export default LatestBlogs
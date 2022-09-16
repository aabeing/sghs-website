import { Grid } from "@mui/material"
import BlogCard from "./BlogCard"


function LatestBlogs({ blogData }) {
  // console.log("BLOG: ", blogData)
  return (
    <>      
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
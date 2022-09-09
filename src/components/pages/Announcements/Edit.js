import { Button, Container } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';

function Edit() {
  return (
       <Container sx={{ display: 'flex', justifyContent: 'center', paddingTop: 1 }}>
          <Button variant="contained" endIcon={<EditIcon />} aria-label="add an image" >
                Edit Announcements
            </Button>

    </Container>
  )
}

export default Edit
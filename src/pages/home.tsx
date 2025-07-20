import { Box, Button, Card } from "@mui/material";
import profile from '../assets/profile.png';
import { useNavigate } from "react-router-dom";

function Home(){

  const navigate = useNavigate();

  const handleOnclick = () => {
    navigate('/experience');
  }

  return(
    <Card sx={{borderRadius: 20, opacity: '80%'}}>
      <Box sx={{display: 'flex', flexDirection: 'row', alignSelf: 'center', gap: 10, padding: 20}}>
        <Box>
          <Box maxWidth={'600px'} sx={{display: 'flex', flexDirection: 'column', gap: 5, paddingY: 5}}>
            <h1>This is Yamuna Shree</h1>
            <p>Being a part of the Quality Circle during school nurtured their ability to identify real-world problems and develop effective solutions through collaborative brainstorming. They believe that fitness is a way to live and enjoy approaching algorithmic challenges with an optimistic mindset. A passionate cybersecurity aspirant, they continuously seek opportunities to grow and contribute in the tech space.</p>
          </Box>
          <Button variant="contained" onClick={handleOnclick}>Experience</Button>
        </Box>
        <img src={profile} height={400}></img>
      </Box>
    </Card>
  )
}

export default Home;
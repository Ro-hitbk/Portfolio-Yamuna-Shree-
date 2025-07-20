import { Box, Card, CardContent, CardHeader, Divider, duration, Grid, Typography } from "@mui/material";

function Experience(){
  let experience = [{place: 'Microsoft', role: 'Software Engineer Intern', duration: 'May 2025 - Present'},
                    {place:'SLB', role: 'Cyber Security Engineer Intern', duration: 'May 2024 - Nov 2024'},
                    {place: 'ACM Winter School', role: 'Cybersecurity and Cryptography', duration: 'Nov 2023 - Dec 2023'},
                    {place: 'ACM Summer School', role: 'Cybersecurity', duration: 'Jun 2023 - Jun 2023'}
                  ]
  let education = [{place: 'PSGTech',  grade: '8.89', duration: 'Jan 2021 - May 2026'},
                   {place: 'The TVS School', grade: 'A+', duration: 'Jun 2007 - Jun 2021'}
                  ]
  return(
    <Box sx={{display: 'flex', flexDirection: 'column', width: '100vw', backgroundColor: 'black', height: '100vh'}}>
      <Typography variant="h2" paddingX={4} paddingY={2} sx={{mt: 14}}>Experience</Typography>
      <Grid container>
        {experience.map(({place, role, duration}) => (
          <Grid size = {{ xs:12, md:6, lg: 4}} key={place}>
            <Box padding={2}>
              <Card sx={{height: 200, borderRadius: 10}}>
                <CardHeader title={<Typography variant="h4">{place}</Typography>} ></CardHeader>
                <CardContent>
                  <Typography variant="h5">{`Role: ${role}`}</Typography>
                  <Typography variant="h5">{`Duration: ${duration}`}</Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Typography variant="h2" paddingX={4} paddingY={2}>Education</Typography>
      <Grid container>
        {education.map(({place, grade, duration}) => (
          <Grid size = {{ xs:12, md:6, lg: 4}} key={place}>
            <Box padding={2}>
              <Card sx={{height: 200, borderRadius: 10}}>
                <CardHeader title={<Typography variant="h4">{place}</Typography>}></CardHeader>
                <CardContent>
                  <Typography variant="h5">{`Grade: ${grade}`}</Typography>
                  <Typography variant="h5">{`Duration: ${duration}`}</Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Experience;
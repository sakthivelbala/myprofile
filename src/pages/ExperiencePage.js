import { BusinessCenter, School } from "@mui/icons-material"
import { Box, Card, Grid, Grid2, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material"
import { COMPANY_LOGOS, CORE_COMPETENCIES, EXPERIENCE } from "../utils/const"
import Carousel from "react-material-ui-carousel"

const ExperiencePage = () => {
    return <Box sx={{ width: '100%', height: '100%', backgroundImage: 'url(https://cdn.pixabay.com/photo/2021/10/11/17/54/technology-6701504_1280.jpg)' }}>
        <Grid2 container sx={{ height: '80%' }} columns={{ xs: 4, sm: 12 }}>
            <Grid2 size={8}>
                <Card sx={{ margin: '4%', height: '520px', padding: '2%', overflow: 'auto', backgroundColor: '#2596be97' }}>
                    {
                        EXPERIENCE.map(e => (<Box>
                            <Grid2 container rowSpacing={1}>
                                <Grid2 size={6}><Typography variant="h6" color="white">{e.company}</Typography></Grid2>
                                <Grid2 size={6} sx={{ textAlign: 'right' }}><Typography variant="caption" color="white">{e.duration}</Typography></Grid2>
                            </Grid2>
                            <Typography><Typography variant="subtitle2" color="white">{e.designation}</Typography></Typography>
                            <List>
                                {
                                    e.summary.map(f => (<ListItem>
                                        <ListItemIcon><BusinessCenter sx={{color: 'white'}}/></ListItemIcon>
                                        <ListItemText primary={<Typography variant="body2" color="white">{f}</Typography>} />
                                    </ListItem>))
                                }
                            </List>
                        </Box>))
                    }
                </Card>
            </Grid2>
            <Grid2 size={4} >
                <Card sx={{ margin: '8%', padding: '0 6%', height: '550px', overflow: 'auto' }}>
                    <List>
                        {
                            CORE_COMPETENCIES.map(e => <ListItem sx={{ backgroundColor: '#2596be', margin: '16px', borderRadius: '2cm' }}>
                                <ListItemText primary={<Typography variant="body1" color="white" align="center">{e}</Typography>} />
                            </ListItem>
                            )
                        }
                    </List>
                </Card>
            </Grid2>
        </Grid2>
        <Grid2 container sx={{ height: '20%', backgroundColor: 'white' }} columns={{ xs: 4, sm: 12 }}>
            <Grid2 size={4}>
                <Box sx={{ height: '100%', width: '100%' }}>
                    <Carousel sx={{width: '100%', height:'100%', padding: '0 30%'}} indicators={false} navButtonsAlwaysInvisible={true}>
                        {
                            COMPANY_LOGOS.map((image, i) => <img width="200" height="100" key={i} src={image} />)
                        }
                    </Carousel>
                </Box>
            </Grid2>
            <Grid2 size={8}>
                <Card sx={{ backgroundColor: '#555455', height: '100%', width: '100%' }}>
                    <Grid2 container>
                        <Grid2 size={3}>
                            <School sx={{color: 'white', width: '60%', height: '70%', marginTop: '4%'}}/>
                        </Grid2>
                        <Grid2 size={9} sx={{padding: '5% 0'}}>
                            <Typography variant="h6" color="white">B.Tech in Computer Science Engineering</Typography>
                            <Typography variant="subtitle2" color="white">SRM Institute of Science and Technology</Typography>
                            <Typography variant="body2" color="white">2019</Typography>
                        </Grid2>
                    </Grid2>
                </Card>
            </Grid2>
        </Grid2>
    </Box>
}

export default ExperiencePage
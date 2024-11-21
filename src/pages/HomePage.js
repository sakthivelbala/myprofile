import { Box, Divider, Grid2, List, ListItem, ListItemIcon, ListItemText, Stack, Typography } from "@mui/material";
import { PROFILE_SUMMARY } from "../utils/const";
import { AutoStories, Email, GitHub, MobileFriendly, RadioButtonChecked } from "@mui/icons-material";
import { Link } from "react-router-dom";

const HomePage = () => {

    return <Box>
        <Typography sx={{ padding: '2% 16%', backgroundColor: '#2596be' }} variant="h6" align="center" color="white">Leverage expertise in developing cutting-edge applications focused on enterprise microservices, driving innovation and efficiency in software solutions.</Typography>
        <List sx={{ margin: '1% 16%' }}>
            {
                PROFILE_SUMMARY.map(e => <ListItem >
                    <ListItemIcon><RadioButtonChecked /></ListItemIcon>
                    <ListItemText primary={<Typography variant="body1">{e.map(f => <>{f.text}<Box component="span" fontWeight='fontWeightMedium'>{f.bold}</Box></>)}</Typography>} />
                </ListItem>)
            }
        </List>
        <Divider />
        <Box sx={{ padding: '2% 16%', backgroundColor: '#555455' }}>
            <Grid2 container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid2 size={6}>
                    <Stack alignItems="center" direction="row" gap={2}>
                        <MobileFriendly sx={{ color: "white" }} /> <Typography color="white">+91 9489658011</Typography>
                    </Stack>
                </Grid2>
                <Grid2 size={6}>
                    <Stack alignItems="center" direction="row" gap={2}>
                        <Email sx={{ color: "white" }} /> <Typography color="white">sakthivelbalakrishnan@gmail.com</Typography>
                    </Stack>
                </Grid2>
                <Grid2 size={6}>
                    <Stack alignItems="center" direction="row" gap={2}>
                        <AutoStories sx={{ color: "white" }} /> <Typography color="white"><Link style={{ textDecoration: 'none', color: 'white' }} to="http://ipindia.gov.in/writereaddata/Portal/IPOJournal/1_4785_1/Part-1.pdf" underline="none">Patent (201841045042)</Link></Typography>
                    </Stack>
                </Grid2>
                <Grid2 size={6}>
                    <Stack alignItems="center" direction="row" gap={2}>
                        <GitHub sx={{ color: "white" }} /> <Typography color="white"><Link style={{ textDecoration: 'none', color: 'white' }} to="https://github.com/sakthivelbala" underline="none">Github</Link></Typography>
                    </Stack>
                </Grid2>
            </Grid2>
        </Box>
    </Box>
}

export default HomePage
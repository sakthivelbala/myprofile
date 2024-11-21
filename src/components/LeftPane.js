import { List, ListItem, ListItemText, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";


const LeftPane = (props) => {

    const location = useLocation();

    return (
        <List>
            {props.routes.map(e => 
                <ListItem key={e.path} component={Link} to={e.path} sx={{backgroundColor: e.path==location.pathname && '#2596be'}}>
                    <ListItemText primary={<Typography variant="h7" color={e.path==location.pathname &&'common.white'}>{e.title}</Typography>} />
                </ListItem>
            )}
        </List>
    );
}

export default LeftPane
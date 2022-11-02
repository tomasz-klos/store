
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import NavIconBox from "../NavIconBox/NavIconBox";
import { Link } from "react-router-dom";
import { Pages } from "../../../../helpers/interfaces";


const DesktopNav = (props: {pages: Pages[]}) => {
    const { pages } = props;
    return (
        <>
            <Box>
                <Typography variant='h1'>Store.</Typography>
            </Box>
            <Grid container justifyContent="center">
                <List sx={{ display: 'flex' }}>
                    {pages.map(({title, path}: Pages) => (
                        <ListItem key={title} component={Link} to={path}>
                            <ListItemButton sx={{ textAlign: 'center' }}>
                                <ListItemText primary={title} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Grid>
            <Box sx={{ flexGrow: 1 }} />
            <NavIconBox />
        </>
    )
}

export default DesktopNav;
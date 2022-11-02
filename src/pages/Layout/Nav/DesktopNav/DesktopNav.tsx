
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import NavIconBox from "../NavIconBox/NavIconBox";


const DesktopNav = (props: {pages: Array<string>}) => {
    const { pages } = props;
    return (
        <>
            <Box>
                <Typography variant='h1'>Store.</Typography>
            </Box>
            <Grid container justifyContent="center">
                <List sx={{ display: 'flex' }}>
                    {pages.map((item) => (
                        <ListItem key={item}>
                            <ListItemButton sx={{ textAlign: 'center' }}>
                                <ListItemText primary={item} />
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
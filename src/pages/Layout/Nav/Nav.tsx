import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Badge from "@mui/material/Badge";
import Grid from "@mui/material/Grid";



const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(true);
    const pages = ['Home', 'About', 'Shop', 'Contact'];
    return (
        <AppBar position="static">
            <Toolbar>
                <Box>
                    <Typography>Store.</Typography>
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
                <Box display="flex">
                    <IconButton size="large">
                        <SearchOutlinedIcon />
                    </IconButton>
                    <IconButton size="large">
                        <Badge badgeContent={2} color="error">
                            <ShoppingCartOutlinedIcon />
                        </Badge>
                    </IconButton>
                    <IconButton size="large">
                        <AccountCircleOutlinedIcon />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Nav;
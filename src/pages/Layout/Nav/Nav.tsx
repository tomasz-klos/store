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
import MenuIcon from '@mui/icons-material/Menu';
import useTheme from "@mui/material/styles/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";
import NavIconBox from "./NavIconBox/NavIconBox";
import MobileNav from "./MobileNav/MobileNav";
import DesktopNav from "./DesktopNav/DesktopNav";



const Nav = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));

    const pages = ['Home', 'About', 'Shop', 'Contact'];
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(true);

    return (
        <AppBar position="static">
            <Toolbar>
                {matches ? <DesktopNav pages={pages} /> : <MobileNav pages={pages} />}
            </Toolbar>
        </AppBar>
    )
}

export default Nav;
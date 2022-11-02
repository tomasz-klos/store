import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import NavIconBox from "../NavIconBox/NavIconBox";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from '@mui/icons-material/Menu';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";

const MobileNav = (props: { pages: Array<string> }) => {
    const { pages } = props;
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event &&
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }

        setIsOpen(open);
    };

    return (
        <>
            <IconButton aria-label="open drawer"
                onClick={toggleDrawer(true)}>
                <MenuIcon />
            </IconButton>
            <Drawer
                anchor="left"
                open={isOpen}
                onClose={toggleDrawer(false)}
            >
                <Box>
                    <List sx={{ display: 'flex', flexDirection: 'column' }}>
                        {pages.map((item) => (
                            <ListItem key={item}>
                                <ListItemButton sx={{ textAlign: 'center' }}>
                                    <ListItemText primary={item} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
            <Grid container justifyContent='center'>
                <Typography variant="h2">Store.</Typography>
            </Grid>
            <NavIconBox />
        </>
    )
}

export default MobileNav;
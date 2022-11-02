import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const Footer = () => {
    return (
        <Box component='footer' sx={{ background: '#353535', color: '#d9d9d9' }}>
            <Box sx={{padding: '5%'}}>
            <Typography variant="h2" sx={{ borderBottom: 1 }}>Store.</Typography>
            <Box sx={{padding: '20px 0'}}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '5px 0' }} >
                    <LocationOnIcon sx={{ width: 24, height: 24 }} />
                    <Typography variant="body1">Adres</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '5px 0' }} >
                    <PhoneIcon />
                    <Typography variant="body1">7914 425915</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '5px 0' }} >
                    <EmailIcon />
                    <Typography variant="body1">info@company.com</Typography>
                </Box>
            </Box>
            <Box>
                <Typography variant="h2" sx={{ borderBottom: 1 }}>Products</Typography>
                <List>
                    <ListItem sx={{padding: '6px 0'}}>
                        <ListItemText>Jewelery</ListItemText>
                    </ListItem>
                    <ListItem sx={{padding: '6px 0'}}>
                        <ListItemText>Electronics</ListItemText>
                    </ListItem>
                    <ListItem sx={{padding: '6px 0'}}>
                        <ListItemText>Men's clothing</ListItemText>
                    </ListItem>
                    <ListItem sx={{padding: '6px 0'}}>
                        <ListItemText>Women's clothing</ListItemText>
                    </ListItem>
                </List>
            </Box>
            </Box>
            <Box sx={{background: '#d9d9d9', color: '#353535', padding: '5%'}}>
                <Typography>Copyright © 2022 Store.</Typography>
            </Box>
        </Box>
    )
}

export default Footer;
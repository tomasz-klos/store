import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Badge from "@mui/material/Badge";

const NavIconBox = () => {
    return (
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
    )
}

export default NavIconBox;
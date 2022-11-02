import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Category from "./Category/Category";

const Categories = () => {

    return (
        <Box component="section" sx={{ display: 'grid', gridGap: '3rem', padding: '10% 5%', maxWidth: '90%' }}>
            <Typography variant="h2">Categories</Typography>
            <Category />
            <Category />
            <Category />
        </Box>
    )
}

export default Categories;
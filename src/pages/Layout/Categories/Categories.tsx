import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Category from "./Category/Category";

const Categories = () => {

    return (
        <Container component="section" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' , padding: '5% 0'}}>
            <Typography variant="h2">Categories</Typography>
            <Category />
            <Category />
            <Category />
        </Container>
    )
}

export default Categories;
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { data } from "../../data";
import ProductCard from "../Layout/Categories/ProductCard/ProductCard";

const Products = () => {
    return (
        <Box component='section' sx={{ display: 'flex', padding: '5%' }}>
            <Box sx={{paddingRight: '5%'}}>
                <Typography variant='h4'>Categories</Typography>
            </Box>
            <Box sx={{ display: 'grid', gridGap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                {data.map(product => (
                    <ProductCard product={product} />
                ))}
            </Box>

        </Box>
    )
}

export default Products;
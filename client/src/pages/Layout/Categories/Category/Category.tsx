
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ProductCard from "../ProductCard/ProductCard";


const Category = (props: {products: any[], title: string}) => {
    const { products, title } = props;
    return (
        <Box component="article">
            <Typography variant="h3">{title}</Typography>
            <Box sx={{ display: 'grid', gridGap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                <ProductCard product={products[0]} />
                <ProductCard product={products[1]} />
                <ProductCard product={products[2]} />
            </Box>
        </Box>
    )
}
// display: grid;
//     grid-gap: 1rem;
//     grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
export default Category;

// sx={{ display: 'flex', gap: 10, padding: '5% 0' }}
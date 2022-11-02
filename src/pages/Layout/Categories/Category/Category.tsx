
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Product from "../Product/Product";
import { data } from "../../../../data";

const Category = () => {

    return (
        <Box component="article">
            <Typography variant="h3">Category</Typography>
            <Box sx={{ display: 'grid', gridGap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                <Product book={data[0]} />
                <Product book={data[1]} />
                <Product book={data[2]} />
            </Box>
        </Box>
    )
}
// display: grid;
//     grid-gap: 1rem;
//     grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
export default Category;

// sx={{ display: 'flex', gap: 10, padding: '5% 0' }}
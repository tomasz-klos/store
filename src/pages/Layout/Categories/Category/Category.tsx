
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Product from "../Product/Product";
import { data } from "../../../../data";

const Category = () => {

    return (
        <Box component="article">
            <Typography variant="h3">Category</Typography>
            <Box sx={{ display: 'flex', gap: 10, padding: '5% 0' }}>
                <Product book={data[0]} />
                <Product book={data[1]} />
                <Product book={data[2]} />
            </Box>
        </Box>
    )
}

export default Category;
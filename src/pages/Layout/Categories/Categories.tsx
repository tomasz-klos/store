import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Category from "./Category/Category";
import { data } from "../../../data";
import { useEffect, useState } from "react";

const Categories = () => {
    const [menProducts, setMenProducts] = useState<Object[]>([]);
    const [jeweleryProducts, setJeweleryProducts] = useState<Object[]>([]);
    const [electronicsProducts, setElectronicsProducts] = useState<Object[]>([]);

    useEffect(() => {
        const menCategory: Array<Object> = [];
        const jeweleryCategory: Array<Object> = [];
        const electronicsCategory: Array<Object> = [];
        data.forEach(product => product.category === "men's clothing" ? menCategory.push(product) : null)
        data.forEach(product => product.category === "jewelery" ? jeweleryCategory.push(product) : null)
        data.forEach(product => product.category === "electronics" ? electronicsCategory.push(product) : null)
        setMenProducts(menCategory);
        setJeweleryProducts(jeweleryCategory);
        setElectronicsProducts(electronicsCategory);
    },[])

    return (
        <Box component="section" sx={{ display: 'grid', gridGap: '3rem', padding: '10% 5%', maxWidth: '90%' }}>
            <Typography variant="h2">Categories</Typography>
            <Category title="Men's clothing" products={menProducts} />
            <Category title="Jewelery" products={jeweleryProducts} />
            <Category title="Electronics" products={electronicsProducts} />
        </Box>
    )
}

export default Categories;
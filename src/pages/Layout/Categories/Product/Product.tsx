import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

interface Product {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
        rate: number,
        count: number,
    }
}

const Product = (props: { product: Product }) => {
    const { product } = props;
    if (!product) return <div></div>;
    return (
        <Card sx={{ minWidth: '30%', overflow: 'visible' }}>
            <CardActionArea>
                <Box sx={{ display: 'flex', justifyContent: 'center', maxWidth: '100%', height: '50%' }}>
                    <CardMedia component="img" image={product?.image} alt="" height={300} sx={{ width: 'auto', padding: '20px 0' }} />
                </Box>
                <CardContent sx={{ padding: '1rem 2rem' }}>
                    <Box sx={{ display: 'flex' }}>
                        <Rating name="read-only" value={product?.rating.rate} readOnly />
                        <Typography variant="caption">({product?.rating.count})</Typography>
                    </Box>
                    <Typography variant="h4">{product?.title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                        {product?.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default Product;
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
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
        <Card sx={{ minWidth: '30%' }}>
            <CardActionArea sx={{height: '100%'}}>
                <Box sx={{ display: 'flex', justifyContent: 'center', maxWidth: '100%', height: '50%' }}>
                    <CardMedia component="img" image={product.image} alt="" height={300} sx={{ width: 'auto', maxHeight: '100%' , padding: '20px 0' }} />
                </Box>
                <CardContent sx={{ padding: '1rem 2rem', height: '50%' }}>
                    <Box sx={{ display: 'flex', paddingBottom: '10px' }}>
                        <Rating name="read-only" value={product.rating.rate} readOnly />
                        <Typography variant="caption">({product.rating.count})</Typography>
                    </Box>
                    <Typography variant="h5">{product.title}</Typography>
                    {/* <Typography variant="body2" color="text.secondary">
                        {product.d}
                    </Typography> */}
                    <Box position='absolute' bottom='5%' right='5%'>
                    <Typography variant='body1' color="text.secondary">${product.price}</Typography>
                    </Box>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default Product;
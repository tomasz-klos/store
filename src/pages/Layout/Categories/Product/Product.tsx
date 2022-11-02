import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

interface Book {
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

const Product = (props: { book: Book }) => {
    const { book } = props;
    return (
        <Card sx={{ minWidth: '30%', overflow: 'visible' }}>
            <CardActionArea>
                <Box sx={{ display: 'flex', justifyContent: 'center', maxWidth: '100%', height: '50%' }}>
                    <CardMedia component="img" image={book.image} alt="" height={300} sx={{ width: 'auto', padding: '20px 0' }} />
                </Box>
                <CardContent sx={{ padding: '1rem 2rem' }}>
                    <Box sx={{ display: 'flex' }}>
                        <Rating name="read-only" value={book.rating.rate} readOnly />
                        <Typography variant="caption">({book.rating.count})</Typography>
                    </Box>
                    <Typography variant="h4">{book.title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                        {book.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default Product;
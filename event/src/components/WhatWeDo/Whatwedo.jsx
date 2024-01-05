import React from 'react';
import { Grid, Card, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import { Button,CardContent, CardActionArea, CardActions } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Data from '../../Data.json';


const Whatwedo = () => {
    return (
        <>
        <div className='son'>
            <Container maxwidth="lg" >
                <Typography variant='h3' align='center' style={{ marginTop: "120px" }}>
                    Zero Degree Event Planning And Decor
                </Typography>
                <Grid container spacing={5} style={{ marginTop: "20px" }}>
                    {Data.map((result, index) => (
                        <Grid item xs={12} sm={4} ms={4} key={index}>
                            <Card sx={{ maxWidth: 345 }} style={{ padding: "10xp", marginBottom: "30px" }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="240"
                                        image={result.img}
                                        alt="green iguana"
                                        style={{ borderRadius: "5px" }}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Price starting at $20
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            We’ll Make Your Next Event Celebration Very Special!
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>

                                <CardActions>
                                    <Button href="http://localhost:3000/about"variant="outlined" size="medium">
                                        Wishlist
                                    </Button>
                                    <Button href="http://localhost:3000/bookevents"variant="contained" size="medium">
                                        Book Event
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            </div>
        </>
    )
}
export default Whatwedo;
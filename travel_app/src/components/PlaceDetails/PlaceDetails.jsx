import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';
import useStyles from './styles';

const PlaceDetails = ({ place }) => {
    const classes = useStyles();

    return (
        <Card elevation={6}>
            <CardMedia
                style={{ height: 350 }}
                image={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                title={place.name}
            >
            </CardMedia>
            <CardContent>
                {/* gutterBottom => give extra margin at the bottom */}
                <Typography gutterBottom variant="h5">🥗 {place.name}</Typography>
                <Box display="flex" justifyContent="space-between">
                    <Rating size="small" value={Number(place.rating)} readOnly />
                    <Typography gutterBottom variant="subtitle1">out of {place.num_reviews} reviews</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1">💰Price:</Typography>
                    <Typography gutterBottom variant="subtitle1">{place.price ? place.price : place.price_level}</Typography>
                </Box>
                <Box display="flex" flexDirection= "column" justifyContent="space-between">
                    <Typography variant="subtitle1">✨Ranking:</Typography>
                    <Typography gutterBottom variant="subtitle1" style={{ marginLeft:'20px'}}>{place.ranking ? place.ranking :'🤷‍♀️ Seems like no ranking:)'}</Typography>
                </Box>
                {place?.award?.map((award) => {
                    // my => margin top and bottom
                    <Box my={1} display="flex" justifyContent="space-between" alignItems="center">
                        <img src={award.images.small} alt={award.display_name} />
                        <Typography variant="subtitle2" color="textSecondary"></Typography>
                    </Box>
                })}
                {place?.cuisine?.map(({ name }) => {
                    <Chip key={name} size="small" label="name" className={classes.chip}/>
                })}
                {place?.phone && (
                    <Typography gutterBottom variant="subtitle2" color="textSecondary" className={classes.subtitle}>
                        <PhoneIcon fontSize="small"/> {place.phone}
                    </Typography>
                )}
                {place?.address && (
                    <Typography gutterBottom variant="subtitle2" color="textSecondary" className={classes.spacing}>
                        <LocationOnIcon fontSize="small"/> {place.address}
                    </Typography>
                )}
                <CardActions>
                    {/* _blank => open web in new tab */}
                    <Button variant="outlined" size="small" color="secondary" onClick={() => window.open(place.web_url, '_blank')}>
                        Trip Advisor
                    </Button>
                    <Button variant="outlined" size="small" color="secondary" onClick={() => window.open(place.web_url, '_blank')}>
                        Website
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
    );
}

export default PlaceDetails;
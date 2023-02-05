import '../App.css';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function CountryDetail(props) {
  let country = [],
    independence = '';

  //Extract the country data from props
  for (const index in props.country) {
    country = props.country[index];
  }

  //Condition for independet state of the country

  if (country.independent === true) {
    independence = 'has';
  } else {
    independence = 'has not';
  }

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <Card
        sx={{
          maxWidth: '100%',
          margin: '1rem',
          padding: '1rem',
        }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {country.cca2}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={country.name.common}
          subheader={country.capital}
        />

        <CardMedia
          component="img"
          height="194"
          image={country.coatOfArms.png}
          alt={country.capital}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            The country belongs to <span>{country.region}</span> region and{' '}
            <span>{country.subregion}</span> sub-region. Located at the{' '}
            <span>{country.latlng}</span> N and <span>{country.latlng}</span> W,
            this country has population of <span>{country.population}</span> and
            it {independence} gained the independent, according to the CIA World
            Factbook.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="open-map">
            <LocationOnIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Continent: {country.continents}</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron
              and set aside for 10 minutes.
            </Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
            </Typography>
            <Typography paragraph>
              Add rice and stir very gently to distribute. Top with artichokes
            </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then
              serve.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}

export default CountryDetail;

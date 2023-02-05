import '../App.css';
import * as React from 'react';
import { useState } from 'react';
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
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Modal from '@mui/material/Modal';
import ExpandMore from './shared/ExpandMore';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

function CountryDetail(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let thisCountry = [],
    independence = '',
    coordinate = [],
    countryName = '',
    flagLink = '';

  //Extract the country data from props
  for (const index in props.country) {
    thisCountry = props.country[index];
  }

  //Save coordinate to an array to use
  for (const index in thisCountry.capitalInfo) {
    if (index === 'latlng') {
      coordinate = thisCountry.capitalInfo[index];
    }
  }

  //Extract country name
  for (const prop in thisCountry.name) {
    if (prop === 'common') {
      countryName = thisCountry.name[prop];
    }
  }

  //Extract flag link
  for (const prop in thisCountry.flags) {
    if (prop === 'png') {
      flagLink = thisCountry.flags[prop];
    }
  }

  //Condition for independet state of the country
  if (thisCountry.independent === true) {
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
          minHeight: '50%',
          margin: '1rem',
          padding: '1rem',
        }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {thisCountry.cca2}
            </Avatar>
          }
          title={countryName}
          subheader={thisCountry.capital}
        />
        <CardMedia
          component="img"
          height="194"
          image={flagLink}
          alt={thisCountry.capital}
          sx={{ padding: '1em 1em 0 1em', objectFit: 'contain' }}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            The country belongs to{' '}
            <span style={{ fontWeight: 'bold' }}>{thisCountry.region}</span>{' '}
            region and{' '}
            <span style={{ fontWeight: 'bold' }}>{thisCountry.subregion}</span>{' '}
            sub-region. Located at the{' '}
            <span style={{ fontWeight: 'bold' }}>{coordinate[0]}</span> &#176;N
            and <span style={{ fontWeight: 'bold' }}>{coordinate[1]}</span>{' '}
            &#176;W, this country has population of{' '}
            <span style={{ fontWeight: 'bold' }}>{thisCountry.population}</span>{' '}
            and it {independence} gained the independent, according to the CIA
            World Factbook.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="open-map" onClick={handleOpen}>
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
            <Typography paragraph>
              Continent: {thisCountry.continents}
            </Typography>
            <Typography paragraph>Timezone: {thisCountry.timezones}</Typography>
            <Typography paragraph>Status : {thisCountry.status}</Typography>
          </CardContent>
        </Collapse>
        {/* MAP */}

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <MapContainer
            style={{
              height: '50%',
              width: '90%',
              marginTop: '50%',
              marginLeft: '3rem',
              marginRight: '3rem',
            }}
            center={coordinate}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={coordinate}>
              <Popup>
                <span style={{ fontWeight: 'bold' }}>Capital</span> :{' '}
                {thisCountry.capital}
              </Popup>
            </Marker>
          </MapContainer>
        </Modal>
      </Card>
    </div>
  );
}

export default CountryDetail;

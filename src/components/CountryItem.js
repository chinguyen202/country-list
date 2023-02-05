import { TableCell, TableRow, CardMedia } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';

//Display each country's info on a table cell
const CountryItem = (props) => {
  let languages = [];
  for (const index in props.country.languages) {
    languages.push(props.country.languages[index]);
  }

  return (
    <TableRow
      key={props.country.cca2}
      hover
      role="checkbox"
      tabIndex={-1}
      sx={{
        '&:last-child td, &:last-child th': { border: 0 },
      }}
    >
      <TableCell component="th" scope="row">
        <CardMedia
          component="img"
          height="100"
          image={props.country.flags.png}
          alt={props.country.name.common}
          sx={{ padding: '1em 1em 0 1em', objectFit: 'contain' }}
        />
      </TableCell>
      <TableCell align="center" style={{ fontSize: '1.5rem' }}>
        {props.country.name.common}
      </TableCell>
      <TableCell align="center" style={{ fontSize: '1.5rem' }}>
        {props.country.region}
      </TableCell>
      <TableCell align="center" style={{ fontSize: '1.5rem' }}>
        {props.country.population}
      </TableCell>
      <TableCell align="center" style={{ fontSize: '1.5rem' }}>
        {languages.map((language, index) => {
          return <li key={index}>{language}</li>;
        })}
      </TableCell>
      <TableCell align="center" style={{ fontSize: '1.5rem' }}>
        <Link to={`/${props.country.name.common}`}>
          <ArrowForwardIosIcon />
        </Link>
      </TableCell>
    </TableRow>
  );
};

export default CountryItem;

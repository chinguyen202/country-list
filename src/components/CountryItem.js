import { TableCell, TableRow, CardMedia } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

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
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        <CardMedia
          component="img"
          height="100"
          width="50"
          image={props.country.flags.png}
          alt={props.country.name.common}
        />
      </TableCell>
      <TableCell align="center">{props.country.name.common}</TableCell>
      <TableCell align="center">{props.country.region}</TableCell>
      <TableCell align="center">{props.country.population}</TableCell>
      <TableCell align="center">
        {languages.map((language, index) => {
          return <li key={index}>{language}</li>;
        })}
      </TableCell>
      <TableCell align="center">
        <ArrowForwardIosIcon />
      </TableCell>
    </TableRow>
  );
};

// const CountryItem = (props) => {

//   return (
//     <>
//       {/* <TableCell component="th" scope="row">
//         {props.country.flag}
//       </TableCell>
//       <TableCell align="right">{props.name.common}</TableCell>
//       <TableCell align="right">{props.country.region}</TableCell>
//       <TableCell align="right">{props.country.population}</TableCell>
//       <TableCell align="right">{props.country.languages}</TableCell>
//     </> */}
//   );
// };

export default CountryItem;

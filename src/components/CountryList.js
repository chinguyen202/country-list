import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CountryItem from './CountryItem';

const CountryList = (props) => {
  console.log('COUNTRYLIST -PROPS: ', props.countries);

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650, margin: '1rem' }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Flag</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Regions</TableCell>
              <TableCell align="right">Population</TableCell>
              <TableCell align="right">Languages</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.countries.map((country) => (
              <CountryItem country={country} key={country.flag} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default CountryList;

import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CountryItem from './CountryItem';
import TablePagination from '@mui/material/TablePagination';

//Display a list of countries (search result or all country fetch from api)
const CountryList = (props) => {
  //Table header sticky
  const columns = [
    { id: 'flag', label: 'Flag', minWidth: 250, align: 'center' },
    { id: 'name', label: 'Name', minWidth: 100, align: 'center' },
    {
      id: 'region',
      label: 'Region',
      minWidth: 100,
      align: 'center',
    },
    {
      id: 'population',
      label: 'Population',
      minWidth: 100,
      align: 'center',
    },
    {
      id: 'languages',
      label: 'Languages',
      minWidth: 150,
      align: 'center',
    },
    {
      id: 'icon',
      label: '',
      minWidth: 150,
      align: 'left',
    },
  ];

  //Pagination using MUI
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ minHeight: '100%' }}>
          <Table
            sx={{ minWidth: '100%', margin: '1rem', minHeight: '100%' }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{
                      minWidth: column.minWidth,
                      fontSize: '1.5rem',
                      fontWeight: 'bold',
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {/* Iterate through country list to create a table cell for  each country */}
              {props.countries
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((country) => {
                  return <CountryItem country={country} key={country.flag} />;
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 25, 50]}
          component="div"
          count={props.countries.length}
          rowsPerPage={rowsPerPage}
          labelRowsPerPage="Countries per page"
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
};

export default CountryList;

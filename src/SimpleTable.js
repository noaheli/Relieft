
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));

function createData(relief, name, address, capacity, latlng) {
  return {relief, name, address, capacity, latlng };
}

const rows = [
  createData('Healthcare','New York-Presbyterian Brooklyn Methodist Hospital', '506 6th St, Brooklyn, NY 11215', 651, '-73.9792, 40.6679'),
  createData('Healthcare','King\'s County Hospital', '451 Clarkson Ave, Brooklyn, NY 11203', 634, ' -73.9434,40.6565'),
  createData('Healthcare','Brookdale Medical Center', '1 Brookdale Plaza, Brooklyn, NY 11212', 532, '-73.9125, 40.6552'),
  createData('Healthcare','NYC Health + Hospitals/Woodhull', '760 Broadway, Brooklyn, NY 11206', 323, '-73.9423, 40.6996'),
  createData('Healthcare','NYC Health + Hospitals/Coney Island', '2601 Ocean Pkwy, Brooklyn, NY 11235', 371, '-73.9423, 40.6996'),
];

function SimpleTable() {
  const classes = useStyles();

  return (
    <Paper className={classes.root} style={{width:'50%', margin:'0'}}>
      <Table className={classes.table} style={{position:'absolute', left:'50%', top:'21%', width:840}}>
        <TableHead>
          <TableRow>
            <TableCell>Relief</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Address&nbsp;</TableCell>
            <TableCell align="right">Capacity&nbsp;</TableCell>
            <TableCell align="right">Long, Lat&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.relief}>
              <TableCell component="th" scope="row">
                {row.relief}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.address}</TableCell>
              <TableCell align="right">{row.capacity}</TableCell>
              <TableCell align="right">{row.latlng}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default SimpleTable;
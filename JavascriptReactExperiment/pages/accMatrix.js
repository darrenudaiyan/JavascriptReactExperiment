import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Layout from '../components/layout.js';
import { rows } from "../data/AccData";

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


export default function SimpleTable() {
  const classes = useStyles();

  return (
    <div>
    <Layout>
    <h2>Attribute Component Capability Matrix</h2>
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>COMPONENT</TableCell>
            <TableCell align="right">accurate</TableCell>
            <TableCell align="right">fast</TableCell>
            <TableCell align="right">intuitive</TableCell>
            <TableCell align="right">secure</TableCell>
            <TableCell align="right">portable</TableCell>
            <TableCell align="right">scalable</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.COMPONENT}>
              <TableCell component="th" scope="row">
                {row.COMPONENT}
              </TableCell>
              <TableCell align="right">{row.accurate}</TableCell>
              <TableCell align="right">{row.fast}</TableCell>
              <TableCell align="right">{row.intuitive}</TableCell>
              <TableCell align="right">{row.secure}</TableCell>
              <TableCell align="right">{row.portable}</TableCell>
              <TableCell align="right">{row.scalable}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
    </Layout>
    </div>
  );
}

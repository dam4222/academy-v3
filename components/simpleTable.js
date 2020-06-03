import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

  const styles = theme => ({
    root: {
      flexGrow: 1,
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      justifyContent:'center'
    },
    centerAlign: {
      justifyContent:'center',
      display:'flex'
    },
    skillGrid: {
      flexGrow: 1,
      display: 'flex',
      flexFlow: 'row wrap',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      position:'relative',
      paddingBottom: '5vh',
    },
    content: {
      width: '100%',
      marginTop: '95vh',
      background: 'white',
      position: 'relative',
      height: '100%',
    },
    fixed: {
      position:'fixed',
      top:0,
      height: '95vh',
      overflow:'hidden'
    },
    spacing:{
      paddingBottom:'100px',
    },
    skillItem:{
      width:'100%',
      textAlign: 'center',
      margin:'0 auto',
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
      flexDirection: 'column',
    }
  });

  const CustomTableCell = withStyles(theme => ({
  head: {
    fontSize: 14,
    color:'black',
  },
  body: {
    fontSize: 14,
    fontWeight:200,
  },
}))(TableCell);

  let id = 0;
  function createData(name, mid, sr, dir) {
    id += 1;
    return { id, name, mid, sr, dir};
  }

  const rows = [
    createData('Designer (UX)', '$150', '$185', '$225'),
    createData('Designer (UI)', '$150', '$185', '$225'),
    createData('Creative Director', 'N/A', 'N/A', '$225'),
    createData('Writer (UX)', '$125', '$150', '$185'),
    createData('Researcher (UX)', '$125', '$150', '$185'),
    createData('Strategist', '$150', '$185', '$225'),
    createData('Product Manager', '$125', '$150', '$185'),
    createData('Illustrator', '$125', '$150', '$185'),
  ];

function SimpleTable(props) {
  const { classes } = props;

  return (

    <div className={classes.root}>
    <Grid container style={{alignContent: 'flex-end', display: 'flex', justifyContent: 'center'}}>
    <Grid item xs={1} sm={1} md={3} lg={3} xl={3}></Grid>
    <Grid item xs={12} sm={10} md={6} lg={6} xl={6} className={classes.skillGrid} style={{flexWrap:'wrap-reverse', alignContent: 'center', justifyContent: 'center'}} >

          <Table className={"table"}>
            <TableHead>
              <TableRow>
                <CustomTableCell>Role</CustomTableCell>
                <CustomTableCell numeric>Mid</CustomTableCell>
                <CustomTableCell numeric>Senior</CustomTableCell>
                <CustomTableCell numeric>Director</CustomTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => {
                return (
                  <TableRow key={row.id}>
                    <CustomTableCell component="th" scope="row">
                      {row.name}
                    </CustomTableCell>
                    <CustomTableCell numeric>{row.mid}</CustomTableCell>
                    <CustomTableCell numeric>{row.sr}</CustomTableCell>
                    <CustomTableCell numeric>{row.dir}</CustomTableCell>
                  </TableRow>
                );
              })}

            </TableBody>

          </Table>

          </Grid>

          <Grid item xs={1} sm={1} md={3} lg={3} xl={3}></Grid>
          </Grid>
          <Typography variant="body2"><span style={{color:"#EB5757"}}>*</span>All rates are negotiable and subject to change based on market fluctuations</Typography>
        </div>


  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);

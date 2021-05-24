import './App.css';
import React, { useState } from 'react';


import Button from '@material-ui/core/Button';
import { AppBar, Checkbox } from '@material-ui/core';
import { positions } from '@material-ui/system';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { ButtonGroup } from '@material-ui/core';
import { BorderStyle, Check } from '@material-ui/icons';
import { FormControlLabel } from '@material-ui/core';
import { TextField } from '@material-ui/core';

import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { blueGrey, orange, yellow } from '@material-ui/core/colors';
import 'fontsource-roboto';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
  root: {
    "& > *": {
      background: 'linear-gradient(90deg,#333,#999)',
      border: 0,
      borderRadius: 15,
      color: 'blueGrey',
      padding: '0 30px',
    }, headerTabs:{
      backgroundColor: blueGrey[400]
    }
  // } {
  //   background: 'linear-gradient(90deg,#333,#999)',
  //   border: 0,
  //   borderRadius: 15,
  //   color: 'blueGrey',
  //   padding: '0 30px',
  // },
}})

const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 36,
      marginBottom: 67,
      marginTop: 25,
    }
  },
  palette: {
    primary: {
      main: blueGrey[500],
    },
    secondary: {
      main: orange[500]
    }
  }
})

function App() {

  function HeaderGrid(){
    const classes = useStyles();
    return(
      <Grid container >
      <Grid item lg={4} justify='center'>
      <Paper square color="blue" style={{ height: 45 }}>Back to the home page</Paper>
      </Grid>
      <Grid item md={4} justify='center'>
      <Paper square style={{ height: 45 }}>Mental Health Emergency Links</Paper>
      </Grid>
      <Grid item md={4} justify='center'>
      <Paper square style={{ height: 45 }}>Provider Contact Info</Paper>
      </Grid>
  </Grid>
    )
  }

  function LogGrid(){
    
    return(
    <Grid container >
      <Grid item lg={5} justify='center'>
      <Paper square color="blue" style={{ height: 45 }}> DATE TO SELECT
      <ButtonGroup variant="contained" size="medium">
            <Button
              startIcon={<EditIcon color="secondary" />}
              color="primary">
              Edit
    </Button>
            <Button
              startIcon={<DeleteIcon color="secondary" />}
              color="primary">
              Delete
        </Button>
          </ButtonGroup>
      </Paper>
      <Paper square color="blue" style={{ height: 45 }}> DATE TO SELECT
      <ButtonGroup variant="contained" size="medium">
            <Button
              startIcon={<EditIcon color="secondary" />}
              color="primary">
              Edit
    </Button>
            <Button
              startIcon={<DeleteIcon color="secondary" />}
              color="primary">
              Delete
        </Button>
          </ButtonGroup>
      </Paper>
      <Paper square color="blue" style={{ height: 45 }}> DATE TO SELECT
      <ButtonGroup variant="contained" size="medium">
            <Button
              startIcon={<EditIcon color="secondary" />}
              color="primary">
              Edit
    </Button>
            <Button
              startIcon={<DeleteIcon color="secondary" />}
              color="primary">
              Delete
        </Button>
          </ButtonGroup>
      </Paper>
      <Paper square color="blue" style={{ height: 45 }}> DATE TO SELECT
      <ButtonGroup variant="contained" size="medium">
            <Button
              startIcon={<EditIcon color="secondary" />}
              color="primary">
              Edit
    </Button>
            <Button
              startIcon={<DeleteIcon color="secondary" />}
              color="primary">
              Delete
        </Button>
          </ButtonGroup>
      </Paper>
      <Paper square color="blue" style={{ height: 45 }}> DATE TO SELECT
      <ButtonGroup variant="contained" size="medium">
            <Button
              startIcon={<EditIcon color="secondary" />}
              color="primary">
              Edit
    </Button>
            <Button
              startIcon={<DeleteIcon color="secondary" />}
              color="primary">
              Delete
        </Button>
          </ButtonGroup>
      </Paper>
      <Paper square color="blue" style={{ height: 45 }}> DATE TO SELECT
      <ButtonGroup variant="contained" size="medium">
            <Button
              startIcon={<EditIcon color="secondary" />}
              color="primary">
              Edit
    </Button>
            <Button
              startIcon={<DeleteIcon color="secondary" />}
              color="primary">
              Delete
        </Button>
          </ButtonGroup>
      </Paper>
      <Paper square color="blue" style={{ height: 45 }}> DATE TO SELECT
      <ButtonGroup variant="contained" size="medium">
            <Button
              startIcon={<EditIcon color="secondary" />}
              color="primary">
              Edit
    </Button>
            <Button
              startIcon={<DeleteIcon color="secondary" />}
              color="primary">
              Delete
        </Button>
          </ButtonGroup>
      </Paper>
      <Paper square color="blue" style={{ height: 45 }}> DATE TO SELECT
      <ButtonGroup variant="contained" size="medium">
            <Button
              startIcon={<EditIcon color="secondary" />}
              color="primary">
              Edit
    </Button>
            <Button
              startIcon={<DeleteIcon color="secondary" />}
              color="primary">
              Delete
        </Button>
          </ButtonGroup>
      </Paper>
      <Paper square color="blue" style={{ height: 45 }}> DATE TO SELECT
      <ButtonGroup variant="contained" size="medium">
            <Button
              startIcon={<EditIcon color="secondary" />}
              color="primary">
              Edit
    </Button>
            <Button
              startIcon={<DeleteIcon color="secondary" />}
              color="primary">
              Delete
        </Button>
          </ButtonGroup>
      </Paper>
      <Paper square color="blue" style={{ height: 45 }}> DATE TO SELECT
      <ButtonGroup variant="contained" size="medium">
            <Button
              startIcon={<EditIcon color="secondary" />}
              color="primary">
              Edit
    </Button>
            <Button
              startIcon={<DeleteIcon color="secondary" />}
              color="primary">
              Delete
        </Button>
          </ButtonGroup>
      </Paper>
      <Paper square color="blue" style={{ height: 45 }}> DATE TO SELECT
      <ButtonGroup variant="contained" size="medium">
            <Button
              startIcon={<EditIcon color="secondary" />}
              color="primary">
              Edit
    </Button>
            <Button
              startIcon={<DeleteIcon color="secondary" />}
              color="primary">
              Delete
        </Button>
          </ButtonGroup>
      </Paper>
      <Paper square color="blue" style={{ height: 45 }}> DATE TO SELECT
      <ButtonGroup variant="contained" size="medium">
            <Button
              startIcon={<EditIcon color="secondary" />}
              color="primary">
              Edit
    </Button>
            <Button
              startIcon={<DeleteIcon color="secondary" />}
              color="primary">
              Delete
        </Button>
          </ButtonGroup>
      </Paper>
      <Paper square color="blue" style={{ height: 45 }}> DATE TO SELECT
      <ButtonGroup variant="contained" size="medium">
            <Button
              startIcon={<EditIcon color="secondary" />}
              color="primary">
              Edit
    </Button>
            <Button
              startIcon={<DeleteIcon color="secondary" />}
              color="primary">
              Delete
        </Button>
          </ButtonGroup>
      </Paper>
      </Grid>
  </Grid>)
  }

  // function ButtonStyled() {
  //   const classes = useStyles();
  //   return (
  //     <Button className={classes.root}>Test Styled Button</Button>
  //   )
  // }

  // function CheckboxExample() {
  //   const [checked, setChecked] = useState(false);

  //   return (
  //     <FormControlLabel control={
  //       <Checkbox
  //         color="secondary"
  //         checked={checked}
  //         onChange={(e) => setChecked(e.target.checked)}
  //         inputProps={{
  //           'aria-label': 'secondary checkbox'
  //         }} />}
  //       label="Select All"
  //     />
  //   )
  // }

  return (
        <div className="App">
    <ThemeProvider theme={theme}>
      
        
          {/* <AppBar color="secondary"> */}
            {/* <Toolbar>
              <IconButton>
                <MenuIcon />
              </IconButton> */}
                  <HeaderGrid/>
              {/* <Typography variant='h6'>
                MUI Theming
              </Typography>
              <Button>
                Login
              </Button>
            </Toolbar>
          </AppBar> */}
          <Typography variant="h2" component="div">
            Hello, John Doe
        </Typography>
    
          <LogGrid />
          <br />
          {/* <CheckboxExample /> */}
        
      
    </ThemeProvider>
        </div>
  );
}

export default App;

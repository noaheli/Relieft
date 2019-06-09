import React from 'react';
import './App.css';
import 'react-bootstrap';
import 'react-burger-menu/lib/baseStyles'
import { Tabs, Tab, Form, Container } from 'react-bootstrap';
import TemporaryDrawer from './TemporaryDrawer';
import TextField from '@material-ui/core/TextField';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { makeStyles } from '@material-ui/core/styles';


function RedditTextField(props) {
  const classes = useStylesReddit();

  return <TextField InputProps={{ classes, disableUnderline: true }} {...props} />;
}

const useStylesReddit = makeStyles(theme => ({
  root: {
    border: '1px solid #e2e2e1',
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: '#fcfcfb',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:hover': {
      backgroundColor: '#fff',
    },
    '&$focused': {
      backgroundColor: '#fff',
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main,
    },
  },
  focused: {},
}));

class MapBody extends React.Component {
  render() {
    return (
      <div>
        <div className='subheader'>
          <TemporaryDrawer id='overlay' />

          <div style={{ height: '10px;' }}>
            <img src='https://wallpaperplay.com/walls/full/2/5/0/200799.jpg' style={{ height: '100%', width:'100%' }}></img>
          </div>
          <RedditTextField
            label="Zip-code"
            variant="filled"
            id="reddit-input overlay"
            style={{ float: 'right', top: '90%', left:'75%', position:'absolute', width:300}}
          />
        </div>
      </div>
    )
  };
}

class App extends React.Component {
  render() {
    return (
      <div className="App">

        <div className='site-header'>
          <div style={{ display: 'inline-block' }}>
            Live<b>Stock</b>
          </div>

        </div>
        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example"
          style={{ backgroundColor: '#F5F7FC' }}>
          <Tab eventKey="home" title="Home">
            <MapBody />
          </Tab>
          <Tab eventKey="dash" title="Dashboard">
            <div>
              hiiiiii
            </div>
          </Tab>

        </Tabs>
      </div>
    );
  }
}



export default App;
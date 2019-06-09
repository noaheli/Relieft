import React from 'react';
import './App.css';
import 'react-bootstrap';
import { Tabs, Tab, Form, Container } from 'react-bootstrap';
import TemporaryDrawer from './TemporaryDrawer';
import TextField from '@material-ui/core/TextField';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import SimpleSnackbar from './SimpleSnackbar';
import SimpleTabs from './SimpleTabs';
//import {Marker} from 'react-mapbox-gl';

// ES6
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import DetailedExpansionPanel from './DetailedExpansionPanel';

const heatdata = require('./heatmapData.json');
const shelterdata = require('./shelter.json');
const fooddata = require('./food.json');
const healthcaredata = require('./healthcare.json');

const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoicmV5b2ZsaXRlIiwiYSI6ImNqd283Ynp1ZDBlajQ0OW1rNTcycjc0NmQifQ.xu4-99z-M6go6z1oREY_0g"
});

const layerPaint = {
  'heatmap-weight': {
    property: 'priceIndicator',
    type: 'exponential',
    stops: [[0, 0], [5, 2]]
  },
  // Increase the heatmap color weight weight by zoom level
  // heatmap-ntensity is a multiplier on top of heatmap-weight
  'heatmap-intensity': {
    stops: [[0, 0], [5, 1.2]]
  },
  // Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
  // Begin color ramp at 0-stop with a 0-transparancy color
  // to create a blur-like effect.
  'heatmap-color': [
    'interpolate',
    ['linear'],
    ['heatmap-density'],
    0,
    'rgba(33,102,172,0)',
    0.25,
    'rgb(103,169,207)',
    0.5,
    'rgb(209,229,240)',
    0.8,
    'rgb(253,219,199)',
    1,
    'rgb(239,138,98)',
    2,
    'rgb(178,24,43)'
  ],
  // Adjust the heatmap radius by zoom level
  'heatmap-radius': {
    stops: [[0, 1], [5, 50]]
  }
};

// in render()


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



export class MapBody extends React.Component {
  constructor(props) {
    super(props);
    this.onMapClick = this.onMapClick.bind(this);
  }
  onMapClick = (e) => {
    //this.setState( { open: false } )
  }
  handleClose() {
    this.open = false;
  }

  open = false;
  id = this.open ? 'simple-popover' : null;

  render() {
    return (
      <div>
        <div className='subheader'>
          <div style={{ height: '10px' }}>
            <Map
              style="mapbox://styles/mapbox/streets-v9"
              center={[-73.9792, 40.6679]}
              containerStyle={{
                height: "100vh",
                width: "100vw"
              }}
              onStyleLoad={this.onStyleLoad}
            >
              <Layer type="heatmap" paint={layerPaint}>
                {heatdata.map((el: any, index: number) => (
                  <Feature key={index} coordinates={el.latlng} properties={el} />
                ))}
              </Layer>
              <Layer
                type="symbol"
                id="marker1"
                layout={{ "icon-image": "lodging-11" }}>
                {shelterdata.map((el1: any, index: number) => (
                  <Feature coordinates={el1.latlng} />))}
              </Layer>
              <Layer
                type="symbol"
                id="marker2"
                layout={{ "icon-image": "hospital-11" }}>
                {healthcaredata.map((el2: any, index: number) => (
                  <Feature coordinates={el2.latlng} />))}

              </Layer>
              <SimpleSnackbar />
              {/* <Layer
                type="symbol"
                id="marker3"
                layout={{ "icon-image": "grocery-11" }}>
                {fooddata.map((el: any, index: number) => (
                  <Feature coordinates={el.latlng} />))}
                
              </Layer> */}

            </Map>
          </div>
          <TemporaryDrawer id='overlay' />
          <RedditTextField
            label="Zip-code"
            variant="filled"
            id="reddit-input overlay"
            style={{ float: 'right', top: '13%', left: '78%', position: 'absolute', width: 350 }}
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
            Re<b>Lieft</b>
          </div>

        </div>
        <SimpleTabs></SimpleTabs>
 
      </div>
    );
  }
}



export default App;
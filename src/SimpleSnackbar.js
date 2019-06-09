import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

const fooddata = require('./food.json');

const useStyles = makeStyles(theme => ({
  close: {
    padding: theme.spacing(0.5),
  },
}));

function SimpleSnackbar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  function handleClick() {
    setOpen(true);
  }

  function handleClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  }

  return (
    <div>
      {/* <Button onClick={handleClick}> */}
      <Layer
                onClick={handleClick}
                type="symbol"
                id="marker3"
                layout={{ "icon-image": "grocery-11" }}>
                {fooddata.map((el: any, index: number) => (
                  <Feature coordinates={el.latlng} />))}
                
        </Layer>
      {/* </Button> */}
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">
            Food Stores: Normal<br />Threat level: Extreme<br />
            lat/lng: -74.0134, 40.7063</span>}
        action={[
          <Button key="undo" color="secondary" size="small" onClick={handleClose}>
            NOTIFY
          </Button>,
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            className={classes.close}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
    </div>
  );
}

export default SimpleSnackbar;

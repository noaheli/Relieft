import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import SimpleCard from './SimpleCard';
const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

function TemporaryDrawer() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [side]: open });
    };

    const sideList = side => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <SimpleCard></SimpleCard>
            <div style={{position:'absolute', top:'93%'}}> <img src='logout.png' width={50}/> <h2 style={{position:'absolute', left:'100%', top:'15%'}}>LOGOUT</h2></div>
        </div>
    );


    return (
        <div>
            <Button onClick={toggleDrawer('left', true)} style={{ position: 'absolute', top: '12.5%', display: 'inline-block', margin: 0 }}>
                <img src="iconfinder_menu-alt_134216.png" style={{ height: 35, opacity:'80%' }} /></Button>
            <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
                {sideList('left')}
            </Drawer>
        </div>
    );
}

export default TemporaryDrawer;

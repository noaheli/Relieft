import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { MapBody } from './App';
import SimpleTable from './SimpleTable';

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 0 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: 'white'
    },
}));

function SimpleTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    function handleChange(event, newValue) {
        setValue(newValue);
    }

    return (
        <div className={classes.root}>
            <AppBar position="static" style={{ backgroundColor: '#F5F7FC', color: 'black' }}>
                <Tabs value={value} onChange={handleChange}>
                    <Tab label="Home" />
                    <Tab label="Dashboard" />
                </Tabs>
            </AppBar>
            {value === 0 && <TabContainer><MapBody /></TabContainer>}
            {value === 1 && <TabContainer>
                <div class="container w-100" style={{ margin: '0 !important', maxWidth: 100000, padding: '0' }}>
                    <div class="col-sm-12" style={{
                        backgroundColor: '#F5F7FC', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, .1)',
                        padding: '5px 0', verticalAlign: 'baseline'
                    }}>
                        <h4 style={{ textAlign: 'center' }}>Extreme weather approaching.</h4>
                        <p style={{ textAlign: 'center' }}>Please make proper precautions and inform the populace.</p>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="row">
                        <div class="col-sm-12">
                            <h2>Residents: 104,854</h2>
                            <h4>Rainfall: 10"</h4>
                            <h4>Area-Code: 11238</h4>
                            <h4>Last-updated: 1:04:34</h4></div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12" >
                            <h3 style={{ backgroundColor: 'teal' }}>Local Authorities</h3>
                            <ul style={{ fontSize: '20px' }}>
                                <li>(511) 981-9168 : Local Emergency Responders</li>
                                <li>(888) 600-1648 : NYC Medics Global Disaster Relief</li>
                                <li>(706) 476-0310 : Hands-On Disaster Response</li>
                            </ul>
                        </div>
                    </div>



                </div>
                <SimpleTable style={{position:'absolute', left:'48%', top:'33%'}}/>

            </TabContainer>}
        </div>
    );
}

export default SimpleTabs;
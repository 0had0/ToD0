import React from 'react';

import {AppBar, Toolbar, Button, Box, Icon} from '@material-ui/core';
import {Typography} from '@material-ui/core';

const nav = props => {
    return (
        <React.Fragment>
        <AppBar position="static">
                <Toolbar>
                    <Box display='flex' flexDirection='row'
                        style={
                            {width: '100%'}
                        }
                        justifyContent='space-around'
                        alignItems="center">
                        <Typography color='inherit' variant='h6'>
                            ToDo app
                        </Typography>
                        <Button color="inherit" variant="outlined" onClick={props.handleOpen}>
                            <Icon>
                              add
                            </Icon>
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}

export default nav;

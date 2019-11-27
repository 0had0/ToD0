import React from 'react';

import '../node_modules/@material-ui/core/umd/material-ui.development.js';
import '../node_modules/@material-ui/core/umd/material-ui.production.min.js';

import Show from './components/show';
import Nav from './components/nav';

const App = props => {

    return (
        <div className="App">
            <Nav/>
            <Show store={
                props.store
            }/>
        </div>
    );
}

export default App;

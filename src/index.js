// this is the file where I connect the react app to index.html file 

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

// connecting to the div with an Id of root
ReactDOM.render(<App />, document.getElementById('root'));
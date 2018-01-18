import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from "react-router-dom";
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store'
import "./styles/bootswatch.min.css";
import "./styles/sudoku.css"
import "font-awesome/css/font-awesome.css";



ReactDOM.render(
<BrowserRouter>
    <Provider store={store}>
      <Route component={App}/>
    </Provider>
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();

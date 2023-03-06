import React, {Component} from 'react';
import {render} from 'react-dom';
import './index.css';
import moment from 'moment';
import PropTypes from 'prop-types';
import Header from './components/header';
import Work from './components/work'
 
const node = document.getElementById('root');


function App(){
  return(
    <div className='app'>
      <Header/>
      <Work/>
    </div>
  )
}

render(<App/>,node);
import React, {Component} from 'react';
import {render} from 'react-dom';
import './index.css';
import moment from 'moment';
import PropTypes from 'prop-types';
import Header from './components/header';
import Work from './components/work';
import Benefit from './components/benefit';
import Feature from './components/feature';
 
const node = document.getElementById('root');


function App(){
  return(
    <div className='app'>
      <Header/>
      <Work/>
      <Benefit/>
      <Feature/>
    </div>
  )
}

render(<App/>,node);
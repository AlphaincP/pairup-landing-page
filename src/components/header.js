import React from "react";
import './header.css';
import img from './img/img.svg';

export default function Header(){
    return(
        <div className="head">
              <div className="header">
            
        </div>
        <div className="header-content">
            <div className="logo">
                <h4>PairUp</h4>
            </div>
            <div className="title">
                <h3>Sail through your<br/>
                <span>Assignment</span></h3>
            </div>
            <hr/>
            <div className="title-body">
                <p>Get other students to teach you the coursework<br/>
                you are working on.</p>
                <button>Comming Soon</button>
            </div>
            <div className="head-image">
                <img src={img} className='img-image'/>
            </div>
        </div>
        </div>
      
       
    )
}
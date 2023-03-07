import React from "react";
import './benefit.css';
import img1 from './img/img2.png';
import img2 from './img/img3.png';
import img3 from './img/img4.png';
import img4 from './img/img6.svg';
import img5 from './img/img7.svg';

export default function Benefit(){
    return(
        <div className="benefit">
            <div className="benefit-title">
                <h3>Benefits</h3>
            </div>
            <div className="benefits">
            <div className="benefit-one">
            <div className="image-benefit">
               <img className="img-one" src={img1}/>
               <img className="img-two" src={img2}/>
               <img className='img-three' src={img3}/>
            </div>
            <div className="img-text">
                <p>Connect with people of same interest.<br/>Form amazing groups and learn together.<br/>
                PairUp just makes it easy</p>
            </div>
            </div>
            <div className="benefit-two">
                <div className="image-benefit2">
                    <img className="img-four" src={img4}/>
                </div>
                <div className="img-text">
                    <p>Chat accounts after searching for them.<br/>Accounts with higher rating means they can help you better.<br/>
                    Finding a study buddy shouldn't be hard</p>
                </div>
            </div>
            <div className="benefit-three">
                <div className="image-benefit3">
                    <img className="img-five" src={img5}/>
                </div>
                <div className="img-text">
                    <p>Pass your exams with ease.<br/>This is why PairUp is here.</p>
                </div>
            </div>
            </div>
        </div>
    )
}
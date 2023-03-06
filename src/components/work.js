import React from "react";
import './work.css';

export default function Work(){
    return(
        <div className="work">
            <div className="work-title">
                <h3>How it works</h3>
            </div>
            <div className="row">
                <div className="col">
                 <p className="number">
                    <span className="num">01</span>
                 </p>
                 <h3>Make a request on the help board</h3>
                 <p className="col-body">pick a subject and lets others help you.</p>
                </div>
                <div className="col">
                 <p className="number">
                    <span className="num">02</span>
                 </p>
                 <h3>Choose a partner based on their rating</h3>
                 <p className="col-body">get paired with someone who really knows the subject</p>
                </div>
                <div className="col">
                 <p className="number">
                    <span className="num">03</span>
                 </p>
                 <h3>Start your learning journey</h3>
                 <p className="col-body">make the most of your study partner</p>
                </div>
            </div>
            
        </div>
    )
}
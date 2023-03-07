import React from "react";
import './feature.css';

export default function Feature(){
    return(
        <div className="feature">
            <div className="feature-title">
                <h3>Features</h3>
            </div>
            <div className="features">
                <div className="row">
                    <div className="col-col">
                        <h3>Special Profile</h3>
                        <p>Create an amazing profile of yourself<br/>
                        Listing your strength and weaknesses.This<br/>makes people find you with ease and if you are someone
                        who likes<br/>helping,It boost your accounts to have more strengths.</p>
                    </div>
                    <div className="col-col">
                        <h3>Search Functionality</h3>
                        <p>We call it <span>Buddy search</span>.This is specially designed to help you search <br/>
                        for a suitable study buddy or partner.you can also rate experience with the partner you find.<br/>
                        Those with higher rating appear first when you search</p>
                    </div>
                    <div className="col-col">
                        <h3>Chat and Connect</h3>
                        <p>A built-in chat app that helps you connect with the partner you find.<br/>
                       No need to use third parties.Although you can add your contact details on your profiel<br/>
                       for people to connect to you, it seems easier using ours </p>
                    </div>
                </div>
            </div>
            <div className="coming-soon">
                <h1>Co<span>mm</span>ing S<span>oo</span>n</h1>
                <p>&copy; Copyright 2023 otnelson</p>
            </div>
        </div>
    )
}
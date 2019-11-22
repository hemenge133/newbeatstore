import React from 'react';
import '../css/bootstrap.min.css'

let arr = ["Hello", "Fuck", "AyeLmao", "blah", "Hello", "Fuck", "AyeLmao", "blah", "asd"];

const play = require('../play-button.svg');

const BeatList = (props) => {

    return(
        <div style={{display: 'content'}}>
            {
                arr.map((element,index) => (
                    <div key={index} className="d-flex bd-highlight mb-3 border-bottom border-top align-items-center" style={{height: '60px'}}>
                        <div className="p-1 p-md-2 bd-highlight border-left " style={{height: '50px' , width: '50px', background: 'black'}}/>
                        <div className="p-2 bd-highlight" style={{width: '30px', marginLeft: '10px', marginRight: '10px'}}><img src={play}/></div>
                        <div className="mr-auto p-2 bd-highlight" >{element}</div>
                        <div className="p-2 bd-highlight">Price</div>
                        <div className="p-2 bd-highlight border-right">Cart</div>
                    </div>
                ))
            }
        </div>
    );
};

export default BeatList;
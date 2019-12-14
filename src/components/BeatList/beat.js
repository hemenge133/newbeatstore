import React from 'react'
import { useState, useEffect, useCallback } from 'react'
import { Button } from 'react-bootstrap'
import { StripeProvider, Elements } from 'react-stripe-elements'
import ChargeComponent from './ChargeComponent.js'
import path from 'path'
import axios from 'axios'
import AudioPlayer from "react-h5-audio-player";
const dotenv = require('dotenv').config({path: path.resolve(__dirname,'./.env')});
const css = require('../../css/beat.css');


 const Beat = (props) => {
     const [, updateState] = React.useState();
     const forceUpdate = useCallback(() => updateState({}), []);
     const [open, setOpen] = useState(false);
     const [tier, setTier] = useState(0);

    if(props.myFile) {
        return (
            <div className="container h-75 my-auto" >
                <div className="jumbotron">
                    <div className="row justify-content-center">
                        <div className="col-4">
                            <img src={`/images/${props.myFile.art}`} style={{width: '100%', height: 'auto'}} />
                        </div>
                        <div className="col-6 ">
                            <div className="d-flex flex-column bd-highlight justify-content-around h-100">
                                <div className='p-2 bd-highlight text-center' id="title">
                                    {props.myFile.title}
                                </div>
                                <div className='p-2 bd-highlight text-center' id="tags">
                                    Rap
                                </div>
                                <div className='d-flex justify-content-around' id="prices">
                                    <div className="p-2 bd-highlight" >
                                        <Button variant="dark" onClick={() => {setOpen(true); setTier(1)}}>MP3</Button>
                                    </div>
                                    <div className="p-2 bd-highlight" >
                                        <Button variant="dark" onClick={() => {setOpen(true); setTier(2)}}>Premium</Button>
                                    </div>
                                    <div className="p-2 bd-highlight" >
                                        <Button variant="dark" onClick={() => {setOpen(true); setTier(3)}}>Trackout</Button>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>

                </div>
                <div className="jumbotron">
                    <div className="row justify-content-center my-3">
                        <AudioPlayer
                            className="w-100"
                            id="player"
                            style={{width: '100%'}}
                            src={`/sounds/${props.myFile.preview}`}
                            onPlay={e => console.log("onPlay")}
                            preload="auto"

                            // other props here
                        />
                    </div>
                    {open &&
                    <div className="row justify-content-center my-3">
                        <StripeProvider apiKey="pk_test_ApOkCvsuLGebSlt21iA9k37j00boT8Crov">
                            <div className="text-center w-100 h-100">
                                <h1>{`Price: $${props.myFile.price*tier}`}</h1>
                                <Elements>
                                    <ChargeComponent amount={props.myFile.price*tier}/>
                                </Elements>
                            </div>
                        </StripeProvider>
                    </div>
                    }
                </div>
            </div>
        )
    }
    else {
        return(
            <div>
                <h1>Loading</h1>
            </div>
        )
    }
};
export default Beat;
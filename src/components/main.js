import React from 'react';
import '../css/bootstrap.min.css'
import logo from '../logo.png'
import { Button } from 'react-bootstrap';
import '../css/main.css'
import {useSpring, animated} from 'react-spring';
import { Link, animateScroll as scroll } from "react-scroll";


const Main = () => {
    const props = useSpring({
        from: {
            opacity: 0,
            transform: 'translate3d(0,-500px,0)'
        },
        to: {
            opacity: 1,
            transform: 'translate3d(0,0,0)'
        }
    });
    return(
        <div id="section-one-wrapper" className="container-fluid">
            <animated.div style={props} className='container'>
                <div className='row'>
                    <div className="col align-self-center d-flex justify-content-center">
                        <img src={logo} alt="MengeBeats Logo"/>
                    </div>
                </div>
            </animated.div>
        </div>
    );
};

export default Main;
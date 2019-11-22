import React from 'react';
import '../css/bootstrap.min.css'
import Table from 'react-bootstrap/Table'
import { Form, Button } from 'react-bootstrap'
import '../css/beats.css'


import {useSpring, animated} from 'react-spring';
import BeatList from "./BeatList";


const Beats = (props) => {

    return(
        <div className="container-fluid h-100">
            <div className="row h-100">
                <div className="col-1 col-sm-1 col-m-3" />
                <div className="col h-100">
                    <div className="jumbotron bg-light " style={{marginTop: '5rem',marginBottom: '5rem', overFlow: 'scroll'}}>
                        <div className="mh-25">
                            <BeatList/>
                        </div>
                    </div>
                </div>
                <div className="col-1 col-sm-1 col-m-3" />
            </div>
        </div>
    );
};

export default Beats;
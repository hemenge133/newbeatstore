import React from 'react';
import logo from '../logo.png'
import { Button } from 'react-bootstrap';
import '../css/bootstrap.min.css';
import '../css/store.css'
import {useSpring, animated} from 'react-spring';

const Store = () => {
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
        <>
            <animated.div id="section-two-wrapper" className='container align-self-center'>
                <div className='row'>
                    <div className="col align-self-center d-flex justify-content-center">
                        <h1 className="modal-header">Beats</h1>
                    </div>
                </div>
                <div className='row'>
                    <div className="col align-self-center d-flex justify-content-center">
                        <ul className="list-group" id='beats'>
                            <li className="list-group-item">Cras justo odio</li>
                            <li className="list-group-item">Dapibus ac facilisis in</li>
                            <li className="list-group-item">Morbi leo risus</li>
                            <li className="list-group-item">Porta ac consectetur ac</li>
                            <li className="list-group-item">Vestibulum at eros</li>
                        </ul>
                    </div>
                </div>
            </animated.div>
        </>
    );
};

export default Store;
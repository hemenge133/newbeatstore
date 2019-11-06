import React from 'react';
import '../css/bootstrap.min.css';
import '../css/store.css'
import {useSpring, animated} from 'react-spring';
import useWindowDimensions from "../useWindowDimensions";

const Store = (props) => {
    const { width} = useWindowDimensions();
    const springProps = useSpring({
        from: {
            opacity: 0,
            transform: 'translate3d(1000px,0,0)'
        },
        to: {
            opacity: props.storeview ? 1 : 0,
            transform: props.storeview ? 'translate3d(0,0,0)' : 'translate3d(1000px,0,0)'
        },
        delay: 100
    });
    return(
        <>
            <animated.div style={springProps} id="section-two-wrapper" className='container align-self-center'>
                <div className='row'>
                    <div className="col align-self-center d-flex justify-content-center">
                        <h1 className="modal-header">Featured Beats</h1>
                    </div>
                </div>
                <div className='row' style={{maxWidth: width, margin: "0 1rem" }}>
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
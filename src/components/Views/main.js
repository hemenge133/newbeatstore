import React from 'react';
import '../../css/bootstrap.min.css'
import logo from '../../logo.png'
import '../../css/main.css'
import {useSpring, animated} from 'react-spring';

import { Button } from 'react-bootstrap'
import useWindowDimensions from "../../useWindowDimensions";
import { Link, animateScroll as scroll } from "react-scroll";


const Main = (props) => {
    const { height } = useWindowDimensions();
    const springProps = useSpring({
        from: {
            opacity: 0,
            transform: 'translate3d(0,-500px,0)'
        },
        to: {
            opacity: 1,
            transform: 'translate3d(0,0,0)'
        },
        delay: 100,
    });
    const buttonProps = useSpring({
        from: {
            opacity: 0,
            transform: 'translate3d(0,1000px,0)'
        },
        to: {
            opacity: 1,
            transform: 'translate3d(0,0,0)'
        },
        delay: 100,
    });

    return(
        <>
            <div className="container-fluid h-75 my-auto">
                <div className='row justify-content-center'>
                    <div className="col-8 align-content-center">
                        <animated.div style={springProps} className="text-center">
                            {/*<img src={logo} style={{height: `${height/3}`, width: 'auto'}} className="img-fluid" alt="MengeBeats Logo"/>*/}
                            
                        </animated.div>
                        
                    </div>
                </div>
                {/* <div className='row justify-content-center'>
                    <div className="col-8 justify-content-center">
                    <animated.div style={buttonProps} className="text-center">
                            <Button variant="light">
                                <Link
                                to="featured"
                                smooth={true}
                                duration={500}
                                >
                                    Featured
                                </Link>
                            </Button>
                        </animated.div>
                    </div>
                </div>
                <div className="container-fluid" id="featured">
                    <Featured />
                </div> */}
            </div>
        </>
    );
};

export default Main;
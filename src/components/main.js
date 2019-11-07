import React from 'react';
import '../css/bootstrap.min.css'
import logo from '../logo.png'
import '../css/main.css'
import { Button } from 'react-bootstrap'
import {Link} from 'react-scroll'
import {useSpring, animated} from 'react-spring';


const Main = (props) => {
    const springProps = useSpring({
        from: {
            opacity: 0,
            transform: 'translate3d(0,-500px,0)'
        },
        to: {
            opacity: props.mainview ? 1 : 0,
            transform: props.mainview ? 'translate3d(0,0,0)' : 'translate3d(0,-500px,0)'
        },
        delay: 100
    });
    return(

        <div id="section-one-wrapper" className="container-fluid">
            <animated.div style={springProps} className='container'>
                <div className='row'>
                    <div className="col align-self-center d-flex justify-content-center">
                        <img src={logo} alt="MengeBeats Logo"/>
                    </div>
                </div>
                <div className='row'>
                    <div className="col align-self-center d-flex justify-content-center">
                        <Button variant="dark" >
                            <Link
                                className="nav-link"
                                style={{pointerEvents: 'visibleFill'}}
                                to="section-two-wrapper"
                                spy={true}
                                smooth={true}
                                offset={-200}
                                duration= {500}
                            >
                                Down
                            </Link>
                        </Button>
                    </div>
                </div>
            </animated.div>
        </div>
    );
};

export default Main;
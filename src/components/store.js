import React from 'react';
import '../css/bootstrap.min.css';
import '../css/store.css'
import {useSpring, animated} from 'react-spring';
import useWindowDimensions from "../useWindowDimensions";
import { Link } from "react-scroll";
import { Button, Card, CardColumns } from "react-bootstrap"
import mp3 from './gettinby.mp3'
import pic from '../fruit.png'

const Store = (props) => {
    const { width } = useWindowDimensions();
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
    let toggle = false;
    return(
        <>
            <animated.div style={springProps} id="section-two-wrapper" className='container align-self-center'>
                <div className='row'>
                    <div className="col align-self-center d-flex justify-content-center">
                        <h1 className="modal-header">Featured</h1>

                    </div>
                </div>
                <div className='row' style={{maxWidth: width }}>
                    <div className="col align-self-center d-flex justify-content-center">
                        <CardColumns className="justify-content-center" style={{margin: '50px'}}>
                            <Card style={{margin: '50px 25px'}} className="text-center" bg="dark" onClick={()=>{toggle = !toggle; toggle ? document.getElementById("audio1").play() : document.getElementById("audio1").pause()}}>
                                <Card.Img variant="top" src={pic} />
                                <Card.Body className="blah">
                                    <Card.Text style={{color: 'white'}}>
                                        Lorem Ipsum
                                    </Card.Text>
                                    <audio id="audio1"><source src={mp3} type="audio/mpeg"/></audio>
                                </Card.Body>
                            </Card>
                            <Card style={{margin: '50px 25px'}} className="text-center" bg="dark" onClick={()=>{toggle = !toggle; toggle ? document.getElementById("audio1").play() : document.getElementById("audio1").pause()}}>
                                <Card.Img variant="top" src={pic} />
                                <Card.Body className="blah">
                                    <Card.Text style={{color: 'white'}}>
                                        Lorem Ipsum
                                    </Card.Text>
                                    <audio id="audio1"><source src={mp3} type="audio/mpeg"/></audio>
                                </Card.Body>
                            </Card>
                            <Card style={{margin: '50px 25px'}} className="text-center" bg="dark" onClick={()=>{toggle = !toggle; toggle ? document.getElementById("audio1").play() : document.getElementById("audio1").pause()}}>
                                <Card.Img variant="top" src={pic} />
                                <Card.Body className="blah">
                                    <Card.Text style={{color: 'white'}}>
                                        Lorem Ipsum
                                    </Card.Text>
                                    <audio id="audio1"><source src={mp3} type="audio/mpeg"/></audio>
                                </Card.Body>
                            </Card>
                            <Card style={{margin: '50px 25px'}} className="text-center" bg="dark" onClick={()=>{toggle = !toggle; toggle ? document.getElementById("audio1").play() : document.getElementById("audio1").pause()}}>
                                <Card.Img variant="top" src={pic} />
                                <Card.Body className="blah">
                                    <Card.Text style={{color: 'white'}}>
                                        Lorem Ipsum
                                    </Card.Text>
                                    <audio id="audio1"><source src={mp3} type="audio/mpeg"/></audio>
                                </Card.Body>
                            </Card>
                            <Card style={{margin: '50px 25px'}} className="text-center" bg="dark" onClick={()=>{toggle = !toggle; toggle ? document.getElementById("audio1").play() : document.getElementById("audio1").pause()}}>
                                <Card.Img variant="top" src={pic} />
                                <Card.Body className="blah">
                                    <Card.Text style={{color: 'white'}}>
                                        Lorem Ipsum
                                    </Card.Text>
                                    <audio id="audio1"><source src={mp3} type="audio/mpeg"/></audio>
                                </Card.Body>
                            </Card>
                        </CardColumns>
                    </div>
                </div>
                <div className='row'>
                    <div style={{marginTop: '10px'}} className="col align-self-center d-flex justify-content-center">
                        <Button variant="dark" style={{marginTop: '0'}}>
                            <Link
                                className="nav-link"
                                style={{pointerEvents: 'visibleFill'}}
                                to="section-three-wrapper"
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
        </>
    );
};

export default Store;
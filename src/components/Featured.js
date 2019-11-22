import React from 'react';
import '../css/bootstrap.min.css';
import '../css/store.css'
import {useSpring, animated} from 'react-spring';
import useWindowDimensions from "../useWindowDimensions";
import { Button, Card, CardColumns } from "react-bootstrap"
import mp3 from './gettinby.mp3'
import pic from '../fruit.png'
/*Implement AI to determine the color card to pick based on album art */

const Featured = (props) => {
    const { width } = useWindowDimensions();
    const springProps = useSpring({
        from: {
            opacity: 0,
            transform: 'translate3d(100vw,0,0)'
        },
        to: {
            opacity: 1,
            transform: 'translate3d(0,0,0)'
        },
        delay: 100
    });
    let toggle = false;
    return(
            <div  className='row flex-fill d-flex justify-content-start' >
                <div className="col text-center  align-self-center " style={{marginBottom: '7rem'}} >
                     <animated.div style={springProps}>
                         <div className="jumbotron">
                             <CardColumns ref={props.heightRef}  >
                        <Card className="text-center" bg="dark" onClick={()=>{
                            toggle = !toggle;
                            toggle ? document.getElementById("audio1").play() : document.getElementById("audio1").pause()
                        }}>
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
                    </animated.div>
                </div>
            </div>
    );
};

export default Featured;
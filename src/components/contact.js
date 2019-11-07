import React from 'react';
import '../css/bootstrap.min.css'
import { Form, Button } from 'react-bootstrap'
import '../css/contact.css'
import {useSpring, animated} from 'react-spring';
import { Link } from 'react-scroll'

const Contact = (props) => {
    const springProps = useSpring({
        from: {
            opacity: 0,
            transform: 'translate3d(-100vw,0,0)'
        },
        to: {
            opacity: props.contactview ? 1 : 0,
            transform: props.contactview ? 'translate3d(0,0,0)' : 'translate3d(-100vw,0,0)'
        },
        delay: 100
    });
    return(
        <>
            <animated.div id="section-three-wrapper" style={springProps}>
                <div className="row">
                    <div className="col align-self-center d-flex justify-content-center">
                        <Form>
                        <Form.Group>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type='email' placeholder='Enter Email' />
                            <Form.Text className='text-warning'>
                                We'll never share your personal information with anyone.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type='text' placeholder='Enter Name' />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows="3" placeholder='Message'/>
                        </Form.Group>
                        <Button variant="dark" type="submit">
                            Submit
                        </Button>
                    </Form>
                    </div>
                </div>
                <div className="row" style={{height: '100px'}}/>
                <div className="row">
                    <div className="col align-self-center d-flex justify-content-center">
                        <Button variant="dark" style={{marginTop: '0'}}>
                            <Link
                                className="nav-link"
                                style={{pointerEvents: 'visibleFill'}}
                                to="section-one-wrapper"
                                spy={true}
                                smooth={true}
                                offset={-200}
                                duration= {500}
                            >
                                Top
                            </Link>
                        </Button>
                    </div>
                </div>
            </animated.div>
        </>
    );
};
export default Contact;
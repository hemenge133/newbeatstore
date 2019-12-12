import React from 'react';
import '../../css/bootstrap.min.css'
import { Form, Button } from 'react-bootstrap'
import '../../css/contact.css'
import {useSpring, animated} from 'react-spring';

const Contact = (props) => {
    const springProps = useSpring({
        from: {
            opacity: 0,
            transform: 'translate3d(-100vw,0,0)'
        },
        to: {
            opacity: 1,
            transform: 'translate3d(0,0,0)'
        },
        delay: 100
    });
    const fadeProps = useSpring({
        from: {
            opacity: 0
        },
        to: {
            opacity: 1
        },
        delay: 100
    });

    return(
        <div className="container-fluid">
            <div className="row justify-content-between" style={{marginTop: '3rem'}}>
                <div className="col-1 col-sm-2 col-md-3 col-lg-4" />
                <div className="col align-content-center" style={{marginTop: "10rem"}}>
                    <animated.div style={springProps} className="jumbotron">
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
                                <Form.Control as="textarea" rows="4" placeholder='Message'/>
                            </Form.Group>
                            <Button variant="dark" type="submit">
                            Submit
                            </Button>
                        </Form>
                    </animated.div>
                </div>
                <div className="col-1 col-sm-2 col-md-3 col-lg-4" />
            </div>
        </div>
    );
};
export default Contact;
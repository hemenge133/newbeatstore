import React from 'react';
import '../css/bootstrap.min.css'
import { Form, Button } from 'react-bootstrap'
import '../css/contact.css'
import {useSpring, animated} from 'react-spring';
import { PlayButton, Timer} from 'react-soundplayer/components';

const Contact = () => {
    const props = useSpring({
        from: {
            opacity: 0,
            transform: 'translate3d(-100%,0,0)'
        },
        to: {
            opacity: 1,
            transform: 'translate3d(0,0,0)'
        }
    });
    return(
        <>
            <animated.div id="section-three-wrapper" style={props} className="row">
                <div className="col align-self-center d-flex justify-content-center">
                    <Form>
                        <Form.Group>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type='email' placeholder='Enter Email' />
                            <Form.Text className='text-muted'>
                                We'll never share your personal information with anyone.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type='text' placeholder='Enter Name' />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </animated.div>
        </>
    );
};
export default Contact;
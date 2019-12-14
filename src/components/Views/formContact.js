import React from 'react'
import { Form, Button } from 'react-bootstrap'
import Console from './Console'

export default (props) => {
    if(!props.validated){
        return(<Form onSubmit={e => props.handleSubmit(e)}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={(e) => props.handleChange(e)}/>
                <Form.Text className="text-muted">
                    {`${props.validated}`}
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={(e) => props.handleChange(e)}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>)
    }
    else{
        return(<Console />)
    }
}
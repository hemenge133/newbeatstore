import React, { Component } from 'react'
import FormContact from './formContact'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'



class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            validated: false,
            form: {
                email: '',
                password: '',

            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = (event) => {
        let fieldName = event.target.type;
        let fleldVal = event.target.value;
        this.setState({form: {...this.state.form, [fieldName]: fleldVal}});
    };


    handleSubmit = async (event) => {
        event.preventDefault();
        await fetch('/validate',{
            method: 'POST',
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrer: 'no-referrer', // no-referrer, *client
            body: JSON.stringify({
                email: this.state.form.email,
                password: this.state.form.password,
            })
        })
            .then(res => res.json())
            .then(res => {
                if(res.result){
                    this.setState({validated: true});
                }
            })
            .catch(e => console.log('error: ',e))
    };
    render(){
        return (
            <FormContact validated={this.state.validated} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        )
    }

}

export default Login;
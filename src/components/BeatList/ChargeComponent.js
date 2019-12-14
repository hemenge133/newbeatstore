import React, {Component} from 'react'
import { Button } from 'react-bootstrap'
import {CardElement, injectStripe} from 'react-stripe-elements';
import axios from 'axios'

class ChargeComponent extends Component{
    constructor(props){
        super(props);
    }
   submitHandle = async (ev) => {
       await this.props.stripe.createToken({type: 'card'})
       .then(token => {
               axios.post('/charge', {
                   token: token,
                   amount: this.props.amount
               })
               .catch(e => console.log(e))
           }
       )
    };
    render(){
        return(
            <div className="col-8 mx-auto">
                <CardElement/>
                <Button variant="dark" onClick={this.submitHandle}>Purchase</Button>
            </div>
        );
    }
};

export default injectStripe(ChargeComponent);
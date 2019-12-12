import React, {Component} from 'react'
import {CardElement, injectStripe} from 'react-stripe-elements';
import axios from 'axios'

class ChargeComponent extends Component{
    constructor(props){
        super(props);

    }
   submitHandle = async (ev) => {
       const cardElement = this.props.elements.getElement('card');
       // this.props.stripe
       //     .createPaymentMethod({
       //         type: 'card',
       //         card: cardElement,
       //         billing_details: {name: 'Jenny Rosen'},
       //     })
       //     .then(({paymentMethod}) => {
       //     console.log('Received Stripe PaymentMethod:', paymentMethod);
       // });
       console.log("submit")
       await this.props.stripe.createToken({type: 'card'})
           .then(token => {
                   axios.post('/charge', {
                       token: token
                   })
                   .then(response => {
                       console.log(response)
                   })
                   .catch(e => console.log(e))
               }
           )



    };
    render(){
        return(
            <div className="col-8 mx-auto">
                <CardElement/>
                <button onClick={this.submitHandle}>Purchase</button>
            </div>
        );
    }

};

export default injectStripe(ChargeComponent);
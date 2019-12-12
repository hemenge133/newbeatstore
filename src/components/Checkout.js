import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios'

export default class Checkout extends React.Component {
    onToken = (token, addresses) => {
        // let { token } = await this.props.stripe.createToken({name: "Name"})

    };

    render() {
        return (
            <StripeCheckout
                stripeKey="pk_test_ApOkCvsuLGebSlt21iA9k37j00boT8Crov"
                amount= {2000}
                locale="auto"
                token={this.onToken}
            />
        )
    }
}

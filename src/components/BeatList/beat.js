import React from 'react'
import { StripeProvider, Elements } from 'react-stripe-elements'

import ChargeComponent from './ChargeComponent.js'

 const Beat = (props) => {
    console.log(props.myFile);
    if(props.myFile) {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-8 mx-auto">
                        <div className="jumbotron">
                            <h1>Beat Title</h1>
                            <h2>
                                {props.myFile.title}
                            </h2>
                        </div>
                    </div>
                    <div className="col-6 mx-auto">
                        <div className="jumbotron">
                            <img src={`/images/${props.myFile.art}`}/>
                        </div>
                    </div>
                </div>
                <div className="row">

                    <StripeProvider apiKey='pk_test_ApOkCvsuLGebSlt21iA9k37j00boT8Crov'>
                        <div className="example">
                            <h1>React Stripe Elements Example</h1>
                            <Elements>
                                <ChargeComponent />
                            </Elements>
                        </div>
                    </StripeProvider>
                </div>
            </div>
        )
    }
    else {
        return(
            <div>
                <h1>Loading</h1>
            </div>
        )
    }
};
export default Beat;
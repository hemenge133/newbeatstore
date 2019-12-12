const stripe = require('stripe')('sk_test_7a0xYCromHnLMkac11RMYBqe00NxIBLe0t');

const Striper = async (req, res) => {
    try {
        const token = req.body.token.token.id;
        console.log(req.body.token.token.id);
        const charge = await stripe.charges.create({
            amount: 2000,
            currency: 'usd',
            source: token,
        });

        if (!charge) throw new Error('charge unsuccessful')

        res.status(200).send({
            message: 'charge posted successfully',
            charge
        })
    }
    catch (error) {
        return error;
    }

    };

module.exports = Striper;
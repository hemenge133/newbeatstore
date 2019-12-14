const path = require('path');
const dotenv = require('dotenv').config({path: path.resolve(__dirname,'./.env')});
const stripe = require('stripe')(process.env.STRIPE_SK);

const Striper = async (req, res) => {
    try {
        const token = req.body.token.token.id;
        const amt = req.body.amount * 100;
        const charge = await stripe.charges.create({
            amount: amt,
            currency: 'usd',
            source: token,
        });

        if (!charge) throw new Error('charge unsuccessful');

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
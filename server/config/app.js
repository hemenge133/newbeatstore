let dotenv = require('dotenv'),
    path = require('path')
    express = require('./express');

module.exports = () => {
    dotenv.config({path: path.resolve(__dirname,'./env')});
    let app = express.init();
    app.listen(process.env.PORT, () => {
        console.log('Listening on: ', process.env.PORT);
    });
};

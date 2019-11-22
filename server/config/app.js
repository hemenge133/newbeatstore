let config = require('./config'),
    express = require('./express');

module.exports = () => {
    let app = express.init();
    app.listen(config.port, () => {
        console.log('Listening on: ', config.port);
    });
};

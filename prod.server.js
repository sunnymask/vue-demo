let express = require('express');
let config = require('./config/index');
// let axios = require('axios');
let app = express();
let apiRoutes = express.Router();
app.use('/api', apiRoutes);
app.use(express.static('./dist'));

let port = process.env.PORT || config.build.port;
module.exports = app.listen(port, (err) => {
    if (err){
        console.error(err);
        return;
    }
    console.log('Listening at: http://localhost:'+port+'\n');
})

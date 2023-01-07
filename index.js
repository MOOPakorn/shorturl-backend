let express = require('express'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    dbConfig = require('./database/db');

// Express Route
const dataRoute = require('./routes/data.route');

// Connecting MongDB Database
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
    useNewUrlParser: true,
    // useUnifiedTopology: true
}).then(() => {
    console.log('Database successfully connected');
},
    error => {
        console.log('Could not connect to database: ' + error)
    }
)

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(cors());
app.use(dataRoute);

// PORT
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
    console.log('Connected to port ' + port)
})
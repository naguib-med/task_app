const mongoose = require('mongoose');
const dbURI = 'mongodb://admin:n010203@localhost/TaskDB?authSource=admin';
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

mongoose.set('strictQuery', true);

mongoose.connect(dbURI, options, (err) => {
    if (err) {
        console.log('DB connection failed');
    } else {
        console.log('DB connection success');
    }
});

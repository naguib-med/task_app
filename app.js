const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
require('./models/dbConfig');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const getsRouter = require('./routes/getsController');
const postsRouter = require('./routes/postsController');
const putsRouter = require('./routes/putsController');
const deletesRouter = require('./routes/deletesController');

app.use('/api/tasks', postsRouter);
app.use('/api/tasks', getsRouter);
app.use('/api/tasks', putsRouter);
app.use('/api/tasks', deletesRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
const express = require('express');
const mongoose = require('mongoose');
const Product = require('./model');
const cors = require('cors')

const app = express();
app.use(cors())

app.use(express.json());

mongoose.connect('mongodb+srv://adbsr27:adarsh123@cluster0.p7xj6wt.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then((data) => {
    console.log(`Connected to MongoDB ${data.connection.host}`);
}).catch((err) => {
    console.log(err);
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});

app.post('/api/prod', async (req, res) => {
    const { id, name, description, cost } = req.body;
    const user = await Product.create({ id, name, description, cost });
    res.status(201).json(user);
})
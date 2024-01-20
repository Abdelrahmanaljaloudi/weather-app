const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');

const app = express();


app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://abdelrah_mnaljaloudi:BDtWuP8McwJaTQwO@atlascluster.am3kntk.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


app.get('/', (req, res) => {
    // Handle the request for the root path here
    res.send('Hello from the server!');
});
app.use(bodyParser.json());

app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        await client.connect();
        const database = client.db('your-database-name'); // Replace with your actual database name
        const collection = database.collection('your-collection-name'); // Replace with your actual collection name

        // Query the collection for the user
        const user = await collection.findOne({ email, password });

        if (user) {
            // Successful login
            res.json({ success: true, user });
        } else {
            // Invalid credentials
            res.status(401).json({ success: false, message: 'Invalid credentials' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    } finally {
        await client.close();
    }
});


app.listen(9000, () => {
    console.log(`Server is running on port 9000`);
});

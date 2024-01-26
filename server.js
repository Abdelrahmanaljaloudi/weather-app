const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(cors());
app.use(express.json());

const url = "mongodb+srv://abdelrah_mnaljaloudi:BDtWuP8McwJaTQwO@atlascluster.am3kntk.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);


app.use(express.static(path.join(__dirname, 'build')));

// Define the root route
app.get('/', function (req, res) {

});


app.get('/login', async (req, res) => {
  const { email, password } = req.body;
  
  try {
    await client.connect();
    const database = client.db('todo');
    const collection = database.collection('Item');

    const user = await collection.findOne({ email, password });

    if (user) {
      res.json({ success: true, user });
    } else {
      res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  } finally {
    await client.close();
  }
});

// Catch-all route to serve the LoginForm.js file for any other route
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'src', 'components', 'LoginForm.js'));
});

app.listen(3000, () => {
  console.log(`Server is running on port 9000`);
});

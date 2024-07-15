const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path'); // Import the path module
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Allow cross-origin requests

// Serve static files from the root directory
app.use(express.static(path.join(__dirname)));

// Endpoint to serve index.html
app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Endpoint to redirect to wheel.html
// app.get('/redirect-to-wheel', (req, res) => {
//     res.redirect('/wheel/wheel.html');
// });

// Dummy user wallet (in a real application, this would be stored in a database)
let userWallet = { points: 0 };

// Endpoint to update wallet
app.post('/update_wallet', (req, res) => {
    const reward = req.body.reward;
    userWallet.points += reward;
    res.json({ message: 'Wallet updated successfully', wallet: userWallet });
});

// Endpoint to get wallet points
app.get('/get_wallet', (req, res) => {
    res.json({ wallet: userWallet });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

const express = require('express');
const cors = require('cors');


const app = express();
const port = 5000;


app.use(cors());
app.use(express.json());


const users = [
    { username: 'admin', password: 'admin123'},
    { username: 'user', password: 'password'},
];


app.post('/login',(req,res) => {
    const { username, password } = req.body;


    const user = users.find(u => u.username === username && u.password === password);

    if(user) {
        res.status(200).json({ message: 'Login successful'});
    } else {
        res.status(401).json({ message: 'Invalid username or password'});
    }
});

app.listen(port, () => {
    console.log('Server running at http://localhost:${port}');
});
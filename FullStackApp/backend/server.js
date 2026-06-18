import express from 'express';
import 'dotenv/config';

const App = express();
const port = process.env.PORT || 4000;

const jokes = [
    {
        id: 1,
        title: "joke1",
        description: "Web Development is dead"
    },
    {
        id: 2,
        title: "joke2",
        description: "MERN Stack is dead"
    }
]

App.get("/", (req, res) => {
    res.json("<h1>server is running</h1>");
})

App.get("/api/jokes", (req, res) => {
    res.send(jokes);
})

App.listen(port, () => {
    console.log(`server is listening on port ${port}`);
})
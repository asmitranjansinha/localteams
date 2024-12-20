import bodyParser from 'body-parser';
import express from 'express';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT: string | number = 8080;

app.get('/', (req, res) => {
    res.send("Connected to localTeams server successfully!");
})

app.listen(PORT, '0.0.0.0', () => {
    console.log(`server is running on http://192.168.1.76:${PORT}`);
});
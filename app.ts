import bodyParser from 'body-parser';
import express from 'express';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT: string | number = 8080;

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
});
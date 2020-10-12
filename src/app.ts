import { Request, Response, response } from 'express';
import express from 'express';
const fetch = require('node-fetch');

const app = express();

app.get('/', (req: Request, res: Response) => {
    res.send('hello');
});

app.get('/articles', async (req: Request, res: Response) => {
    const nyt_url = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.NYT_API_KEY}`
    const fetch_response = await fetch(nyt_url);
    const json = await fetch_response.json();
    console.log(response.json(json));
});

const PORT = 5000;

app.listen(PORT, () => console.log('server started on ', PORT));

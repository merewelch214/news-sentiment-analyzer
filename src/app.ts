import express, { Request, Response } from 'express';
import fetch from 'node-fetch';
import cheerio from 'cheerio';

const PORT: Number = 3001;

const app = express();

app.get('/nyt', async (req: Request, res: Response) => {
    const response = await fetch('https://nytimes.com/');
    const body = await response.text();
    const $ = cheerio.load(body)
    const nyt_headlines = $('h2').text();
    res.json(nyt_headlines);
})

app.get('/wsj', async (req: Request, res: Response) => {
    const response = await fetch('https://wsj.com/');
    const body = await response.text();
    const $ = cheerio.load(body)
    const wsj_headlines = $('h3').text();
    res.json(wsj_headlines);
})

app.get('/wapo', async (req: Request, res: Response) => {
    const response = await fetch('https://www.washingtonpost.com//');
    const body = await response.text();
    const $ = cheerio.load(body)
    const wapo_headlines = $('span').text();
    res.json(wapo_headlines);
})

app.listen(PORT, () => console.log('server started on ', PORT));

import express, { Request, Response } from 'express';
import fetch from 'node-fetch';
import cheerio from 'cheerio';
const News = require('./models/News'); 
const router = express.Router();

router.get('/nyt', async (req: Request, res: Response) => {
    const response = await fetch('https://nytimes.com/');
    const body = await response.text();
    const $ = cheerio.load(body)
    const nyt_headlines = $('h2').text();
    const news = new News({
		source: 'New York Times',
		date: Date.now(),
        content: nyt_headlines,
        score: ''
	})
	await news.save()
    res.send(news)
})

// router.get('/wsj', async (req: Request, res: Response) => {
//     const response = await fetch('https://wsj.com/');
//     const body = await response.text();
//     const $ = cheerio.load(body)
//     const wsj_headlines = $('h3').text();
//     res.json(wsj_headlines);
// })

// router.get('/wapo', async (req: Request, res: Response) => {
//     const response = await fetch('https://www.washingtonpost.com//');
//     const body = await response.text();
//     const $ = cheerio.load(body)
//     const wapo_headlines = $('span').text();
//     res.json(wapo_headlines);
// })

module.exports = router
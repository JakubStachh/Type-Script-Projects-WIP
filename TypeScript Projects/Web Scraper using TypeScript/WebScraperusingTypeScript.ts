import axios from "axios";
import * as cheerio from "cheerio";

async function getHeadlines(url: string) {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    $("h3").each((_, element) => console.log($(element).text()));
}

getHeadlines("https://www.bbc.com");

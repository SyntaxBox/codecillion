// utils/fetchWebsiteMetadata.js
import fetch from "node-fetch";
import cheerio from "cheerio";

export async function fetchWebsiteMetadata(
  url: string
): Promise<{ title: string } | null> {
  try {
    // Fetch the HTML content of the website
    const response = await fetch(url);
    const html = await response.text();

    // Use cheerio to parse the HTML
    const $ = cheerio.load(html);

    // Extract the title and description
    const title = $("head title").text();
    // const description = $('meta[name="description"]').attr("content");

    return { title };
  } catch (error) {
    console.error("Error fetching website metadata:", error);
    return null;
  }
}

export default fetchWebsiteMetadata;

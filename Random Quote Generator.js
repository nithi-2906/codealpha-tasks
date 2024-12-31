
const appHtml = `
  <div style="font-family: Arial, sans-serif; text-align: center; margin-top: 50px;">
    <h1>Random Quote Generator</h1>
    <div id="quote-box" style="margin: 20px; font-size: 1.5em;">
      <p id="quote" style="font-style: italic; color: #555;">"Click the button to generate a quote!"</p>
      <p id="author" style="font-weight: bold; color: #333;"></p>
    </div>
    <button id="new-quote" style="padding: 10px 20px; font-size: 1em; cursor: pointer;">New Quote</button>
    <br /><br />
    <button id="tweet-quote" style="padding: 10px 20px; font-size: 1em; cursor: pointer;">Share on Twitter</button>
  </div>
`;

document.body.innerHTML = appHtml;


const quotes = [
  { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
  { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { text: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
  { text: "If life were predictable it would cease to be life, and be without flavor.", author: "Eleanor Roosevelt" },
  { text: "If you look at what you have in life, you'll always have more.", author: "Oprah Winfrey" },
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
];


const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const newQuoteButton = document.getElementById("new-quote");
const tweetButton = document.getElementById("tweet-quote");

// Function to generate a random quote
function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  quoteElement.textContent = `"${quote.text}"`;
  authorElement.textContent = `- ${quote.author}`;
}

// Function to share on Twitter
function shareOnTwitter() {
  const quoteText = quoteElement.textContent;
  const authorText = authorElement.textContent;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quoteText + " " + authorText)}`;
  window.open(twitterUrl, "_blank");
}

// Event listeners
newQuoteButton.addEventListener("click", generateRandomQuote);
tweetButton.addEventListener("click", shareOnTwitter);

// Generate an initial quote
generateRandomQuote();

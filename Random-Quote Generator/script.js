const quotes = [
    "The best way to predict the future is to create it.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "Believe you can and you're halfway there.",
    "Your time is limited, so don’t waste it living someone else’s life.",
    "Don’t watch the clock; do what it does. Keep going."
];

document.getElementById("new-quote").addEventListener("click", function () {
    const quoteElement = document.getElementById("quote");
    const randomIndex = Math.floor(Math.random() * quotes.length);
    
    // Add fade-out effect before changing the quote
    quoteElement.style.opacity = 0;
    
    setTimeout(() => {
        quoteElement.textContent = quotes[randomIndex];
        quoteElement.style.opacity = 1; // Fade-in effect
    }, 400);
});

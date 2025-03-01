const quotes = [
    "The best way to predict the future is to create it.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "Believe you can and you're halfway there.",
    "Your time is limited, so don’t waste it living someone else’s life.",
    "Don’t watch the clock; do what it does. Keep going."
];

// Change Quote on Button Click
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

// Copy Quote to Clipboard
document.getElementById("copy-quote").addEventListener("click", function () {
    const quoteText = document.getElementById("quote").textContent;
    navigator.clipboard.writeText(quoteText).then(() => {
        const copyMsg = document.getElementById("copy-msg");
        copyMsg.style.display = "inline";  // Show "Copied!" message
        setTimeout(() => {
            copyMsg.style.display = "none"; // Hide after 1.5 sec
        }, 1500);
    });
});


const quotes = [
  "The best way to predict the future is to invent it. — Alan Kay",
  "First, solve the problem. Then, write the code. — John Johnson",
  "Talk is cheap. Show me the code. — Linus Torvalds",
  "Programs must be written for people to read. — Harold Abelson",
  "Code is like humor. When you have to explain it, it’s bad. — Cory House",
  "Simplicity is the soul of efficiency. — Austin Freeman",
  "Make it work, make it right, make it fast. — Kent Beck",
  "Any fool can write code that a computer can understand. — Martin Fowler",
  "The only way to learn a new programming language is by writing programs. — Dennis Ritchie",
  "Experience is the name everyone gives to their mistakes. — Oscar Wilde",
  "Stay hungry, stay foolish. — Steve Jobs",
  "The secret of getting ahead is getting started. — Mark Twain",
  "It always seems impossible until it’s done. — Nelson Mandela",
  "Success is not final, failure is not fatal. — Winston Churchill",
  "Great things are not done by impulse, but by a series of small things brought together.",
  "Dream big. Start small. Act now.",
  "Hard work beats talent when talent doesn’t work hard.",
  "Consistency is more important than perfection.",
  "Don’t watch the clock; do what it does. Keep going. — Sam Levenson",
  "Believe you can and you’re halfway there. — Theodore Roosevelt"
];

let lastIndex = -1;

export function getRandomQuote() {
  let index;

  do {
    index = Math.floor(Math.random() * quotes.length);
  } while (index === lastIndex);

  lastIndex = index;

  return quotes[index];
}

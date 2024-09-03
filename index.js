var quotes = [
  '<p>"Be who you are and say what you feel, because those who mind don\'t matter, and those who matter don\'t mind."</p> <p>"― Maya Angelou"</p>',
  "<p>\"You've gotta dance like there's nobody watching Love like you'll never be hurt Sing like there's nobody listening And live like it's heaven on earth.\"</p> <p>\"― Elbert Hubbard\"</p>",
  '<p>"If you want to know what a man\'s like, take a good look at how he treats his inferiors not his equals."</p> <p>"― Oscar Wilde"</p>',
  '<p>"Don’t walk in front of me… I may not follow Don’t walk behind me… I may not lead Walk beside me… just be my friend"</p> <p>"― C.S. Lewis, The Four Loves"</p>',
  '<p>"I\'ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel."</p> <p>"― Mahatma Gandhi"</p>',
];

function newQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  document.getElementById("quoteDispaly").innerHTML = quotes[randomNumber];
}

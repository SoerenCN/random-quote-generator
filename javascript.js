const quotes = 
[
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
    "Most people are other people.Their thoughts are someone else ’s opinions, their lives a mimicry, their passions a quotation. - Oscar Wilde",
    "Our time is limited, so don’t waste it living someone else ’s life. - Steve Jobs",
    "Be who you are and say what you feel, because those who mind don’t matter, and those who matter don’t mind. - Bernard Baruch",
    "Live life as though nobody is watching, and express yourself as though everyone is listening. - Nelson Mandela",
    "The individual has always had to struggle to keep from being overwhelmed by the tribe.If you try it, you will be lonely often, and sometimes frightened.But no price is too high to pay for the privilege of owning yourself. – Friedrich Nietzsche",
    "You wouldn’t worry so much about what others think of you if you realized how seldom they do. - Eleanor Roosevelt",
    "Always be a first - rate version of yourself and not a second - rate version of someone else. - Judy Garland",
    "I think the reward for conformity is that everyone likes you except yourself. – Rita Mae Brown",
    "Be yourself, but always your better self. – Karl Maeser"
]

let newQuote = function () {
    let randomNum = Math.floor(Math.random() * (quotes.length))
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNum]
    return randomNum  
}

const randomQuote = newQuote()
console.log(randomQuote)









// let randomQuoteGenerator = function () {
//     let min = 1
//     let max = 10
//     let randomNum = Math.floor(Math.random() * (max - min + 1) + min)
//     return randomNum    
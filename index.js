const api_url = "https://api.quotable.io/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");


async function getquote(url) {
const response = await fetch(url);    
var data = await response.json()
quote.innerHTML = data.content
author.innerHTML = data.author


}

function post(){
    window.open("https://www.linkedin.com/feed/"
        , "Posting", "width=600, height=600")

}

getquote(api_url);
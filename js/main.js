var quotes = 
[
    {quote : "“Be yourself; everyone else is already taken.”" , name : "-- Oscar Wilde"},
    {quote : "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”" , name : "--  Marilyn Monroe"},
    {quote : "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”" , name : "-- Albert Einstein"},
    {quote : "“So many books, so little time.”" , name : "-- Frank Zappa"},
    {quote : "“A room without books is like a body without a soul.”" , name : "-- Marcus Tullius Cicero"},
    {quote : "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”" , name : "-- Bernard M. Baruch"}
]

function sayquotes()
{
    var i = Math.round(Math.random() * (quotes.length - 1));
    document.getElementById("showquotes").innerHTML = `
    <div class="card mt-3 mb-5 border border-2 border-black w-50 mx-auto py-5 position-relative" style="width: 100%;">
        <div class="quote">
            <div class="icon">
                <i class="fa-solid fa-quote-right"></i>
            </div>
        </div>
        <div class="card-body">
            <p class="card-text">${quotes[i].quote}</p>
            <p>${quotes[i].name}</p>
        </div>
    </div> `
}
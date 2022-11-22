const api = "https://type.fit/api/quotes";
let quotes = "";
const data = document.getElementById("quotes");
const author = document.getElementById("author");
const newQ = document.getElementById("newQ");
const getNewQuotes=()=>{
    let rnum = Math.floor(Math.random()*1000);
    // console.log(quotes[rnum].author);
    data.innerText = `${quotes[rnum].text}`;
    quotes[rnum].author ==null ? (author.innerText="unKnown")
    : (author.innerText = `${quotes[rnum].author}`);

}
const getQuotes = async () => {
  try {
    const response = await fetch(api);
    quotes = await response.json();
    // console.log(quotes);
    getNewQuotes();
  } catch (err) {
    console.log(err);
  }
};
newQ.addEventListener("click",getNewQuotes);
getQuotes();

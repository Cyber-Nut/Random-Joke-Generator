const ques = document.querySelector("#ques");
const ans = document.querySelector("#ans");
const generateBtn = document.querySelector(".generateBtn");
const URL = "https://official-joke-api.appspot.com/random_joke";


generateBtn.addEventListener("click", async ()=>{
    let response = await fetch(URL);
    console.log("hello");
    console.log(response);

    let data = await response.json();
    console.log(data);

    ques.innerText = data.setup;
    ans.innerText = data.punchline;
});
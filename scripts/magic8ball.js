let answer = document.getElementById("answer");
let question = document.getElementById("question");
let enterBtn = document.getElementById("enterBtn");

async function Magic8Ball(userQuestion){
    const promise = await fetch(`https://chinsallforone.azurewebsites.net/Magic8Ball/Magic8Ball/${userQuestion}`);
    const data = await promise.text();
    return data;
}

enterBtn.addEventListener('click', async function(e){
    output = await Magic8Ball(question.value)
    answer.textContent = output;
})


let numOutput = document.getElementById("numOutput");
let num = document.getElementById("num");
let enterBtn = document.getElementById("enterBtn");

async function OddOrEven(num1){
    const promise = await fetch(`https://chinsallforone.azurewebsites.net/OddOrEven/OddOrEven/${num1}`);
    const data = await promise.text();
    return data;
}

enterBtn.addEventListener('click', async function(e){
    output = await OddOrEven (num.value)
    numOutput.textContent = output;
})


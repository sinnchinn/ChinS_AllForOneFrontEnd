let reverseOutput = document.getElementById("reverseOutput");
let alphaNums = document.getElementById("alphaNums");
let enterBtn = document.getElementById("enterBtn");

async function ReverseAlphaNums(userInput){
    const promise = await fetch(`https://chinsallforone.azurewebsites.net/ReverseItAlphaNum/ReverseItPt1/${userInput}`);
    const data = await promise.text();
    return data;
}

enterBtn.addEventListener('click', async function(e){
    output = await ReverseAlphaNums(alphaNums.value)
    reverseOutput.textContent = output;
})


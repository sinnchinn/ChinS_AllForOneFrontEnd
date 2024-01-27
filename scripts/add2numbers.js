let numOutput = document.getElementById("numOutput");
let numOne = document.getElementById("numOne");
let numTwo = document.getElementById("numTwo");
let addBtn = document.getElementById("addBtn");

async function AddNums(firstNumber, secondNumber){
    const promise = await fetch(`https://chinsallforone.azurewebsites.net/AddNumbers/AddNumbers/${firstNumber}/${secondNumber}`);
    const data = await promise.text();
    return data;
}

addBtn.addEventListener('click', async function(e){
    test = await AddNums (numOne.value, numTwo.value)
    numOutput.textContent = test;
    numOne.value = '';
    numTwo.value = '';
})


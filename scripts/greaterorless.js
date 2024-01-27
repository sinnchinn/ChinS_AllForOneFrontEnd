let greaterOrLessOutput = document.getElementById("greaterOrLessOutput");
let numOne = document.getElementById("numOne");
let numTwo = document.getElementById("numTwo");
let enterBtn = document.getElementById("enterBtn");

async function AddNums(num1, num2){
    const promise = await fetch(`https://chinsallforone.azurewebsites.net/GreaterOrLess/GreaterOrLess/${num1}/${num2}`);
    const data = await promise.text();
    return data;
}

enterBtn.addEventListener('click', async function(e){
    output = await AddNums(numOne.value, numTwo.value)
    greaterOrLessOutput.textContent = output;
    numOne.value = '';
    numTwo.value = '';
});


let madlibOutput = document.getElementById("madlibOutput");
let yourName = document.getElementById("yourName")
let adjOne = document.getElementById("adjOne");
let verbOne = document.getElementById("verbOne");
let nounOne = document.getElementById("nounOne");
let verbTwo = document.getElementById("verbTwo");
let nounTwo = document.getElementById("nounTwo");
let adjTwo = document.getElementById("adjTwo");
let adjThree = document.getElementById("adjThree");
let nounThree = document.getElementById("nounThree");
let anotherName = document.getElementById("anotherName");
let adjFour = document.getElementById("adjFour");
let enterBtn = document.getElementById("enterBtn");



async function MadLibs(userName, adj1, verb1, noun1, verb2, noun2, adj2, adj3, noun3, name2, adj4){
    const promise = await fetch(`https://chinsallforone.azurewebsites.net/MadLibs/MadLibs/${userName}/${adj1}/${verb1}/${noun1}/${verb2}/${noun2}/${adj2}/${adj3}/${noun3}/${name2}/${adj4}`);
    const data = await promise.text();
    console.log(data);
    return data;
}

enterBtn.addEventListener('click', async function(e){
    output = await MadLibs(yourName.value, adjOne.value, verbOne.value, nounOne.value, verbTwo.value, nounTwo.value, adjTwo.value, adjThree.value, nounThree.value, anotherName.value, adjFour.value) 
    madlibOutput.textContent = output;
    yourName.value = '';
    adjOne.value = '';
    verbOne.value = '';
    nounOne.value = '';
    verbTwo.value = '';
    nounTwo.value = '';
    adjTwo.value = '';
    adjThree.value = '';
    nounThree.value = '';
    anotherName.value = '';
    adjFour.value = '';
});


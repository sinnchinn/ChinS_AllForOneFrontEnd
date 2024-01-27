let nameTimeOutput = document.getElementById("nameTimeOutput");
let yourName = document.getElementById("yourName");
let yourTime = document.getElementById("yourTime");
let enterBtn = document.getElementById("enterBtn");

async function AddNums(userName, wakeUpTime){
    const promise = await fetch(`https://chinsallforone.azurewebsites.net//NameAndTime/TwoQuestions/${userName}, ${wakeUpTime}`);
    const data = await promise.text();
    console.log(data);
    return data;
}

enterBtn.addEventListener('click', async function(e){
    output = await AddNums(yourName.value, yourTime.value)
    nameTimeOutput.textContent = output;
});


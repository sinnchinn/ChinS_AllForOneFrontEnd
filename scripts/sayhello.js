
let nameOutput = document.getElementById("nameOutput");
let userName = document.getElementById("userName");
let enterBtn = document.getElementById("enterBtn");

async function SayHello(userName){
    const promise = await fetch(`https://chinsallforone.azurewebsites.net/SayHello/AddName/${userName}`);
    const data = await promise.text();
    return data;
}

enterBtn.addEventListener('click', async function(e){
    output = await SayHello(userName.value)
    nameOutput.textContent = output;
    userName.value = '';
})


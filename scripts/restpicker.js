let foodOutput = document.getElementById("foodOutput");
let categories = document.getElementById("categories");
let enterBtn = document.getElementById("enterBtn");

async function WhichRestaurant(input){
    const promise = await fetch(`https://chinsallforone.azurewebsites.net/RestPicker/WhichRestaurant/${input}`);
    const data = await promise.text();
    return data;
}

enterBtn.addEventListener('click', async function(e){
    output = await WhichRestaurant(categories.value)
    foodOutput.textContent = output;
})


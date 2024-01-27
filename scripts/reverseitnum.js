let reverseOutput = document.getElementById("reverseOutput");
let nums = document.getElementById("nums");
let enterBtn = document.getElementById("enterBtn");

async function ReverseNums(nums1){
    const promise = await fetch(`https://chinsallforone.azurewebsites.net/ReverseItNum/ReverseItPt2/${nums1}`);
    const data = await promise.text();
    return data;
}

enterBtn.addEventListener('click', async function(e){
    output = await ReverseNums (nums.value)
    reverseOutput.textContent = output;
})


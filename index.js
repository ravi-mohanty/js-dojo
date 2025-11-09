const hexBtn = document.querySelector(".hex-Btn");
const hexColorContainer = document.querySelector(".hex-color-container");
const rgbColorContainer = document.querySelector(".rgb-color-container");
let hexColorOutput = '';
hexBtn.addEventListener('click', () => {
    
    const charSet = '0123456789ABCDEF';
    const charSetLength = charSet.length;
    for (let i = 0; i < 6; ++i) {
        hexColorOutput += charSet.charAt(
            Math.floor(Math.random() * charSetLength)
        );
    }
});
const hexColorValue = document.querySelector(".hex-color-val");
hexColorValue.textContent = `#${hexColorOutput}`
hexColorContainer.style.backgroundColor = `#${hexColorOutput}`
hexBtn.style.color = `#${hexColorOutput}`
const rgbBtn = document.querySelector(".rgb-btn");
const getRedInputRange = document.querySelector("#red");
const getBlueInputRange = document.querySelector("#blue");
const getGreenInputRange = document.querySelector("#green");
rgbBtn.addEventListener('click', () => {
    let extractRedVlaue = getRedInputRange.value;
    let extractGreenVlaue = getGreenInputRange.value;
    let extractBlueVlaue = getBlueInputRange.value;
    rgbColorContainer.style.backgroundColor = `rgb(${extractRedVlaue},${extractGreenVlaue},${extractBlueVlaue})`


});
const cookiesButton = document.getElementById("cookies-button"); 
const cakesButton = document.getElementById("cakes-button"); 
const pastriesButton = document.getElementById("pastries-button"); 
const otherButton = document.getElementById("other-button");

const dessertResult = document.getElementById("dessert-result");

cookiesButton.addEventListener("click", function () { 
    dessertResult.textContent = "double chocolate chip"; 
});

cakesButton.addEventListener("click", function () { 
    dessertResult.textContent = "buttermilk chocolate strawberry caramel cake"; 
});

pastriesButton.addEventListener("click", function () { 
    dessertResult.textContent = "stuffed croissants"; 
});

otherButton.addEventListener("click", function () { 
    dessertResult.textContent = "apple pie"; 
});
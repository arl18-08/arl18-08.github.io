let moneyBalance = 50;
const healthAmount = 10;
const damageAmount = 10;

function addHealth() {
    moneyBalance = moneyBalance + healthAmount;

    const healthText = document.getElementById("money-display");
    const statusText = document.getElementById("status-message");

    healthText.innerText= moneyBalance;

    if(moneyBalance<100 && moneyBalance>0)
    {
        healthText.innerText = moneyBalance;
        statusText.innerText = "you got money!";
    }
    else
    {
        healthText.innerText = 100;
        statusText.innerText = "greed is a sin.";
        statusText.style.color = "#a52c1f";
        statusText.style.fontWeight = "bold";
        document.body.style.backgroundColor ="#5a1a1a";
        document.getElementById("yes").disabled = true;
        document.getElementById("no")disabled = true;
        document.getElementById("yes").innerText = "GREEDY";
    }
}


function takeDamage() {
    moneyBalance = moneyBalance - damageAmount;

    const healthText = document.getElementById("money-display");
    const statusText = document.getElementById("status-message");

    healthText.innerText = moneyBalance;

    if(moneyBalance> 0) 
    {
        healthText.innerText = moneyBalance;
        statusText.innerText = "you lost money.";
    }
    else
    {
        healthText.innerText = 0;
        statusText.innerText = "you're broke.";
        statusText.style.color = "#a52c1f";
        statusText.style.fontWeight = "bold";
        document.body.style.backgroundColor ="#5a1a1a";
        document.getElementById("no").disabled = true;
        document.getElementById("yes")disabled = true;
        document.getElementById("no").innerText = "GREEDY";
    }
}
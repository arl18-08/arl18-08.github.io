let moneyBalance = 100;
const healthAmount = 10;
const damageAmount = 10;

function addHealth() {
    moneyBalance = moneyBalance - healthAmount;

    const healthText = document.getElementById("health-display");
    const statusText = document.getElementById("status-message");

    healthText.innerText= moneyBalance;
    if(0>moneyBalance>200)
    {
        healthText.innerText = moneyBalance;
        statusText.innerText = "you got money!";
    }
    if(moneybalance> 200)
    {
        healthText.innerText = 200;
        statusText.innerText = "greed is a sin.";
        statusText.style.color = "#a52c1f";
        statusText.style.fontWeight = "bold";
        document.body.style.backgroundColor ="#5a1a1a";
        document.querySelector("button").disabled = true;
        document.querySelector("button").innerText = "GREEDY";
    }

}


function takeDamage() {
    moneyBalance = moneyBalance - damageAmount;

    const healthText = document.getElementById("health-display");
    const statusText = document.getElementById("status-message");

    healthText.innerText = moneyBalance;

    if(moneyBalance> 0) 
    {
        healthText.innerText = moneyBalance;
        statusText.innerText = "you got money!";
    }
    else
    {
        healthText.innerText = 0;
        statusText.innerText = "you're broke.";
        statusText.style.color = "#a52c1f";
        statusText.style.fontWeight = "bold";
        document.body.style.backgroundColor ="#5a1a1a";
        document.querySelector("button").disabled = true;
        document.querySelector("button").innerText = "BROKE";
    }
}
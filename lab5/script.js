let playerHealth = 100;
const damageAmount = 30;

function takeDamage() {
    playerHealth = playerHealth - damageAmount;

    const healthText = document.getElementById("health-display");
    const statusText = document.getElementById("status-message");

    healthText.innerText = playerHealth;

    if(playerHealth > 0) 
    {
        healthText.innerText = playerHealth;
        statusText.innerText = "you've been hit!";
    }
    else
    {
        healthText.innerText = 0;
        statusText.innerText = "game over.";
        statusText.style.color = "#a52c1f";
        statusText.style.fontWeight = "bold";
        document.body.style.backgroundColor ="#5a1a1a";
        document.querySelector("button").disabled = true;
        document.querySelector("button").innerText = "DEAD";
    }
}
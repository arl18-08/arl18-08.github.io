let linesOfCode=0;

let clickPower=1;
let upgradeCost=50;
let electricUpgradeCost=500;

let interns=0;
let internCost=100;
let employees=0;
let employeeCost=150; 


function writeCode() 
{
    linesOfCode= linesOfCode + clickPower;
    updateScreen();
}

function buyKeyboard()
{
    if(linesOfCode >= upgradeCost)
    {
        linesOfCode= linesOfCode - upgradeCost;
        clickPower= clickPower + 1;
        upgradeCost= upgradeCost * 1.5;
        updateScreen();
    }
}

function buyElectricKeyboard()
{
    if(linesOfCode >= electricUpgradeCost)
        linesOfCode= linesOfCode - electricUpgradeCost;
        clickPower= clickPower + 50;
        document.getElementById("buyElectricKeyboard").disabled = true;
        document.getElementById("buyKeyboard").disabled = true;
        updateScreen();
}

function buyIntern()
{
    if(linesOfCode >= internCost)
    {
        linesOfCode= linesOfCode - internCost;
        interns = interns + 1;
        internCost = internCost * 1.5;
        updateScreen()
    }
}

function buyEmployee()
{
    if(linesOfCode >= employeeCost)
    {
        linesOfCode= linesOfCode - employeeCost;
        employees = employees + 1;
        employeeCostCost = employeeCostCost * 1.5;
        updateScreen()
    }
}

function updateScreen()
{
    document.getElementById("score-display").innerText= linesOfCode + " lines of code";

    document.getElementById("power-display").innerText= clickPower;
    document.getElementById("cost-display").innerText= upgradeCost;
    document.getElementById("cost-electric-display").innerText= upgradeCost;

    document.getElementById("intern-display").innerText = interns;
    document.getElementById("cost-intern-display").innerText = internCost;
    document.getElementById("cost-employee-display").innerText = internCost;
}

setInterval(function() {
    if(interns > 0) 
    {
        linesOfCode= linesOfCode + interns;
        updateScreen();
    }
},
1000
);

setInterval(function() {
    if(employees > 0) 
    {
        linesOfCode= linesOfCode + employees * 2;
        updateScreen();
    }
},
1000
);
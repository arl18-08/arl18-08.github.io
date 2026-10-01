const contents = [
    "health potion",
    "sword",
    "sheild",
    "magic book",
    "pet lizard"
];

function loadInventory() {
   const listElement= document.getElementById("item-list");

   listElement.innerHTML="";

   for(let i=0; i<contents.length; i++) 
   {
        let currentItem= contents[i];
        let htmlToInject= "<li>" + currentItem + "</li>";
        listElement.innerHTML += htmlToInject;
   }

   document.querySelector("button").disabled= true;
   document.querySelector("button").innerText= "backpack full";
}
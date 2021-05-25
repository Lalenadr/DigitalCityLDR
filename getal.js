 // random value -> dit werkt
let y = Math.floor(Math.random() * 10 + 1);
      
 // number guessed by user haalt hij denk ik op via id invoer    
document.getElementById("submit").onclick = function(){
     
let x = document.getElementById("invoer").value;

if(x == y)
{    
    alert("Gefeliciflanstaart! Het is juist! Je nummer was juist! ");
}
else
{    
    alert("Nope!! Try again");
}

}
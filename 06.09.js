
function tellInfractionFine() {
var speed;
var limit;
speed= Number(document.getElementById("txtDrivingSpeed").value);
limit= Number(document.getElementById("txtSpeedLimit").value);
var excess= speed-limit  
    
 if(excess<=0) {
    outputText="No speeding, no fine.";
 }   else if (excess>20){
    outputText="unit based fine.";
} else if(limit>=10 && limit<=60 && excess<=15){
    outputText="Infraction fine is 85 euros";
} else if(limit>=10 && limit<=60 && excess<=20){
    outputText="Infraction fine is 115 euros";
}else if(limit>=70 && limit<=120 && excess<=15){
    outputText="Infraction fine is 70 euros";
}else if(limit>=70 && limit<=120 && excess<=20){
    outputText="Infraction fine is 100 euros";
}
document.getElementById("divAnswer").innerHTML=outputText;
console.log("outputText") ;  
}
const display=document.getElementById("display");
const displayInput=document.getElementById("displayInput");
function appendToDisplay(input){
  display.value+=input;
}
function clearDisplay(){
 display.value="";
 displayInput.value="";
}
function deletenum(){
  display.value=display.value.toString().slice(0,-1);
}
function safeEval(fnString) {
  return new Function('return ' + fnString)();
}
function calculate(){
  try{
  displayInput.value=display.value;
  display.value= safeEval(display.value);
  }
  catch(error){
    displayInput.value="ERROR";
  }
}
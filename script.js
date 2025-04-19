console.log("content loaded")
let button = document.querySelectorAll("button")
let display = document.getElementById("display")
currentInput = ""
let evaluated = false

button.forEach(button => {
  button.addEventListener("click", function(){
      let value = button.value

      calc(value)
  })
})

 function calc (value){

  switch (value) {
      case  "back"  :
          console.log("clicked")
      currentInput = currentInput.slice(0, -1)
      display.textContent = currentInput  || 0
      break;
  
      case "=":
          try{ 
       if(!isValidExpression(currentInput)){
         display.textContent  = "Error"
         currentInput = ""
       }
       else{
       currentInput = eval(currentInput).toString()
       display.textContent = currentInput
       evaluated = true
       console.log(evaluated)
       
       }}
       catch(error){
       display.textContent  = "error"
         currentInput = ""
       }
          break;
     case "C" :
      currentInput = ""
      display.textContent = currentInput
       break;
      default:
          console.log(evaluated)
          currentInput += value
          display.textContent = currentInput
          if(evaluated == true){
              
              currentInput = value
              display.textContent = currentInput
              evaluated = false;
              console.log(evaluated)
          }
          else{
              evaluated = false
          }
          break;
          
  }
 }
 function isValidExpression(input) {
  // Regular expression to match a valid math expressio n
  const regex = /^[\d.]+([+\-*/][\d.]+)*$/;
  return regex.test(input);
}

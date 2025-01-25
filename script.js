   console.log("loaded")
   let buttons =  document.querySelectorAll(".inner-container")
   let display = document.querySelector(".display")
   let currentInput = ""
   // loop needed cus of plural query selector
   buttons.forEach( (button) =>{
    button.addEventListener("click", () => {
   const value = button.value
   finalDisplay(value)
   console.log(value)
    })
   })
   // 
    function finalDisplay (value){
       switch (value) {
        case  "C" :
            currentInput = ""
            display.textContent = currentInput
            break
        case "=" :
            try {
                if(!isValidExpression(currentInput)){
                    currentInput = ""
                    display.textContent  = "Error"
                     currentInput = ""
                     return
                }
                currentInput = eval(currentInput).toString()
                display.textContent = currentInput
            }
            catch(error) {
                display.textContent = "error"; // Catch evaluation errors
                currentInput = ""; // Reset input
            }
            break
             case "back" :
               currentInput =  currentInput.slice(0 , -1)
                 display.textContent = currentInput || ""
                 break;
                 default :
                 currentInput += value
                display.textContent = currentInput
       }
    }
    function isValidExpression(input) {
        // Regular expression to match a valid math expressio n
        const regex = /^[\d.]+([+\-*/][\d.]+)*$/;
        return regex.test(input);
      }
      
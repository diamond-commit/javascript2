   let buttons =  document.querySelectorAll(".inner-container")
   let display = document.querySelector(".display")
   let currentInput = ""
   // loop needed cus of plural query selector
   buttons.forEach( (button) =>{
    button.addEventListener("click", () => {
   const value = button.value
   finalDisplay(value)
    })
   })
   // 
    function finalDisplay (value){
       if (value == "C"){
        display.textContent = " "
       }
       else if ( value == "="){
    try{
        if (!isValidExpression(currentInput)){
            display.textContent = "error"
            currentInput = ""
            return;
        }
      currentInput = eval(currentInput).toString()
      display.textContent = currentInput
    } catch (error){
     display.textContent = "error"
    }
    currentInput = ""
       }
       else{
        currentInput  += value 
        display.textContent = currentInput
       }
    }
    function isValidExpression(input) {
        // Regular expression to match a valid math expression
        const regex = /^[\d.]+([+\-*/][\d.]+)*$/;
        return regex.test(input);
      }
      
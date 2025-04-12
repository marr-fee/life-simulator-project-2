
// SHORTER CODE

import { gameMainNavMenuDiv, gamePlayContainer, gridCntrHolder, gridContainer, menuTitle } from "../DOM.js";
import { exitAppBtn } from "../investments/crypto/crypto-DOM.js";
import { calcScreenBottom, calcScreenTop, calculatorContainer } from "./calculator-DOM.js";



// Retrieve calculation from localStorage if available, otherwise initialize as empty string
let calculation = localStorage.getItem("calculation") || "";



const calcNumButtons = document.querySelectorAll('.calculator-button');
calcNumButtons.forEach(button => {
  button.addEventListener('click', () => {
    let buttonValue = button.getAttribute('data-value');
    

    updateCalculation(buttonValue);
  });
});

let hasValue;
let resultPrinted;
// This function is called to update the calculation
export function updateCalculation(operator) {

    // Clear screen logic
    if (operator === "clear") {
      calculation = '';
      localStorage.removeItem("calculation");
      hasValue = false;
      resultPrinted = false;
      calcScreenBottom.value = '';
      calcScreenTop.value = '';
      return;
    }
  
    // Evaluation logic
    if (operator === "=" || operator === " = ") {
      try {
        const expression = calculation;
        const result = eval(calculation); // still use with caution
  
        // Show expression up top, result at the bottom
        calcScreenTop.value = expression;
        calcScreenBottom.value = Number(result).toLocaleString(undefined, {
          minimumFractionDigits: 0,
          maximumFractionDigits: 8
        });
  
        // Save result if needed
        calculation = result.toString();
        localStorage.setItem("calculation", calculation);
  
        resultPrinted = true;
        hasValue = true;
      } catch (e) {
        calcScreenTop.value = '';
        calcScreenBottom.value = 'Error';
        calculation = '';
      }
      return;
    }
  
    // If new number is pressed after result, start fresh
    if (
      resultPrinted)  // Start a new calculation (clear screen)
     {
      calculation = '';
      calcScreenBottom.value = '';
      calcScreenTop.value = '';
      resultPrinted = false;
    }
  
    hasValue = false;
    calculation += operator;
    calcScreenBottom.value = calculation;
  
    localStorage.setItem("calculation", calculation);
}

export function openCalculatorApp(){
  calculatorContainer.style.display = "flex";
  gridContainer.style.display = "none";
  exitAppBtn.style.display = "block";
  gridCntrHolder.style.display = 'none';
  gamePlayContainer.style.display = 'none';
  gameMainNavMenuDiv.style.display = "flex";
  menuTitle.style.display = "none";
};
export function closeCalculatorApp(){
  calculatorContainer.style.display = "none";
  gridCntrHolder.style.display = 'flex';
  gridContainer.style.display = "grid";
  exitAppBtn.style.display = "none";
  gamePlayContainer.style.display = 'flex';
  menuTitle.style.display = "none";
};

// LONGER MORE DECRIPTIVE
/* if (operator === "clear") {
    calculation = "";
    console.log("Cleared");
  } else if (operator === " / ") {
    calculation += " / ";
    console.log(calculation);
  } else if (operator === " = ") {
    calculation = eval(calculation);
    console.log(calculation);
  } else if (operator === " . ") {
    calculation += ".";
    console.log(calculation);
  } else if (operator === "0") {
    calculation += "0";
    console.log(calculation);
  } else if (operator === " * ") {
    calculation += " * ";
    console.log(calculation);
  } else if (operator === "9") {
    calculation += 9;
    console.log(calculation);
  } else if (operator === "8") {
    calculation += 8;
    console.log(calculation);
  } else if (operator === "7") {
    calculation += 7;
    console.log(calculation);
  } else if (operator === " - ") {
    calculation += " - ";
    console.log(calculation);
  } else if (operator === "6") {
    calculation += 6;
    console.log(calculation);
  } else if (operator === "5") {
    calculation += 5;
    console.log(calculation);
  } else if (operator === "4") {
    calculation += 4;
    console.log(calculation);
  } else if (operator === " + ") {
    calculation += " + ";
    console.log(calculation);
  } else if (operator === "3") {
    calculation += 3;
    console.log(calculation);
  } else if (operator === "2") {
    calculation += 2;
    console.log(calculation);
  } else if (operator === "1") {
    calculation += 1;
    console.log(calculation);
  } else {
    console.log("Invalid syntax.");
  } */
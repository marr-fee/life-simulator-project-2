import { closeBankingApp } from "./bank-app-functions.js";
import { bankAppMainPage, bankAppNavBar, bankAppNavToggler, exitBankAppBtn } from "./bank-DOM.js";





bankAppNavToggler.addEventListener('click', () => {
  const isOpen = bankAppNavBar.classList.toggle('open-nav-bar');
  bankAppNavToggler.src = isOpen 
    ? 'scripts/bank-app/images/close.png'
    : 'scripts/bank-app/images/hamburger(1).png';

    document.getElementById('blur-overlay').style.opacity = isOpen ? '1' : '0';
  });


  exitBankAppBtn.addEventListener('click', ()=> {
    closeBankingApp();
    console.log('button-clicked');
    
  })
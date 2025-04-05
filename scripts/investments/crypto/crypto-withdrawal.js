withdrawBtn.addEventListener('click', () => {
  const withdrawalAmount = parseFloat(withdrawAmountField.value);

  if (isNaN(withdrawalAmount) || withdrawalAmount <= 0) {
    withdrawFeedback.textContent = "Enter a valid amount.";
    return;
  }

  const currentHoldings = Player.cryptoHoldings[selectedCrypto.abbriviation] || 0;
  const cryptoToWithdraw = withdrawalAmount / selectedCrypto.pricePerUnit;

  if (currentHoldings < cryptoToWithdraw) {
    withdrawFeedback.textContent = "Not enough crypto to withdraw.";
    return;
  }

  // Update holdings and balances
  Player.cryptoHoldings[selectedCrypto.abbriviation] -= cryptoToWithdraw;
  Player.financialStats.accountBalance += withdrawalAmount;

  withdrawFeedback.textContent = `Withdrew $${withdrawalAmount.toFixed(2)} of ${selectedCrypto.abbriviation}`;
  
  // Update UI
  accountBalanceSpan.innerText = `$${Player.financialStats.accountBalance.toFixed(2)}`;
  updateCryptoPortfolioBalance(); // refresh portfolio value
});

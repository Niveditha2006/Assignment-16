const rate = 73.66; 

function convertCurrency() {
  const dollarAmount = parseFloat(document.getElementById("dollar").value);
  if (!isNaN(dollarAmount)) {
    const rupeeAmount = (dollarAmount * rate).toFixed(2);
    document.getElementById("rupee").value = rupeeAmount;
  } else {
    document.getElementById("rupee").value = '';
  }
}

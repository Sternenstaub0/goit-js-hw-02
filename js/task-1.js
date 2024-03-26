function makeTransaction(quantity, pricePerDroid, customerCredits) {
  let totalPrice = quantity * pricePerDroid;
  if (totalPrice > customerCredits) {
    return 'Insufficient funds!';
  } else {
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
  }
}
console.log(makeTransaction(5, 3000, 23000));

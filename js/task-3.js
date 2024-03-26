function checkForSpam(message) {
  if (message.toLowerCase().includes('spam' || 'sale')) {
    return true;
  } else {
    return false;
  }
}
console.log(checkForSpam('Get rid of sPaM emails. Our book in on sale!'));

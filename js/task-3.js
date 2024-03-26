function checkForSpam(message) {
  if (message.toLowerCase().includes('spam' || 'sale')) {
    return true;
  } else {
    return false;
  }
}

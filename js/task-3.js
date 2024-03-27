function checkForSpam(message) {
  if (
    message.toLowerCase().includes('spam') ||
    message.toLowerCase().includes('sale')
  ) {
    return true;
  } else {
    return false;
  }
}

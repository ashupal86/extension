function handleClick(tab) {
    // Do something when the icon is clicked
  }
  
  // Add a listener for when the extension icon is clicked
  chrome.browserAction.onClicked.addListener(handleClick);
  // Add a listener for when the extension icon is clicked
chrome.browserAction.onClicked.addListener(function(tab) {
    // Close the extension when the icon is clicked
    window.close();
  }); 
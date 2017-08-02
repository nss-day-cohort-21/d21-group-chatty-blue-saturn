// Create an element to serve as the navigation bar for your application. (DONE)
// Create an element to hold the logo for your application. It can be as simple as text, but if you want to find an image, that's fine. (DONE)
// Create a input field for a user to enter in a message. (DONE)
// Add an event listener for "keypress" and detect when then return key has been pressed in the message field. (DONE)
// When return key is detected, you'll create a new message (see details below).
// Create a button to clear all messages. (DONE) (The button is created, with no functionality)
// When the user clicks the clear messages button, all current chat messages should be removed from the application.
// If there are no messages, then the clear messages button should be disabled (see example above).
// The navigation bar should remain at the top of the screen, even if the contents of the page start to scroll.


chatty.jsonFunction();

var keypress = document.getElementById("textArea");
var messageBox = document.getElementById("msgHolder");
keypress.addEventListener("keypress", chatty.addText);

let clearAll = document.getElementById("clear-message");
clearAll.addEventListener("click", chatty.clearMessageFunction)
// let button1 = document.getElementById("button1");
// let button2 = document.getElementById("button2");
// let button3 = document.getElementById("button3");
// button1.addEventListener("click", chatty.jsonPage);
// button2.addEventListener("click", chatty.addPage);
// button3.addEventListener("click", chatty.deletePage);

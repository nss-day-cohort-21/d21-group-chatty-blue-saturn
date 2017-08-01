// Create an element to serve as the navigation bar for your application. (DONE)
// Create an element to hold the logo for your application. It can be as simple as text, but if you want to find an image, that's fine. (DONE)
// Create a input field for a user to enter in a message. (DONE)
// Add an event listener for "keypress" and detect when then return key has been pressed in the message field. (DONE)
// When return key is detected, you'll create a new message (see details below).
// Create a button to clear all messages. (DONE) (The button is created, with no functionality)
// When the user clicks the clear messages button, all current chat messages should be removed from the application.
// If there are no messages, then the clear messages button should be disabled (see example above).
// The navigation bar should remain at the top of the screen, even if the contents of the page start to scroll.
var keypress = document.getElementById("textArea");
var messageBox = document.getElementById("msgHolder");
keypress.addEventListener("keypress", addText);


function addText(){
      var key = event.keyCode;
      if (key === 13) { // 13 is enter
        msgHolder.innerHTML += `<p> ${keypress.value} <button class="delete">Delete</delete></p>`;
        deleteFunction();
        // code for enter
      }
    }

(function(){
  console.log("It works");
  let dataRequest = new XMLHttpRequest();
  dataRequest.addEventListener("load", dataComplete);
  function dataComplete(){
    console.log("The sentences have loaded");
    var sentenceData = JSON.parse(event.target.responseText);
    console.log("sentences", sentenceData);
    showData(sentenceData);
  }
  function showData(sentenceData){
    let sentenceHolder = document.getElementById("msgHolder");
    for (var i=0; i<sentenceData.length; i++){
      console.log(sentenceData[i].text);
      sentenceHolder.innerHTML +=`<p> ${sentenceData[i].text} </p>`;
    }
  }
  dataRequest.open("GET","j.json");
  dataRequest.send();

}());
//This IIFE loads the JSON file to the DOM

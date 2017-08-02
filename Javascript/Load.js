 var chatty = (function(otherChatty){

otherChatty.jsonFunction = function(){
  var dataRequest = new XMLHttpRequest();
  console.log("It works");
  dataRequest.addEventListener("load", otherChatty.dataComplete);
  console.log("It works 2nd");
  dataRequest.open("GET","j.json");
  dataRequest.send();
}


  otherChatty.dataComplete = function(){
    console.log("The sentences have loaded");
    var sentenceData = JSON.parse(event.target.responseText);
    console.log("sentences", sentenceData);
    otherChatty.showData(sentenceData);
  }


  otherChatty.showData = function(sentenceData){
    let sentenceHolder = document.getElementById("msgHolder");
    for (var i=0; i<sentenceData.length; i++){
      console.log(sentenceData[i].text);
      sentenceHolder.innerHTML +=`<p> ${sentenceData[i].text} </p>`;
    }
  }




otherChatty.jsonPage = function(){
  console.log("The json iife works");
}

return otherChatty;

}(chatty || {}))
//This IIFE loads the JSON file to the DOM

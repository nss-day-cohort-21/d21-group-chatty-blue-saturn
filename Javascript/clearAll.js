
 var chatty = (function(otherChatty){

  
  otherChatty.clearMessageFunction = function(event){
  var messageBox = document.getElementById("msgHolder");

  console.log(event);

  // let ridOf = this.parentNode;
  messageBox.innerHTML= "";
 
  console.log(messageBox.value);
  
  
  
  // if (messageBox != "" ) {
    clearAll.disabled = true;
  
  // }



  // document.innerHTML = "";
}




otherChatty.deletePage = function(){
  console.log("The delete iife works");
}
return otherChatty;

}(chatty || {}))

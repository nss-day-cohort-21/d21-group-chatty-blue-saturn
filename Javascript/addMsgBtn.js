 var chatty = (function(otherChatty){
      otherChatty.addText = function(){
        var key = event.keyCode;
        if (key === 13) { // 13 is enter
        msgHolder.innerHTML += `<p> ${keypress.value} <button class="delete">Delete</delete></p>`;
        otherChatty.deleteFunction();
        // code for enter
        }}


      otherChatty.deleteFunction= function(){
        let deleteBtn = document.getElementsByClassName("delete");
        console.log(deleteBtn);
        for(i=0;i <deleteBtn.length;i++){
        deleteBtn[i].addEventListener("click",otherChatty.getRidOfIt);
        }
      otherChatty.getRidOfIt= function(event){
      // alert("This has been deleted");
        console.log("event", event);
        let p = this.parentNode;
        messageBox.removeChild(p);
        }}



  otherChatty.addPage = function(){
    console.log("The add iife works");
  }

return otherChatty;



}
(chatty || {}) )

// function getRidOfIt(event){
//   // alert("This has been deleted");
//   console.log("event", event);
//   let p = this.parentNode;
//   messageBox.removeChild(p);
// }

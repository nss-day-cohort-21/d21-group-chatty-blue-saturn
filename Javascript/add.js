function deleteFunction(){
  let deleteBtn = document.getElementsByClassName("delete");
  console.log(deleteBtn);
  for(i=0;i <deleteBtn.length;i++){
    deleteBtn[i].addEventListener("click",getRidOfIt)
  }
  function getRidOfIt(){
    alert("This has been deleted");
  }

}

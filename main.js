



// elements that checks button,checkboxes and list 
const capital=document.getElementById("uniqueID");
const size =document.getElementById("list");
const specialh =document.getElementById("uniqueID1");
const numb =document.getElementById("uniqueID2");

//button to create password
const button = document.getElementById('saveButton');


//click event that gets the size and checkboxes and sends it to password creator
button.addEventListener('click',function(){

if(capital.checked===true && specialh.checked===true &&numb.checked===true){

ShowMessage(size.value,1);

}

else if(capital.checked===false && specialh.checked===false &&numb.checked===false){

    ShowMessage(size.value,2);

}

else if(capital.checked===false && specialh.checked===true &&numb.checked===true){

    ShowMessage(size.value,3);

}
else if(capital.checked===true && specialh.checked===false &&numb.checked===true){

    ShowMessage(size.value,4);
}
else if(capital.checked===true && specialh.checked===true &&numb.checked===false){
    ShowMessage(size.value,5);
}
else if(capital.checked===false && specialh.checked===false &&numb.checked===true){

    ShowMessage(size.value,6);
}
else if(capital.checked===true && specialh.checked===false &&numb.checked===false){
    ShowMessage(size.value,7);
}
else if(capital.checked===false && specialh.checked===true &&numb.checked===false){
    ShowMessage(size.value,8);
}







    


});




















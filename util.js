


//array for special characters

let SpecialCharacters =['!','#','$','%','&','\'' ,'"','(',')','*','+','-','/',',','-','_','.',';',':','>','<','@','?','{','}','[',']'];

//array for upper case characters
let UpperCaseCharacters=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

//array for lower case characters
let lowerCaseCharacters=[];

//array for Numbers
let Numbers =[1,2,3,4,5,6,7,8,9,0];

for(let i =0;i<UpperCaseCharacters.length;i++){

    lowerCaseCharacters[i]=UpperCaseCharacters[i].toLocaleLowerCase();

}






// implementing fisher yale-algorithm

function fyale( MyArray){

for( let i =MyArray.length-1;i>0;i--){

    const j=Math.floor(Math.random() *(i+1));
    const temp =MyArray[i];
    MyArray[i] =MyArray[j];
    MyArray[j]=temp;
}
return MyArray;

};

//calling f-y algorithm
fyale(lowerCaseCharacters);
fyale(UpperCaseCharacters);
fyale(Numbers);
fyale(SpecialCharacters);

let characters=lowerCaseCharacters.concat(UpperCaseCharacters,Numbers,SpecialCharacters);

fyale(characters);








//function to create a string paswword
function password(max,array){

let pass='';

for(let i =0;i<max;i++){
    let random =Math.floor(Math.random()*max);
pass+=array[random];

}

return pass;
};


//function to send true array and the lenght of password to password method and print it in the box
function ShowMessage(sayi,arr){

if(arr==1){
 let a=   document.getElementById('print').textContent=password(sayi,fyale(characters));

    
}
else if(arr===2){

    document.getElementById('print').textContent=password(sayi,lowerCaseCharacters);


}

else if(arr===3){
    document.getElementById('print').textContent=password(sayi,fyale(lowerCaseCharacters.concat(SpecialCharacters,Numbers)));


}

else if(arr===4){
    document.getElementById('print').textContent=password(sayi,fyale(lowerCaseCharacters.concat(UpperCaseCharacters,Numbers)));
}
else if(arr===5){
    document.getElementById('print').textContent=password(sayi,fyale(lowerCaseCharacters.concat(SpecialCharacters,UpperCaseCharacters)));
}

else if(arr===6){
    document.getElementById('print').textContent=password(sayi,fyale(lowerCaseCharacters.concat(Numbers)));
}
else if(arr===7){
    document.getElementById('print').textContent=password(sayi,fyale(lowerCaseCharacters.concat(UpperCaseCharacters)));
}
else if(arr===8){
    document.getElementById('print').textContent=password(sayi,fyale(lowerCaseCharacters.concat(SpecialCharacters)));
}




    
    
    };




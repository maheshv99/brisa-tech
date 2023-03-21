// only one check box can selecting purpose

function func(mm){
 let kk=document.getElementById(mm)
 if(kk.checked){
    kk.checked=false;
 }
}

function submitresponce(){
   alert("YOUR RESPONCE IS RECORDED YOU CAN LEAVE");
}

function close11(){
   alert("YOU CAN LEAVE NOW THANK YOU");
}
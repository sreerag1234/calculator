function add() {
    var a= this.innerText;
    var b= document.querySelector("input").value;
    if(b== ""){
        document.querySelector("input").value = a;
    }
    else{
        document.querySelector("input").value = b + a;
    }
    

}
var input = document.getElementsByClassName("num");
for(var i=0;i < input.length; i++ ){
     input[i].addEventListener('click', add);
}

function equation(){
    var ans= eval(document.querySelector("input").value);
    document.querySelector("input").value = ans.toFixed(8);
}
document.querySelector("#equal").addEventListener("click",equation)

function clearall(){
    document.querySelector("input").value = "";
}
document.querySelector("#clearall").addEventListener("click",clearall)

function clear(){
    var written= document.querySelector("input").value
    document.querySelector("input").value = written.substring(0, written.length - 1);
}
document.querySelector("#clear").addEventListener("click",clear)
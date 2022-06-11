
const numero = document.querySelector("#paragrafo");


let valor=0;

function geraExpoente(){
    let base = document.querySelector("#base");
    let expo = document.querySelector("#expoente");
   
   return valor = Math.pow(base.value,expo.value);
   
}

    
const btn = document.querySelector(".btn");
btn.addEventListener('click', ()=>{
    numero.innerHTML = "O valor da potenciação é: " + geraExpoente();
})

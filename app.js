const quadrados = [...document.getElementsByClassName("quadrado")]


quadrados.map((el,indice)=>{
    el.addEventListener("click",(evt)=>{
        const elemento = evt.target
        if(indice%2 == 0){
            elemento.innerHTML = "x"
            elemento.classList.add("xis")
        }else{
            elemento.innerHTML = "o"
            elemento.classList.add("bolinha")
        }
    })
})

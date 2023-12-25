const bar=document.querySelector(".bardiv")
const nav=document.querySelector(".nav")
const xmark=document.querySelector(".fa-xmark")
const line=document.querySelector(".fa-bars")
bar.addEventListener("click",()=>{
    nav.classList.toggle("active")
    if(nav.classList.contains("active")){
        xmark.style.display="block"
        line.style.display="none"
    }else{
        xmark.style.display="none"
        line.style.display="block"
    }
})
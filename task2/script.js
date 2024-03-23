let onholder=document.getElementById("on");
let offholder=document.getElementById("off");

onholder.addEventListener('click',()=>{
    onholder.style="display:none"
    offholder.style="display:block"
    offholder.style="background-color:white;width:30px;border-radius:15px"
    document.body.style="background-color:black;color:white"

})
offholder.addEventListener('click',()=>{
    offholder.style="display:none"
    onholder.style="display:block background-color:black;width:30px;border-radius:15px"
    
    document.body.style="background-color:white"

})


let bar=document.getElementById("line");
let list=document.querySelector(".menu ul")
bar.addEventListener('click',()=>{
    list.classList.toggle('showmenu')
})

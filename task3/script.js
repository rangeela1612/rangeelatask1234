// let bar=document.querySelector('.bar');
// let menu=document.querySelector('.menu');

// bar.addEventListener('click',()=>{
//     bar.classList.toggle('active');
//     menu.classList.toggle('active')
// })
// bar.addEventListener('click',()=>{
//     menu.classList.toggle('menu1');
   
// })

const bar = document.querySelector('.bar');
const menu = document.querySelector('.menu');

bar.addEventListener('click', () => {
    bar.classList.toggle('active');
    menu.classList.toggle('active');
});


 var options={
    strings: ['creative Agency', 'Typed JS IS Cool'],
   typespeed:40,
   loop:true,
   loopcount:Infinity,
   typespeed:10,
   backdelay:2000,
  };
  
  var typed = new Typed('#element',options);
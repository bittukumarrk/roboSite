
// const menu = document.querySelector('.menu')
// const menuCut = document.querySelector('.menuCut')
// const sideBar =document.querySelector('.sideBar')
// x = 1
// menu.addEventListener('click',()=>{
//  if(x==1){
//     sideBar.classList.add('show-sidebar')
//  }
//  x = 0;
// });
// menuCut.addEventListener('click',()=>{
//  if(x==0){
//     sideBar.classList.remove('show-sidebar')
//  }
//  x = 1;
// });
// window.addEventListener('click',() =>{
//    if(x==0){
//       sideBar.classList.remove('show-sidebar')
//    }
//    x = 1;
// })

const menu = document.querySelector('.menu');
const menuCut = document.querySelector('.menuCut');
const sideBar = document.querySelector('.sideBar');

let isSidebarOpen = false;

menu.addEventListener('click', (event) => {
  event.stopPropagation(); // Prevent event from propagating to the window
  if (!isSidebarOpen) {
    sideBar.classList.add('show-sidebar');
    isSidebarOpen = true;
  }
});

menuCut.addEventListener('click', (event) => {
  event.stopPropagation(); // Prevent event from propagating to the window
  if (isSidebarOpen) {
    sideBar.classList.remove('show-sidebar');
    isSidebarOpen = false;
  }
});

window.addEventListener('click', () => {
  if (isSidebarOpen) {
    sideBar.classList.remove('show-sidebar');
    isSidebarOpen = false;
  }
});

// Prevent sidebar from closing when clicking inside it
sideBar.addEventListener('click', (event) => {
  event.stopPropagation();
});


const hert = document.querySelector('.hert');
const card = document.querySelector('.card_1');
x = 1
card.addEventListener('click',()=>{
  card.innerHTML.h1 = "Radhe"
})


// card.addEventListener('click', () => {
 
//   if (x == 1) {
//     hert.classList.add('hertOn');
//     console.log('ok')
//     x = 0;
//   }else {
//     hert.classList.remove('hertOn');
//     console.log('ok not')
//     x = 1;
//   }
// });
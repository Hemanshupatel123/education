Burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
right = document.querySelector('.rightnav')


Burger.addEventListener('click', () => {
    right.classList.toggle('v-class');
    navList.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');
})

logo=document.querySelector('.search1')
logo.addEventListener('click',()=>{
    logo.classList.toggle('.search1');
})

// let countHp=document.getElementById("count-hp")
// let count=0
// function incremenT() {
//     count=count+1
//     countHp.innerText=count
// }

// function save(){
//     console.log(count)
// }
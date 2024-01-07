// Active Design
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add('scroll-on')
    }
    else{
        nav.classList.remove('scroll-on')
    }
}

// Nav hide
let navBar = document.querySelectorAll('.nav-link');
navBar.forEach(function(a){
    a.addEventListener("click" , function (){
        navCollapse.classList.remove('show')
    })
})
let navCollapse = document.querySelector(".navbar-collapse.collapse");

// Counter Design
document.addEventListener('DOMContentLoaded' , ()=>{
    function counter(id , start , end , duration) {
        let object  = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration / range)),
        timer = setInterval(()=>{
            current += increment;
            object.textContent = current
            if(current == end){
                clearInterval(timer)
            }
        } ,step)
    }
    counter('count1' , 0 , 1287 , 3000);
    counter('count2' , 100 , 5786 , 2500);
    counter('count3' , 0 , 1440 , 2800);
    counter('count4' , 0 , 7110 , 3000);
});
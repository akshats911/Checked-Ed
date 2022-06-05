gsap.registerPlugin(ScrollTrigger);

const bg_ = document.querySelector(".nav_container");
const span = document.querySelector(".content1 span");
const h1 = document.querySelector(".content1 h1");
const h4 = document.querySelector(".content1 h4");
const p = document.querySelector(".content1 p");
const blogopener_ = document.querySelector(".blog .blogopener")

const mainTL = gsap.timeline();

mainTL.from([bg_],{
    duration: 1.2,
    y: -200,
    height: 0,
    opacity: 0,
    ease: "power3.inOut"
})
mainTL.from(["header", ".logo"],{
    delay: 0.1,
    y: -16,
    opacity: 0,
    duration: 0.5,
    ease: "power3.inOut"
})
.from("#blog",{
    // y: 200,
    duration: 2,
    opacity: 0,
    ease: "power3.inOut"
})

// scrollTrigger.create({
//         trigger: ".blog",    
//         start: "center center",
//         end: "bottom top",
//         scrub: true,
//         pin: true
//     }
// )
// .from(".blogopener",{y:innerHeight*1.5})



// const parlax = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".blogopener",
//         scrub: true,
//         start: 'centre centre',
//         end: "+=2000",
//         pin: true
//     }
// }).to("")

// ScrollTrigger.create({
//     animation: mainTL,
//     trigger: ".blogopener",
//     start: "top center",
//     end: "+=3000px",
//     pin: true
// })

window.addEventListener("resize", windowResize);

function windowResize(){
    let container_ = document.querySelector(".nav_container")
    container_.style.height = "100vh"
}

// DARK MODE
// document.onkeypress = function(e){
//     e = e || window.event;

//     if(e.keyCode === 13){
//         document.documentElement.classList.toggle("dark-mode");
        
//         document.querySelectorAll('.inverted').forEach((result) =>{
//             result.classList.toggle('invert');
//         })
//     }
// }
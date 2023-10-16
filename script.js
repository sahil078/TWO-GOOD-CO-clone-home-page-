const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function h1Anime(){
    gsap.from(" #page1 h1" ,{
        y: 100,
        opacity:0,
        delay:0.3, 
        duration:0.5,
        stagger:0.2
    })

    gsap.from(" #videoContainer" ,{
        scale:0.5,
        opacity:1,
        delay:0.4, 
        duration:0.5
    })
}
h1Anime();

function videoAnime(){
    let vcon = document.querySelector("#videoContainer");
let btn = document.querySelector("#ply-button");

vcon.addEventListener("mouseenter" , ()=>{
    gsap.to(btn, {
        scale:1,
        opacity:1
    })
})
vcon.addEventListener("mouseleave" , ()=>{
    gsap.to(btn, {
        scale:0,
        opacity:0
    })
})
vcon.addEventListener("mousemove" , (details)=>{
    gsap.to(btn , {
        left: details.x-80,
        top: details.y-40
    })
})
}
videoAnime();

function mouseHover(){
    let innerCont = document.querySelector(".inner-container");
    let box1 = document.querySelector("#box1");

    box1.addEventListener("mouseover" , ()=>{
        gsap.to(innerCont , {
            opacity:1,
        })

        gsap.to(box1 , {
            borderBottomLeftRadius: 1,
            borderBottomRightRadius: 1,
        })
    })

    box1.addEventListener("mouseleave" , ()=>{
        gsap.to(innerCont , {
            opacity:0,
        })
        gsap.to(box1 , {
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
        })
    })
}
mouseHover();

function mouseHover1(){
    let innerCont = document.querySelector(".inner-container2");
    let box2 = document.querySelector("#box2");

    box2.addEventListener("mouseover" , ()=>{
        gsap.to(innerCont , {
            opacity:1,
        })

        gsap.to(box2 , {
            borderBottomLeftRadius: 1,
            borderBottomRightRadius: 1,
        })
    })

    box2.addEventListener("mouseleave" , ()=>{
        gsap.to(innerCont , {
            opacity:0,
        })
        gsap.to(box2 , {
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
        })
    })
}
mouseHover1();
function mouseHover2(){
    let innerCont = document.querySelector(".inner-container3");
    let box3 = document.querySelector("#box3");

    box3.addEventListener("mouseover" , ()=>{
        gsap.to(innerCont , {
            opacity:1,
        })

        gsap.to(box3 , {
            borderBottomLeftRadius: 1,
            borderBottomRightRadius: 1,
        })
    })

    box3.addEventListener("mouseleave" , ()=>{
        gsap.to(innerCont , {
            opacity:0,
        })
        gsap.to(box3 , {
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
        })
    })
}
mouseHover2();

// MOving circle
function movingCircle1(){
    let circle =document.querySelector(".hidden-circle1");
    let container = document.querySelector("#img-container1");

    container.addEventListener("mouseenter" , ()=>{
        gsap.to(circle , {
            opacity:1,
            backgroundColor: 'rgba(200, 199, 199, 0.504)',
        })
    })
    container.addEventListener("mouseleave" , ()=>{
        gsap.to(circle , {
            opacity:0,
        })
    })
    container.addEventListener("mousemove" , (details)=>{
        gsap.to(circle , {
            left:details.x-100,
            top:details.y-150,
        })
    })
}
movingCircle1();


function movingCircle2(){
    let circle =document.querySelector(".hidden-circle2");
    let container = document.querySelector("#img-container2");

    container.addEventListener("mouseenter" , ()=>{
        gsap.to(circle , {
            opacity:1,
            backgroundColor: 'rgba(131, 223, 171, 0.312)',
        })
    })
    container.addEventListener("mouseleave" , ()=>{
        gsap.to(circle , {
            opacity:0,
        })
    })
    container.addEventListener("mousemove" , (details)=>{
        gsap.to(circle , {
            left:details.x-1050,
            top:details.y-200,
        })
    })
}
movingCircle2();


function movingCircle3(){
    let circle =document.querySelector(".hidden-circle3");
    let container = document.querySelector("#img-container3");

    container.addEventListener("mouseenter" , ()=>{
        gsap.to(circle , {
            opacity:1,
            backgroundColor: 'rgba(223, 211, 131, 0.312)',
        })
    })
    container.addEventListener("mouseleave" , ()=>{
        gsap.to(circle , {
            opacity:0,
        })
    })
    container.addEventListener("mousemove" , (details)=>{
        gsap.to(circle , {
            left:details.x-100,
            top:details.y-150,
        })
    })
}
movingCircle3();


function movingCircle4(){
    let circle =document.querySelector(".hidden-circle4");
    let container = document.querySelector("#img-container4");

    container.addEventListener("mouseenter" , ()=>{
        gsap.to(circle , {
            opacity:1,
            backgroundColor: 'rgba(131, 139, 223, 0.312)',
        })
    })
    container.addEventListener("mouseleave" , ()=>{
        gsap.to(circle , {
            opacity:0,
        })
    })
    container.addEventListener("mousemove" , (details)=>{
        gsap.to(circle , {
            left:details.x-1000,
            top:details.y-150,
        })
    })
}
movingCircle4();


function movingCircle5(){
    let circle =document.querySelector(".hidden-circle5");
    let container = document.querySelector("#img-container5");

    container.addEventListener("mouseenter" , ()=>{
        gsap.to(circle , {
            opacity:1,
            backgroundColor: 'rgba(131, 223, 223, 0.312)',
        })
    })
    container.addEventListener("mouseleave" , ()=>{
        gsap.to(circle , {
            opacity:0,
        })
    })
    container.addEventListener("mousemove" , (details)=>{
        gsap.to(circle , {
            left:details.x-100,
            top:details.y-150,
        })
    })
}
movingCircle5();


function movingCircle6(){
    let circle =document.querySelector(".hidden-circle6");
    let container = document.querySelector("#img-container6");

    container.addEventListener("mouseenter" , ()=>{
        gsap.to(circle , {
            opacity:1,
            backgroundColor: 'rgba(223, 131, 131, 0.312)',
        })
    })
    container.addEventListener("mouseleave" , ()=>{
        gsap.to(circle , {
            opacity:0,
        })
    })
    container.addEventListener("mousemove" , (details)=>{
        gsap.to(circle , {
            left:details.x-1000,
            top:details.y-150,
        })
    })
}
movingCircle6();

// Radio buttons click to change the text

function OnclickRadio(){
    // button 1
    let radioBtn=document.querySelector("#label1");
    let element = document.querySelector("#h1-elem1");

    let radioBtn2 =document.querySelector("#label2");
    let element2  = document.querySelector("#h1-elem2");

    let radioBtn3 =document.querySelector("#label3");
    let element3  = document.querySelector("#h1-elem3");

    let radioBtn4 =document.querySelector("#label4");
    let element4 = document.querySelector("#h1-elem4");

    radioBtn.addEventListener("click" , ()=>{
            gsap.to(element ,{
                opacity:1
            })
            gsap.from("#h1-elem1 span" ,{
                y: -100,
                opacity:0,
                delay:0.2, 
                duration:0.2,
                stagger:0.1
            })

            gsap.to("#h1-elem2, #h1-elem3, #h1-elem4",{
                opacity:0,
            })
    })

    // btn 2
    radioBtn2.addEventListener("click" , ()=>{

            gsap.to("#h1-elem1,#h1-elem3, #h1-elem4",{
                opacity:0,
            })

            gsap.to(element2 ,{
                opacity:1
            })

            gsap.from("#h1-elem2 span" ,{
                y: -100,
                opacity:0,
                delay:0.2, 
                duration:0.2,
                stagger:0.1
            })
    })

    // btn 3
    radioBtn3.addEventListener("click" , ()=>{

            gsap.to("#h1-elem1,#h1-elem2, #h1-elem4",{
                opacity:0,
            })

            gsap.to(element3 ,{
                opacity:1
            })

            gsap.from("#h1-elem3 span" ,{
                y: -100,
                opacity:0,
                delay:0.2, 
                duration:0.2,
                stagger:0.1
            })
    })

    // btn 4
    radioBtn4.addEventListener("click" , ()=>{

            gsap.to("#h1-elem1,#h1-elem2, #h1-elem3",{
                opacity:0,
            })

            gsap.to(element4 ,{
                opacity:1
            })

            gsap.from("#h1-elem4 span" ,{
                y: -100,
                opacity:0,
                delay:0.2, 
                duration:0.2,
                stagger:0.1
            })
    })

}
OnclickRadio();

function footerMove(){
    gsap.from(".footer-a" , {
        y:100,
        opacity:0,
        duration:0.2,
        stagger:0.1
    })

    gsap.from("#circle1", {
        x: -100,
        opacity:0,
        duration:0.3,
        delay:0.2,
    })

    gsap.from(" #circle2" , {
        y:-100,
        opacity:0,
        duration:0.3,
        delay:0.2,
    })

    gsap.from("#cross1", {
        x: -100,
        opacity:0,
        duration:0.3,
        delay:0.2,
    })

    gsap.from(" #cross2" , {
        y:-100,
        opacity:0,
        duration:0.3,
        delay:0.2,
    })
}
footerMove();
// sticky navbar
// window.onscroll = function() {myFunction()};

// const navbarsticky = document.querySelector(".navbar");
// const sticky = navbarsticky.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbarsticky.classList.add("sticky")
//   } else {
//     navbarsticky.classList.remove("sticky");
//   }
// }



// create a responsive navbar togale button hide and show-------------
// ==================================================================
const mobile_nav=document.querySelector('.mobile-navbar-btn');
const hederElem = document.querySelector('.header');

mobile_nav.addEventListener('click',()=>{
    hederElem.classList.toggle("active")
})



// creating a portfolio tabedd component

const p_btns=document.querySelector(".p-btns");
const p_btn=document.querySelectorAll(".p-btn");
const p_img_elem=document.querySelectorAll(".image-overlay")

// event

p_btns.addEventListener("click",(e)=>{
    const p_btn_clicked= e.target;
    console.log(p_btn_clicked)

    p_btn.forEach((curelem)=>curelem.classList.remove("p-btn-active"));

    p_btn_clicked.classList.add("p-btn-active")

    // find the number data atrribute
    const btn_num=p_btn_clicked.dataset.btnNum;
    console.log(btn_num)


    // find image with the help number
const img_active=document.querySelectorAll(`.p-btn--${btn_num}`)

// hidden all image
p_img_elem.forEach((curelem)=>curelem.classList.add("p-images-not-active"));

img_active.forEach((curelem)=>curelem.classList.remove("p-images-not-active"));

    // p-btn--1
})

// swiper======================================
 new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay:{
delay:2500,
disableOnInteraction:false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


//   media query for testimonial

// behal on condition
const myjsmedia=(widthSize)=>{
    if(widthSize.matches){

         new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 30,
           
          });   
        
    }
    else{
        new Swiper(".mySwiper", {
            slidesPerView: 2,
            spaceBetween: 30,
           
          });   
    }
}

const widthSize= window.matchMedia("(max-width: 780px)");

// call listner function at a run time
myjsmedia(widthSize)
// attach listner function on state change
widthSize.addEventListener('change',myjsmedia)
//   scroll div create daynamic=====================for bottom to top

const herosection=document.querySelector(".section-hero");
const footerElem=document.querySelector(".section-footer");
const scrollTotop= document.createElement("div");
 scrollTotop.classList.add("scrollTop-style");
 scrollTotop.innerHTML= `<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;
 footerElem.after(scrollTotop)

//  function----------

const upscroll = ()=>{
    herosection.scrollIntoView({behavior:"smooth"})
}

 scrollTotop.addEventListener("click" , upscroll);


//  counter animate=============================

const countNum=document.querySelectorAll(".counter-number");
const speed=200;
countNum.forEach((curelem)=>{
const updateNumber=()=>{
    const targetNumber= parseInt(curelem.dataset.number)
    // console.log(targetNumber)

    const initilNum=parseInt(curelem.innerText);
    // console.log(initilNum)

    const incrementNum=Math.trunc(targetNumber/speed)
    // we can use tranc element desimal number
    // console.log(incrementNum)
    if(initilNum< targetNumber){
        curelem.innerText=`${initilNum + incrementNum}+`;
        setTimeout(updateNumber,10)
    }
};
updateNumber();
})

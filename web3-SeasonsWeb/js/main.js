var swiper = new Swiper(".bg-slider-thumbs", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 0,
  });
  var swiper2 = new Swiper(".bg-slider", {
    loop: true,
    spaceBetween: 0,
    thumbs: {
      swiper: swiper,
    },
  });

window.addEventListener("scroll",function(){
    const header=document.querySelector("header");
    header.classList.toggle("sticky",this.window.scrollY>0);
})

const menu= document.querySelector(".nav-menu-btn");
const closebtn= document.querySelector(".nav-btn-close");
const navigation = document.querySelector(".navigation");

menu.addEventListener("click", ()=>{
    navigation.classList.add("active");
});
closebtn.addEventListener("click", ()=>{
    navigation.classList.remove("active");
});
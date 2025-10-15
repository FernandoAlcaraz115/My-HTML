let correntSlide = 0;

const slides = document.querySelectorAll(".slide");
function showSlide(index){
    slides.forEach((slide,i) =>{
        slide.classList.toggle("active", i === index);
    });
}
 function changeSlide(direction){
    correntSlide += direction; 
    if(correntSlide < 0) concurrentSlide = slides.length -1;
    if(correntSlide >= slides.length) correntSlide = 0;
    showSlide(correntSlide);{ 
 }
}
const next  = document.querySelector(".next");
const prev  = document.querySelector(".prev");
let slideImages = document.querySelectorAll(".slide-images > .img-wrapper");
const slideContainer = document.querySelector(".slide-container");
let dots = document.querySelectorAll(".slide-dots > .dot");

let counter = 0;

function runSlide(){
    slideImages[counter].style.animation = "next1 1s forwards"
    if(counter >= slideImages.length -1){
        counter = 0;
    }else{
        counter ++
    }
    slideImages[counter].style.animation = "next2 1s forwards";
};

next.addEventListener("click", ()=>{
    runSlide();
    runDots()
});

prev.addEventListener("click", ()=>{
    slideImages[counter].style.animation = "prev1 1s forwards"
    if(counter == 0){
        counter = slideImages.length -1;
    }else{
        counter --;
    }
    slideImages[counter].style.animation = "prev2 1s forwards";
    runDots()
})

function interval(){
    runInterval = setInterval(() => {
    runSlide()
    runDots()
}, 3000);
} ;

interval();

slideContainer.addEventListener("mouseover", ()=>{
    clearInterval(runInterval);
})
slideContainer.addEventListener("mouseleave", ()=>{
    interval();
})

function runDots(){
    for(let i=0 ; i<dots.length; i++){
        dots[i].className = dots[i].className.replace("actives", "")
    };
    dots[counter].className += (" actives")
};
runDots()

dots.forEach((dot)=>{
    dot.addEventListener("click", (e)=>{
        e.target.classList.add("actives");
        const attr = e.currentTarget.getAttribute("attr");
        console.log(attr)
        
        if(attr < counter){
            slideImages[counter].style.animation = "prev1 1s forwards";
            counter = attr
            slideImages[counter].style.animation = "prev2 1s forwards";
        }else if(attr == counter){
            return null;
        }
        else{
            slideImages[counter].style.animation = "next1 1s forwards";
            counter = attr
            slideImages[counter].style.animation = "next2 1s forwards";
        }
        runDots()
    })
})
// ------------------------news---------------------------------------/
let newsContents = [
    {
        img: "./img/Wallspaper.jpg",
        content: "Heads up! Chan Phal apologizes for losing and turns the fan feeling down",
        date: "DEC 21, 2023"
    },
    {
        img: "./img/Wallspaper-2.jpg",
        content: "Heads up! Chan Phal apologizes for losing and turns the fan feeling down",
        date: "DEC 23, 2023"
    },
    {
        img: "./img/Wallspaper-3.jpg",
        content: "Heads up! Chan Phal apologizes for losing and turns the fan feeling down",
        date: "DEC 26, 2023"
    },
    {
        img: "./img/Wallspaper-4.jpg",
        content: "Heads up! Chan Phal apologizes for losing and turns the fan feeling down",
        date: "DEC 25, 2023"
    },
    {
        img: "./img/Wallspaper-3.jpg",
        content: "Heads up! Chan Phal apologizes for losing and turns the fan feeling down",
        date: "DEC 26, 2023"
    },
    {
        img: "./img/Wallspaper-4.jpg",
        content: "Heads up! Chan Phal apologizes for losing and turns the fan feeling down",
        date: "DEC 25, 2023"
    },

]

const newsContainer = document.querySelector(".news-container");


    const showObject = newsContents.map((news)=>{
        return `
        <div class="news-box-container">
        <div class="news-box">
            <div class="news-top">
                <h3>DOMREY UPDATE</h3>
                <h3>${news.date}</h3>
            </div>
            <div class="news-title">
                <img src="${news.img}" alt="">
                <h4>${news.content}</h4>
            </div>
            <button class="news-read-more"><h4>Read More ></h4></button>
        </div>
        </div>
        `
    }).join("")


window.addEventListener("DOMContentLoaded",(e)=>{
   newsContainer.innerHTML = showObject
});

// -----------------------------click lot nav bar------------------------

const loadBtn = document.querySelector(".click-active");
const loadBtnUn = document.querySelector(".click-unactive");
const navList = document.querySelector(".menu-list");

loadBtn.addEventListener("click", ()=>{
    navList.style.animation = "click1 0.3s forwards"
})
loadBtnUn.addEventListener("click", ()=>{
    navList.style.animation = "click2 0.3s forwards"
})

const nav = document.querySelector("nav")
const hamburger = document.querySelector(".hamburger")
const navItemsMid = document.querySelector(".nav-items-mid");
const navItemsRight = document.querySelector(".nav-items-right");
const navItemLeft = document.querySelector(".nav-item-left");
const topImg = document.querySelector(".section-one-div-right > img");
const phoneImg = document.querySelector(".mid-nested-container-wrapper-img > img");

nav.appendChild(hamburger)
let hamburgerClicked = false;



function removeClass(){

}




hamburger.addEventListener("click", () => {
    switch (hamburgerClicked){
        case true:
            hamburgerClicked = false;
            break;
        case false:
            hamburgerClicked = true;
            break;
    }
    if(hamburgerClicked == true){
        nav.classList.add("nav-small-screan");
        navItemLeft.classList.add("spense-margin")
        const animated = document.querySelector('.nav-small-screan');
        animated.addEventListener('animationend', () => {
            navItemsMid.classList.add("nav-open");
            navItemsRight.classList.add("nav-open")
          });
    } else{
        navItemsMid.classList.remove("nav-open");
        navItemsRight.classList.remove("nav-open")
        navItemLeft.classList.remove("spense-margin")
        nav.classList.remove("nav-small-screan");
    }
    // console.log(animated)
})


//change top img

let changeImg = () => {
    if($(".media").css("float") == "none"){
        topImg.src = "Assets/Hero Image (Mobile).png"
        phoneImg.src ="Assets/Phone Mockup (Mobile).png"
        phoneImg.className = ""
    }
        else if($(".media").css("float") == "left"){
            topImg.src = "Assets/Hero Image (Tablet).png"
            phoneImg.src ="Assets/Phone Mockup (Tablet).png"

            phoneImg.className = ""
            if(hamburgerClicked == true){
                hamburgerClicked = false;
                navItemsMid.classList.toggle("nav-open");
                navItemsRight.classList.toggle("nav-open")
                navItemLeft.classList.toggle("spense-margin")
                nav.classList.toggle("nav-small-screan");
            }
        }
        else if ($(".media").css("float") == "right"){
            topImg.src = "Assets/Hero Image (Desktop).png"
            phoneImg.src ="Assets/Phone Mockup (Desktop).png"
            phoneImg.className = "object_fit"
            if(hamburgerClicked == true){
                hamburgerClicked = false;
                navItemsMid.classList.toggle("nav-open");
                navItemsRight.classList.toggle("nav-open")
                navItemLeft.classList.toggle("spense-margin")
                nav.classList.toggle("nav-small-screan");
            }
        }
}


window.addEventListener('DOMContentLoaded', changeImg);

window.addEventListener('resize', changeImg)

//change top img



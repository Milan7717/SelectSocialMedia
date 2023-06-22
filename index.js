const menuEl = document.querySelector(".menu");
const menuTextEl = document.querySelector(".menu p");
const sociallistEl = document.querySelector(".social-lists");
const liEls=document.querySelectorAll(".social-lists li")



menuEl.addEventListener("click", () => {

sociallistEl.classList.toggle("hide");
menuEl.classList.toggle("rotate");

});

liEls.forEach(liEl=>{
    liEl.addEventListener("click",()=>{
        menuTextEl.innerHTML=liEl.innerHTML
        menuTextEl.style.fontSize="17px";
        sociallistEl.classList.add("hide")
        menuEl.classList.toggle("rotate");
    })
})
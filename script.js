let navLink = document.querySelectorAll(".nav-link");
console.log(navLink);

navLink.forEach((tab)=>{
    tab.addEventListener("click",()=>{
        tab.classList.add("actived")
    })
})
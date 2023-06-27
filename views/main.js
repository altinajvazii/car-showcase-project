//Get elements from the DOM
const menuBtn = document.querySelector(".menu-btn");
const menuBtnMobile = document.querySelector(".menu-btn-mobile");
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close-btn");
const backdrop = document.querySelector(".sidebar-backdrop");
const navbarMenu = document.querySelector(".navbar-menu");

//Initialize on scroll animations
AOS.init();

//Add menu click events
menuBtn.addEventListener("click", sidebarOpen);
menuBtnMobile.addEventListener("click", sidebarOpen);

/*Open sidebar function*/
function sidebarOpen() {
    //Change sidebar position
    sidebar.style.right = "0";
    //Show backdrop
    backdrop.style.display = "block";
    //Show backdrop through a smooth transition
    setTimeout(() => {
        backdrop.style.opacity = "1";
    }, 50);
    //Disable scroll on body
    document.body.classList.add("sidebar-open-body");
}
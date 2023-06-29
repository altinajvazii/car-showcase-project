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

//Add the close button click event
closeBtn.addEventListener("click", () => {
    //Change sidebar position
    sidebar.style.right = "-20em";
    //Hide backdrop with a smooth transition
    backdrop.style.opacity = "0";
    //Hide backdrop after the transition is done
    setTimeout(() => {
        backdrop.style.display = "none";
    }, 300);
    //Make the body scrollable again
    document.body.classList.remove("sidebar-open-body");
});

//Custom scroll event (Changing the image)
//Get elements from DOM
const text = document.querySelector(".roof-text");
const roofImg = document.querySelector(".banner-img");

//Add a scroll event to the document
window.addEventListener("scroll", () => {
    //When the text element is animated
    if (text.classList.contains("aos-animate")) {
        //Show the second roof image, with glass roof
        roofImg.classList.add("roof-2");
        //When the animation is removed
    } else {
        //Revert back to the first image
        roofImg.classList.remove("roof-2");
    }
});

// Get the Reserve Now button element
const reserveBtn = document.getElementById("reserve-btn");

// Add click event listener to the button
reserveBtn.addEventListener("click", () => {
    // Show loader animation
    showLoader();

    // Delay the redirection to simulate loading
    setTimeout(() => {
        // Redirect to the reservation.html page
        window.location.href = "reservation.html";
    }, 300); // Adjust the delay time (in milliseconds) as needed
});

// Function to show loader animation
function showLoader() {
    // Create a loader element
    const loader = document.createElement("div");
    loader.classList.add("loader");

    // Add loader element to the body
    document.body.appendChild(loader);

    // Initialize AOS animations on the loader
    AOS.init({
        target: loader,
        once: true,
    });
}
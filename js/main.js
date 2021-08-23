//---------navbar
(() => {
    const humburgerBtn = document.querySelector(".humburger-btn"),
    navMenu = document.querySelector(".nav-menu"),
    closeNavMenu = document.querySelector(".close-nav-menu");

    humburgerBtn.addEventListener("click",showNavMenu);
    closeNavMenu.addEventListener("click",hideNavMenu);
    // show navbar on click
    function showNavMenu(){
     navMenu.classList.add("open");
     bodyScrollingToggle();
    }

    // hide navbar on click
    function hideNavMenu(){
        navMenu.classList.remove("open");
        fadeOutEffect();
        bodyScrollingToggle();
       }

    function fadeOutEffect(){
     document.querySelector(".fade-out-effect").classList.add("active");
     setTimeout(function(){
        document.querySelector(".fade-out-effect").classList.remove("active");
     },300)
    };
    document.addEventListener("click",(event) =>{
        if(event.target.classList.contains("link-item")){
            if(event.target.hash !==""){
                event.preventDefault();
                const hash = event.target.hash;
                document.querySelector(".section.active").classList.add("hide");
                document.querySelector(".section.active").classList.remove("active");
                document.querySelector(hash).classList.add("active");
                document.querySelector(hash).classList.remove("hide");
                navMenu.querySelector(".active").classList.add("outer-shadow","hover-in-shadow");
                navMenu.querySelector(".active").classList.remove("active","inner-shadow");
                if(navMenu.classList.contains("open")){
                    event.target.classList.add("active","inner-shadow");
                    event.target.classList.remove("outer-shadow","hover-in-shadow");
                    // hide nav menu
                    hideNavMenu();
                }else{
                    let navItems = navMenu.querySelectorAll(".link-item");
                    navItems.forEach((item) => {
                        if(hash === item.hash){
                            item.classList.add("active","inner-shadow");
                            item.classList.remove("outer-shadow","hover-in-shadow");
                        }
                    });
                    fadeOutEffect();
                }
                // hash ul
                window.location.hash = hash;

            }
        }
    })
})();




// -----about tabs-------
(() =>{
    const aboutSection = document.querySelector('.about-section'),
    tabsContainer = document.querySelector('.about-tabs');

   tabsContainer.addEventListener("click",function (event){
       if(event.target.classList.contains("tab-item") && //if tab item is present and doesnt contain active
            !event.target.classList.contains("active")){
                const target = event.target.getAttribute("data-target");
                //deactivate existing tab items
                tabsContainer.querySelector(".active").classList.remove("outer-shadow","active");
                //activate new tab items
                event.target.classList.add("active","outer-shadow");
                // deactivate outer existing tab items content
                aboutSection.querySelector(".tab-content.active").classList.remove("active");
                // activate new tab content
                aboutSection.querySelector(target).classList.add("active");
            }
   });
})();

// filter and pop up new tab content
(() => {
    const filterContainer = document.querySelector(".portfolio-filter"),
    portfolioItemsContainer = document.querySelector(".portfolio-items"),
    portfolioItems = document.querySelectorAll(".portfolio-item");
    
    // grouping the projects
    filterContainer.addEventListener("click", function(event){
        if(event.target.classList.contains("filter-item") && 
            !event.target.classList.contains("active")){
                // deactivate existing filter item
                filterContainer.querySelector(".active").classList.remove("outer-shadow", "active");
                // activate new filter item
                event.target.classList.add("active","outer-shadow");

                const target = event.target.getAttribute("data-target");
                portfolioItems.forEach((item) => {
                    if(target === item.getAttribute("data-category") || target === "all"){
                        item.classList.remove("hide");
                        item.classList.add("show");
                    }else{
                        item.classList.remove("show");
                        item.classList.add("hide");
                    }
                });
            };
    });
    portfolioItemsContainer.addEventListener("click", function (event){
        console.log(event.target);
    })
})();

// hide all sections except the active section
(() => {
    const sections = document.querySelectorAll(".section");
    sections.forEach((section) =>{
        if (!section.classList.contains("active")){
            section.classList.add("hide");
        }
    });
})();

// forms
$(document).ready(function () {
    $("form").submit(function (e) {
      e.preventDefault();
      $("#submit").click(function (){
        $(".form-footer").show();
  let userName = $("#fullname").val();
  let userMessage = $("#comment").val();
  let userLocation = $("#location").val();
  $(".user-name").html(userName);
  $(".user-message").html(userMessage);
  $(".user-location").html(userLocation);
      })
    });
  });


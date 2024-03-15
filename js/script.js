(() =>{
 
    const openNavMenu = document.querySelector(".open-nav-menu"),
    closeNavMenu = document.querySelector(".close-nav-menu"),
    navMenu = document.querySelector(".nav-menu"),
    menuOverlay = document.querySelector(".menu-overlay"),
    mediaSize = 991;
  
    openNavMenu.addEventListener("click", toggleNav);
    closeNavMenu.addEventListener("click", toggleNav);
    // close the navMenu by clicking outside
    menuOverlay.addEventListener("click", toggleNav);
  
    function toggleNav() {
        navMenu.classList.toggle("open");
        menuOverlay.classList.toggle("active");
        document.body.classList.toggle("hidden-scrolling");
    }
  
    navMenu.addEventListener("click", (event) =>{
        if(event.target.hasAttribute("data-toggle") && 
            window.innerWidth <= mediaSize){
            // prevent default anchor click behavior
            event.preventDefault();
            const menuItemHasChildren = event.target.parentElement;
          // if menuItemHasChildren is already expanded, collapse it
          if(menuItemHasChildren.classList.contains("active")){
              collapseSubMenu();
          }
          else{
            // collapse existing expanded menuItemHasChildren
            if(navMenu.querySelector(".menu-item-has-children.active")){
              collapseSubMenu();
            }
            // expand new menuItemHasChildren
            menuItemHasChildren.classList.add("active");
            const subMenu = menuItemHasChildren.querySelector(".sub-menu");
            subMenu.style.maxHeight = subMenu.scrollHeight + "px";
          }
        }
    });
    function collapseSubMenu(){
        navMenu.querySelector(".menu-item-has-children.active .sub-menu")
        .removeAttribute("style");
        navMenu.querySelector(".menu-item-has-children.active")
        .classList.remove("active");
    }
    function resizeFix(){
         // if navMenu is open ,close it
         if(navMenu.classList.contains("open")){
             toggleNav();
         }
         // if menuItemHasChildren is expanded , collapse it
         if(navMenu.querySelector(".menu-item-has-children.active")){
              collapseSubMenu();
       }
    }
  
    window.addEventListener("resize", function(){
       if(this.innerWidth > mediaSize){
           resizeFix();
       }
    });
  
  })();

  // Access the testimonials
  let testSlide = document.querySelectorAll('.testItem');
  // Access the indicators
  let dots = document.querySelectorAll('.dot');

  var counter = 0;

  //Add click event to the indicators
  function switchTest(currentTest){
    currentTest.classList.add('active');
    var testId = currentTest.getAttribute('attri');
    if(testId > counter){
      testSlide[counter].style.animation = 'next1 0.5s ease-in forwards';
      counter = testId;
      testSlide[counter].style.animation = 'next2 0.5s ease-in forwards';
    }
    else if(testId == counter){return;}
    else{
      testSlide[counter].style.animation = 'prev1 0.5s ease-in forwards';
      counter = testId;
      testSlide[counter].style.animation = 'prev2 0.5s ease-in forwards';
    }
    indicators();
  }

  // Add and remove active class from the indicators
  function indicators(){
    for(i = 0; i < dots.length; i++){
      dots[i].className = dots[i].className.replace(' active', '');
    }
    dots[counter].className += ' active';
  }

  //Code for auto sliding
  function slideNext(){
    testSlide[counter].style.animation = 'next1 0.5s ease-in forwards';
    if(counter >= testSlide.length - 1){
      counter = 0;
    }
    else{
      counter++;
    }
    testSlide[counter].style.animation = 'next2 0.5s ease-in forwards';
    indicators();
  }
    function autoSliding(){
      deleteInterval = setInterval(timer, 2000);
      function timer(){
        slideNext();
        indicators();
      }
   }
   autoSliding();

   // Stop auto sliding when mouse is over the indicators
   const container = document.querySelector('.indicators');
   container.addEventListener('mouseover', pause);
   function pause(){
    clearInterval(deleteInterval);
   }

   // Resume sliding when mouse is out of the indicators
   container.addEventListener('mouseout', autoSliding);


  


// (() => {
//   const openNavMenu = document.querySelector(".open-nav-menu"),
//       closeNavMenu = document.querySelector(".close-nav-menu"),
//       navMenu = document.querySelector(".nav-menu"),
//       menuOverlay = document.querySelector(".menu-overlay"),
//       mediaSize = 991;

//   openNavMenu.addEventListener("click", toggleNav);
//   closeNavMenu.addEventListener("click", toggleNav);
//   menuOverlay.addEventListener("click", toggleNav);

//   function toggleNav() {
//       navMenu.classList.toggle("open");
//       menuOverlay.classList.toggle("active");
//       document.body.classList.toggle("hidden-scrolling");
//   }

//   navMenu.addEventListener("click", (event) => {
//       if (event.target.hasAttribute("data-toggle") &&
//           window.innerWidth <= mediaSize) {
//           event.preventDefault();
//           const menuItemHasChildren = event.target.parentElement;

//           if (menuItemHasChildren.classList.contains("active")) {
//               collapseSubMenu();
//           } else {
//               if (navMenu.querySelector(".menu-item-has-children.active")) {
//                   collapseSubMenu();
//               }
//               menuItemHasChildren.classList.add("active");
//               const subMenu = menuItemHasChildren.querySelector(".sub-menu");
//               subMenu.style.maxHeight = subMenu.scrollHeight + "px";
//           }
//       }
//   });

//   function collapseSubMenu() {
//       navMenu.querySelector(".menu-item-has-children.active .sub-menu")
//           .removeAttribute("style");
//       navMenu.querySelector(".menu-item-has-children.active")
//           .classList.remove("active");
//   }

//   function resizeFix() {
//       if (navMenu.classList.contains("open")) {
//           toggleNav();
//       }
//       if (navMenu.querySelector(".menu-item-has-children.active")) {
//           collapseSubMenu();
//       }
//   }

//   window.addEventListener("resize", function () {
//       if (this.innerWidth > mediaSize) {
//           resizeFix();
//       }
//   });

//   // Name field validation
//   const nameInput = document.getElementById("name");
//   const nameError = document.getElementById("nameError");

//   nameInput.addEventListener("input", validateName);

//   function validateName() {
//       const regex = /^[a-zA-Z]+$/;
//       const nameValue = nameInput.value.trim();

//       if (!regex.test(nameValue)) {
//           nameError.innerHTML = "Please enter only alphabets in the name field.";
//       } else {
//           nameError.innerHTML = "";
//       }
//   }

//   // Rest of your code...

  
//     // Phone number field validation
//     const phoneInput = document.getElementById("phone");
//     const phoneError = document.getElementById("phoneError");

//     phoneInput.addEventListener("input", validatePhone);

//     function validatePhone() {
//         const regex = /^[0-9]+$/;
//         const phoneValue = phoneInput.value.trim();

//         if (!regex.test(phoneValue)) {
//             phoneError.innerHTML = "Please enter only digits in the phone number field.";
//         } else {
//             phoneError.innerHTML = "";
//         }
//     }

//     // Rest of your code...

// })();
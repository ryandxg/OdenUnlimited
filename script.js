const items = document.getElementById("menuItems");
const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");

// openMenu.addEventListener("click", () => {
//   if (items.style.display !="flex"){
//   items.style.display = "flex";
//   closeMenu.style.display = "block"
//   openMenu.style.display = "none"
//   } else {
//   items.style.display = "none";
//   }
// });

// closeMenu.addEventListener("click", () => {
//   if (items.style.display !="none"){
//   items.style.display = "none";
//   closeMenu.style.display = "none";
//   openMenu.style.display = "block";
//   } else {
      
//   }
// });

openMenu.addEventListener("click", () => {
  document.getElementById("mySidenav").style.width = "55%";
  $("#body").addClass("scroll");
});

closeMenu.addEventListener("click", () => {
  document.getElementById("mySidenav").style.width = "0";
  $("#body").removeClass("scroll");
});





$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    autoplay: 2000,
    navText: ["<i class = 'fa fa-chevron-left'></i>", "<i class = 'fa fa-chevron-right'></i>"],
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  })
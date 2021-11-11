var sideButton = document.getElementsByClassName("menu-button")[0];
var sideMenu = document.getElementsByClassName("sideMenu")[0];
var overlay = document.getElementsByClassName("overlay")[0];
var exitButton = document.getElementById("exitButton");

var screenActive = false;
// console.log(overlay);

sideButton.addEventListener("click", function(evt) {
    overlay.style.visibility = 'visible';
    sideMenu.classList.add("sideMenuActive");
});

exitButton.addEventListener("click", function(evt) {
    overlay.style.visibility = 'hidden';
    sideMenu.classList.remove("sideMenuActive");
})

// overlay.addEventListener("click", function (evt) {
//     overlay.style.visibility = 'hidden';
//     sideMenu.classList.remove("sideMenuActive");
// })

// jquery equivalent //

$('.overlay').on("click", function(evt) {
    if(screenActive) {
        console.log(screenActive);
        $('.overlay').css({visibility: 'hidden'});
        $('.sideMenu').removeClass("sideMenuActive");
    }
})


// Modal part //

setTimeout(function() {
    $('.modal').css({visibility: 'visible'});
    $('.overlay').css({visibility: 'visible'});

} ,1000)

$('#exitButtonModal').on("click", function(evt) {
    $('.modal').css({visibility: 'hidden'});
    $('.overlay').css({visibility: 'hidden'});
    screenActive = true;
})
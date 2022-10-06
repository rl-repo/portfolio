
// // When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// // Get the header
var header = document.getElementById("myHeader");

// // Get the offset position of the navbar
var sticky = header.offsetTop;

// // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
   if (window.pageYOffset - 50 > sticky) {
     header.classList.add("sticky");
   } else {
     header.classList.remove("sticky");
   }
 } 



 function scrollFunction1() {
  let e = document.getElementById("about");
  e.scrollIntoView({
    block: 'start',
    behavior: 'smooth',
    inline: 'start'
   });
 }
 function scrollFunction2() {
  let e = document.getElementById("exp");
  e.scrollIntoView({
    block: 'start',
    behavior: 'smooth',
    inline: 'start'
   });
 }


 /*
 $(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
*/
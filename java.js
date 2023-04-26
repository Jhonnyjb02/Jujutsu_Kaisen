const slides = document.querySelectorAll('.mySlides');
      let slideIndex = 0;
      
      function showSlides() {
        slides[slideIndex].classList.remove('active');
        slideIndex++;
        if (slideIndex >= slides.length) {
          slideIndex = 0;
        }
        slides[slideIndex].classList.add('active');
        setTimeout(showSlides, 5000); // change slide every 5 seconds
      }
      
      showSlides();

showSlides();

window.onload = function() {
    var subContainers = document.getElementsByClassName("sub-container");
    for (var i = 0; i < subContainers.length; i++) {
      var img = subContainers[i].getElementsByTagName("img")[0];
      subContainers[i].style.width = img.width + "px";
      subContainers[i].style.height = img.height ;
    }
  }
window.addEventListener("load", function () {
  document
    .querySelector(".menu-container")
    .addEventListener("scroll", function () {
      const blur = document.getElementsByClassName("blur");
      if (Math.ceil(this.scrollLeft) + this.offsetWidth == this.scrollWidth) {
        blur[0].style.display = "none";
        //  console.log('final')
      } else {
        blur[0].style.display = "block";
      }
    });
});

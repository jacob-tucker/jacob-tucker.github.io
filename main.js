const doIt = () => {
  var element = document.getElementById("spans");
  var element2 = document.getElementById("mobile_selector");
  var element3 = document.getElementById("mobile_selector2");

  for (let i = 0; i < 3; i++) {
    if (element.children[i].classList.contains("hello")) {
      element.children[i].classList.remove("hello");
    } else {
      element.children[i].classList.add("hello");
    }
  }
  if (element.children[0].classList.contains("hello")) {
    element2.style.visibility = 'visible';
    element2.classList.add('showIt');
    element3.style.visibility = 'visible';
    element3.classList.add('showIt');
  } else {
    element2.style.visibility = 'hidden';
    element3.style.visibility = 'hidden';
  }

}

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos || window.scrollY === 0) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("bottominfo").style.top = '90%';
  } else {
    document.getElementById("navbar").style.top = "-11%";
    document.getElementById("bottominfo").style.top = '100%';
  }
  prevScrollpos = currentScrollPos;
}

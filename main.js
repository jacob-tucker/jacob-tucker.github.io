const doIt = () => {
  var element = document.getElementById("spans");
  var element2 = document.getElementById("mobile_selector");
  var element3 = document.getElementById("mobile_selector2");

  for(let i = 0; i < 3; i++){
    if(element.children[i].classList.contains("hello")){
      element.children[i].classList.remove("hello");
    }else{
      element.children[i].classList.add("hello");
    }
  }
  if(element.children[0].classList.contains("hello")){
    element2.style.visibility = 'visible';
    element2.classList.add('showIt');
    element3.style.visibility = 'visible';
    element3.classList.add('showIt');
  }else{
    element2.style.visibility = 'hidden';
    element3.style.visibility = 'hidden';
  }

}

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("bottominfo").style.top = '90%';
  } else {
    document.getElementById("navbar").style.top = "-11%";
    document.getElementById("bottominfo").style.top = '100%';
  }
  prevScrollpos = currentScrollPos;
}


function yourfunction() {
    if(localStorage.getItem('counter') === null){
      localStorage.setItem('counter', 1)
    }
    if(localStorage.getItem('counter') == 1){
      document.getElementById('loader-wrapper').style.animation = "intro 1.25s ease-in forwards";
      document.getElementById('span1').style.animation = "intro1 .25s 0s ease-in forwards";
      document.getElementById('span2').style.animation = "intro2 .25s .25s ease-in forwards";
      document.getElementById('span3').style.animation = "intro3 .25s .5s ease-in forwards";
      document.getElementById('span4').style.animation = "intro4 .25s .75s ease-in forwards";
      localStorage.setItem('counter', 2)
    }


}

window.onload = yourfunction;
window.onbeforeunload = function () {
    localStorage.removeItem('counter')
};

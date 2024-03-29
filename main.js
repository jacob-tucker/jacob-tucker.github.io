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
    element2.style.display = 'block';
    element2.classList.add('showIt');
    element3.style.display = 'block';
    element3.classList.add('showIt');
  } else {
    element2.style.display = 'none';
    element3.style.display = 'none';
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

function fillNavForProjects() {
  const navDiv = document.getElementById('navbar')
  navDiv.innerHTML = `
  <div class='page_links'>
      <a href='../index.html'>
        <h4>ABOUT ME</h4>
      </a>
      <a href='./projects.html'>
        <h4>PROJECTS</h4>
      </a>
      <a href='../experience/experience.html'>
        <h4>EXPERIENCE</h4>
      </a>
      <a href='../contact/contact.html'>
        <h4>CONTACT</h4>
      </a>
      <a target="_blank" href='../gifs/resume.pdf'>
        <h4>RESUME</h4>
      </a>
    </div>
  <a class="mobile_stuff" id="spans" onclick="doIt()">
    <span></span>
    <span></span>
    <span></span>
  </a>
  <!-- Navbar part of slider -->
  <div class="slider" id="mobile_selector"></div>`

  const secondNavDiv = document.getElementById('mobile_selector2')
  secondNavDiv.innerHTML = `<p>01.</p>
  <a href='../index.html'>
    <h4>ABOUT ME</h4>
  </a>
  <p>02.</p>
  <a href='./projects.html'>
    <h4>PROJECTS</h4>
  </a>
  <p>03.</p>
  <a href='../experience/experience.html'>
    <h4>EXPERIENCE</h4>
  </a>
  <p>04.</p>
  <a href='../contact/contact.html'>
    <h4>CONTACT</h4>
  </a>
  <p>05.</p>
  <a target="_blank" href='../gifs/resume.pdf'>
    <h4>RESUME</h4>
  </a>`
}

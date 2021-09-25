let navbar = document.querySelector('.navbar');
navbar.innerHTML = `
  <nav class="firstNav">
      <img class="logo" src="sarthi_logo.jpg" alt="" />
      <div class="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
    <nav class = "secondNav" >
    <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="#aboutus">About us</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li class=" category"><a href="#">category<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16"> <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/> </svg>
        <div class="dropDown">
          <span>IIT-Jee</span>
          <span>Medical</span>
          <a class = 'quiz'><span>Quiz</span></a>
        </div>
        <div class="dropDown dropDown2">
          <a class = "class11"><span>class 11</span></a>
          <a class = "class12"><span>class 12</span></a>
        </div>
        </a></li>
        <li><a href="#contact">Contact us</a></li>
      </ul> 
      </nav>
`
let category = document.querySelector('.category');
let dropDown = document.querySelector('.dropDown');
let dropDown2 = document.querySelector('.dropDown2');
category.addEventListener('mouseover', function() {
  dropDown.classList.add('active');
})
category.addEventListener('mouseout', function() {
  dropDown.classList.remove('active');
});
dropDown.addEventListener('click', function() {
  dropDown2.classList.toggle('active');
});
window.onscroll = () => {
  if (scrollY > 50) {
    navbar.style.position = 'fixed';
    navbar.style.top = 0;
    navbar.style.left = 0;
  }
  else if (scrollY == 0) {
    navbar.style.position = 'static';
  }
}
let hamburger = document.querySelector('.hamburger');
let secondNav = document.querySelector('.secondNav');
hamburger.addEventListener('click', function() {
  secondNav.classList.toggle('active');
  hamburger.classList.toggle('active');
});
let quiz = document.querySelector('.quiz');
quiz.addEventListener('click',function(){
  window.location.href = 'Quiz.html'
})
let class11 = document.querySelector('.class11');
class11.addEventListener('click',function(){
  window.location.href = 'class11.html'
})
let class12 = document.querySelector('.class12');
class12.addEventListener('click',function(){
  window.location.href = 'class12.html'
})

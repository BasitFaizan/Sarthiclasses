let SectionTwo = document.querySelector('.sectionTwo');
SectionTwo.innerHTML = `
  <div class="Subjective Mathematics">
        <h2>Math</h2>
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
          </svg>
        </div>
      </div>
      <div class="contentOne"></div>
      <div class="Subjective Bio">
        <h2>Biology</h2>
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
          </svg>
        </div>
      </div>
      <div class="contentOne1"></div>
      <div class="Subjective Physics">
        <h2>Physics</h2>
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
          </svg>
        </div>
      </div>
      <div class="contentOne2"></div>
      <div class="Subjective Chemistry">
        <h2>Chemistry</h2>
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
          </svg>
        </div>
      </div>
      <div class="contentOne3"></div>
`
let contentOne = document.querySelector('.contentOne');
let contentOne1 = document.querySelector('.contentOne1');
let contentOne2 = document.querySelector('.contentOne2');
let contentOne3 = document.querySelector('.contentOne3');
let Subjective = document.querySelectorAll('.Subjective');
let icon = document.querySelectorAll('.icon')
for (let i = 0; i <= 24; i++) {
  contentOne.innerHTML += `<h2 class='boxes'>${chapterNameClass11[i].chaptername}</h2>`;
};
for (let i = 25; i <= 39; i++) {
  contentOne1.innerHTML += `<h2 class='boxes'>${chapterNameClass11[i].chaptername}</h2>`;
};
for (let i = 40; i <= 61; i++) {
  contentOne2.innerHTML += `<h2 class='boxes'>${chapterNameClass11[i].chaptername}</h2>`;
};
for (let i = 62; i <= 75; i++) {
  contentOne3.innerHTML += `<h2 class='boxes'>${chapterNameClass11[i].chaptername}</h2>`;
};
let boxes = document.querySelectorAll('.boxes');

Subjective[0].addEventListener('click',function(){
    icon[0].classList.toggle('active');
    contentOne.classList.toggle('active');
});
Subjective[1].addEventListener('click',function(){
    icon[1].classList.toggle('active');
    contentOne1.classList.toggle('active');
});
Subjective[2].addEventListener('click',function(){
    icon[2].classList.toggle('active');
    contentOne2.classList.toggle('active');
});
Subjective[3].addEventListener('click',function(){
    icon[3].classList.toggle('active');
    contentOne3.classList.toggle('active');
});
let player = document.querySelector('.player');
player.addEventListener('click',function(){
  player.classList.toggle('active');
  SectionTwo.classList.toggle('active');
})
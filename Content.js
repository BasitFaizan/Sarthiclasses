
let accordians = document.querySelector('.accordians');
chapterNameClass11.forEach((items) => {
  accordians.innerHTML += `
    <div class="collapseFlex ${items.classes}">
          <div class="topper"><div class="title">${items.chaptername}</div>
          <div class="dropIcon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg></div></div>
          <div class="para">
            <h2>Here you can learn about Class 11 chapter  name as ${items.chaptername}</h2>
            <button type="button" class=" view btn btn-outline-danger">View more</button>
          </div>
        </div>
  `
});
let topper = document.querySelectorAll('.topper');
let para = document.querySelectorAll('.para');
let dropIcon = document.querySelectorAll('.dropIcon');

topper.forEach((top, index) => {
  top.addEventListener('click', function() {
    para[index].classList.toggle('active');
    dropIcon[index].classList.toggle('active');
  });
});
let titles = document.querySelectorAll('.title');
let input = document.querySelector('.input');
let collapseFlex = document.querySelectorAll('.collapseFlex');
input.addEventListener('input', function(e) {
  collapseFlex.forEach((items) => {
    items.style.display = 'none';
  });

  titles.forEach((title2, i) => {
    if (e.target.value == title2.textContent) {
      collapseFlex[i].style.display = 'flex'
    }
  });
});
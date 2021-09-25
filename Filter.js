let dropItem = document.querySelectorAll('.dropdown-item');
let selection = document.querySelector('.selection');
let Maths = document.querySelectorAll('.Maths');
let Physics = document.querySelectorAll('.Physics');
let chemistry = document.querySelectorAll('.Chemistry');
let Bio = document.querySelectorAll('.Bio');
dropItem.forEach((item) => {
  item.addEventListener('click', () => {
    selection.textContent = item.textContent;
    if (selection.textContent == 'Math') {
      collapseFlex.forEach((items) => {
        items.style.display = 'none';
      });
      Maths.forEach((items) => {
        items.style.display = 'flex';
      });
    }
    else if (selection.textContent == 'Biology') {
      collapseFlex.forEach((items) => {
        items.style.display = 'none';
      });
      Bio.forEach((items) => {
        items.style.display = 'flex';
      });
    }
    else if (selection.textContent == 'Physics') {
      collapseFlex.forEach((items) => {
        items.style.display = 'none';
      });
      Physics.forEach((items) => {
        items.style.display = 'flex';
      });
    }
    else if (selection.textContent == 'Chemistry') {
      collapseFlex.forEach((items) => {
        items.style.display = 'none';
      });
      chemistry.forEach((items) => {
        items.style.display = 'flex';
      });
    }
  })
})
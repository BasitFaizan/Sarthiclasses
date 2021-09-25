let gallery = document.querySelectorAll('.galleryImg .imgTag');

let close = document.querySelector('.close');

let preview = document.querySelector('.preview');

let previewImg = document.querySelector('.previewImg');

let p = document.querySelector('.p');

let left = document.querySelector('.left');

let right = document.querySelector('.right');


window.onload = () => {
    

  for (let i = 0; i < gallery.length; i++) {

    let index = i;

    gallery[i].onclick = () => {

      preview.classList.add('show');

      function previewImg() {

        let source = gallery[index].src;

        p.innerHTML = `<img class="previewImg" src="${source}" alt="" />`;

      }

      previewImg();

      left.onclick = () => {

        index--;

        previewImg();

        if (index == 0) {

          index = gallery.length-1;

        }

      }

      right.onclick = () => {

        index++;

        previewImg();

        if(index>= gallery.length-1){

          index = 0;

        }

      }

    }

    close.onclick = () => {

      preview.classList.remove('show');

    }

  }

}

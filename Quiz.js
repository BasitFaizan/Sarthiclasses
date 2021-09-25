opt.forEach((item) => {
  item.addEventListener('click', function() {
    dropTitle.textContent = item.textContent;
    dropOpt.classList.remove('active');
    continue1.addEventListener('click', function() {
      if (item.textContent == 'Beginner') {
        playing(begginerQue,counting);
      }
      else if (item.textContent == 'Intermediate') {
        //playing(begginerQue,counting);
      }
      else if (item.textContent == 'Advance') {
        //playing(begginerQue,counting);
      }
    })

  })
})

let counting = 0;
function playing(begginerQue,counting) {
  let ClassInput = document.querySelector('.ClassInput');

  let points = 0;

  function show(counting) {
    questionsQue.innerHTML = `
      <div class="title questionTitle">
          <h2>Sarth coching classes</h2>
        </div>
        <div class="questionStart">
          <h1 class="que">${begginerQue[counting].question}</h1>
          <li class = 'ans'>${begginerQue[counting].ans1}</li>
          <li class = 'ans'>${begginerQue[counting].ans2}</li>
          <li class = 'ans'>${begginerQue[counting].ans3}</li>
          <li class = 'ans'>${begginerQue[counting].ans4}</li>
        </div>
        <div class="questionEnd">
          <button class="previous ${begginerQue[counting].class}" type="submit">previous Que</button>
          <button class="Next ${begginerQue[counting].class2}" type="submit">Next</button>
        </div>
    `;

    let previous = document.querySelector('.previous');
    let Next = document.querySelector('.Next');
    Next.addEventListener('click', function() {
      if(counting>=19){
        counting=19
      }else{
        counting++;
        show(counting);
      }
      
    });
    previous.addEventListener('click', function() {
      if(counting<=0){
        counting=0;
      }else{
        counting--;
        show(counting);
      }
    });
    let questionStart = document.querySelector('.questionStart');
    let ans = document.querySelectorAll('.ans');
    ans.forEach((items) => {
      items.addEventListener('click', function() {
        if (items.textContent == begginerQue[counting].answer) {
          items.classList.add('greenBack');
          points += 5;
        }
        else {
          items.classList.add('redBack');
          ans.forEach((items) => {
            if (items.textContent == begginerQue[counting].answer) {
              items.classList.add('greenBack')
            };
          })
        }
        questionStart.classList.add('no');
      })
    })


    function endTimer() {
      setTimeout(end, 1200000)
    }
    //console.log(nameInput);
    function end() {
      questionsQue.innerHTML = `
        <div>
          <h2 class ='userName'><span class = 'span'></span></h2>
          <h2 class='userPoints'>You have got ${points} points</h2>
          <div class = 'startBtn'><button class = 'reload'>Replay quiz</button></div>
        </div>
      `
      let span = document.querySelector('.span')
      if(points>50){
       span.innerHTML = 'Congrats! ' 
      }
      else{
        span.innerHTML = 'Ooops! '
      }
      let reload = document.querySelector('.reload');
      reload.addEventListener('click',function(){
        window.location.reload();
      })
    }
    endTimer();
    let endBtn = document.querySelector('.endBtn');
    if(begginerQue[counting].class2=='endBtn'){
      endBtn.classList.remove('Next');
      Next.textContent = 'Submit';
      Next.addEventListener('click',end);
      counting = 19;
    }
  };
  show(counting);
}
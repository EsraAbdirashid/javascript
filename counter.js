let count = document.getElementById('count');

let Counter = 0

function countUp (){
  count.innerHTML= Counter++;
}

function countDown (){
        count.innerHTML= Counter--;
      }
let start = document.getElementById('start');
let timer = document.getElementById('timer');

let Timer

start.addEventListener('click',()=>{
        let seconds = 0
        Timer = setInterval(()=>{
                timer.innerHTML = +seconds

                seconds++
        }
        )
})
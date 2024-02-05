let form = document.querySelector('form');
let input = document.querySelector('#input-value');
let div = document.querySelector('div');


form.addEventListener('click',(e)=>{
        e.preventDefault();
      
        input.value;
        let h2 = document.createElement('h2');
         h2.innerHTML=input.value;
        div.appendChild(h2);
        input.value='';
       
})
       
     
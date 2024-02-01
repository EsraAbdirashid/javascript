let body  = document.querySelector('body');
let message = document.createElement('p');
let title = document.createElement('span');
let image = document.createElement('img');
let btnClick  = document.querySelector('button');

message.textContent = 'Mss Esra!';
title.innerText = "This is a test title";
image.src = './img.png';

body.appendChild(message);
body.append(title);
body.appendChild(image)

// // Styling


let messageStyle= `
// color: dodgerblue;
// text-align:center;
// font-size: 70px;
// background-color: white;
// text-transform: uppercase;
// font-weight: 900;
// border-radius: 20px;
// padding: 30px;
// margin: 20px;
// box-shadow: 2px 2px 14px white;
// `
// message.style.cssText = messageStyle;


// image.style.width = '300px';
// image.style.borderRadius = '100%';
// image.style.boxShadow = '2px 2px 14px white';
// image.style.marginLeft = '800px';


// btnClick.style.color = 'white';
// btnClick.style.border = '0px';
// btnClick.style.backgroundColor = 'seagreen';
// btnClick.style.borderRadius = '10px';
// btnClick.style.paddingLeft = '20px';
// btnClick.style.padding = '10px';
// btnClick.style.fontSize = '30px';
const sub = document.createElement('h3');
const subText = document.createTextNode('Buy high quality organic fruits online');
sub.appendChild(subText); 
sub.style.fontStyle = 'italic';

const divs = document.getElementsByTagName('div'); 
const firstDiv = divs[0];
firstDiv.appendChild(sub);

const para = document.createElement('p');
const paraText = document.createTextNode('Total fruits: 4');
para.appendChild(paraText); 
para.id = 'fruits-total';
const fruits = document.querySelector('ul');
const secondDiv = divs[1]; 
secondDiv.insertBefore(para, fruits);
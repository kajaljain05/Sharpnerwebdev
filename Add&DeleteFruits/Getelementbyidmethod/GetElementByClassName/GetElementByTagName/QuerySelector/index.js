const mainHeading=document.querySelector('#main-heading');
mainHeading.style.textAlign='right';
const fruits=document.querySelector('.fruits');
fruits.style.backgroundColor='gray';
fruits.style.padding='30px';
fruits.style.margin='30px';
fruits.style.width='50%';
fruits.style.borderRadius='5px';
fruits.style.listStyleType='none';
const basketHeading=document.querySelector('h2');
// Write answer to the questions asked below:
basketHeading.style.color='brown';
basketHeading.style.marginLeft='30px';
const OddfruitItems=document.querySelectorAll('.fruit:nth-child(odd)');
for(let i=0;i<OddfruitItems.length;i++){
  OddfruitItems[i].stylebackgroundColor='lightgray';
}

const EvenfruitItems=document.querySelectorAll('.fruit:nth-child(even)');
for(let i=0;i<EvenfruitItems.length;i++){
  EvenfruitItems[i].style.backgroundColor='brown';
  EvenfruitItems[i].style.color='white';
}
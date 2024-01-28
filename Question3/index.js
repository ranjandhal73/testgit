const heading = document.getElementById('main-heading');
heading.innerHTML = 'Fruit World'
heading.style.color = 'orange';

const headDiv = document.getElementById('header');
headDiv.style.backgroundColor ='green';
headDiv.style.borderBottom = '1px solid orange'

const fruitsBasket = document.getElementById('basket-heading');
fruitsBasket.style.color = 'green';

const thanks = document.getElementById('thanks');
let para = document.createElement('p');
para.innerHTML = 'Please visit us again';

thanks.appendChild(para);
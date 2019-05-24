// Document Object Model (DOM)
console.log(window);  // window is the parent object of the browser; alert is part of the window object, which is why we don't have to write window.alert

// Single element selectors
console.log(document.getElementById('my-form'));
const form = document.getElementById('my-form');
console.log(document.querySelector('h1')); // querySelector is much new than getElementById (works just like jQuery)
console.log(document.querySelector('.container'));

// Multiple element selectors
console.log(document.querySelectorAll('.item')); // Returns a node list of all objects with a class of 'item'
console.log(document.getElementsByClassName('item')); // Returns an HTML collection of all objects with a class of 'item'
console.log(document.getElementsByTagName('li')); // Returns an HTML collection of all <li> objects
const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item)); // Loops through each list item

// DOM manipulation
// const ul = document.querySelector('.items');
// ul.remove(); // Removes all list items with .items class
// ul.lastElementChild.remove(); // Removes last item
// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerText = 'Jeff'; // .children returns node list
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>';
// const btn = document.querySelector('.btn');
// btn.style.background = 'red';

// Events
// const btn = document.querySelector('.btn');
// btn.addEventListener('click', (e) => { // Other events include: mouseover, mouseout, etc.
//     e.preventDefault(); // Prevent page from posting upon clicking Submit
//     console.log('click');
//     console.log(e, e.target.className, e.target.id);
//     document.querySelector('#my-form').style.background = '#ccc'
//     document.querySelector('body').classList.add('bg-dark'); // Pulls CSS class from style.css
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
// });


const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    
    if(nameInput.value === '' || emailInput === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields.';
        setTimeout(() => msg.remove(), 3000); // Message displays for 3 seconds then disappears
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        userList.appendChild(li);
        nameInput.value = '';
        emailInput.value = '';
    }
}
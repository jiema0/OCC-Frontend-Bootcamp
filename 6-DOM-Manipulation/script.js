//Accessing element
// by ID
const heading = document.getElementById('heading');
// one element

console.log(heading);

// const heading1 = document.getElementsByClassName('heading1');
// console.log(heading1);
// a class of element 

// by tagname
const heading2 = document.getElementsByTagName('h1')
console.log(heading2);


const listItems = document.querySelectorAll('#list li')
console.log(listItems);

//Modifying elements
// contents using innerHTML

heading2[0].innerHTML = "Learning"
heading.innerHTML = "<em>Learing DOM Manipulation</em>"

// contents using textContent
// document.getElementById('heading').innerHTML = "All About DOM Manipulation"

heading.textContent = "All About DOM Manipulation";

// attributes using serAttribute
heading.setAttribute('class', 'highlight')

// styles using the style property
const button = document.getElementById('btn')
button.style.backgroundColor = 'blue';
button.style.color = 'white'

//create new element dynamicaly
const newParagraph = document.createElement('p')
newParagraph.textContent = 'This is a new paragraph.';

document.querySelector('.container').appendChild(newParagraph)

// removing elements dynamically
listItems[1].remove();

// Handling Events - click, hover, input text, load page and so 
button.addEventListener('click', addListItem);

function addListItem() {
    const newListItem = document.createElement('li')
    newListItem.innerHTML = 'New List Item'
    document.getElementById('list').appendChild(newListItem)
};

// Click Event: Triggered when an element is clicked.
// Mouseover Event: Occurs when the mouse pointer is moved over an element.
// Keydown Event: Fired when a key is pressed down.
// Submit Event: Triggered when a form is submitted.
// Load Event: Occurs when a page or an element has finished loading.
// Change Event: Fired when the value of an input element changes.
// Focus and Blur Events: These happen when an element gains or loses focus.



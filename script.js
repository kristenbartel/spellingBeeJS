'use strict';
//get the div items in the game
let gameBoard = document.getElementById('gameboard');
let loadingBee = document.getElementById('loadingBee');
let gameDiv = document.getElementById('game');
let wordDiv = document.getElementById('word');
let lettersDiv = document.getElementById('letters');

// get the div items in the wordsBank
let wordsBankDiv = document.querySelector('#wordsBank'); //this will query the entire doc and find whatever you want. But must use the selector .class #id
let foundTitle = document.querySelector('#foundTitle');
let wordsDiv = document.querySelector('#words');

//create your buttons
let a_button = document.createElement('button');
    a_button.classList.add('button', 'is-warning', 'm-2'); //this is adding multiple classes at once
    a_button.setAttribute('value', 'A');
    a_button.innerText = 'A';

let b_button = document.createElement('button');
    b_button.classList.add('button', 'is-warning', 'm-2'); //this is adding multiple classes at once
    b_button.setAttribute('value', 'B');
    b_button.innerText = 'B';

let c_button = document.createElement('button');
    c_button.classList.add('button', 'is-warning', 'm-2'); //this is adding multiple classes at once
    c_button.setAttribute('value', 'C');
    c_button.innerText = 'C';

let d_button = document.createElement('button');
    d_button.classList.add('button', 'is-warning', 'm-2'); //this is adding multiple classes at once
    d_button.setAttribute('value', 'D');
    d_button.innerText = 'D';

let e_button = document.createElement('button');
    e_button.classList.add('button', 'is-warning', 'm-2'); //this is adding multiple classes at once
    e_button.setAttribute('value', 'E');
    e_button.innerText = 'E';

let f_button = document.createElement('button');
    f_button.classList.add('button', 'is-warning', 'm-2'); //this is adding multiple classes at once
    f_button.setAttribute('value', 'F'); //this is adding an actual value
    f_button.innerText = 'F';

let addButton = document.createElement('div');
    addButton.classList.add('button', 'is-black');
    addButton.innerText = 'add';

//write the function to add the buttons to your HTML on page load
//** NOTE: setTimeout is just to slow the load so you can see it. but you could use it to add a CSS loaders and other neat stuff!! :)

//using EventListener "DOMContentLoaded", load the add buttons
document.addEventListener('DOMContentLoaded', () => {
     setTimeout(() => {
        gameDiv.appendChild(addButton);
     }, 3500)
});
//using an IIFE, load the letter button
//Why did I put the letters in the IFFE??  HINT: LOOK AT THE CONSOLE LOG AND SEE WHEN IT FIRES. IFFE = immideiately invoked function expression
(() => {
 setTimeout(() =>{
     loadingBee.classList.toggle('hide'); //hides and loads?
    wordDiv.classList.toggle('hide');
    wordsBankDiv.classList.toggle('hide');
    lettersDiv.appendChild(a_button);
    lettersDiv.appendChild(b_button);
    lettersDiv.appendChild(c_button);
    lettersDiv.appendChild(d_button);
    lettersDiv.appendChild(e_button);
    lettersDiv.appendChild(f_button);
 }, 3000)
})() //this last set of parenthesis is "calling" the funct

//Step-3 write the listeners to take a letter and add to your word div
let clickedLetter  = '';
a_button.addEventListener('click', (e) => {
    e.preventDefault();
    clickedLetter = a_button.value;
    wordDiv.innerHTML += clickedLetter;
    console.log('clickedLetter', 'button clicked');
})


b_button.addEventListener('click', (e) => {
    e.preventDefault();
    clickedLetter = b_button.value;
    wordDiv.innerHTML += clickedLetter;
    console.log('clickedLetter', 'button clicked');
})

c_button.addEventListener('click', (e) => {
    e.preventDefault();
    clickedLetter = c_button.value;
    wordDiv.innerHTML += clickedLetter;
    console.log('clickedLetter', 'button clicked');
})

d_button.addEventListener('click', (e) => {
    e.preventDefault();
    clickedLetter = d_button.value;
    wordDiv.innerHTML += clickedLetter;
    console.log('clickedLetter', 'button clicked');
})

e_button.addEventListener('click', (e) => {
    e.preventDefault();
    clickedLetter = e_button.value;
    wordDiv.innerHTML += clickedLetter;
    console.log('clickedLetter', 'button clicked');
})

f_button.addEventListener('click', (e) => {
    e.preventDefault();
    clickedLetter = f_button.value;
    wordDiv.innerHTML += clickedLetter;
    console.log('clickedLetter', 'button clicked');
})

//add a function to take your word from the word div and add it to an Array to then add to your Words Bank

let wordsBankArray = [];
let wordCount = 0;
foundTitle.innerHTML = `you have found ${wordCount} words!`;
wordsBankDiv.appendChild(foundTitle);

addButton.addEventListener('click', (e)=> {
    e.preventDefault();
    wordsBankArray.push(wordDiv.innerHTML);
    console.log('wordsBankDiv', wordsBankArray); //having this in quotes will return only a single item?

    let newWordDiv = document.createElement('div');
    newWordDiv.setAttribute('id', `${wordCount}`); //set the id as the word count for the div

    newWordDiv.classList.add('is-size-2');
    //pulling out of array and putting it in newWordArray
    newWordDiv.innerHTML = wordsBankArray[wordCount]; //this used wordCount to grab the index locations of our array-- makes this dynamic
    wordsBankDiv.appendChild(newWordDiv);
    wordCount++;
    foundTitle.innerHTML = `you have found ${wordCount} words`;
    wordDiv.innerHTML = '';
})






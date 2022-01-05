'use strict';
//get the div items in the game
let gameBoard = document.getElementById('gameboard');
let loadingBee = document.getElementById('loadingBee');
let game = document.getElementById('game');
let wordDiv = document.getElementById('word');
let letters - document.getElementById('letters');

// get the div items in the wordsBank
let wordsBankDiv = document.querySelector('#wordsBanks'); //this will query the entire doc and find whatever you want. But must use the selector .class #id
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

//write the function to add the buttons to your HTML on page load
//** NOTE: setTimeout is just to slow the load so you can see it. but you could use it to add a CSS loaders and other neat stuff!! :)

//using EventListener "DOMContentLoaded", load the add buttons


//using an IIFE, load the letter button
//Why did I put the letters in the IFFE??  HINT: LOOK AT THE CONSOLE LOG AND SEE WHEN IT FIRES.


//Step-3 write the listeners to take a letter and add to your word div


//add a function to take your word from the word div and add it to an Array to then add to your Words Bank




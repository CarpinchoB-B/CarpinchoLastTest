"use strict";

const wait = (delay = 0) =>
  new Promise(resolve => setTimeout(resolve, delay));

const setVisible = (elementOrSelector, visible) => 
  (typeof elementOrSelector === 'string'
    ? document.querySelector(elementOrSelector)
    : elementOrSelector
  ).style.display = visible ? 'block' : 'none';

setVisible('.page', false);
setVisible('#loading', true);

document.addEventListener('DOMContentLoaded', () =>
  wait(3000).then(() => {
    setVisible('.page', true);
    setVisible('#loading', false);
  }));

const newGame = document.getElementById('New');
const continueGame = document.getElementById('Continue');
const loadGame = document.getElementById('Load');

newGame.addEventListener('click',()=>
{
    localStorage.setItem('NewGame',true);
});

continueGame.addEventListener('click',()=>
{
    localStorage.setItem('NewGame',false);
});

loadGame.addEventListener('click',()=>
{
  localStorage.setItem('NewGame',false);
});
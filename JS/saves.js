"use strict";

let firstSlotSave = document.getElementById('save1');
let secondSlotSave = document.getElementById('save2');
let thirdSlotSave = document.getElementById('save3');

let firstSlotLoad = document.getElementById('load1');
let secondSlotLoad = document.getElementById('load2');
let thirdSlotLoad = document.getElementById('load3');

let firstMoney = document.getElementById('money1');
let secondMoney = document.getElementById('money2');
let thirdMoney = document.getElementById('money3');

let firstClicks = document.getElementById('clicks1');
let secondClicks = document.getElementById('clicks2');
let thirdClicks = document.getElementById('clicks3');

let firstTime = document.getElementById('time1');
let secondTime = document.getElementById('time2');
let thirdTime = document.getElementById('time3');

if(localStorage.getItem('firstClicks') != null)
{
    firstClicks.textContent = localStorage.getItem('firstClicks');
}
if(localStorage.getItem('firstMoney') != null)
{
    firstMoney.textContent = localStorage.getItem('firstMoney');
}
if(localStorage.getItem('firstTime') != null)
{
    firstTime.textContent = localStorage.getItem('firstTime');
}

if(localStorage.getItem('secondClicks') != null)
{
    secondClicks.textContent = localStorage.getItem('secondClicks');
}
if(localStorage.getItem('secondMoney') != null)
{
    secondMoney.textContent = localStorage.getItem('secondMoney');
}
if(localStorage.getItem('secondTime') != null)
{
    secondTime.textContent = localStorage.getItem('secondTime');
}

if(localStorage.getItem('thirdClicks') != null)
{
    thirdClicks.textContent = localStorage.getItem('thirdClicks');
}
if(localStorage.getItem('thirdTime') != null)
{
    thirdTime.textContent = localStorage.getItem('thirdTime');
}


firstSlotSave.addEventListener('click',()=>
{
    localStorage.setItem('firstEnemyHealth',localStorage.getItem('currentEnemyHealth'));
    localStorage.setItem('firstMoney',localStorage.getItem('currentMoney'));
    localStorage.setItem('firstEnemy',localStorage.getItem('currentEnemy'));
    localStorage.setItem('firstWeakSword',localStorage.getItem('currentWeakSword'));
    localStorage.setItem('firstSword',localStorage.getItem('currentSword'));
    localStorage.setItem('firstStrongSword',localStorage.getItem('currentStrongSword'));
    localStorage.setItem('firstWeakAxe',localStorage.getItem('currentWeakAxe'));
    localStorage.setItem('firstWeakShield',localStorage.getItem('currentWeakShield'));
    localStorage.setItem('firstStrongShield',localStorage.getItem('currentStrongShield'));
    localStorage.setItem('firstStrongAxe',localStorage.getItem('currentStrongAxe'));
    
    localStorage.setItem('firstIncrease',localStorage.getItem('increase'));
    localStorage.setItem('firstDifficult',localStorage.getItem('difficult'));
    localStorage.setItem('firstDamage',localStorage.getItem('damage'));
    localStorage.setItem('firstClicks',localStorage.getItem('clicks'));
    localStorage.setItem('firstTime',localStorage.getItem('time'));
    localStorage.setItem('NewGame',false);
    localStorage.setItem('firstIncreaseTime',localStorage.getItem('increaseTime'));
    localStorage.setItem('firstTimerThis',localStorage.getItem('timerThis'));
    localStorage.setItem('firstIsAbility',localStorage.getItem('isAbility'));
    localStorage.setItem('firstIsClicked',localStorage.getItem('isClicked'));

    firstTime.textContent = localStorage.getItem('firstTime');
    firstClicks.textContent = localStorage.getItem('firstClicks');
    firstMoney.textContent = localStorage.getItem('firstMoney');
});

secondSlotSave.addEventListener('click',()=>
{
    localStorage.setItem('secondEnemyHealth',localStorage.getItem('currentEnemyHealth'));
    localStorage.setItem('secondMoney',localStorage.getItem('currentMoney'));
    localStorage.setItem('secondEnemy',localStorage.getItem('currentEnemy'));
    localStorage.setItem('secondWeakSword',localStorage.getItem('currentWeakSword'));
    localStorage.setItem('secondSword',localStorage.getItem('currentSword'));
    localStorage.setItem('secondStrongSword',localStorage.getItem('currentStrongSword'));
    localStorage.setItem('secondWeakAxe',localStorage.getItem('currentWeakAxe'));
    localStorage.setItem('secondWeakShield',localStorage.getItem('currentWeakShield'));
    localStorage.setItem('secondStrongShield',localStorage.getItem('currentStrongShield'));
    localStorage.setItem('secondStrongAxe',localStorage.getItem('currentStrongAxe'));

    localStorage.setItem('secondIncrease',localStorage.getItem('increase'));
    localStorage.setItem('secondDifficult',localStorage.getItem('difficult'));
    localStorage.setItem('secondDamage',localStorage.getItem('damage'));
    localStorage.setItem('secondClicks',localStorage.getItem('clicks'));
    localStorage.setItem('secondTime',localStorage.getItem('time'));
    localStorage.setItem('NewGame',false);
    localStorage.setItem('secondIncreaseTime',localStorage.getItem('increaseTime'));
    localStorage.setItem('secondTimerThis',localStorage.getItem('timerThis'));
    localStorage.setItem('secondIsAbility',localStorage.getItem('isAbility'));
    localStorage.setItem('secondIsClicked',localStorage.getItem('isClicked'));

    secondTime.textContent = localStorage.getItem('secondTime');
    secondClicks.textContent = localStorage.getItem('clicks');
    secondMoney.textContent = localStorage.getItem('secondMoney');
});

thirdSlotSave.addEventListener('click',()=>
{
    localStorage.setItem('thirdEnemyHealth',localStorage.getItem('currentEnemyHealth'));
    localStorage.setItem('thirdMoney',localStorage.getItem('currentMoney'));
    localStorage.setItem('thirdEnemy',localStorage.getItem('currentEnemy'));
    localStorage.setItem('thirdWeakSword',localStorage.getItem('currentWeakSword'));
    localStorage.setItem('thirdSword',localStorage.getItem('currentSword'));
    localStorage.setItem('thirdStrongSword',localStorage.getItem('currentStrongSword'));
    localStorage.setItem('thirdWeakAxe',localStorage.getItem('currentWeakAxe'));
    localStorage.setItem('thirdWeakShield',localStorage.getItem('currentWeakShield'));
    localStorage.setItem('thirdStrongShield',localStorage.getItem('currentStrongShield'));
    localStorage.setItem('thirdStrongAxe',localStorage.getItem('currentStrongAxe'));

    localStorage.setItem('thirdIncrease',localStorage.getItem('increase'));
    localStorage.setItem('thirdDifficult',localStorage.getItem('difficult'));
    localStorage.setItem('thirdDamage',localStorage.getItem('damage'));
    localStorage.setItem('thirdClicks',localStorage.getItem('clicks'));
    localStorage.setItem('thirdTime',localStorage.getItem('time'));
    localStorage.setItem('NewGame',false);
    localStorage.setItem('thirdIncreaseTime',localStorage.getItem('increaseTime'));
    localStorage.setItem('thirdTimerThis',localStorage.getItem('timerThis'));
    localStorage.setItem('thirdIsAbility',localStorage.getItem('isAbility'));
    localStorage.setItem('thirdIsClicked',localStorage.getItem('isClicked'));

    thirdTime.textContent = localStorage.getItem('thirdTime');
    thirdClicks.textContent = localStorage.getItem('clicks');
    thirdMoney.textContent = localStorage.getItem('thirdMoney');
});

firstSlotLoad.addEventListener('click',()=>
{
    localStorage.setItem('currentSave','First');
    localStorage.setItem('currentEnemyHealth',localStorage.getItem('firstEnemyHealth'));
    localStorage.setItem('currentMoney',localStorage.getItem('firstMoney'));
    localStorage.setItem('currentEnemy',localStorage.getItem('firstEnemy'));
    localStorage.setItem('currentWeakSword',localStorage.getItem('firstWeakSword'));
    localStorage.setItem('currentSword',localStorage.getItem('firstSword'));
    localStorage.setItem('currentStrongSword',localStorage.getItem('firstStrongSword'));
    localStorage.setItem('currentWeakAxe',localStorage.getItem('firstWeakAxe'));
    localStorage.setItem('currentWeakShield',localStorage.getItem('firstWeakShield'));
    localStorage.setItem('currentStrongShield',localStorage.getItem('firstStrongShield'));
    localStorage.setItem('currentStrongAxe',localStorage.getItem('firstStrongAxe'));
    
    localStorage.setItem('increase',localStorage.getItem('firstIncrease'));
    localStorage.setItem('difficult',localStorage.getItem('firstDifficult'));
    localStorage.setItem('damage',localStorage.getItem('firstDamage'));
    localStorage.setItem('clicks',localStorage.getItem('firstClicks'));
    localStorage.setItem('time',localStorage.getItem('firstTime'));

    localStorage.setItem('increaseTime',localStorage.getItem('firstIncreaseTime'));
    localStorage.setItem('timerThis',localStorage.getItem('firstTimerThis'));

    localStorage.setItem('isAbility',localStorage.getItem('firstIsAbility'));
    localStorage.setItem('isClicked',localStorage.getItem('firstIsClicked'));
});

secondSlotLoad.addEventListener('click',()=>
{
    localStorage.setItem('currentSave','Second');
    localStorage.setItem('currentEnemyHealth',localStorage.getItem('secondEnemyHealth'));
    localStorage.setItem('currentMoney',localStorage.getItem('secondMoney'));
    localStorage.setItem('currentEnemy',localStorage.getItem('secondEnemy'));
    localStorage.setItem('currentWeakSword',localStorage.getItem('secondWeakSword'));
    localStorage.setItem('currentSword',localStorage.getItem('secondSword'));
    localStorage.setItem('currentStrongSword',localStorage.getItem('secondStrongSword'));
    localStorage.setItem('currentWeakAxe',localStorage.getItem('secondWeakAxe'));
    localStorage.setItem('currentWeakShield',localStorage.getItem('secondWeakShield'));
    localStorage.setItem('currentStrongShield',localStorage.getItem('secondStrongShield'));
    localStorage.setItem('currentStrongAxe',localStorage.getItem('secondStrongAxe'));
    
    localStorage.setItem('increase',localStorage.getItem('secondIncrease'));
    localStorage.setItem('difficult',localStorage.getItem('secondDifficult'));
    localStorage.setItem('damage',localStorage.getItem('secondDamage'));
    localStorage.setItem('clicks',localStorage.getItem('secondClicks'));
    localStorage.setItem('time',localStorage.getItem('secondTime'));

    localStorage.setItem('increaseTime',localStorage.getItem('secondIncreaseTime'));
    localStorage.setItem('timerThis',localStorage.getItem('secondTimerThis'));
    localStorage.setItem('isAbility',localStorage.getItem('secondIsAbility'));
    localStorage.setItem('isClicked',localStorage.getItem('secondIsClicked'));
});

thirdSlotLoad.addEventListener('click',()=>
{
    localStorage.setItem('currentSave','Third');
    localStorage.setItem('currentEnemyHealth',localStorage.getItem('thirdEnemyHealth'));
    localStorage.setItem('currentMoney',localStorage.getItem('thirdMoney'));
    localStorage.setItem('currentEnemy',localStorage.getItem('thirdEnemy'));
    localStorage.setItem('currentWeakSword',localStorage.getItem('thirdWeakSword'));
    localStorage.setItem('currentSword',localStorage.getItem('thirdSword'));
    localStorage.setItem('currentStrongSword',localStorage.getItem('thirdStrongSword'));
    localStorage.setItem('currentWeakAxe',localStorage.getItem('thirdWeakAxe'));
    localStorage.setItem('currentWeakShield',localStorage.getItem('thirdWeakShield'));
    localStorage.setItem('currentStrongShield',localStorage.getItem('thirdStrongShield'));
    localStorage.setItem('currentStrongAxe',localStorage.getItem('thirdStrongAxe'));
    localStorage.setItem('increase',localStorage.getItem('thirdIncrease'));
    localStorage.setItem('difficult',localStorage.getItem('thirdDifficult'));
    localStorage.setItem('damage',localStorage.getItem('thirdDamage'));
    localStorage.setItem('clicks',localStorage.getItem('thirdClicks'));
    localStorage.setItem('time',localStorage.getItem('thirdTime'));

    
    localStorage.setItem('increaseTime',localStorage.getItem('thirdIncreaseTime'));
    localStorage.setItem('timerThis',localStorage.getItem('thirdTimerThis'));
    localStorage.setItem('isAbility',localStorage.getItem('thirdIsAbility'));
    localStorage.setItem('isClicked',localStorage.getItem('thirdIsClicked'));
});
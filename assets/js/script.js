"use strict";

//  Задачи
function exercise() {

    // 1
    let a = +prompt('min = ', 10);
    a == 10 ? alert('a == 10 верно') : alert('a == 10 неверно');

    // 2
    let min = +prompt('min = ', 20);
    min >= 0 && min <= 15 ? alert('1 четверть') :
    min >= 16 && min <= 30 ? alert('2 четверть') :
    min >= 31 && min <= 45 ? alert('3 четверть') :
    min >= 46 && min <= 60 ? alert('4 четверть') : () => {};

    // 3
    // через if
    let lang = 'ru';
    let arr;
    if (lang == 'ru')
        arr = ['понедельние', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
    else if (lang == 'en')
        arr = ['monday', 'tuesday', 'wednessday', 'thursday', 'friday', 'saturday', 'sunday'];
    
    // через switch
    switch (lang) {
        case 'ru':
            arr = ['понедельние', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
            break;
        case 'en':
            arr = ['monday', 'tuesday', 'wednessday', 'thursday', 'friday', 'saturday', 'sunday'];
            break;
    }

    // через массив
    let arr1 = {
        'ru': ['понедельние', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'], 
        'en': ['monday', 'tuesday', 'wednessday', 'thursday', 'friday', 'saturday', 'sunday']
    }
}


// Работа с if-else
function if_else() {
    let a = +prompt('a = ', 10);

    a == 0 ? alert('a == 0 верно') : alert('a == 0 неверно');
    a > 0 ? alert('a > 0 верно') : alert('a > 0 неверно');
    a < 0 ? alert('a < 0 верно') : alert('a < 0 неверно');
    a >= 0 ? alert('a >= 0 верно') : alert('a >= 0 неверно');
    a <= 0 ? alert('a <= 0 верно') : alert('a <= 0 неверно');
    a != 0 ? alert('a != 0 верно') : alert('a != 0 неверно');
    a == 'test' ? alert("a == 'test' верно") : alert("a == 'test' неверно");
    a === '1' ? alert("a === '1' верно") : alert("a === '1' неверно");
}

// Работа с && (и) и || (или)
function and_or() {
    let a = +prompt('a = ', 10);
    
    // 1
    a > 0 && a < 5 ? alert('1: верно') : alert('1: неверно');

    // 2
    if (a == 0 || a == 2) {
        a += 7;
        alert('2: ' + a);
    }

    // 3
    let b = +prompt('b = ', 1);
    if (a <= 1 && b >= 3) {
        alert( '3: ' + (a + b) );
    } else {
        alert( '3: ' + (a - b) );
    }

    // 4
    if ( (a > 2 && a < 11) || (b >= 6 && b < 14) ) {
        alert('4: верно');
    } else {
        alert('4: неверно');
    }
}

// Задачи на switch-case
function switch_case() {
    // 1
    let a = +prompt('a = ', 3);
    let result;

    switch (a) {
        case 1:
            result = 'зима';
            break;
        case 2:
            result = 'весна';
            break;
        case 3:
            result = 'лето';
            break;
        case 4:
            result = 'осень';
            break;
    }
    alert('1: result = ' + result);

    // 2
    let day = prompt('day = ', 10);
    day >= 1 && day <= 10 ? alert('2: 1') :
    day >= 11 && day <= 20 ? alert('2: 2') : alert('2: 3');

    // 3
    let month = prompt('month = ', 2);
    month >= 1 && month <= 2 || month == 12 ? alert('3: зима') :
    month >= 3 && month <= 5 ? alert('3: весна') :
    month >= 6 && month <= 8 ? alert('3: лето') :
    month >= 9 && month <= 11 ? alert('3: осень') : doNothing();
    
    function doNothing() {
        // nothing
    }

    // 4 
    let str = 'abcde';
    str[1] == 'a' ? alert('4: да') : alert('4: нет');

    // 5
    str = '12345';
    switch (str[1]) {
        case '1':
        case '2':
        case '3':
            alert('5: да');
            break;
        default:
            alert('5: нет');
            break;
    }

    // 6
    str = '582';
    alert( '6: ' + (str[0] + str[1] + str[2]) );

    // 7
    str = '894326';
    if ( str[0] + str[1] + str[2] == str[3] + str[4] + str[5] )
        alert('7: да')
    else
        alert('7: нет');
}



// ripple click effect
const click_effect = document.querySelectorAll('.click_effect');
click_effect.forEach(btn => {
    btn.addEventListener('click', function(e) {
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;

        let ripple = document.createElement('span');
        ripple.className = 'ripple';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';

        let face = document.createElement('span');
        face.className = 'face';
        face.style.top = ripple.style.top;
        face.style.left = ripple.style.left;

        this.appendChild(ripple);
        this.appendChild(face);

        setTimeout(() => {
            ripple.remove();
            face.remove();
        }, 500);
    })
})
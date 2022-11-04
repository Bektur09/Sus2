let phoneNum = document.querySelector('.phoneNum')
let phoneSubmit = document.querySelector('.phoneSubmit')
let result = document.querySelector('#result')

let regExp =  /\+996/

phoneSubmit.addEventListener('click', () => {
    if(regExp.test(phoneNum.value)){
        result.innerText = 'Success'
        result.style.color = 'lightgreen'
    } else {
        result.innerText = 'Undefined'
        result.style.color = 'red'
    }
})



let genderInput = document.querySelector('.genderInput')
let genderSubmit = document.querySelector('.genderSubmit')
let result2 = document.querySelector('#result2')

let regExp2 = /1{1}/
let regExp3 = /2{1}/


genderSubmit.addEventListener('click', () => {
    if(regExp2.test(genderInput.value)){
        result2.innerText = 'Success'
        result2.style.color = 'lightgreen'
    } else if (regExp3.test(genderInput.value) )  {
        result2.innerText = 'Success'
        result2.style.color = 'lightgreen'
    } else {
        result2.innerText = 'Undefined'
        result2.style.color = 'red'
    }
})

let modoescuroclaro = document.querySelector('.modoescuroclaro')
let alternarmodo = document.querySelector('.alternarmodo')
let body = document.querySelector('body')

modoescuroclaro.onclick = function(){
    body.classList.toggle('dark')
    modoescuroclaro.classList.toggle('active')
} 
alternarmodo.onclick = function(){  
    alternarmodo.classList.toggle('active')
}

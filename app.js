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


const cursor = document.querySelector('.cursor'),
    anchor = document.querySelectorAll("a");
    document.addEventListener('mousemove', (e) =>{
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
    });   
    anchor.forEach((anc) =>{
        anc.addEventListener("mouseover", () =>{
            cursor.style.transform = "scale(2)";
    });
        anc.addEventListener("mouseleave", () =>{
            cursor.style.transform ="";
    });
    });
let menu = document.querySelector(".menu ul")
menu.style.listStyle = "none"
menu.style.display = "flex"
menu.style.gap = '20px'

//them mot phan tu vao menu "Guides"
// let str = '<li><a href="#">Guides</a></li>'
// menu.innerHTML += str
let newli = document.createElement("li")
newli.innerText = "Guides"
menu.appendChild(newli)

//3. BOM event
function rainbowi()
{
    let color = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
    let divs = document.querySelectorAll('div')
    for(let i =0; i<divs.length; i++)
    {
        divs[i].style.backgroundColor = color[i]
    }
}

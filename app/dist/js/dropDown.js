const dropIcon = document.getElementById("mobileList")
const menu = document.getElementById("dropDownMenu")
const lines = document.getElementsByTagName("hr")
const links = document.getElementsByTagName("a")

const lineArray = [...lines]
const linkArray = [...links]

dropIcon.addEventListener("click", () =>{
    menu.classList.toggle("active")
})


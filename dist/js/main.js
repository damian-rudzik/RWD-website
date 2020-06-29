const menuBtn = document.querySelector('.menu-btn')
const hamburger = document.querySelector('.menu-btn__burger')
const nav = document.querySelector('.nav')
const menuNav = document.querySelector('.menu-nav')
const item = document.querySelectorAll('.menu-nav__item')


const activeSlaid = document.querySelectorAll('.menu-slaid__item')
const img = document.getElementById('slaid-img')

activeSlaid[0].classList.add('active')
let showMenu = false

menuBtn.addEventListener('click', handleClick)

function handleClick() {
    if (!showMenu) {
        hamburger.classList.add('open')
        menuNav.classList.add('open')
        nav.classList.add('open')

        item.forEach((item) => {
            item.classList.add('open')
        })

        showMenu = true
    } else {
        hamburger.classList.remove('open')
        menuNav.classList.remove('open')
        nav.classList.remove('open')

        item.forEach((item) => {
            item.classList.remove('open')
        })

        showMenu = false
    }
}

function slaider(value) {
    let search = 1

    check()

    activeSlaid.forEach((item) => {
        if (search === value) {
            item.classList.add('active')
        }
        search += 1  
    })

    img.src = `./img/img${value}.png`
}

function check() {
    if (activeSlaid) {
        activeSlaid.forEach((item) => {
            item.classList.remove('active')
    })}
}
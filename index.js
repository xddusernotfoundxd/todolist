let todo = document.querySelector('.todo')
let inp = document.querySelector('.inp')
let inp1 = document.querySelector('.inp1')
let prod = document.querySelector('.prod')
let b = document.querySelector('body')
let p = prod.querySelector('p')
let but = document.querySelector('.u')


document.querySelector('.inp1').addEventListener('click', () => {
    let z = document.createElement('div')
    z.innerHTML += inp.value
    z.classList.add('dark')
    prod.appendChild(z)
    inp.value = ' '
    let but1 = document.createElement('span')
    but1.innerHTML = ''
    z.appendChild(but1)
    but1.classList.add('vis')
    if (inp.value){
        let but = document.createElement('button')
        but.innerHTML = 'X'
        z.appendChild(but)

        but.addEventListener('click', () => {
            z.classList.add('none')
        })
    }
    z.addEventListener('click', () => {
        but1.classList.toggle('vis1')
        z.classList.toggle('z')
        z.classList.toggle('dark')
        z.classList.toggle('p')
    })
});
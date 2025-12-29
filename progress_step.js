const progress = document.querySelector(".progress");
const circle = document.querySelectorAll(".circle");
const btnprev = document.querySelector(".prev");
const btnnext = document.querySelector(".next");

const progressLine = document.querySelector(".line");

// console.log(progress, circle, btnnext, btnprev);

let currentactive = 1;
btnnext.addEventListener('click', () => {
    currentactive++
    console.log(currentactive);

    if (currentactive > circle.length) {
        currentactive = circle.length
    }
    update()
})

btnprev.addEventListener('click', () => {
    currentactive--
    if (currentactive < 1) {
        currentactive = 1;
    }


    update()
})

function update() {
    progressLine.style.width = `${(currentactive-1) * 33.33}%`

    circle.forEach((v, i) => {
        if (i < currentactive) {
            v.classList.add('active')
        }
        else {
            v.classList.remove('active')
        }
    })

    if (currentactive == 1) {
        btnprev.disabled = true
    }
    else if (currentactive == circle.length) {
        btnnext.disabled = true
    }
    else {
        btnnext.disabled = false
        btnprev.disabled = false
    }
}


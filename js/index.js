// Your code goes here
let dest = document.querySelectorAll('.destination');

let topNav = document.querySelectorAll('.nav-link');

let nav = document.querySelector('.nav');

let contImg = document.querySelector('.content-destination img');

let body = document.querySelector('body');

// console.log(dest);
// console.log(topNav);


// topNav.addEventListener('mouseenter', (event) => {
//     topNav.style.backgroundColor = '#FFEBCD';
// });

dest.forEach(i => {
    i.addEventListener('mouseenter', (event) => {
        i.style.backgroundColor = '#FFEBCD';
    })
    i.addEventListener('mouseleave', (event) => {
        i.style.backgroundColor = '#FFF';
    })
})

topNav.forEach(i => {
    i.addEventListener('click', (event) => {
        event.preventDefault();
    })
})

// topNav[0].addEventListener('click', (event) => {
//     event.preventDefault();
// })

// dest[0].addEventListener('mouseenter', (event) => {
//     dest[0].style.backgroundColor = '#FFEBCD';
// })

// dest[0].addEventListener('mouseleave', (event) => {
//     dest[0].style.backgroundColor = '#FFF';
// })

nav.addEventListener('mouseover', (event) => {
    nav.style.fontWeight = 'bold';
})

nav.addEventListener('mouseout', (event) => {
    nav.style.fontWeight = 'normal';
})

contImg.addEventListener('resize', (event) => {
    contImg.display = 'none';
})

// xxx.addEventListener('mousemove', (event) => {
//     xxx.style.backgroundColor = 'rgb(' + e.offsetX + ', ' + e.offsetY + ', 40 )';

// })

document.addEventListener('keydown', (event) => {
    if (event.key === 'd') {
        document.body.style = "color: white; background-color: #111111";
    }
    if (event.key === 'l') {
        document.body.style = '';
    }
});

window.addEventListener('scroll', () => {
    body.style.backgroundColor = "black"
})

//mouseenter
//mouseleave
//mouseover
//mouseout
//keydown
//  dblclick
//keydown
//resize
//click
//  select
//  wheel
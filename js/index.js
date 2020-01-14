// Your code goes here
let dest = document.querySelectorAll('.destination');

let topNav = document.querySelectorAll('.nav-link');

let nav = document.querySelector('.nav');

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

// xxx.addEventListener('mousemove', (event) => {
//     xxx.style.backgroundColor = 'rgb(' + e.offsetX + ', ' + e.offsetY + ', 40 )';

// })

//mouseenter
//mouseleave
//mouseover
//mouseout
//  scroll
//  dblclick
//  focus
//  resize
//click
//  select
//  wheel
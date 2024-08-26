let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick =() => {
    menuIcon.classlist.toggle('fa-xmark');
    navbar.classList.toggle('active')
}


let sections = document.querySelectorAll('section');
let nevlinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec=> {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlinks.forEach.apply(links => {
                links.classlist.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


    let header = document.querySelector('header');
    header.classlist.toggle('stickly', window.scrollY > 100);


    menuIcon.classlist.remove('fa-xmark');
    navbar.classlist.remove('active');
};
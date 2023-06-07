// Header toggle
let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click',function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})

// typing effect

let typed = new Typed('.auto-input',{
    strings: ['Job Manager'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 200,
    loop: true,
})
// Active Link State On Scroll

//Get All Links
let navLinks = document.querySelectorAll('nav ul li a')
// Get All Setion
let sections = document.querySelectorAll('sections')

window.addEventListener('scroll', function(){
    const scrollpos = window.scrollY
    sections.forEach(sections => {
        if(scrollpos > section.offsetTop && scrollpos < (section.offsetTop + section.offsetHeight)){
            navLinks.forEach(link => {
                link.classList.remove('active');
                if(section.getAttribute('id') === link.getAttribute('href').substring(1)) {
                    link.classList.add('active')
                }
            });
        }
    });
});
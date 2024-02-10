

    window.addEventListener('scroll', ()=>{

        var miniNav = document.querySelector('.mini-nav');

       var scrolled = window.scrollY;
       if( scrolled > 200){
        miniNav.classList.add('sticky');
       }
    });

var extraMenu = () => {
    const moreBtn = document.querySelector('.mMenu');
    const eMenu = document.querySelector('.morePlus');
    const navBar = document.querySelector('.nav');

    moreBtn.addEventListener('click', ()=>{
        eMenu.classList.toggle('extra');
        navBar.classList.toggle('bBorder');
    })

}

extraMenu();
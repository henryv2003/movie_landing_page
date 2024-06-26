function toggleVideo(){
    const trailer = document.querySelector('.trailer');
    const saw5 = document.querySelector('.saw_5');
    const blackDemon = document.querySelector('.black-demon')
    saw5.pause();
    blackDemon.pause();
    trailer.classList.toggle('active');    
}




function changeBg(bg, title){
    const banner = document.querySelector('.banner');
    const contents = document.querySelectorAll('.content');
    banner.style.background = `url("assets/images/movie-website-landing-page-images/movies/${bg}")`;
    banner.style.backgroundSize = 'cover';
    banner.style.backgroundPosition = 'center';

    contents.forEach(content => {
        content.classList.remove('active');
        if (content.classList.contains(title)) {
            content.classList.add('active')
        }
    });
}

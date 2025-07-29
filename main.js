const mainBtns = document.querySelectorAll('.main_btn');

mainBtns.forEach((mainBtn) => {
    mainBtn.addEventListener('click', () => {
    const targetId = mainBtn.getAttribute('data-target');
    const currentSection = document.querySelector('section.active');
    const nextSection = document.getElementById(targetId);

    if(currentSection && nextSection){
        currentSection.classList.remove('active');
        nextSection.classList.add('active');
    }
})
});


const btns = document.querySelectorAll('.btn');

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const targetId2 = btn.getAttribute('data-target');
        const currentSection2 = document.querySelector('section.active');
        const nextSection2 = document.getElementById(targetId2);

        if (currentSection2 && nextSection2) {
            currentSection2.classList.remove('active');
            nextSection2.classList.add('active');
        }
    });
});

const btn2 = document.querySelectorAll('.btn2');

btn2.forEach((btn) => {
    btn.addEventListener('click', () => {
        const targetId2 = btn.getAttribute('data-target');
        const currentSection2 = document.querySelector('section.active');
        const nextSection2 = document.getElementById(targetId2);

        if (currentSection2 && nextSection2) {
            currentSection2.classList.remove('active');
            nextSection2.classList.add('active');
        }
    });
});
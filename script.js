const texts = ["Welcome to my Portfolio","I'm Front End Developer", "I'm Web Developer"];
const typingSpeed = 100; 
const eraseSpeed = 50; 
const delayBetweenTexts = 1000; 

const typingTextElement = document.querySelector('.typing-text');

let textIndex = 0;
let charIndex = 0;
let isErasing = false;

function typeAndEraseText() {
    
    const currentText = texts[textIndex];
    
    if (!isErasing && charIndex < currentText.length) {
       
        typingTextElement.textContent += currentText.charAt(charIndex);
        charIndex++;
        setTimeout(typeAndEraseText, typingSpeed);
    } else if (isErasing && charIndex > 0) {
       
        typingTextElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(typeAndEraseText, eraseSpeed);
    } else {
       
        isErasing = !isErasing;
        if (!isErasing) {
           
            textIndex = (textIndex + 1) % texts.length;
        }
        setTimeout(typeAndEraseText, delayBetweenTexts);
    }
}
window.onload = typeAndEraseText;


// تحديد الأقسام والروابط
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

window.addEventListener('scroll', () => {
    let current = '';

    // تحديد القسم النشط بناءً على موقع التمرير
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    // إضافة كلاس 'active' للرابط المناسب
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});


window.addEventListener('scroll',function()
{
    
})


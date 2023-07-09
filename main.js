
/**
 * Botao de retornar
 */
var returntop = document.getElementById("return-top");
returntop.classList.remove("no-js");
returntop.classList.add("js");

function returnTop() {
    var zwindowHeight = window.innerHeight || document.documentElement.clientHeight;
    var zscrollPosition = window.screenY || document.documentElement.scrollTop;
    var zmaxWidth = window.innerWidth || document.documentElement.clientWidth;
    var zscrollTop = window.screenY || document.documentElement.scrollTop;

    if (zscrollPosition + 200 >= zwindowHeight) {
        returntop.style.display = 'flex';
    } else {
        returntop.style.display = 'none';
    }
}
window.addEventListener('scroll', returnTop);

/**
 * Navigation
 */
var nav = document.querySelector('.nav-container');
var navWidth = nav.offsetWidth; // Armazena a largura do elemento nav
function handleScroll() {
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;//altura da janela atual
    var maxWidth = window.innerWidth || document.documentElement.clientWidth;//largura da janela atual 
    var scrollTop = window.screenY || document.documentElement.scrollTop;//posição vertical de rolagem

    if (scrollTop + 100 >= windowHeight && maxWidth > 850) {
        nav.classList.add("fixed");
        nav.classList.add("js");
        nav.style.marginTop = scrollTop + 'px';
    } else {
        nav.classList.remove("fixed");
        nav.style.marginTop = 16 + 'px';
    }
}
window.addEventListener('scroll', handleScroll);
// Desabilitar a restauração automática de rolagem
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}
/**
 * Header Animation; elemento acompanhar a rolagem
 */
var blob = document.getElementById("blob");
var distanciaTopo = blob.getBoundingClientRect().top;

function delay() {
    var posicaoTopo = blob.getBoundingClientRect().top;
    var diferencaRolagem = posicaoTopo - distanciaTopo;
    var scrollY = window.innerHeight || document.documentElement.clientHeight;
    var distanceScroll = window.screenY || document.documentElement.scrollTop;
    var scrollPassou80vh = window.scrollY > (window.innerHeight * 0.45);
    var somador = diferencaRolagem / 2;

    if (scrollY > distanceScroll && !scrollPassou80vh) {
        blob.style.marginTop = -diferencaRolagem - somador + 'px';
        blob.style.opacity = opacidade;
        blob.classList.remove('active');
    } else {
        blob.classList.add('active');
    }
}
window.addEventListener('scroll', delay);

/**
 * Icon Menu
*/
//toggle icon
var menu = document.getElementById('nav-link');
document.getElementById('toggle').onclick = () => {
    toggle.classList.toggle('clicked');
    menu.classList.toggle('active');
}

/**
 * Hover magnetico
 */
let boxes = document.querySelectorAll('.magnetic');
boxes.forEach(box => {
    box.addEventListener('mousemove', (e) => {
        let x = e.offsetX;
        let y = e.offsetY;
        let boxWidth = box.clientWidth;
        let boxHeight = box.clientHeight;
        let moveX = (x - boxWidth / 2);
        let moveY = (y - boxHeight / 2);
        box.style.transition = '.11s ease';
        box.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`;
    });
});
boxes.forEach(box => {
    box.addEventListener('mouseout', () => {
        box.style.transition = `.6s ease`;
        box.style.transform = `translate(0px, 0px)`;
        //Same thing with the span element
    });
});

/**
 * Dark Light 
 */
let darkLight = document.getElementById('dark-light');
let changeTheme = document.querySelector('.desligado');
darkLight.onclick = () => {
    darkLight.classList.toggle('active');

    if (changeTheme.classList.contains('desligado')) {
        changeTheme.classList.remove('desligado');
        changeTheme.classList.add('ligado');
    } else {
        changeTheme.classList.remove('ligado');
        changeTheme.classList.add('desligado');
    }
}
/**
 * Light Effect
 */
document.getElementsByClassName("luz") = () => {
    const rect = document.getElementsByClassName("luz").getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

    document.getElementsByClassName("luz").style.setProperty("--mouse-x", `${x}px`);
    document.getElementsByClassName("luz").style.setProperty("--mouse-y", `${y}px`);
};

/**
 *  Reveal on Scroll
 */


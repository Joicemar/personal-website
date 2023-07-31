

let doc = document.querySelector('html');
doc.classList.remove('no_js');
doc.classList.add('active_js');
/**
 * Botao de retornar
 */
let returntop = document.getElementById("return-top");
function returnTop() {
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;//altura da janela atual
    var maxWidth = window.innerWidth || document.documentElement.clientWidth;//largura da janela atual 
    var scrollTop = window.pageYOffset || window.screenY || document.documentElement.scrollTop;//posição vertical de rolagem

    if (scrollTop + 500 >= windowHeight) {
        returntop.classList.add("js");
    } else {
        returntop.classList.remove("js");
    }
}
window.addEventListener('scroll', returnTop);

/**
 * Navigation
 */
const nav = document.querySelector('.nav-container');
const boxes = document.querySelectorAll('.magnetic');
const navWidth = nav.offsetWidth;

function handleScroll() {
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const maxWidth = window.innerWidth || document.documentElement.clientWidth;
    const scrollTop = window.pageYOffset || window.screenY || document.documentElement.scrollTop;

    requestAnimationFrame(() => {
        if (scrollTop + 100 >= windowHeight && maxWidth > 850) {
            nav.classList.add('fixed', 'js');
            //nav.style.marginTop = `${scrollTop}px`;
        } else {
            nav.classList.remove('fixed');
        }
    });
}
/**
 * Magnetic Effect */
function handleBoxMovement(e) {
    const x = e.offsetX;
    const y = e.offsetY;
    const boxWidth = this.clientWidth;
    const boxHeight = this.clientHeight;
    const moveX = x - boxWidth / 2;
    const moveY = y - boxHeight / 2;

    requestAnimationFrame(() => {
        this.style.transition = '.11s ease';
        this.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
}

function resetBoxMovement() {
    requestAnimationFrame(() => {
        this.style.transition = '.6s ease';
        this.style.transform = 'translate(0px, 0px)';
    });
}

window.addEventListener('scroll', handleScroll);

boxes.forEach(box => {
    box.addEventListener('mousemove', handleBoxMovement);
    box.addEventListener('mouseout', resetBoxMovement);
});

// Desabilitar a restauração automática de rolagem
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

//toggle icon
var menu = document.getElementById('nav-link');
document.getElementById('toggle').onclick = () => {
    toggle.classList.toggle('clicked');
    menu.classList.toggle('active');
}

/**
 * Dark Light 
 */
let darkLight = document.getElementById('dark-light');
let changeTheme = document.querySelector('.body');
darkLight.onclick = () => {
    darkLight.classList.toggle('active');

    if (changeTheme.classList.contains('desligado')) {
        changeTheme.classList.remove('desligado');
        changeTheme.classList.add('ligado');
    } else if (changeTheme.classList.contains('ligado')) {
        changeTheme.classList.remove('ligado');
        changeTheme.classList.add('desligado');
    }
    else {
        changeTheme.classList.toggle('ligado');
    }
}
/*escurecer página*/
function escurecer() {
    let larguraTotal = window.innerHeight;
    let deslocamentoVertical = window.pageYOffset || document.documentElement.scrollTop;
    let quantidade_px_para_fazer = larguraTotal - 421;
    let headerContainer = document.querySelector('.header-container');

    if (deslocamentoVertical > quantidade_px_para_fazer) {
        let porcentagemRestante = (deslocamentoVertical - quantidade_px_para_fazer) / (larguraTotal - quantidade_px_para_fazer);
        let opacidade = 1 - porcentagemRestante - (porcentagemRestante / 2);
        headerContainer.style.opacity = opacidade.toFixed(2);
    } else {
        headerContainer.style.opacity = 1;
    }
}

window.addEventListener('scroll', escurecer);

/**
* Loading Effect
*/
// Remove a classe "loading-overlay" após o carregamento do site
window.addEventListener('load', function () {
    let overlay = document.querySelector('.loading-overlay');
    overlay.style.display = 'none';
});


//Secondary Cursor
let cursor = document.getElementById('cursor');

const body = document.querySelector('body');
cursor.classList.add('active__js');
cursor.classList.add('visible');

function updateCursorPosition(e) {
    requestAnimationFrame(function () {
        cursor.style.left = e.pageX + 'px';
        cursor.style.top = e.pageY + 'px';
    });
}

document.addEventListener('mousemove', updateCursorPosition);
window.addEventListener('scroll', function () {
    cursor.classList.remove('visible');
});
window.addEventListener('mousemove', function () {
    cursor.classList.add('visible');
});

let maxwidth = window.innerWidth;

document.addEventListener('mouseleave', () => {
    cursor.classList.remove('visible');
});
document.addEventListener('mouseenter', () => {
    cursor.classList.add('visible');
});

// Inicializar o ScrollReveal
const sr = ScrollReveal({
    distance: '70px',
    duration: 1500,
    reset: false
})
sr.reveal('#contact,about-tittle, .about-tittle, .about, .about-gri, .about-description, .about-resume, .main-text', { delay: 50, origin: 'top' })
sr.reveal(' .row', { delay: 50, origin: 'bottom' })
sr.reveal(' .one', { delay: 50, origin: 'top' })
sr.reveal(' .two', { delay: 50, origin: 'top' })
sr.reveal(' .three', { delay: 50, origin: 'top' })
/**
 * Imagem Animation; elemento Imagem acompanhar um pouco a rolagem
 
let blob = document.querySelector('blobs');
let distanciaTopo = blob.getBoundingClientRect().top;

function followScroll() {
    let posicaoTopo = blob.getBoundingClientRect().top;
    let diferencaRolagem = posicaoTopo - distanciaTopo;
    let scrollY = window.innerHeight || document.documentElement.clientHeight;
    let width = window.innerWidth || document.documentElement.clientWidth;
    let distanceScroll = window.screenY || document.documentElement.scrollTop;
    let scrollPassou80vh = window.scrollY > (window.innerHeight * 0.45);
    let somador = diferencaRolagem / 2;
    //Para nova verificacao se passar scrolagem do header
    let larguraTotal = window.innerHeight;
    let deslocamentoVertical = window.pageYOffset || document.documentElement.scrollTop;
    //var quantidade_px_para_fazer = larguraTotal - 421;

    if (scrollY > distanceScroll && !scrollPassou80vh &&  deslocamentoVertical < larguraTotal && width > 500)  {
        blob.style.marginTop = -diferencaRolagem - somador + 'px';
    } else {
        blob.style.marginTop = "0px;"
    }
}
window.addEventListener('scroll', followScroll); 
*/

/**
 * Icon Menu
*/
/**
 * Light Effect inacabado
document.getElementsByClassName("luz") = () => {
    const rect = document.getElementsByClassName("luz").getBoundingClientRect(),
    x = e.clientX - rect.left,
    y = e.clientY - rect.top;
    
    document.getElementsByClassName("luz").style.setProperty("--mouse-x", `${x}px`);
    document.getElementsByClassName("luz").style.setProperty("--mouse-y", `${y}px`);
};
*/

/**
 *  Cursor
 */

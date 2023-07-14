
/**
 * Botao de retornar
 */
var returntop = document.getElementById("return-top");
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
            nav.style.marginTop = `${scrollTop}px`;
        } else {
            nav.classList.remove('fixed');
            nav.style.marginTop = '16px';
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
/**
 * Imagem Animation; elemento Imagem acompanhar um pouco a rolagem
 
var blob = document.getElementById("blob");
var distanciaTopo = blob.getBoundingClientRect().top;

function followScroll() {
    var posicaoTopo = blob.getBoundingClientRect().top;
    var diferencaRolagem = posicaoTopo - distanciaTopo;
    var scrollY = window.innerHeight || document.documentElement.clientHeight;
    const width = window.innerWidth || document.documentElement.clientWidth;
    var distanceScroll = window.screenY || document.documentElement.scrollTop;
    var scrollPassou80vh = window.scrollY > (window.innerHeight * 0.45);
    var somador = diferencaRolagem / 2;
    //Para nova verificacao se passar scrolagem do header
    var larguraTotal = window.innerHeight;
    var deslocamentoVertical = window.pageYOffset || document.documentElement.scrollTop;
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
let changeTheme = document.querySelector('.ligado');
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

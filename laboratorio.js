function mostrarpag(pageid){
    const page = document.querySelectorAll('.pag');
    for (let i = 0; i < pages.length; i++){
        const page = pages[i];
        if (page.id === pageId){
            page.class.remove('active');

        }else{
            page.classList.remove('active');
        }


    }

}
function cerrar(){
    window.close
}
function mostrarPag(pagina) {

    document.querySelectorAll('.pag').forEach(p => p.classList.remove('active'));

    document.getElementById(pagina).classList.add('active');
}

function cerrar() {
    alert("Cerrar sesión"); 
}
document.addEventListener('DOMContentLoaded', () => {

    mostrarPag('pagina1');

    function mostrarPag(pagina) {

        document.querySelectorAll('.pag').forEach(p => p.classList.remove('active'));

        document.getElementById(pagina).classList.add('active');
    }


    window.mostrarPag = mostrarPag;

    window.cerrar = function() {
        alert("Cerrar sesión"); 
    }
});


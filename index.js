document.addEventListener('DOMContentLoaded',(e)=>{
    const docker = document.querySelector('.docker');
    const hijos = docker.querySelectorAll('.element');
    hijos.forEach(hijoSeleccionado=>{

        hijoSeleccionado.addEventListener('mouseenter',()=>{
            hijoSeleccionado.style.transform = 'scale(1.5)';
            if(hijoSeleccionado.nextElementSibling){
                let nexthijoSeleccionado = hijoSeleccionado.nextElementSibling;
                nexthijoSeleccionado.style.transform = 'scale(1.2)';
            }
            if(hijoSeleccionado.previousElementSibling){
                let previoushijoSeleccionado = hijoSeleccionado.previousElementSibling;
                previoushijoSeleccionado.style.transform = 'scale(1.2)';
            }
        });

        hijoSeleccionado.addEventListener('mouseleave',()=>{
            hijoSeleccionado.style.transform = 'scale(1)';
            if(hijoSeleccionado.nextElementSibling){
                let nexthijoSeleccionado = hijoSeleccionado.nextElementSibling;
                nexthijoSeleccionado.style.transform = 'scale(1)';
            }
            if(hijoSeleccionado.previousElementSibling){
                let previoushijoSeleccionado = hijoSeleccionado.previousElementSibling;
                previoushijoSeleccionado.style.transform = 'scale(1)';
            }
        });
        })
    });

 function ativaLetra(elemento){
    const arrTexto = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    arrTexto.forEach( ( Letra , i)=>{
        setTimeout(()=>{
            elemento.innerHTML += Letra;
        }, 120 * i);
    });
 }


const titulo = document.querySelector('.digitando');
ativaLetra(titulo);
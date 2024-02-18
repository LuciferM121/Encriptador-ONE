let mensaje;
let caja = document.querySelector('#txtarea');
let imgNoEncontrado = document.getElementById('no-encontrado');
let textNoEncontrado = document.getElementById('text-no-encontrado');
let titleNoEncontrado = document.getElementById('h1-no-encontrado');
let cajaText = document.getElementById('desn');
let btnCopy = document.getElementById('btn-copy');
let logo = document.getElementById('img-logo');
let instruccion = document.getElementById('inst');
let desen = document.querySelector('.desencriptado');
let cajaB = document.querySelector('.txt-end');

document.getElementById('estado').addEventListener('change', ()=>{
    if(document.body.className.indexOf('lucifer')==-1)
    {
        document.body.classList.add('lucifer');
        caja.style.backgroundColor = '#FFE9BB';
        logo.src = "Imagenes/luciferlogo.png";
        imgNoEncontrado.src = "Imagenes/luci.png"
        instruccion.style.color = 'black';
    }
    else
    {
        document.body.classList.remove('lucifer');
        caja.style.backgroundColor = '#FF4A56';
        logo.src = "Imagenes/logo.png";
        imgNoEncontrado.src = "Imagenes/husk.png"
        instruccion.style.color = 'White';
    }
});

function ajustarCaja()
{
    let tamanio= desen.offsetHeight;
    if(tamanio == 200)
    {
        desen.style.height = '500px';
    }
    else
    {
        if(tamanio==400)
        {
            desen.style.height = '600px';
        }
    }
}

function reAjustarCaja()
{
    let tamanio= desen.offsetHeight;
    if(tamanio == 500)
    {
        desen.style.height = '200px';
    }
    else
    {
        if(tamanio == 600)
        {
            desen.style.height = '400px';
        }
    }
}
function copiarTexto(){
    cajaText.select();
    document.execCommand("copy");
    btnCopy.innerText = "¡Copiado!";
}

function minusculas(){
    caja.value = caja.value.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    caja.value = caja.value.toLowerCase();
}

function limpiarCaja() {
    document.querySelector('#txtarea').value = '';
}

function ocultarImagen() 
{
    imgNoEncontrado.style.display = 'none';
    textNoEncontrado.style.display = 'none';
    titleNoEncontrado.style.display = 'none';
    cajaText.style.display = 'block';
    btnCopy.style.display = 'block';
    
}

function sinTexto() 
{
    imgNoEncontrado.style.display = 'block';
    textNoEncontrado.style.display = 'block';
    titleNoEncontrado.style.display = 'block';
    cajaText.style.display = 'none';
    btnCopy.style.display = 'none';
}

function encriptar()
{
    btnCopy.innerText = "Copiar";
    mensaje = document.querySelector('#txtarea').value;
    if(mensaje != "")
    {
        mensaje = mensaje.replaceAll("e", "enter");
        mensaje = mensaje.replaceAll("i", "imes");
        mensaje = mensaje.replaceAll("a", "ai");
        mensaje = mensaje.replaceAll("o", "ober");
        mensaje = mensaje.replaceAll("u", "ufat");
        cajaText.value = mensaje;
        ocultarImagen();
        ajustarCaja();
        limpiarCaja();
        mensaje= "";
    }
    else
    {
        sinTexto();
        reAjustarCaja();
        
    }
}

function desencriptar()
{
    mensaje = document.querySelector('#txtarea').value;
    btnCopy.innerText = "Copiar";
    if(mensaje != "")
    {
        mensaje = mensaje.replaceAll("enter", "e");
        mensaje = mensaje.replaceAll("imes", "i");
        mensaje = mensaje.replaceAll("ai", "a");
        mensaje = mensaje.replaceAll("ober", "o");
        mensaje = mensaje.replaceAll("ufat", "u");
        cajaText.value = mensaje;
        ocultarImagen();
        ajustarCaja();
        limpiarCaja();
        mensaje= "";

    }
    else
    {
        reAjustarCaja();
        sinTexto();
    }

}

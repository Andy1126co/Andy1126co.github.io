const boton_encriptar = document.getElementById("boton_encriptar");
const textarea = document.getElementById("textarea");
const articulo = document.getElementById("articulo");
const boton_copiar = document.getElementById("boton_copiar");
const boton_des_encriptar = document.getElementById('boton_desencriptar');


function boton_invisible() {
    if (articulo.innerHTML.trim() === '') {
        boton_copiar.style.display = 'none';
    }


}

function boton_visible() {
    if (articulo.innerHTML.trim() !== '') {

        boton_copiar.style.display = 'inline-block';

    } else {
        boton_copiar.style.display = 'none';
    }

}

function limpiar_textarea() {
    textarea.value = "";
}

function limpiar_articulo() {
    articulo.innerHTML = "";

}

function copiar_articulo() {
    const copiar = articulo.innerHTML;
    navigator.clipboard.writeText(copiar);
    limpiar_articulo();
    boton_invisible();
    limpiar_textarea();

}

function encriptar() {
    let cambiar = textarea.value;
    cambiar = cambiar.replace(/e/g, 'enter');
    cambiar = cambiar.replace(/i/g, 'imes');
    cambiar = cambiar.replace(/a/g, 'ai');
    cambiar = cambiar.replace(/o/g, 'ober');
    cambiar = cambiar.replace(/u/g, 'ufat');
    return cambiar;
}

function des_encriptar() {
    let cambiar2 = textarea.value;
    cambiar2 = cambiar2.replace(/enter/g, 'e');
    cambiar2 = cambiar2.replace(/imes/g, 'i');
    cambiar2 = cambiar2.replace(/ai/g, 'a');
    cambiar2 = cambiar2.replace(/ober/g, 'o');
    cambiar2 = cambiar2.replace(/ufat/g, 'u');
    return cambiar2;
}

function enviar() {
    articulo.innerHTML = encriptar();

}

function devolver() {
    articulo.innerHTML = des_encriptar();
    boton_visible();
    textarea.style.backgroundImage = 'none';

}

function verificar_contenido() {
    const texto = textarea.value;
    const regex = /^[a-zA-Z0-9\s]*$/;
    if (!regex.test(texto)) {
        alert("No puedes ingresar caracteres especiales");
        textarea.value = texto.replace(/[^a-zA-Z0-9\s]/g, "");
    }
}

document.addEventListener('DOMContentLoaded', boton_invisible);
textarea.addEventListener('input', verificar_contenido);

boton_encriptar.addEventListener("click", enviar);
boton_encriptar.addEventListener("click", boton_visible);
boton_encriptar.addEventListener('click', limpiar_textarea);
boton_copiar.addEventListener('click', copiar_articulo);
boton_des_encriptar.addEventListener('click', devolver);





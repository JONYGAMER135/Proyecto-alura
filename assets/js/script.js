const textarea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje")

function btnEncriptar(){
    const textoEncriptado = encriptar(textarea.value)
    mensaje.value = textoEncriptado
    textarea.value = "";
    if (mensaje.value === "") {
        mensaje.style.backgroundImage = "";
    } else {
        mensaje.style.backgroundImage = "none";
    }
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    if(tieneCaracteresEspeciales(stringEncriptada)) {
        return "El texto contiene caracteres especiales. Por favor, ingresa solo letras y espacios.";
    }

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }

    return stringEncriptada
}

function tieneCaracteresEspeciales(texto) {
    const caracteresEspeciales = /[^a-zA-Z\s]/;
    return caracteresEspeciales.test(texto);
}


function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textarea.value)
    mensaje.value = textoDesencriptado
    textarea.value = "";
    if (mensaje.value === "") {
        mensaje.style.backgroundImage = "";
    } else {
        mensaje.style.backgroundImage = "none";
    }
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    if(tieneCaracteresEspeciales(stringDesencriptada)) {
        return "El texto contiene caracteres especiales. Por favor, ingresa solo letras y espacios.";
    }

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
}



function btnCopiar() {
    var copyText = document.querySelector(".mensaje");
    if (navigator.clipboard) {
    
        navigator.clipboard.writeText(copyText.value);
    } else {
    
        copyText.select();
        document.execCommand("copy");
    }
}

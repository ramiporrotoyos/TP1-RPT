let campoRegistro = document.querySelector(".register-form");
let campoUsuario = document.querySelector("#email")
let campoContra = document.querySelector("#password")
let textoUsuario = document.querySelector("#email-error")
let textoContra = document.querySelector("#password-error")
let textoTerminos = document.querySelector("#terms-error")
let campoTerminos = document.querySelector("#terms")



campoRegistro.addEventListener('submit', function(event) {
    event.preventDefault();

    valido = true

    if ( campoUsuario.value == ""){

        textoUsuario.innerHTML = "Completar campo de usuario."
        valido = false
    } else{
        textoUsuario.innerHTML = ""
    }

    if ( campoContra.value == ""){

        textoContra.innerHTML = "Completar campo de contraseña."
        valido = false 

    } else{
        textoContra.innerHTML = ""  
    }

    if ( campoTerminos.checked == false){
        textoTerminos.innerHTML = "Completar campo de terminos y condiciones."
        valido = false
    }

    if ( valido == true){
        this.submit()
    }

})
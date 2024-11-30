let logIn = document.querySelector("#loginForm")
let mail = document.querySelector("#email")
let contra = document.querySelector("#password")

logIn.addEventListener('submit', function(event) {
    event.preventDefault();

    valido = true

    if (mail.value == ""){
        alert("Por favor complete el campo email")
        valido = false
    }

    if (contra.value == ""){
        alert("Por favor complete el campo contra")
        valido = false
    }

    if ( valido == true){
        this.submit()
    }


})


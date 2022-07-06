let nombre, correo, mensaje;

let formulario = document.getElementById('form')

formulario.addEventListener('submit', (e)=>{
    e.preventDefault()
    LeerDatos()
})

function LeerDatos(){
    nombre = document.getElementById('nombre').value
    correo = document.getElementById('correo').value
    mensaje = document.getElementById('textarea').value
    ValidarData(nombre ,correo, mensaje)
    guardarLocalStorage(nombre ,correo, mensaje)
}

function ValidarData(nombre ,correo, mensaje){ 
    if(nombre.length==0 || correo.length==0 || mensaje.length==0){
        swal("Error", "Los espacios estan vacios", "Error");
    }
}

function GuardarLocalStorage(nombre ,correo, mensaje){
    localStorage.setItem('Nombre',nombre)
    localStorage.setItem('Correo',correo)
    localStorage.setItem('Mensaje',mensaje)
}

function ListarData(params) {
    let nombreUsu = localStorage.getItem('Nombre')
    let correoUsu = localStorage.getItem('Correo')
    let mensajeUsu = localStorage.getItem('Mensaje')
    
}
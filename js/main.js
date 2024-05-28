
let btnAgregar = document.getElementById("btnAgregar");
let btnClear = document.getElementById("btnClear");
let txtNombre = document.getElementById("Name"); 
let txtNumber = document.getElementById("Number"); 

let alertValidaciones = document.getElementById("alertValidaciones");
let alertValidaciones = document.getElementById("alertValidacionesTexto");



function validarCantidad(){
    if(txtNumber.value.length == 0){
        return false;
    }
    return true;
}

btnAgregar.addEventListener("click", function(event){
    event.preventDefault();
    alertValidacionesTexto.innerHTML="";
    alertValidaciones.style.display="none";
    txtNombre.this.style.border="";
    txtNumber.this.style.border="";
    if (txtNombre.value.length<3){
        alertValidacionesTe.style.display="block";
        alertValidaciones.innerHTML="El campo <strong>Nombre</strong> no es correcto";
        txtNombre.style.border="solid medium red";
    }
    if (!validarCantidad()){
        alertValidaciones.style.display="block";
        alertValidacionesTexto.innerHTML="El campo <strong>Cantidad</strong> no es correcto";
        txtNumber.style.border="solid medium red";
    }
});

btnClear.addEventListener("click", function(event){
    event.preventDefault();

    txtNombre.value="";
    txtNumber.value="";

});



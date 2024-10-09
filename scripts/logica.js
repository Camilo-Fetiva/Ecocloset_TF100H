// CREAR LA FUNCION
function nombreUser(){
    let nombre=document.querySelector('.form-control').value; //GUARDAR EL NOMBRE
    alert(nombre); //MOSTRARLO EN UN ALERT
    
 //ESCRIBIRLO EN EL BOTON
    const resultado = document.querySelector('nombre');
    resultado.textContent = nombre;
}


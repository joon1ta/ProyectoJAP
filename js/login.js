//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.


document.getElementById('submit').addEventListener('click', function(e) {
let usuario = document.getElementById('usuario');
let contraseña = document.getElementById('contraseña');
let validacion = true;



if(usuario.value === "" || contraseña.value === "") {
alert("Debe completar el usuario Y la contraseña");
validacion = false;

} if(validacion) {
  location.href = 'login.html';
}




  
});



const enviar = document.querySelector(".form-enviar");


const nombre = document.getElementById("nombre");
const apellido =document.getElementById("apellido");
const email = document.getElementById("email")
const asunto= document.getElementById("asunto")
const mensaje =document.getElementById("mensaje")
const formulario =document.getElementById("formulario")

enviar.addEventListener("click",()=>{
    let errores= document.querySelector(".error")
    let alerta ="";
    let esta = false
    let reg= /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,4}$/;
    errores.innerHTML=""
    if(nombre.value.length == 0)  {
       alerta += `el nombre no debe estar vacios <br>`
     esta = true
    }
    if (apellido.value.length == 0){
        alerta += `el apellido no debe estar vacios <br>`
        esta = true
    }
    if(nombre.value.length > 50){
        alerta += `el nombre no tiene que ser mayor a 50 caracter <br>`
        esta = true       
    } 
     if(!reg.test(email.value)){
        alerta += `el email no tiene el formato correcto o se encuentra vacio <br>`
        esta = true
    }
     
    if(asunto.value.length = 0){
        alerta += `el asunto es no debe estar vacio <br>`
        esta = true       
    } 
    if(asunto.value.length > 50){
        alerta += `el asunto es mayor a 50 caracter <br>`
        esta = true       
    } 
    if(mensaje.value.length > 300){
        alerta += `el asunto es mayor a 50 caracter <br>`
        esta = true       
    } 
    if (mensaje.value.length == 0){
        alerta += `el mensaje no debe estar vacios <br>`
        esta = true
    }
    if (esta){
        errores.innerHTML=alerta
    }else{
        errores.innerHTML="enviado"
    }

    formulario.reset()
})


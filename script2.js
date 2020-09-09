function validar() {

    var rut, digito, nombre, apellido, direccion, comuna, expresion1, mail, expresion2, expresion3;
    rut = document.getElementById("rutCliente").value;
    digito = document.getElementById("verificador").value;
    nombre = document.getElementById("nombreCliente").value;
    apellido = document.getElementById("apellidoCliente").value;
    direccion = document.getElementById("direccionCliente").value;
    comuna = document.getElementById("comunaCliente").value;
    mail = document.getElementById("emailCliente").value;

    expresion1 = /\w+@\w+\.+[a-z]/;
    expresion2 = /^[ñA-Za-z _]*[ñA-Za-z][ñA-Za-z _]*$/;
    expresion3 = /^[0-9]$/;


    if (rut === "" || digito === "" || nombre === "" || apellido === "" || direccion === "" || comuna === "") {
        alert("Rellenar campos vacios");
        return false;

    } else if (rut.length != 8) {
        alert("Rut debe contener 8 dígitos");
        return false;
    } else if (digito.length != 1) {
        alert("Dígito debe contener 1 caracter");
        return false;
    } else if (!expresion3.test(digito)) {
        alert("Dígito debe ser numero");
        return false;
    } else if (nombre.length > 50) {
        alert("Nombre muy largo, máx 50");
        return false;
    }
    else if (apellido.length > 50) {
        alert("Apellido muy largo, máx 50");
        return false;
    }
    else if (direccion.length > 100) {
        alert("Direccion muy larga, máx 100");
        return false;
    } else if (!expresion1.test(mail)) {
        alert("El correo no es válido");
        return false;

    } else if (!expresion2.test(comuna)) {
        alert("La comuna no es valida (Solo letras)");
        return false;
    } else if (!expresion2.test(nombre)) {
        alert("El nombre no es válido (Solo letras)");
        return false;


    } else if (!expresion2.test(apellido)) {
        alert("El apellido no es válido (Solo Letras)");
        return false;

    } else {
        alert("DATOS VALIDADOS! ");
       
        alert("Cliente  \n Nombre: "+nombre + "\n Apellido: "+ apellido+ "\n Rut: "+rut+"-"+digito)
        return false;
    }
}

function validar2() {

    var tipoVehiculo, marca, modelo, ano, revision, exp1, exp2, exp3;
    tipoVehiculo = document.getElementById("vehiculo").value;
    marca = document.getElementById("marca").value;
    modelo = document.getElementById("modelo").value;
    ano = document.getElementById("ano").value;
    
    var revi = document.getElementById('revision').value;
    var select = document.getElementById('vehiculo').value;



    exp2 = /^[ñA-Za-z _]*[ñA-Za-z][ñA-Za-z _]*$/;


    if (tipoVehiculo === "" || marca === "" || modelo === "" || ano === "" ) {
        alert("Rellenar campos vacios!");
        return false;
    } else if (select == "0") {
        alert("Seleccione un Vehiculo!!");
        return false;
    } else if (revi == "0") {
        alert("Seleccione revision!!");
        return false;


    } else if (marca.length > 20) {
        alert("Marca debe contener max 20 digitos");
        return false;
    } else if (!exp2.test(marca)) {
        alert("La marca no es válido (Solo Letras)");
        return false;
    } else if (modelo.length > 20) {
        alert("Modelo debe contener max 20 digitos");
        return false;

    } else if (!exp2.test(modelo)) {
        alert("El modelo no es válido (Solo Letras)");
        return false;

    } else if (ano.length > 4) {
        alert("Anio incorrecto, debe contener 4 dígitos");
        return false;


    }else{
        alert("Datos Validados Correctamente!");
        alert("Vehículo  \n Tipo: "+tipoVehiculo + "\n marca: "+ marca+ "\n modelo: "+modelo+"\n anio: "+ano);
        return false;
    }


}

function validar3() {

    var lavado, trabajador, total;
    var iva=1.19;
    lavado = document.getElementById("tipoServicio").value;
    trabajador = document.getElementById("nomTrabajador").value;

    if(lavado=="0"){
        alert("Seleccione un tipo de lavado");
        return false;
    }else if(trabajador =="0"){
        alert("Seleccione un trabajador");
        return false;
    }

    if(lavado=="1"){
        alert("El lavado cuesta: $5.000 a pagar más iva: $"+(5000*iva));
        total=(5000*iva);
        return false;

    }else if(lavado=="2"){
        alert("El lavado cuesta: $8.000 a pagar más iva: $"+(8000*iva));
        total=(8000*iva);
        return false;
    }
    
    

    
}
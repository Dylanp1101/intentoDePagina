let contadorAdministradores=1
let contadorCompradores=1

let usuarioConectado= null
class Administrador{
    constructor(usuario, pass){
        this.id= contadorAdministradores++
        this.usuario= usuario
        this.pass= pass
    }
}

class Comprador{
    constructor(nombre, apellido, usuario, pass, tarjeta, cvc){
        this.id= contadorCompradores++
        this.nombre= nombre 
        this.apellido= apellido
        this.usuario= usuario
        this.pass= pass
        this.tarjeta= tarjeta
        this.cvc= cvc 
        this.saldo= 3000
    }

}

let contadorProductos=1
class Producto{
    constructor(nombre, descripcion, precio, stock, imagen){
        this.id="PROD_ID"+contadorProductos 
        contadorProductos++
        this.nombre= nombre
        this.descripcion= descripcion
        this.precio= precio
        this.stock= stock
        this.imagen= imagen
        this.oferta= false
        this.estado="activo"
    }
}

let contadorCompras=1
class Compra{
    constructor(idComprador, idProducto, cantidad, monto){
        this.id= contadorCompras++
        this.idComprador= idComprador
        this.idProducto= idProducto
        this.cantidad= cantidad 
        this.monto= monto
        this.estado="pendiente"
    }
}


class Sistema{
    listaAdministradores= new Array()
    listaCompradores= new Array()
    listaProductos= new Array()
    listaCompras= new Array()

    existeAdministrador(unNombre){
        // recorro la lista de administradores, si encuentro uno con el usuario
        // que me pasaron retorno true
        for (let unAdmin of this.listaAdministradores){
            if (unAdmin.usuario==unNombre) return true
        }
        // si recorro toda la lista y no encontré nada
        return false
    }
    existeComprador(unNombre){
        // recorro la lista de compradores, si encuentro uno con el usuario
        // que me pasaron retorno true
        for (let unComprador of this.listaCompradores){
            if (unComprador.usuario==unNombre) return true
        }
        // si recorro toda la lista y no encontré nada
        return false
    }
    hallarAdministrador(unNombre){
        for (let unAdmin of this.listaAdministradores){
            if (unAdmin.usuario==unNombre) return unAdmin
        }
        return null
    }

    hallarComprador(unNombre){
        for (let unComprador of this.listaCompradores){
            if (unComprador.usuario==unNombre) return unComprador
        }
        return null
    }
    esVacio(texto){
        let esVacio=false
        if(texto==""){
            esVacio=true
        }
        return esVacio


    }


}
let sistema= new Sistema()
// DATOS PRECARGADOS
let a1= new Administrador("Frenzo","ayuda")
let a2= new Administrador("Dylan","coconauta")
let a3=new Administrador("1","1")
sistema.listaAdministradores.push(a1, a2,a3)

let c1= new Comprador("Julio","Perigueya","peri","Peri123","1234123412341234","123")
let c2= new Comprador("Mauro","Falopio","gueya","Gueya123","1234123412341234","123")
let c3= new Comprador("zzz","zzz","2","2","1234123412341234","123")
sistema.listaCompradores.push(c1,c2,c3)

//  constructor(nombre, descripcion, precio, stock, imagen){
let p1= new Producto("pelota","nike f7", 5000,5,"img/pelota.jpg")
let p2= new Producto("zapatos"," nike futbol 5",10000,1,"img/zapatos.jpg")
let p3= new Producto("camiseta","nike uruguay", 20000,1,"img/camiseta.jpg")
let p4= new Producto("short"," nike running", 8000,3,"img/short.jpg")
sistema.listaProductos.push(p1,p2,p3,p4)


let compra1 = new Compra(1,"PROD_ID2",1,5500);
let compra2 = new Compra(1,"PROD_ID3",2,300);


sistema.listaCompras.push(compra1,compra2)
 


inicio()
function ocultarTodo(){
    document.querySelector("#cabecera").style.display="none"
    document.querySelector("#pantallaLogin").style.display="none"
    document.querySelector("#menuAdministrador").style.display="none"
    document.querySelector("#menuComprador").style.display="none"
    document.querySelector("#pantallaComprarProductos").style.display="none"
    document.querySelector("#pantallaRegistroComprador").style.display="none"
    document.querySelector("#pantallaCrearProducto").style.display="none"
    document.querySelector("#pantallaAdministrarProductos").style.display="none"
    document.querySelector("#pantallaListadoCompras").style.display="none"
    document.querySelector("#pantallaMostrarInforme").style.display="none"
    document.querySelector("#pantallaCarrito").style.display="none"
    
    
}

function inicio(){
    ocultarTodo()
    document.querySelector("#pantallaLogin").style.display="block"
    document.querySelector("#btnLoginIngresar").addEventListener("click", hacerLogin)
    document.querySelector("#btnCabeceraCerrarSesion").addEventListener("click", cerrarSesion)
    document.querySelector("#btnComprarProducto").addEventListener("click", mostrarListadoProductos)
    document.querySelector("#btnRegistrarComprador").addEventListener("click", mostrarRegistroUsuario)
    document.querySelector("#btnIngresarRegistro").addEventListener("click", IngresarRegistro)
    document.querySelector("#btnCancelar").addEventListener("click", inicio)
    document.querySelector("#btnAdminCrearProducto").addEventListener("click", mostrarCrearProducto)
    document.querySelector("#btnVolverMenuAdmin").addEventListener("click", volverMenuAdministrador)
    document.querySelector("#btnCrearProducto").addEventListener("click", crearProducto)
    document.querySelector("#btnAdminAdministrarProductos").addEventListener("click", mostrarAdministrarProductos)
    document.querySelector("#btnVolverMenuAdmin2").addEventListener("click",volverMenuAdministrador)
    document.querySelector("#btnVolverMenuAdmin3").addEventListener("click",volverMenuAdministrador)
    document.querySelector("#btnAdminListar").addEventListener("click",mostrarListaCompras)
    document.querySelector("#btnAdminVerInforme").addEventListener("click",mostrarInformeGanancias)
    document.querySelector("#btnComprasCanceladas").addEventListener("click",mostrarComprasCanceladas)
    document.querySelector("#btnComprasAprobadas").addEventListener("click",mostrarComprasAprobadas)
    document.querySelector("#btnveroferta").addEventListener("click",mostrarListadoProductosOferta)
    document.querySelector("#btnVerCarrito").addEventListener("click",mostrarListaCarrito)
    

    


    
   
}
function mostrarRegistroUsuario(){
    ocultarTodo()
    document.querySelector("#pantallaRegistroComprador").style.display="block"

}
function mostrarCrearProducto(){
    ocultarTodo()
    document.querySelector("#pantallaCrearProducto").style.display="block"


}
function volverMenuAdministrador(){
    ocultarTodo()
     document.querySelector("#menuAdministrador").style.display="block"
      document.querySelector("#cabecera").style.display="block"
}
function mostrarAdministrarProductos(){
    ocultarTodo()
    document.querySelector("#pantallaAdministrarProductos").style.display="block"
    document.querySelector("#cabecera").style.display="block"
    mostrarProducto()


}
function mostrarProducto(){
    let miTabla = ''
    miTabla += `<table border="1">
                <thead>
                    <tr>
                        <td>Id Producto</td>
                        <td>Imagen</td>
                        <td>Nombre</td>
                        <td>Descripción</td>
                        <td>Precio</td>
                        <td>Stock</td>
                        <td>Modificar stock</td>
                        <td>Modificar estado actual</td>
                        <td>Modificar producto en oferta</td>
                    </tr>
                </thead>
                <tbody>
    `
    for (let unProducto of sistema.listaProductos){
        let enOferta = "no"
        if(unProducto.oferta){
            enOferta="si"
        }
        miTabla += `<tr>
                        <td>${unProducto.id}</td>
                        <td><img src="${unProducto.imagen}" width="80" height="80"></td>
                        <td>${unProducto.nombre}</td>
                        <td>${unProducto.descripcion}</td>
                        <td>${unProducto.precio}</td>
                        <td><input type="number" id="txtModificarStock${unProducto.id}" value="${unProducto.stock}"></td>
                        <td><input type="button" value="Modificar Stock" class="btnModificarStock" id="btn${unProducto.id}"></td>
                        <td><input type="button" value="Estado: ${unProducto.estado}" class="btnModificarEstado" id="btnEstado${unProducto.id}"></td>
                        <td><input type="button" value="En oferta: ${enOferta}" class="btnModificarOferta" id="btnOferta${unProducto.id}"></td>
                    </tr>
        `
    }
    miTabla +=` </tbody></table>`
    document.querySelector("#msgAdministrarProducto").innerHTML = miTabla  

    // ASIGNACIÓN DE EVENTOS A TODOS LOS BOTONES QUE TENGAN LA CLASE btnModificarStock
    let listaInputs = document.getElementsByClassName("btnModificarStock");
    for (let unInput of listaInputs){
        unInput.addEventListener("click", modificarStock);
    }

    let btnsEstado = document.getElementsByClassName("btnModificarEstado");
    for (let unBtn of btnsEstado){
        unBtn.addEventListener("click", modificarEstado);
    }

    let btnsOferta = document.getElementsByClassName("btnModificarOferta");
    for (let unBtnO of btnsOferta){
        unBtnO.addEventListener("click", modificarOferta);
    }
    
}
function modificarEstado(){
    let cualFueElBoton = this; // me guardo el botón clickeado
    let id = cualFueElBoton.id; // guardo el id del boton clickeado (btn0, btn1..)
    let productoId = id.substring(16); // me quedo solo con el número del id después de "btn"
    let producto = sistema.listaProductos[productoId-1]

    if(producto.estado == "pausado"){
        if(producto.stock>0){
        producto.estado = "activo"
        }else{
        document.querySelector("#msgModificarStock").innerHTML="El stock debe ser mayor o igual a 0" 
        }

    }else{
        producto.estado = "pausado"
    }
    mostrarProducto();
}

function modificarOferta(){
    let cualFueElBoton = this; // me guardo el botón clickeado
    let id = cualFueElBoton.id; // guardo el id del boton clickeado (btn0, btn1..)
    let productoId = id.substring(16); // me quedo solo con el número del id después de "btn"
    let producto = sistema.listaProductos[productoId-1]

    if(producto.oferta){
        producto.oferta = false
        }else{
        producto.oferta = true
    }
    mostrarProducto();

}


function modificarStock(){
    let cualFueElBoton = this; // me guardo el botón clickeado
    let id = cualFueElBoton.id; // guardo el id del boton clickeado (btn0, btn1..)
    let productoId = id.substring(3); // me quedo solo con el número del id después de "btn"
    let producto = sistema.listaProductos[productoId.substring(7)-1]
    let nuevoStock = Number(document.querySelector(`#txtModificarStock${productoId}`).value); // obtengo el valor del input correspondiente al stock

    if(nuevoStock>=0){
        producto.stock = nuevoStock;
        producto.estado="activo"
        if(nuevoStock==0){
            producto.estado = "pausado";
        }
        document.querySelector("#msgModificarStock").innerHTML="Stock modificado correctamente"
    }else{
        document.querySelector("#msgModificarStock").innerHTML="El stock debe ser mayor o igual a 0" 
    }

    mostrarProducto();
}
function crearProducto(){

    // capturo las variables
    let nombre = document.querySelector("#txtNombreProducto").value
    let precio = Number(document.querySelector("#txtPrecioProducto").value)
    let descripcion = document.querySelector("#txtDescripcionProducto").value
    let imagen = document.querySelector("#txtUrlImgProducto").value
    let stock = document.querySelector("#txtStockInicial").value

    if(!sistema.esVacio(nombre) && !sistema.esVacio(precio) && !sistema.esVacio(descripcion) && !sistema.esVacio(imagen) && !sistema.esVacio(stock) &&
precio>0 && stock>0){
    // creamos el objeto 
    let unProducto= new Producto(nombre,descripcion,precio,stock,imagen)
    //guardo objeto en la lista
    sistema.listaProductos.push(unProducto)
    
    document.querySelector("#msgCrearProducto").innerHTML="Se creo correctamente"

    ocument.querySelector("#txtNombreProducto").value=""
        document.querySelector("#txtPrecioProducto").value=""
        document.querySelector("#txtDescripcionProducto").value=""
        document.querySelector("#txtUrlImgProducto").value=""
        document.querySelector("#txtStockInicial").value=""


}else{
    document.querySelector("#msgCrearProducto").innerHTML="Error"
}

}
function IngresarRegistro(){
    //capturar valores
    
    let valida=true
    let nombre= document.querySelector("#txtNombre").value
    let apellido=document.querySelector("#txtApellido").value
    let usuario=document.querySelector("#txtUsuario").value
    let pass=document.querySelector("#txtContraseña").value
    let tarjeta=Number(document.querySelector("#txtTarjeta").value)
    let cvc=Number(document.querySelector("#txtCvc").value)

    // validaciones
    if(!sistema.esVacio(nombre) && !sistema.esVacio(apellido) && !sistema.esVacio(usuario) && !sistema.esVacio(pass) && !sistema.esVacio(tarjeta) && !sistema.esVacio(cvc) 
    && validarContrasenia(pass) && validarTarjeta(tarjeta) && cvc.toString().length==3){

        let unComprador= new Comprador (nombre,apellido,usuario,pass,tarjeta,cvc)

        sistema.listaCompradores.push(unComprador)

        document.querySelector("#msgLogin").innerHTML="Comprador registrado correctamente"

        document.querySelector("#txtNombre").value=""
        document.querySelector("#txtApellido").value=""
        document.querySelector("#txtUsuario").value=""
        document.querySelector("#txtContraseña").value=""
        document.querySelector("#txtTarjeta").value=""
        document.querySelector("#txtCvc").value=""
        inicio()
    }else{
        alert("error")
    }


}
function validarContrasenia(contrasenia){
    let esValida= false
    if(contrasenia.length >=5 && tieneMayus(contrasenia) && tieneMinuscula(contrasenia) && contieneNumero(contrasenia)){
        esValida = true
    }
    return esValida
}
function tieneMayus(texto){
    
    for(letra of texto){
       if( letra==letra.toUpperCase() && letra!=""&&  isNaN(letra) ){
        return true
       }
    } return false
}
function tieneMinuscula(texto){
    for(letra of texto){
       if( letra==letra.toLowerCase()&& letra!="" && isNaN(letra)){
        return true
       }
    } return false
}
function contieneNumero(texto){
    for(letra of texto){
        if(!isNaN(letra)){
            return true
        }
    }return false

}
function validarTarjeta(nro) {
    let suma = 0
    let impar = true
    // recorro todos los dígitos de la tarjeta
    for (let i = 0; i < nro.length ; i++) {
        // obtengo el digito
        let n = Number(nro[i])
        if (impar) {
            // multiplico el digito por 2
            n = n * 2
            // si se desbordó a 2 cifras resto 9 para obtener el original
            if (n  > 9) {
                n = n - 9
            }
        }
        // por fin acumulo
        suma = suma + n
        // Cambia el valor de impar por su opuesto
        impar = !impar
    }
    return (suma % 10 == 0)  // va a retornar true o false si cumple o no la condición
}

//alert(validarTarjeta("4213000400160136"))

function hacerLogin(){
//  paso 1 capturo los datos del formulario
    let nombreUsuario= document.querySelector("#txtLoginUsuario").value 
    let pass= document.querySelector("#txtLoginPass").value 
// paso 2 chequeo que el usuario Exista
    if ( sistema.existeAdministrador(nombreUsuario)){
        // paso 3 chequear la contraseña
        let elAdmin= sistema.hallarAdministrador(nombreUsuario)
        if (elAdmin.pass == pass){
            ocultarTodo()
            document.querySelector("#cabecera").style.display="block"
            document.querySelector("#menuAdministrador").style.display="block"
            document.querySelector("#msgInfo").innerHTML="Usuario: "+elAdmin.usuario
            usuarioConectado= elAdmin
        } else {
            alert ("error Usuario/contraseña incorrecta")
        }
    } else {
         // todavía me falta chequear de que sea un comprador
         if ( sistema.existeComprador(nombreUsuario)){
            // paso 3 chequear la contraseña
            let elComprador= sistema.hallarComprador(nombreUsuario)
            if (elComprador.pass == pass){
                ocultarTodo()
                document.querySelector("#cabecera").style.display="block"
                document.querySelector("#menuComprador").style.display="block"
                document.querySelector("#msgInfo").innerHTML="Usuario: "+elComprador.usuario
                usuarioConectado= elComprador
            } else {
                alert ("error Usuario/contraseña incorrecta")
            }
        } else {
                 alert ("error Usuario/contraseña incorrecta")
                }


    }
}

function cerrarSesion(){
    ocultarTodo()
    document.querySelector("#pantallaLogin").style.display="block"
    usuarioConectado= null
    document.querySelector("#txtLoginUsuario").value="" 
    document.querySelector("#txtLoginPass").value=""
}

//usuario hace compra
function mostrarListadoProductos(){
    ocultarTodo()

    document.querySelector("#cabecera").style.display="block"
    document.querySelector("#pantallaComprarProductos").style.display="block"

     
    let miTabla=`<table border="1">
                <thead>
                    <td>Imagen</td>
                    <td>Nombre</td>
                    <td>Descripción</td>
                    <td>Precio</td>
                    <td>En oferta</td>
                    <td>Cantidad</td>
                    <td>Comprar</td>
                </thead>
    `
        // ACA GENERO LAS FILAS CON LOS PRODUCTOS
    for (let unProducto of sistema.listaProductos){
        let enOferta = "No"
        if(unProducto.oferta){
            enOferta = "Si"
        }
        if(unProducto.stock>0 && unProducto.estado=="activo"){
            miTabla+=`<tr>
                        <td> <img src="${unProducto.imagen}" width="80" heigth="80"></td>
                        <td>${unProducto.nombre}</td>
                        <td>${unProducto.descripcion}</td>
                        <td>${unProducto.precio}</td>
                        <td>${enOferta}</td>
                        <td> <input type="number" id="txtCantidad${unProducto.id}"> </td>
                        <td> <input type="button" value="Comprar" class="botonAccion" id="boton${unProducto.id}"> </td>
                        </td>
                </tr>
        `
        }
        
    }
    miTabla+=`</table>`
    document.querySelector("#msgListadoProductosCompra").innerHTML= miTabla


    //ASIGNACIÓN DE EVENTOS A TODOS LOS BOTONES QUE TENGAN LA CLASE botonAccion
    let listaInputs = document.getElementsByClassName("botonAccion");
    for (let unInput of listaInputs){
        unInput.addEventListener("click", hacerCompra);
    }
    
}

// FIORENZO

function mostrarListadoProductosOferta(){
    ocultarTodo()

    document.querySelector("#cabecera").style.display="block"
    document.querySelector("#pantallaComprarProductos").style.display="block"

     
    let miTabla=`<table border="1">
                <thead>
                    <td>Imagen</td>
                    <td>Nombre</td>
                    <td>Descripción</td>
                    <td>Precio</td>
                    <td>Cantidad</td>
                    <td>Comprar</td>
                </thead>
    `
     
    for (let unProducto of sistema.listaProductos){
        let enOferta = "No"
        if(unProducto.oferta){
            enOferta = "Si"
        }

        if(unProducto.stock>0 && unProducto.estado=="activo" && enOferta == "Si"){
            miTabla+=`<tr>
                        <td> <img src="${unProducto.imagen}" width="80" heigth="80"></td>
                        <td>${unProducto.nombre}</td>
                        <td>${unProducto.descripcion}</td>
                        <td>${unProducto.precio}</td>
                        <td> <input type="number" id="txtCantidad${unProducto.id}"> </td>
                        <td> <input type="button" value="Comprar" class="botonAccion" id="boton${unProducto.id}"> </td>
                        </td>
                </tr>
        `
        }
        
    }
    miTabla+=`</table>`
    document.querySelector("#msgListadoProductosCompra").innerHTML= miTabla

    let listaInputs = document.getElementsByClassName("botonAccion");
    for (let unInput of listaInputs){
        unInput.addEventListener("click", hacerCompra);
    }
    
}

function mostrarListaCarrito(){
    ocultarTodo()

    document.querySelector("#cabecera").style.display="block"
    document.querySelector("#pantallaCarrito").style.display="block"

     
    let miTabla=`<table border="1">
                <thead>
                    <td>Imagen</td>
                    <td>Nombre</td>
                    <td>Descripción</td>
                    <td>Precio</td>
                    <td>En oferta</td>
                    <td>Cantidad</td>
                    <td>Comprar</td>
                </thead>
    `
        // ACA GENERO LAS FILAS CON LOS PRODUCTOS
    for (let unProducto of sistema.listaProductos){
        let enOferta = "No"
        if(unProducto.oferta){
            enOferta = "Si"
        }
        if(unProducto.stock>0 && unProducto.estado=="activo"){
            miTabla+=`<tr>
                        <td> <img src="${unProducto.imagen}" width="80" heigth="80"></td>
                        <td>${unProducto.nombre}</td>
                        <td>${unProducto.descripcion}</td>
                        <td>${unProducto.precio}</td>
                        <td>${enOferta}</td>
                        <td> <input type="number" id="txtCantidad${unProducto.id}"> </td>
                        <td> <input type="button" value="Comprar" class="botonAccion" id="boton${unProducto.id}"> </td>
                        </td>
                </tr>
        `
        }
        
    }
    miTabla+=`</table>`
    document.querySelector("#msgListaCarrito").innerHTML= miTabla


    //ASIGNACIÓN DE EVENTOS A TODOS LOS BOTONES QUE TENGAN LA CLASE botonAccion
    let listaInputs = document.getElementsByClassName("botonAccion");
    for (let unInput of listaInputs){
        unInput.addEventListener("click", hacerCompra);
    }
    
}



function hacerCompra(){
    // esta magia permite obtener el id del producto
   let idBoton= this.id 
   let idProd= idBoton.substring(5)
   let idCantidad= "#txtCantidad"+idProd
   let cantidad= Number(document.querySelector(idCantidad).value) 
//     constructor(idComprador, idProducto, cantidad, monto){
   let monto= cantidad * precioProducto(idProd)
   // creo el objeto compra y luego lo meto en la lista 
   let miComprita= new Compra(usuarioConectado.id, idProd,cantidad,monto)
   alert(miComprita.monto)
   sistema.listaCompras.push(miComprita)
   alert ("La compra fue registrada con éxito")
}

function precioProducto(idProd){
    for (let unProducto of sistema.listaProductos){
        if (unProducto.id == idProd) return unProducto.precio
    }
    return null
}


function accionBoton(){
    let cualFueElBoton = this; //me guardo el botón clickeado
    let id = cualFueElBoton.id; //guardo el id del boton clickeado (boton0, boton1..)
    let posicion = Number(id.substring(5)); //me quedo solo con el numero del texto y lo paso a numero
    let objetoAuto = listaDeAutos[posicion]; //me traigo el objeto auto según posicion
    if(objetoAuto.estado=="disponible"){
        objetoAuto.estado="ocupado";
    } 
    else {
        objetoAuto.estado="disponible";
    }

    mostrarTabla();

}
/* 17-06 mostrar listado de compras - funcion devolver totalMonto -  funcion devolverProducto - funcion devolverComprador */
function mostrarListaCompras(){
ocultarTodo()
document.querySelector("#pantallaListadoCompras").style.display="block"
document.querySelector("#btnComprasPendientes").addEventListener("click", mostrarComprasPendientes)
}

// funcion para lista de copmras admin - mostrar compras pendientes

function mostrarComprasPendientes(){
    document.querySelector("#h3ListarCompras").innerHTML = "Lista de comrpas pendientes"
    if(sistema.listaCompras.length>0){    
        let miTabla = `
        <table border="1">
            <thead>
                    <td>Comprador</td>
                    <td>Producto</td>
                    <td>Cantidad</td>
                    <td>Monto total</td>
                    <td>Aprobar compra</td>
            </thead>`
                for(let compra of sistema.listaCompras){
                    let c = devolverComprador(compra.idComprador)
                    let p = devolverProducto(compra.idProducto)
                    
                    if(compra.estado=="pendiente"){
                    miTabla+=`
                    <tr>
                        <td>${c.nombre}</td>
                        <td>${p.nombre}</td>
                        <td>${compra.cantidad}</td>
                        <td>${compra.monto}</td>
                        <td> <input type="button" value="Aprobar" class="botonesAprobar" id="boton${compra.id}"> </td>
                    <tr>
                    `}
                }
                
                miTabla+=`
            </table>
        `
        document.querySelector("#msgListadoCompras").innerHTML = miTabla
        }else{
            document.querySelector("#msgListadoCompras").innerHTML = "No se registraron compras"
        }

        //ASIGNACIÓN DE EVENTOS A TODOS LOS BOTONES QUE TENGAN LA CLASE botonesAprobar
        let listaInputs = document.getElementsByClassName("botonesAprobar");
        for (let unInput of listaInputs){
            unInput.addEventListener("click", aprobarCompra);
            mostrarListaCompras();
        }
}


// funcion aprobar compra - un admin hace click y modifica el estado
function aprobarCompra(){

    let cualFueElBoton = this; // me guardo el botón clickeado
    let id = cualFueElBoton.id; // guardo el id del boton clickeado (btn0, btn1..)
    let compraID = id.substring(5); // me quedo solo con el número del id después de "btn"
    
    let compra = devolverCompra(compraID)
    let comprador = devolverComprador(compra.idComprador)
    if(validarCompra(compra.idProducto, compra, comprador)){
        compra.estado = "aprobada"
        let producto = devolverProducto(compra.idProducto)
        if(producto.stock==0){
            producto.estado ="pausado"
        }
        document.querySelector("#msgListadoComprasMensaje").innerHTML = "Compra aprobada correctamente"
    }else{
        compra.estado = "cancelada"
        document.querySelector("#msgListadoComprasMensaje").innerHTML = "No se realizo la compra, stock insuficiente o saldo insuficiente. compra cancelada"
    }


    mostrarComprasPendientes()

}
function calcularMonto(producto, cantidad){
    
    return producto.precio*cantidad;
    
}

function devolverProducto(id){
    let producto = null
    for(let p of sistema.listaProductos){
        if(id == p.id){
            return p
        }
    }
    return p
}
function devolverComprador(id){
    let comprador = null
    for(let c of sistema.listaCompradores){
        if(id == c.id){
            return c;
        }
    }
    return c;
}
function listaComprasPendientes(){
    let ListaComprasPendientes = new Array();

    for(let c of sistema.listaCompras){
        if(c.estado == "pendiente"){
            listaComprasPendientes.push(c)
        }
    }
    return listaComprasPendientes;
}
function devolverCompra(id){
    let compra = null
    for(let c of sistema.listaCompras){
        if(id == c.id){
            return c;
        }
    }
    return c;
}
function mostrarInformeGanancias(){
    ocultarTodo()
    document.querySelector("#cabecera").style.display="block"
    document.querySelector("#pantallaMostrarInforme").style.display="block"
      
    document.querySelector("#msgMostrarInformeganancia").innerHTML= devolverInformeGanancia()
}

function validarCompra(idProducto,ObjetoCompra, objetoComprador){
    let producto = devolverProducto(idProducto)
    let compra = ObjetoCompra
    
    if(compra.cantidad <= producto.stock && objetoComprador.saldo >= compra.monto && producto.estado=="activo"){
        
        producto.stock = producto.stock - compra.cantidad
        objetoComprador.saldo = objetoComprador.saldo - compra.monto

        return true
    }else{
        return false
    }
}

function devolverInformeGanancia(){

    let mensaje = ""
    let gananciaTotal = 0
    for(let p of sistema.listaProductos){

        let total = 0

        for(let c of sistema.listaCompras){
            if(p.id == c.idProducto && c.estado=="aprobada"){
                total += c.cantidad
                gananciaTotal+=c.monto
            }

        }

        mensaje += p.nombre + " " + total + "<br>"

    }
    mensaje+="Ganancia total: $ "+gananciaTotal
    return mensaje
    
    
}

function mostrarComprasCanceladas(){
    document.querySelector("#h3ListarCompras").innerHTML = "Lista de compras canceladas"
    if(sistema.listaCompras.length>0){    
        let miTabla = `
        <table border="1">
            <thead>
                    <td>Comprador</td>
                    <td>Producto</td>
                    <td>Cantidad</td>
                    <td>Monto total</td>
            </thead>`
                for(let compra of sistema.listaCompras){
                    let c = devolverComprador(compra.idComprador)
                    let p = devolverProducto(compra.idProducto)
                    
                    if(compra.estado=="cancelada"){
                    miTabla+=`
                    <tr>
                        <td>${c.nombre}</td>
                        <td>${p.nombre}</td>
                        <td>${compra.cantidad}</td>
                        <td>${compra.monto}</td>
                    <tr>
                    `}
                }
                
                miTabla+=`
            </table>
        `
        document.querySelector("#msgListadoCompras").innerHTML = miTabla
        document.querySelector("#msgListadoComprasMensaje").innerHTML = ""
        
        }

    
}

function mostrarComprasAprobadas(){
    document.querySelector("#h3ListarCompras").innerHTML = "Lista de compras aprobadas"
    if(sistema.listaCompras.length>0){    
        let miTabla = `
        <table border="1">
            <thead>
                    <td>Comprador</td>
                    <td>Producto</td>
                    <td>Cantidad</td>
                    <td>Monto total</td>
            </thead>`
                for(let compra of sistema.listaCompras){
                    let c = devolverComprador(compra.idComprador)
                    let p = devolverProducto(compra.idProducto)
                    
                    if(compra.estado=="aprobada"){
                    miTabla+=`
                    <tr>
                        <td>${c.nombre}</td>
                        <td>${p.nombre}</td>
                        <td>${compra.cantidad}</td>
                        <td>${compra.monto}</td>
                    <tr>
                    `}
                }
                
                miTabla+=`
            </table>
        `
        document.querySelector("#msgListadoCompras").innerHTML = miTabla
        document.querySelector("#msgListadoComprasMensaje").innerHTML = ""
        
        }

    
}

function mostrarTodasLasCompras(){

    let miTabla = `
    <table border="1">
        <thead>
                <td>Producto</td>
                <td>Cantidad</td>
                <td>Monto total</td>
                <td>Estado</td>
        </thead>`
            for(let compra of sistema.listaCompras){
                let c = devolverComprador(compra.idComprador)
                let p = devolverProducto(compra.idProducto)
                
                if(compra.estado=="aprobada"){
                miTabla+=`
                <tr>
                    <td>${c.nombre}</td>
                    <td>${p.nombre}</td>
                    <td>${compra.cantidad}</td>
                    <td>${compra.monto}</td>
                <tr>
                `}
            }
            
            miTabla+=`
        </table>
    `
    document.querySelector("#msgListadoCompras").innerHTML = miTabla
    document.querySelector("#msgListadoComprasMensaje").innerHTML = ""
    
    }






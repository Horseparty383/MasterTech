
function leerClientes(){
    $.ajax({
        https:  "https://g952c9328fd5263-ld6hi8nb0z098xc8.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client",
        type: "GET",
        dataType: "json",
        success : function(respuesta){
            let cs=respuesta.items;

            for (i=0;i<cs.length;i++){
                $("#listaCliente").append(cs[i].id+"<h2>"+cs[i].name+"</h2> "+cs[i].age+cs[i].email);
                $("#listaCliente").append("<button onclick='deleteClient("+cs[i].id+") '>Borrar</button><br>")
            }
        },
        error: function (xhr, status){
            alert("Ha sucedido un inconveniente");
            
        }

    });
}

function saveClient() {
    let idCliente=$ ("#idcliente").val();
    let nombre=$ ("#nombre").val();
    let mail=$ ("#mail").val();
    let edad=$ ("#edad").val();

    let data={
        id:idCliente,
        name:nombre,
        email:mail,
        age:edad,
    };
    let dataToSend= JSON.stringify(data)
    console.log(dataToSend)

    $.ajax({
        url : "https://g952c9328fd5263-ld6hi8nb0z098xc8.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client",
        type: "POST",
        data:dataToSend,
        contentType: "application/json",
        success : function(respuesta){
            $ ("#idcliente").val("");
            $ ("#nombre").val("");
            $ ("#mail").val("");
            $ ("#edad").val("");

        },
        error: function (xhr, status){
            alert("Ha sucedido un inconveniente");
            
        },
        complete: function(){
            leerClientes();
        }

    });

}
function updateClient() {
    let idCliente=$ ("#idcliente").val();
    let nombre=$ ("#nombre").val();
    let mail=$ ("#mail").val();
    let edad=$ ("#edad").val();

    let data={
        id:idCliente,
        name:nombre,
        email:mail,
        age:edad,
    };
    let dataToSend= JSON.stringify(data)
    console.log(dataToSend)

    $.ajax({
        url : "https://g952c9328fd5263-ld6hi8nb0z098xc8.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client",
        type: "PUT",
        data:dataToSend,
        contentType: "application/json",
        success : function(respuesta){
            $ ("#idcliente").val("");
            $ ("#nombre").val("");
            $ ("#mail").val("");
            $ ("#edad").val("");

        },
        error: function (xhr, status){
            alert("Ha sucedido un inconveniente");
            
        },
        complete: function(){
            leerClientes();
        }

    });
}
function deleteClient(idCliente) {
    let data={
        id:idCliente
    };    
    let dataToSend= JSON.stringify(data)
    console.log(dataToSend)

    $.ajax({
        url : "https://g952c9328fd5263-ld6hi8nb0z098xc8.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client",
        type: "DELETE",
        data:dataToSend,
        contentType: "application/json",
        success : function(respuesta){
            $ ("#idcliente").val("");
            $ ("#nombre").val("");
            $ ("#mail").val("");
            $ ("#edad").val("");

        },
        error: function (xhr, status){
            alert("Ha sucedido un inconveniente");
            
        },
        complete: function(){
            leerClientes();
        }

    });
}

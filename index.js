const express = require('express');
const { ServerResponse } = require('http');
const app = express();  //inicializamos expres
const server = require('http').Server(app); //inicializamos nuestro servidor http con express
const io = require('socket.io')(server); //inicializamos socket.io con nuestro server


app.use(express.static('public'));


io.on('connection', function (socket){              //Que esta escuchando  un mensaje 'conection'sea desde u un navegador o de otro servidor haga lo de la funcion callback     1 paso 
    console.log('Nuevo cliente conectado');         //lanzo  un mensaje  3  paso
    socket.emit('mensajes', 'Bienvenido')            //Cada vez que se conecte un nuevo cliente le digo desde el servdor bienvendio 4 paso, emito un evento
})

server.listen(8080, function(){
    console.log('Servidor iniciado en http://localhost:8080')
})
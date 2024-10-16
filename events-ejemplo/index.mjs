import {EventEmitter} from 'events'


//crea una instancia de EventEmitter

const emisor = new EventEmitter();


//definir un evento personalizado

emisor.on('saludo', (nombre) => {
    console.log(`!Hola, ${nombre}`)
});

// Emitir el evento 'saludo'

emisor.emit('saludo', 'Mundo')
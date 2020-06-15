// Usado para manipular click, ações em geral

const EventEmitter = require('events');

class MeuEmissor extends EventEmitter {

}

const meuEmissor = new MeuEmissor();

const nomeEvento = 'usuario:click';

// meuEmissor.on(nomeEvento, function (click) {
//     console.log('um usuário clicou', click)
// })

// let count = 0;
// setInterval(function () {
//     meuEmissor.emit(nomeEvento, 'Na barra de rolagem' + (count++));
// }, 1000)

const stdin = process.openStdin();
stdin.addListener('data', function(value) {
    console.log(`Voce digitou: ${value.toString().trim()}`)
})
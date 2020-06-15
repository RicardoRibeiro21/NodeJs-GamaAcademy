/* 
    Obter um usuario
    Obter o numero de telefone de um usuario a partir de seu Id
    Obter o endereco do usuario pelo Id
*/
// importamos um módulo interno do node.js
const util = require('util');
const obterEnderecoAsync = util.promisify(obterEndereco);

function obterUsuario() {
    // quando der algum problema -> reject(ERRO)
    // quando sucess -> Resolv
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(() => {
            return resolve({
                id: 1,
                nome: 'Aladin',
                dataNascimento: new Date()
            })
        }, 1000)
    })
}

function obterTelefone(idUsuario) {
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(() => {
            return resolve({
                telefone: '99479-7993',
                DDD: 11
            })
        }, 1000)
    })
}

function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: 'dos bobos',
            numero: 123
        })
    }, 2000)
}

const usuarioPromise = obterUsuario();

// Para manipular o sucesso usamos o .then
// Para manipular o erro usamos o . catch
// usuario -> telefone -> telefone
usuarioPromise
    .then(function (usuario) {
        return obterTelefone(usuario.id)
            .then(function resolverTelefone(result) {
                return {
                    usuario: {
                        nome: usuario.nome,
                        id: usuario.id
                    },
                    telefone: result
                }
            })
    })
    .then(function (resultado) {
        const endereco = obterEnderecoAsync(resultado.usuario.id)
        return endereco.then(function resolverEndereco(result) {
            return {
                usuario: resultado.usuario,
                telefone: resultado.telefone,
                endereco: result
            }
        });
    })
    .then(function (resultado) {
        console.log(`
            Nome: ${resultado.usuario.nome},
            Endereco: ${resultado.endereco.rua}, ${resultado.endereco.numero}
            Telefone: (${resultado.telefone.DDD}) ${resultado.telefone.telefone}
        `);
    })
    .catch(function (error) {
        console.log("Erro", error)
    })
/* 
    Obter um usuario
    Obter o numero de telefone de um usuario a partir de seu Id
    Obter o endereco do usuario pelo Id
*/

function obterUsuario() {
    setTimeout(function () {
        return {
            id =  1,
            nome = 'Aladin',
            dataNascimento = new Date()
        }
    }, 1000)
}

function obterTelefone(idUsuario) {
    setTimeout(function () {
        return {
            telefone: '11 99479-7993'
        }
    }, 1000)
}

function obterEndereco(idUsuario) {

}
const usuario = obterUsuario();

const telefone = obterTelefone(usuario.id);
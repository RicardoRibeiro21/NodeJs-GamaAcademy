const axios = require('axios');

const urlBase = `https://swapi.dev/api/people`;

async function obterPessoas(nome) {
    const url = `${urlBase}/?search=${nome}&format=json`;

    const response = await axios.get(url);

    return response.data;
}

// obterPessoas('r2')
//     .then(function (resultado) {
//         console.log('resultado', resultado)
//     })
//     .catch(function (error) {
//         console.log('Erro', error);
//     })

module.exports = {
    obterPessoas
}
const { obterPessoas } = require('./service');

async function main () {
    try {
        const { results } = await obterPessoas();

        console.log('Results', results)
    } catch (error) {
       console.log('Error', error) 
    }
}

main();
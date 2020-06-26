const service = require('./service');
const { obterPessoas } = require('./service');

async function main() {
    try {
        const result = await service.obterPessoas('a');

        // const names = [];
        // console.time('foreach');
        // result.results.forEach(function (item){
        //     names.push(item.name);
        // });
        // console.timeEnd('foreach');

        // Map
        const names = result.results.map((item) => item.name)

        console.log('names', names)


    } catch (error) {
        console.log('Error', error);
    }
}

main();
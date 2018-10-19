const fs = require('fs');

let arquivo = {
    nome: 'Jaceguay',
    sobrenome: 'Zukoski'
};

let data = JSON.stringify(arquivo);

//fs.writeFileSync('jaceguay.json', data);

fs.writeFile('jaceguay2.json', data, (err) => {
    if (err) throw err;
    console.log('sucesso');
});

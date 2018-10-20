const fs = require('fs')
const plantaLotes = JSON.parse(fs.readFileSync('./plantacadastral.geojson', 'utf8'));

//obter a lista única, nome das articulações
const listaArticula = Array.from(new Set(plantaLotes.features.map((x) => {
    return x.properties.plantacadastralpontos_nome //nome da articulação
})));

//itens agrupados
let resultado = plantaLotes.features.reduce((grupo, item) => {
    grupo[item.properties.plantacadastralpontos_nome] = grupo[item.properties.plantacadastralpontos_nome] || []//se não existir o nome do elemento, criar um vazio, se existir push
    grupo[item.properties.plantacadastralpontos_nome].push(
        item
    )
    return grupo
}, []);//um array como valor inicial

listaArticula.forEach(z => {
    fs.writeFile('./export/' + z + '.geojson', JSON.stringify(resultado[z], null, 2), (err) => {
        if (err) throw err;
        console.log(z + ' gravado');
    });
});
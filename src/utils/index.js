const convenio = require('./convenioUtil');
const titulo = require('./tituloUtil');

module.exports = {
    getValor(){

    },
    getVencimento(){

    },
    getCodigoDeBarras(value){
        return titulo.getCodigoDeBarras(value);
    }
}
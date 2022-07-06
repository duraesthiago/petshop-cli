const cachorros = require('./database/cachorros.json');
const fs = require('fs');

//Função Salvar
const salvar = () => {
    let file = './database/cachorros.json';
    let json = JSON.stringify(cachorros,null,4);
    fs.writeFileSync(file, json);
}

//Função Buscar
const buscar = id => {
    const idFound = cachorros.find(function(cachorro){
            if(cachorro.id == id){
                return cachorro;
            }
        });

    try {
        if(idFound!=undefined) throw idFound;
        if(idFound==undefined) throw error = new Error('Deu erro seu besta!');
        
    } catch (error) {
        return error;
    }
}; 

//Funcão Listar
const listar = () => {
    console.table(cachorros);
};

//Função Descrever
const descrever = id => {
    let cachorro = buscar(id);
    console.log(cachorro);
};

//Função Adcionar

const adicionar = (novocachorro) => {
    var listaId = cachorros.map(function(cachorro){return cachorro.id}).sort()
    var novoId = listaId[listaId.length-1] + 1;
    novocachorro.id = novoId; 
    novocachorro.vacinas = [];
    novocachorro.servicos = [];
    cachorros.push(novocachorro); //Adiciona novo cachorro 
    //Salva novamente
    salvar();
};

//Função Vacinar
const vacinar = (id, nomeDaVacina, dataDaVacina) => {
    let cachorroVacinado = buscar(id);
    if(cachorroVacinado.id > 0){
        cachorroVacinado.vacinas.push({nome: nomeDaVacina, data: dataDaVacina});
        salvar();
    } else{
        console.log("Cachorro inexistente");
    }
}

//Função Atribuir Serviço
const atribuirServico = (id, tipoServico, dataDoServico) => {
    let cachorroServico = buscar(id);
    if (cachorroServico.id > 0){
        cachorroServico.servicos.push({nome: tipoServico, data: dataDoServico});
        salvar();
    } else {
        console.log('Cachorro inexistente');
    }
}

//Função Remover
const remover = id => {
    let removerCachorro = buscar(id);
    if (removerCachorro.id > 0){
        let index = cachorros.map(function(cachorro){return cachorro.id;}).indexOf(id);
        cachorros.splice(index,1);
        salvar();
    } else {
        console.log('Cachorro inexistente');
    }
}

module.exports = {
    listar,
    adicionar,
    vacinar,
    atribuirServico,
    remover,
}

adicionar({nome:"Thes"})
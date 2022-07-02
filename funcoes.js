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

function Cachorro(id, nome, sexo, castrado, dataDeNascimento, peso){
    this.id = id;
    this.nome = nome;
    this.sexo = sexo;
    this.castrado = castrado;
    this.dataDeNascimento = dataDeNascimento;
    this.peso = peso;
}

const adicionar = (cachorro = new Cachorro) => {
    let verificaCachorro = buscar(cachorro.id);
    if (verificaCachorro.id > 0){
        console.log(`O id (${cachorro.id}) inserido já existe!`);
    } else {
        cachorro.vacinas = [];
        cachorro.servicos = [];
        cachorros.push(cachorro); //Adiciona novo cachorro 
        //Salva novamente
        salvar();
    }

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


/////////TESTES//////////////////
//listar();
//descrever(1000);
//adicionar({nome:"Rex",id: 102 , sexo:"M", castrado: true, dataDeNascimento: "2000-02-12", peso:25});
//vacinar(7, "Sinopharm__", "2022-07-01");
//atribuirServico(7, "Vacinação - 2 dose", "2022-07-01");
//console.log(buscar(10000))
remover(7);

module.exports = {
    
}
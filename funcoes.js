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
        if(idFound==undefined) throw error = new Error('Deu erro seu besta!')
        
    } catch (error) {
        return error;
    }

    return idFound;
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
    if (verificaCachorro == error){
        cachorro.vacinas = [];
        cachorro.servicos = [];
        cachorros.push(cachorro); //Adiciona novo cachorro 
        //Salva novamente
        salvar();
    } else {
        console.error(`O id (${cachorro.id}) inserido já existe!`);
    }

};

//Função Vacinar 
/* ☐ Crie uma função chamada vacinar.
  . Essa função deve adicionar um objeto literal com
  as informações de uma vacina (nome e data da aplicação) no array de vacinas de um cachorro.
. Ela deve receber três parâmetros *nesta ordem*
    + id  (Id cachorro do cachorro a ser vacinado)
    + vacina (Nome da vacina)
    + data (uma string em formato AAAA-MM-DD)

. Essa função não retorna nada.
. Essa função deve imprimir uma mensagem "Cachorro inexistente"
  não exista um cachorro com o id passado.
*/

const vacinar = (id, nomeDaVacina, dataDaVacina) => {
    let cachorroVacinado = buscar(id);
    if(cachorroVacinado == error){
        console.log("Cachorro inexistente");
    } else{
        cachorroVacinado.vacinas = [{nome: nomeDaVacina, data: dataDaVacina}];
    }

    salvar();
}

/////////TESTES//////////////////
//listar();
//descrever(1000);
//adicionar({nome:"Rex",id: 11 , sexo:"M", castrado: true, dataDeNascimento: "2000-02-12", peso:25});
vacinar(110, "Sinopharm", "2022-07-01");
//console.log(buscar(1000))


module.exports = {
    
}
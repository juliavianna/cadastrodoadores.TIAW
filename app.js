var db_contatos_inicial = {
    "data": [
        {
            "id": 1,
            "nome": "Leanne Pena",
            "cidade": "Belo Horizonte",
            "categoria": "voluntaria",
            "email": "lea@gmail.com",
            "telefone": "31-99337721",
            "website": "@leanne_pena"
        },
        {
            "id": 2,
            "nome": "Juliano Silva",
            "cidade": "Betim",
            "categoria": "doador",
            "email": "juliano@gmail.com",
            "telefone": "31-99990000",
            "website": "@juliano.silva"
        },
        {
            "id": 3,
            "nome": "Miguel Casimiro",
            "cidade": "Rio de Janeiro",
            "categoria": "doador",
            "email": "miguel@gmail.com",
            "telefone": "21-23450098",
            "website": "@caze_"
        },
        {
            "id": 4,
            "nome": "Patricia Santos",
            "cidade": "Betim",
            "categoria": "doador",
            "email": "silviosantos@gmail.com",
            "telefone": "31-99223456",
            "website": "@patysantos"
        },
        {
            "id": 5,
            "nome": "Chelsey Dietrich",
            "cidade": "São Paulo",
            "categoria": "voluntario",
            "email": "chelsey@hotmail.com",
            "telefone": "11-23893345",
            "website": "@chelsey_d"
        },
        {
            "id": 6,
            "nome": "Dennis Schulist",
            "cidade": "Rio de Janeiro",
            "categoria": "voluntario",
            "email": "dennis@gmail.com",
            "telefone": "21-90227733",
            "website": "@dennis.sc"
        },
        {
            "id": 7,
            "nome": "Kurtis Lima",
            "cidade": "Belo Horizonte",
            "categoria": "amigos",
            "email": "kurtis@gmail.com",
            "telefone": "210.067.6132",
            "website": "@kurtiscobain"
        },
        {
            "id": 8,
            "nome": "Nicholas Castro",
            "cidade": "Belo Horizonte",
            "categoria": "familia",
            "email": "nickcastro@hotmail.com",
            "telefone": "31-923654312",
            "website": "@nickruns"
        },
        {
            "id": 9,
            "nome": "Glenna Miler",
            "cidade": "Betim",
            "categoria": "voluntaria",
            "email": "glenna@hotmail.com",
            "telefone": "31-22098876",
            "website": "@glennar"
        },
        {
            "id": 10,
            "nome": "Clementina DuBuque",
            "cidade": "São Paulo",
            "categoria": "doador",
            "email": "clementina@hotmail.com",
            "telefone": "11-92378899",
            "website": "@cledb"
        }
    ]
}

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('db_contato'));
if (!db) {
    db = db_contatos_inicial
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertContato(contato) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = 1;
    if (db.data.length != 0) 
      novoId = db.data[db.data.length - 1].id + 1;
    let novoContato = {
        "id": novoId,
        "nome": contato.nome,
        "email" : contato.email,
        "telefone": contato.telefone,
        "cidade" : contato.cidade,
        "categoria": contato.categoria,
        "instagram": contato.instagram
    };

    // Insere o novo objeto no array
    db.data.push(novoContato);
    displayMessage("Contato inserido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}

function updateContato(id, contato) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = db.data.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    db.data[index].nome = contato.nome,
    db.data[index].email = contato.email,
    db.data[index].telefone = contato.telefone,
    db.data[index].cidade = contato.cidade,
    db.data[index].categoria = contato.categoria,
    db.data[index].website = contato.website

    displayMessage("Contato alterado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}

function deleteContato(id) {    
    // Filtra o array removendo o elemento com o id passado
    db.data = db.data.filter(function (element) { return element.id != id });

    displayMessage("Contato removido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}
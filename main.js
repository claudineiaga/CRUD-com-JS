var selectedRow = null;
function submeterForm(e){
    event.preventDefault();
    var formData = lerDados();
    if(selectedRow === null){
        inserirNovosDados(formData);
    }else{
        atualizarDados(formData)
    }
    apagaDadosForm();
}
// Ler os dados do formulario
function lerDados(){
    var formData = {};
    formData["nomeComp"] = document.getElementById("nomeComp").value;
    formData["idade"] = document.getElementById("idade").value;
    formData["salario"] = document.getElementById("salario").value;
    formData["cidade"] = document.getElementById("cidade").value;
    return formData;
}

// Cria a a tabela de dados inseridos
function inserirNovosDados(data){
    var table = document.getElementById("listaEmpregados").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.nomeComp;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.idade;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.salario;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.cidade;
    var cell5 = newRow.insertCell(4);
        cell5.innerHTML = `<a href="#" onClick='editadadosIns(this)'>Editar</a>
                        <a href="#" onClick='apagaDados(this)'>Apagar</a>`;
}

// Apaga os dados inseridos
function apagaDadosForm(){
    document.getElementById('nomeComp').value = '';
    document.getElementById('idade').value = '';
    document.getElementById('salario').value = '';
    document.getElementById('cidade').value = '';
    selectedRow = null;
}

// Edita os dados inseridos
function editadadosIns(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('nomeComp').value = selectedRow.cells[0].innerHTML;
    document.getElementById('idade').value = selectedRow.cells[1].innerHTML;
    document.getElementById('salario').value = selectedRow.cells[2].innerHTML;
    document.getElementById('cidade').value = selectedRow.cells[3].innerHTML;
}
function atualizarDados(formData){
    selectedRow.cells[0].innerHTML = formData.nomeComp;
    selectedRow.cells[1].innerHTML = formData.idade;
    selectedRow.cells[2].innerHTML = formData.salario;
    selectedRow.cells[3].innerHTML = formData.cidade;
}
// Apaga os Dados Inseridos
function apagaDados(td){
    if(confirm('Tem certeza que deseja apagar os dados?')){
        row = td.parentElement.parentElement;
        document.getElementById('listaEmpregados').deleteRow(row.rowIndex);
        apagaDadosForm();
    }    
}
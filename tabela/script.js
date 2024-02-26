function adicionarItem(){
    //Obter valores
    var nome = document.getElementById('nome').value;
    var valor = document.getElementById('valor').value;
    var quantidade = document.getElementById('quantidade').value;
    var total = valor*quantidade;

    //verificar se existe
    if(!nome || !valor || !quantidade){
        alert("preencha os campos!!");
        return;
    }

    //criação da tabela e suas linhas
    var tabela = document.getElementById('tabela').getElementsByTagName('tbody')[0];
    var novaLinha = tabela.insertRow(tabela.rows.length);
    var celulaNome = novaLinha.insertCell(0);
    var celulaValor = novaLinha.insertCell(1);
    var celulaQuantidade = novaLinha.insertCell(2);
    var celulaTotal = novaLinha.insertCell(3);

    celulaNome.innerHTML = nome;
    celulaValor.innerHTML = valor;
    celulaQuantidade.innerHTML = quantidade;
    celulaTotal.innerHTML = total;

}

function exportarParaExcel(){
    var tabela = document.getElementById('tabela')
    var nomeArquivo = 'tabela_produtos.xlsx'
    var wb = XLSX.utils.table_to_book(tabela,{sheet: 'Tabela de Produtos'})
    XLSX.writeFile(wb, nomeArquivo)
}


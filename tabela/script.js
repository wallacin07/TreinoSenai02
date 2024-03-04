 // Funções para manipular a tabela
 var data = ""
 function adicionarItem() {
    // Obter valores dos inputs
    var nome = document.getElementById("nome").value;
    var valor = parseFloat(document.getElementById("valor").value);
    var quantidade = parseInt(document.getElementById("quantidade").value);
    console.log(nome,valor, quantidade);

    // Validar valores
    if (!nome || !valor || !quantidade) {
      alert("Preencha todos os campos!");
      return;
    }

    // Calcular total
    var total = valor * quantidade;

    // Criar nova linha na tabela
    var tabela = document.getElementById("tabela").getElementsByTagName("tbody")[0];
    var novaLinha = tabela.insertRow(tabela.rows.length);

    // Inserir valores nas células
    novaLinha.insertCell(0).textContent = nome;
    novaLinha.insertCell(1).textContent = formatarMoeda(valor);
    novaLinha.insertCell(2).textContent = quantidade;
    novaLinha.insertCell(3).textContent = formatarMoeda(total);

    // // Adicionar botão de remover
    // var celulaAcoes = novaLinha.insertCell(4);
    // var botaoRemover = document.createElement("button");
    // botaoRemover.textContent = "Remover";
    // botaoRemover.classList.add("btn-remover");
    // botaoRemover.onclick = function () {
    //   removerLinha(this);
    // };
    // celulaAcoes.appendChild(botaoRemover);

    // Limpar campos
    limparCampos();
  }

  function removerLinha(botao) {
    var linha = botao.parentNode.parentNode;
    linha.parentNode.removeChild(linha);
  }

  function limparTabela() {
    var tabela = document.getElementById("tabela").getElementsByTagName("tbody")[0];
    while (tabela.firstChild) {
      tabela.removeChild(tabela.firstChild);
    }
  }

  function limparCampos() {
    document.getElementById("nome").value = "";
    document.getElementById("valor").value = "";
    document.getElementById("quantidade").value = "";
  }

  function formatarMoeda(valor) {
    return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  }

    function exportarParaExcel() {
        var tabela = document.getElementById("tabela");
        var nomeArquivo = "Controle_Estoque.xlsx";
        var wb = XLSX.utils.table_to_book(tabela, { sheet: "Controle de Estoque" });
        XLSX.writeFile(wb, nomeArquivo);
        alert("Planilha exportada com sucesso! \n\nNome do arquivo: " + nomeArquivo);
    }


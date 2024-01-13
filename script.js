var btnmeta = document.getElementById("btnmeta");
var meta = document.getElementById("meta");
var valorpretendido = document.getElementById("valorpretendido");
var lucrosaqui = document.getElementById("lucrosaqui");
var gastosaqui = document.getElementById("gastosaqui");
var total = document.getElementById("total");
var faltam = document.getElementById("faltam");
var condicionais = document.getElementById("condicionais");

btnmeta.addEventListener("click", function() {
    clicar2();
    clicar3();
    clicar4();
});

function clicar2() {
    var pretendido = parseFloat(document.getElementById("pretendido").value);
    if (!isNaN(pretendido)) {
        valorpretendido.innerHTML = `O seu valor pretendido para meta ${meta.value} é de R$ ${pretendido.toFixed(2)}`;
        calcularFaltam();
    }
}

function clicar3() {
    var Lucros = parseFloat(document.getElementById("Lucros").value);
    if (!isNaN(Lucros)) {
        lucrosaqui.innerHTML = `O seu caixa atual para meta ${meta.value} é de R$ ${Lucros.toFixed(2)}`;
        calcularFaltam();
    }
}

function clicar4() {
    var Saídas = parseFloat(document.getElementById("Saídas").value);
    if (!isNaN(Saídas)) {
        gastosaqui.innerHTML = `O quanto gastei foi  R$ ${Saídas.toFixed(2)}`;
        calcularFaltam();
    }
}

function calcularFaltam() {
    var pretendido = parseFloat(valorpretendido.innerHTML.split("R$ ")[1]);
    var lucros = parseFloat(lucrosaqui.innerHTML.split("R$ ")[1]);
    var gastos = parseFloat(gastosaqui.innerHTML.split("R$ ")[1]);

    if (!isNaN(pretendido) && !isNaN(lucros) && !isNaN(gastos)) {
        total.innerHTML = `O seu caixa total para a meta ${meta.value}, após os cálculos é de  R$ ${(lucros - gastos).toFixed(2)}`;
        var caixaTotal = parseFloat(total.innerHTML.split("R$ ")[1]);
        faltam.innerHTML = `O valor que te separa da meta ${meta.value} é...  R$ ${(pretendido - caixaTotal).toFixed(2)}`;
        calcularCondicionais();
    }
}

function calcularCondicionais() {
    var pretendido = parseFloat(valorpretendido.innerHTML.split("R$ ")[1]);
    var lucros = parseFloat(lucrosaqui.innerHTML.split("R$ ")[1]);
    var gastos = parseFloat(gastosaqui.innerHTML.split("R$ ")[1]);
  
    if (!isNaN(pretendido) && !isNaN(lucros) && !isNaN(gastos)) {
      var faltam = pretendido - lucros + gastos;
  
      if (faltam <= 300) {
        condicionais.innerHTML = `Falta muito pouco para você alcançar sua meta ${meta.value}`;
      } else if (faltam > 300 && faltam <= 600) {
        condicionais.innerHTML = `Você está no caminho certo para a meta ${meta.value}, Não pare!`;
      } else if (faltam > 600) {
        condicionais.innerHTML = `Tenha mais foco para alcançar sua meta ${meta.value}`;
      } else {
        condicionais.innerHTML = `Valor inválido`;
      }
    }
  }

  function resetar() {
  
    document.getElementById("meta").value = "";
    document.getElementById("pretendido").value = "";
    document.getElementById("Lucros").value = "";
    document.getElementById("Saídas").value = "";

   
    valorpretendido.innerHTML = "";
    lucrosaqui.innerHTML = "";
    gastosaqui.innerHTML = "";
    total.innerHTML = "";
    faltam.innerHTML = "";
    condicionais.innerHTML = "";
}

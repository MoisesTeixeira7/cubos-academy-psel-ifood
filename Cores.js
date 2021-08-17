function solucao(cor1, cor2) {
    if(cor1 == cor2){
       console.log(cor1);
   }
   
   if ((cor1 == "azul" && cor2 == "amarelo") || (cor1 == "amarelo" && cor2 == "azul") ){
       console.log("verde");
   }
   if ((cor1 == "azul" && cor2 == "vermelho") || (cor1 == "vermelho" && cor2 == "azul") ){
       console.log("roxo");
   }
   
    if ((cor1 == "amarelo" && cor2 == "vermelho") || (cor1 == "vermelho" && cor2 == "amarelo") ){
       console.log("laranja");
   }

}

function processData(input) {
   const { cor1, cor2 } = JSON.parse(input);
   solucao(cor1, cor2);
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
   _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
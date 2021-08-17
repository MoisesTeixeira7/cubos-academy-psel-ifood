
function solucao(idade) {
	//seu codigo aqui
    if(idade >= 60){
        console.log("IDOSOS");
    } else {
        console.log("PEGUE A FILA NORMAL");
    }
    
}

function processData(input) {
    solucao(Number(input));
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
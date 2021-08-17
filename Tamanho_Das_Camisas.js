function solucao(tamanhoBr) {
  //
  if(tamanhoBr == 'PP'){
      console.log("XS");
  }
  if(tamanhoBr == 'P'){
      console.log("S");
  }
  if(tamanhoBr == 'M'){
      console.log("M");
  }
  if(tamanhoBr == 'G'){
      console.log("L");
  }
  if(tamanhoBr == 'GG'){
      console.log("XL");
  }
}

function processData(input) {
	solucao(input);
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
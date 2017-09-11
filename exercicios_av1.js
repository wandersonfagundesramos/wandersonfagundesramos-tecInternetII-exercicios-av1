	
	Exercício 1

	function exercicio01(numero1,numero2){

		console.log("\n Programa para calcular a média \n");
		var media = parseFloat((numero1+numero2)/2);
		return console.log(" A média e : " + media);
	}

	
	Exercício 2

	function exercicio02(av1,av2){

		console.log("\n Programa para ver se aluno passou\ ou não n");
		var media = parseFloat((av1+av2) / 2);

			if(av1>=4 || av2>=4){
			    return console.log("\n Você tem que fazer a av3 !!! \n");
			}
			else if(media>=6){
			    return console.log("\n Você esta aprovado !!! \n");
			}
			else{
			    return console.log("\n Você esta reprovado !!! \n");
			}
	}

	
	Exercício 3

	function exercicio03(determinadoNumero){

		 console.log("\n Programa para contar até determinado número,usando o while \n");
		 var contador=1;

		while(contador <= determinadoNumero){
			return console.log(contador);
			contador ++;
		}
	}

		console.log("\n Programa para contar até determinado número,usando o do while \n");
		var contador=1;
		do{
			console.log(contador);
			contador ++;
		}while(contador <= determinadoNumero);
	}

		console.log("\n Programa para contar até determinado número,usando o do for \n");
		var contador=1;
		for(contador=1; contador<= determinadoNumero; contador++){
			return console.log(contador);
		}
	}


	Exercício 4

	function exercicio04(x,y){

		console.log("\n Programa para informar os números divisíveis por x \n";
		var x;
		var y;
		var i;
		for(i=1; i<y; i++){
		
		if(i%x==0){

		console.log(i); 
		}
	    }
	}

	Exercício 5

	function exercicio05(vetor){

		var vetor=[100,200,300,400,500,600,700,800,900,1000];
		var maiorNumeroVetor=vetor[0];
		var menorNumeroVetor=vetor[0];

	for(var i in vetor){

		if(vetor[i] > maiorNumeroVetor){
			maiorNumeroVetor=vetor[i];
		}
		if(vetor[i] < menorNumeroVetor){
			menorNumeroVetor=vetor[i];
		}
	}
		console.log("\n O maior numero do vetor é : \n" + maiorNumeroVetor);
		console.log("\n O menor numero do vetor é : \n" + menorNumeroVetor);
	}

$(document).ready(function(){

   $("#login-form").on("submit", function(e){
	  
       e.preventDefault();
	   
	   //------Obtendo dados dos campos
	   var modelo = $("#modelo option:selected").val();
	   var cor = $('#cor option:selected').val();
	   var anode = $('#anode option:selected').val();
	   var anoate = $('#anoate option:selected').val();
	   var km = $('#km option:selected').val();
	   var uf = $('#uf option:selected').val();
	   //-----end
	   
	   
	   //verificar aqui anode e ate, comparar e exibir msg
	   if(modelo == "Selecione" && cor == "Cor" &&
		anode == "De" && anoate == "Até" && 
		km == "Selecione" && uf == "Selecione"){
			alert("Necessário Escolher ao menos 1 filtro para realizar a busca !","error");
		}
		else{
			if(anoate != "Até"){ // verify anos
				var convertido = parseInt(anoate);
				if(anode != "De"){
					var convertidoI = parseInt(anode);
					if(convertidoI > convertido){
						alert("Ano final deve obrigatoriamente ser maior que o ano inicial !","error");
						location.reload();
					}
				}
			}
		  var arrayDados = {"modelo": modelo, "cor": cor, "anode": anode, "anoate": anoate, "km": km,"uf": uf}; //array com dados do form
	   
		   var objectAtiv = JSON.stringify(arrayDados);	//array convertido para json
		   console.log(objectAtiv);
		   
		     // $.ajax({ // mandar objeto json por url
				 // type: "POST",
				 // data: objectAtiv,
				 // url: "../ngrok/save",
				 // contentType: "application/json"
			  // }).done(function(msg) { 
				  // console.log(msg);
				 // //recebendo retorno
			  // });
			  
			  $.getJSON("https://my-json-server.typicode.com/ErickLeal/apiFindCar/db", function(result){
			   console.log(result);
				var res = document.body.querySelector("#resultado"); // div p alter
			    res.innerHTML = '';
				var keys = Object.keys(result);
				
				for (key in keys){
					var t = result[keys[key]].length;
					for(var i = 0;i < t;i++){
						res.innerHTML += result[keys[key]][i].marca+" ";
						res.innerHTML += result[keys[key]][i].modelo+" ";
						res.innerHTML += result[keys[key]][i].ano+" ";
						res.innerHTML += result[keys[key]][i].cambio+" ";
						res.innerHTML += result[keys[key]][i].combustivel+" ";
						res.innerHTML += result[keys[key]][i].cor+" ";
						res.innerHTML += result[keys[key]][i].km+" ";
						res.innerHTML += result[keys[key]][i].portas + "<br>";
					}
					
				}
							
			   
			});
		}
	 
	});
});


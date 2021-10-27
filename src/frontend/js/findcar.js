$(document).ready(function () {
  $('#login-form').on('submit', function (e) {
    e.preventDefault()

    //------Obtendo dados dos campos
    const brand = $('#brand option:selected').val()
    const color = $('#color option:selected').val()
    const initialYear = $('#initialYear option:selected').val()
    const finalYear = $('#finalYear option:selected').val()
    const km = $('#km option:selected').val()
    const state = $('#state option:selected').val()
    //-----end

    //verificar aqui initialYear e ate, comparar e exibir msg
    if (brand == 'Selecione') {
      alert('Necessário informar a marca do veiculo.', 'error')
      return
    }

    if (finalYear != 'Até') {
      // verify anos
      const finalYearNumber = parseInt(finalYear)
      if (initialYear != 'De') {
        const initialYearNumber = parseInt(initialYear)
        if (initialYearNumber > finalYearNumber) {
          alert('Ano final deve obrigatoriamente ser maior que o ano inicial.', 'error')
          return
        }
      }
	}
      const request = JSON.stringify({
        'brand': brand,
        'color': color,
        'initialYear': initialYear,
        'finalYear': finalYear,
        'km': km,
        'state': state
      })
	  console.log(request);
      fetch('localhost:3000/api/findcar', request)

      // create request

      // return data to frontend

      // create ad card

      // $.ajax({ // mandar objeto json por url
      // type: "POST",
      // data: objectAtiv,
      // url: "../ngrok/save",
      // contentType: "application/json"
      // }).done(function(msg) {
      // console.log(msg);
      // //recebendo retorno
      // });

      //   $.getJSON('https://my-json-server.typicode.com/ErickLeal/apiFindCar/db', function (result) {
      //     console.log(result)
      //     const res = document.body.querySelector('#resultado') // div p alter
      //     res.innerHTML = ''
      //     const keys = Object.keys(result)

      //     for (key in keys) {
      //       const t = result[keys[key]].length
      //       for (const i = 0; i < t; i++) {
      //         res.innerHTML += result[keys[key]][i].brand + ' '
      //         res.innerHTML += result[keys[key]][i].ano + ' '
      //         res.innerHTML += result[keys[key]][i].cambio + ' '
      //         res.innerHTML += result[keys[key]][i].combustivel + ' '
      //         res.innerHTML += result[keys[key]][i].color + ' '
      //         res.innerHTML += result[keys[key]][i].km + ' '
      //         res.innerHTML += result[keys[key]][i].portas + '<br>'
      //       }
      //     }
      //   })
    
  })
})

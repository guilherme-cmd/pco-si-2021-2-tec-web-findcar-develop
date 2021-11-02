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
    console.log('teste22')

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

    const myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')

    // `http://localhost:3000/api/findcar?brand=${brand}?initialYear=${initialYear}?finalYear=${finalYear}?initialPrice=${initialPrice}?finalPrice=${finalPrice}?page=${page}`,
    fetch(`http://localhost:3000/api/findcar?brand=${brand}`, {
      method: 'GET'
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        const { advertisements } = data
        const res = document.body.querySelector('#resultado') // div p alter
        res.innerHTML = ''
        let countItems = 0
        let htmlAd = ''
        advertisements.forEach((item) => {
          if (countItems < 3) {
            htmlAd += `
            <div class="col card">
            <a href=${item.link} target="_blank">
            <img src="${item.img}"/>
            </a>
            <h1>${item.title}</h1>
            <p>${item.description}</p>
            <h1>${item.value}</h1>
            <a href=${item.link} target="_blank">Ver anúncio</a>
            </div>
            `
          } else {
            res.innerHTML += `
            <div class="row ad">
            ${htmlAd}
            </div>
            `
            countItems = 0
            htmlAd = ''
            return
          }
          countItems++
        })

        // const keys = Object.keys(data)
        // console.log(keys)

        // for (key in keys) {
        //   const t = data[keys[key]].length
        //   for (const i = 0; i < t; i++) {
        //     res.innerHTML += data[keys[key]][i].brand + ' '
        //     res.innerHTML += data[keys[key]][i].ano + ' '
        //     res.innerHTML += data[keys[key]][i].cambio + ' '
        //     res.innerHTML += data[keys[key]][i].combustivel + ' '
        //     res.innerHTML += data[keys[key]][i].color + ' '
        //     res.innerHTML += data[keys[key]][i].km + ' '
        //     res.innerHTML += data[keys[key]][i].portas + '<br>'
        //   }
        // }
      })
  })
})

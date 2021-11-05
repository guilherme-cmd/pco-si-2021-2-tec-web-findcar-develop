addEventListener('load', () => {
  //console.log('deu bom')
  getAdvertisements({ brand: 'Hyundai', initialYear: '', finalYear: '', initialPrice: '', finalPrice: '', page: 0 })
})

$(document).ready(function () {
  $('#login-form').on('submit', function (e) {
    e.preventDefault()

    const { brand, initialYear, finalYear, initialPrice, finalPrice } = getFieldValues()
    const page = window.location.href.split('#')[1] !== '' ? parseInt(window.location.href.split('#')[1]) : 0

    getAdvertisements({ brand, initialYear, finalYear, initialPrice, finalPrice, page })
  })

  $('#page').on('click', function (e) {
    console.log(e.target.getAttribute('value'))
    console.log('caguei')

    const currentPageValue = e.target.getAttribute('value')

    let page = window.location.href.split('#')[1] !== '' ? parseInt(window.location.href.split('#')[1]) : 0

    if (page > 0 && currentPageValue === 'Previous') {
      page = page - 1
      const newWindow = window.location.href.replace(window.location.href.charAt(window.location.href.length - 1), page)
      console.log(newWindow)
      window.location.href = newWindow
    }

    if (page > 0 && currentPageValue === 'Next') {
      page += page
    }
    const { brand, initialYear, finalYear, initialPrice, finalPrice } = getFieldValues()

    getAdvertisements({ brand, initialYear, finalYear, initialPrice, finalPrice, page })
  })
})

function getFieldValues() {
  const brand = $('#brand option:selected').val()
  const initialYear = $('#initialYear option:selected').val() === 'De' ? '' : $('#initialYear option:selected').val()
  const finalYear = $('#finalYear option:selected').val() === 'Até' ? '' : $('#finalYear option:selected').val()
  const initialPrice = $('#initialPrice option:selected').val() === 'De' ? '' : $('#initialPrice option:selected').val()
  const finalPrice = $('#finalPrice option:selected').val() === 'Até' ? '' : $('#finalPrice option:selected').val()

  if (brand == 'Selecione') {
    alert('Necessário informar a marca do veiculo.', 'error')
    return
  }

  if (finalYear != '') {
    const finalYearNumber = parseInt(finalYear)
    if (initialYear != '') {
      const initialYearNumber = parseInt(initialYear)
      if (initialYearNumber > finalYearNumber) {
        alert('Ano final deve obrigatoriamente ser maior que o ano inicial.', 'error')
        return
      }
    }
  }

  if (finalPrice != '') {
    const finalPriceNumber = parseInt(finalPrice)
    if (initialPrice != '') {
      const initialPriceNumber = parseInt(initialPrice)
      if (initialPriceNumber > finalPriceNumber) {
        alert('Preço final deve obrigatoriamente ser maior que o preço inicial.', 'error')
        return
      }
    }
  }

  return { brand, initialYear, finalYear, initialPrice, finalPrice }
}
function getAdvertisements(request) {
  const { brand, initialYear, finalYear, initialPrice, finalPrice, page } = request
  console.log(brand, initialYear, finalYear, initialPrice, finalPrice)
  const myHeaders = new Headers()
  myHeaders.append('Content-Type', 'application/json')

  // ``,
  fetch(
    `http://localhost:3000/api/findcar?brand=${brand}&model=&initialYear=${initialYear}&finalYear=${finalYear}&initialPrice=${initialPrice}&finalPrice=${finalPrice}&page=${page}`,
    {
      method: 'GET'
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      const { advertisements } = data
      const res = document.body.querySelector('#result') // div p alter
      res.innerHTML = ''
      let countItems = 0
      let htmlAd = ''
      res.innerHTML += ``
      advertisements.forEach((item) => {
        if (countItems < 3) {
          htmlAd += `
         <div class="col card shrink">
         <a href=${item.link} target="_blank">
         <img src="${item.img}"  onerror="this.src='images/nd.png'"/>
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
    })
}

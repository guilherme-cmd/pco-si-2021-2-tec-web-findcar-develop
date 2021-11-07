module.exports = {
  createUrl(url, params) {
    const {
      brand,
      model,
      initialYear,
      finalYear,
      initialPrice,
      finalPrice,
      page
    } = params;
    console.log(params);

    return `${url}/carro/${brand}/${model}/ano-${initialYear}-${finalYear}/preco-${initialPrice}-${finalPrice}?page=${page}&ajax`;
  },
  
   createUrlAuto(url, params) {
    const {
      brand,
      model,
      initialYear,
      finalYear,
      initialPrice,
      finalPrice,
      page
    } = params;

    return `${url}/comprar/carros/novos-seminovos-usados/todos-os-estados/todas-as-cidades/${brand}/${model}/todas-as-versoes/ano-${initialYear}:${finalYear}/todas-as-cores/preco-${initialPrice}:${finalPrice}/?`;
    //https://busca.autoline.com.br/comprar/carros/novos-seminovos-usados/todos-os-estados/todas-as-cidades/fiat/argo/todas-as-versoes/ano-2000:2022/todas-as-cores/preco-4900:100000/?
  }
};

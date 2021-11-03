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
  }
};

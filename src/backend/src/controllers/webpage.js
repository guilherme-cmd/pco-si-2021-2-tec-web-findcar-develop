const { getAdvertisementsSeminovos } = require('../services/webpage-service');
const { getAdvertisementsAutoline } = require('../services/webpage-service');
const { createUrlSemiNovos } = require('../utils/index');
const { createUrlAuto } = require('../utils/index');
module.exports = {
  async findAdvertising(req, res) {
    try {
      if (!req.query.brand) {
        throw new Error('Bad request');
      }

      //Pesquisa na seminovos
      var url = createUrlSemiNovos('https://seminovos.com.br', req.query);
      var advertisements = await getAdvertisementsSeminovos(url);

      //Pesquisa Autonline
      url = createUrlAuto('https://busca.autoline.com.br', req.query);
      advertisements = advertisements.concat(await getAdvertisementsAutoline(url));

      //Ordena a pesquisa por valor do veículo
      advertisements.sort(function (a, b) {
        valueA = parseFloat(a.value.replace('R$', '').trim());
        valueB = parseFloat(b.value.replace('R$', '').trim());
        return valueA < valueB ? -1 : valueA > valueB ? 1 : 0;
      });

      return res.json({
        advertisements
      });
    } catch (err) {
      if (err.message) {
        return res.json({
          status: 400,
          message: err.message
        });
      }
      return res.json({
        status: 500,
        message: 'Internal Server Error'
      });
    }
  },

  //Não esta sendo utilizado
 /* async findAuto(req, res) {
    try {
      if (!req.query.brand) {
        throw new Error('Bad request');
      }

      const URL_CLIENT = 'https://busca.autoline.com.br';

      const url = createUrlAuto(URL_CLIENT, req.query);

      const advertisements = await getAdvertisementsAuto(url);

      return res.json({
        advertisements,
        url
      });
    } catch (err) {
      if (err.message) {
        return res.json({
          status: 400,
          message: err.message
        });
      }
      return res.json({
        status: 500,
        message: 'Internal Server Error'
      });
    }
  } */
};

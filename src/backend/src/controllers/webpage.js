const { getAdvertisements } = require('../services/webpage-service');
const { createUrl } = require('../utils/index');
module.exports = {
  async findAdvertising(req, res) {
    try {
      if (!req.query.brand) {
        throw new Error('Bad request');
      }

      const URL_CLIENT = 'https://seminovos.com.br';

      const url = createUrl(URL_CLIENT, req.query);
      console.log({ url });

      const advertisements = await getAdvertisements(url);

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
  }
};

const Crawler = require('crawler');

module.exports = {
  async getAdvertisements(url) {
    try {
      return new Promise((resolve, reject) => {
        const crawler = new Crawler({
          maxConnections: 10,
          callback: function (error, res, done) {
            if (error) {
              console.log(error);
              throw new Error();
            } else {
              const $ = res.$;
              const advertisements = [];

              $('.anuncio-container').each(function (index, element) {
                advertisements.push({
                  img: $(element).find('img').attr('src'),
                  title: $(this).find('.card-header').find('h4').text(),
                  description: $(this)
                    .find('.card-description')
                    .find('span')
                    .text(),
                  value: $(this)
                    .find('.value')
                    .find('h4')
                    .text()
                    .replace('\n', '')
                    .replace('\n', '')
                    .replace('\n', '')
                    .replace('\n', '')
                    .replace('\n', '')
                    .replace('\n', ''),
                  link: `https://seminovos.com.br${$(element)
                    .find('.value')
                    .find('a')
                    .attr('href')}`
                });
              });

              resolve(
                advertisements.filter(
                  (advertisement) => advertisement.title !== ''
                )
              );

              done();
            }
            done();
          }
        });

        crawler.queue(url);
      });
    } catch (error) {
      return error;
    }
  }
};

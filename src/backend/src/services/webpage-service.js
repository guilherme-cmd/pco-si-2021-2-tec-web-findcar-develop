const Crawler = require('crawler');

module.exports = {
  async getAdvertisementsSeminovos(url) {
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
                    .text()
                    //concatena tipo de câmbia na descrição
                    +' - '+ $(this)
                    .find('.body')
                    .find('.cambio')
                    .find('span')
                    .text()
                    //concatena tipo de combustível na descrição
                    +' - '+ $(this)
                    .find('.body')
                    .find('.combustivel')
                    .find('span')
                    .text()
                    ,
                  value: $(this)
                    .find('.value')
                    .find('h4')
                    .text()
                    .trim(),
                    km: $(this)
                    .find('.body')
                    .find('.kilometragem')
                    .find('span')
                    .text(),
                   
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
  },

  async getAdvertisementsAutoline(url) {
    try {
      return new Promise((resolve, reject) => {
        var crawler = new Crawler({
          maxConnections : 10,
          userAgent:"Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36",

          callback: function (error, res, done) {
            if (error) {
              console.log(error);
              throw new Error();
            } else {
          
            
              const $ = res.$;
              const advertisements = [];
            

         $('.nm-product-item ').each(function (index, element) {
                advertisements.push({
                  img: $(element).find('img').attr('src'),
                  title: $(this)
                    .find('.nm-content')
                    .find('.nm-product-name')
                    .text()
                    .trim(),
         
                    description: $(this)
                    .find('.nm-content')
                    .find('h2')
                    .find('a')
                    .text()
                    .trim()
                    //essa parte faz replace no titulo, pois viria repetido na descrição \0/
                    .replace($(this)
                    .find('.nm-content')
                    .find('.nm-product-name')
                    .text()
                    .trim(),'')
                    // \0/
                    .replace('                        ','')
                    .replace('\n','') 
                    .replace('\n','')
                    .replace('                    ',''),
                  value: $(this)
                  .find('.nm-content')
                  .find('.nm-offer')
                  .text()
                  .trim(),
                  km: $(this)
                  .find('aside')
                  .find('.nm-features-container')
                  .text()
                  .trim()
                  .split('\n')[0]+"Km",
                  link: `https:${$(element)
                    .find('.nm-product-img-container')
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

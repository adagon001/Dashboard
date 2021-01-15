const axios = require('axios');

exports.dashboard_get=async (req, res, next) => {
    var config;
    //get translations
    var translations = require('../translations.json');
    if( [1,2,3,4].includes(parseInt(req.params.resort))){
       var config = {
          headers: { lang: 'sk' }
        };
        translations=translations.sk;
       }else if([8].includes(parseInt(req.params.resort))){
          var config = {
             headers: { lang: 'pl' }
           };
           translations=translations.pl;
       }else if([10].includes(parseInt(req.params.resort))){
          var config = {
             headers: { lang: 'cs' }
           };
           translations=translations.cs;
       }else if([12].includes(parseInt(req.params.resort))){
          var config = {
             headers: { lang: 'de' }
           };
           translations=translations.de;
       }else{
          translations=translations.sk;
       }
 
     try {
        
        const apiData = await axios.get('http://test.data.gopass.travel/api/mobile/home/resorts/'+req.params.resort, config);
        const apiNewsData = await axios.get('http://test.data.gopass.travel/api/mobile/news/resorts/'+req.params.resort, config);
        //pass apiData to index.ejs to take care of it
        //console.log(apiData.data.result);
        res.render('index',{ apiData: apiData.data.result, apiNewsData: apiNewsData.data, translations});
     }
     catch (e){
        //render error.ejs
        console.log(e); 
     }
 }
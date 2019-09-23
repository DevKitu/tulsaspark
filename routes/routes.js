const controller = require('../controller/controller');



module.exports = function (app, router) {
    router.get('/', controller.home );

    router.get('/twpt', controller.twpt);
/*    router.post('/contactus', controller.contacUs);

     
*/
    router.get('/twpt/home', controller.twpt);
    router.get('/twp/home', controller.twp);
    router.get('/tbas/home', controller.tbas);
    
    app.use('/', router);

};



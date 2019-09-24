const controller = require('../controller/controller');



module.exports = function (app, router) {
    router.get('/', controller.home );

    router.get('/twpt', controller.twpt);
/*    router.post('/contactus', controller.contacUs);

     
*/
    router.get('/twpt/home', controller.twpt);
    router.get('/twp/home', controller.twp);
    router.get('/tbas/home', controller.tbas);
    
    router.get('/twpt/services/business', controller.twptServiceB);
    router.get('/twpt/services/business/one', controller.twptServiceB01);
    router.get('/twpt/services/business/two', controller.twptServiceB02);
    router.get('/twpt/services/business/three', controller.twptServiceB03);
    
    app.use('/', router);

};



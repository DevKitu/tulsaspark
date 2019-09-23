const homeProcessing = require('./home');
const twptProcessing = require('./twpt/twpt');
const twpProcessing = require('./twp/twp');
const tbasProcessing = require('./tbas/tbas');



module.exports = {
    home:  homeProcessing, 
    twpt:  twptProcessing,
    twp: twpProcessing,
    tbas: tbasProcessing,
};
const homeProcessing = require('./home');
const twpProcessing = require('./twp/twp');
const tbasProcessing = require('./tbas/tbas');


const twptProcessing = require('./twpt/twpt');
const twptServiceB = require('./twpt/twptServiceB');
const twptServiceB01 = require('./twpt/twptServiceB01');
const twptServiceB02 = require('./twpt/twptServiceB02');
const twptServiceB03 = require('./twpt/twptServiceB03');

module.exports = {
    home:  homeProcessing, 
    twpt:  twptProcessing,
    twp: twpProcessing,
    tbas: tbasProcessing,

    twptServiceB:  twptServiceB,
    twptServiceB01:  twptServiceB01,
    twptServiceB02:  twptServiceB02,
    twptServiceB03:  twptServiceB03,
};
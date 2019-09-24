const navData = require('../../model/nav.json');
const metaData = require('../../model/meta.json');
const serviceData = require('../../model/services.json');

module.exports = function(req, res) {
    res.json({serviceData: serviceData.sectionA[1] });
}
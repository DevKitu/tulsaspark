const navData = require('../../model/nav.json');
const metaData = require('../../model/meta.json');

module.exports = function(req, res) {
    res.render('twpt', {navData: navData, metaData: metaData});
}
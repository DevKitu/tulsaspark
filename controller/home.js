const navData = require('../model/nav.json');
const metaData = require('../model/meta.json');

module.exports = function(req, res) {
    res.render('home', {navData: navData, metaData: metaData});
}

/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', {
    title: 'JBer\'s Website',
    author: 'Zhengdongjian',
    layout: 'layout'
  })
};

exports.user = function(req, res) {
};
exports.post = function(req, res) {
};
exports.reg = function(req, res) {
};
exports.doReg = function(req, res) {
};
exports.login = function(req, res) {
};
exports.doLogin = function(req, res) {
};
exports.logout = function(req, res) {
};

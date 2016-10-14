
/* GET home page. */
exports.index  =  function(req, res, next) {
  res.render('index', { title: 'Express' });
};

exports.empresas  =  function(req, res, next) {
  res.render('empresas', { title: 'Express' });
};

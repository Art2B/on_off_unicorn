var express = require('express');
var router = express.Router();
var PythonShell = require('python-shell');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'On Off Unicorn' });
});

router.post('/on', function(req, res){
  var pythonFile = global.appDir+'/python/on.py';
  PythonShell.run(pythonFile, function (err) {
    if (err) throw err;
    console.log('finished on');
  });
  res.send('Light on !');
});
router.post('/off', function(req, res){
  var pythonFile = global.appDir+'/python/off.py';
  PythonShell.run(pythonFile, function (err) {
    if (err) throw err;
    console.log('finished off light');
  });
  res.send('Light off !');
});
router.post('/unicorn', function(req, res){
  var pythonFile = global.appDir+'/python/unicorn.py';
  PythonShell.run(pythonFile, function (err) {
    if (err) throw err;
    console.log('finished unicorn');
  });
  res.send('I\'m a fucking unicorn !');
});

module.exports = router;

var express = require('express');
var router = express.Router();
var PythonShell = require('python-shell');
var spawn = require("child_process").spawn;


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'On Off Unicorn' });
});

router.post('/on', function(req, res){
  var pythonFile = 'on.py';
  PythonShell.run(pythonFile, function (err) {
    if (err) throw err;
    console.log('finished on');
  });
  res.send('Light on !');
});
router.post('/off', function(req, res){
  var pythonFile = 'off.py';
  var pyshell = new PythonShell('off.py', {
    mode: 'text',
    scriptPath: '/'+global.appDir+'/python'
  });
  res.send('Light off !');
});
router.post('/unicorn', function(req, res){
  var pythonFile = 'unicorn.py';
  PythonShell.run(pythonFile, function (err) {
    if (err) throw err;
    console.log('finished unicorn');
  });
  res.send('I\'m a fucking unicorn !');
});

module.exports = router;

var express = require('express');
var router = express.Router();
var PythonShell = require('python-shell');
var spawn = require("child_process").spawn;


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'On Off Unicorn' });
});

router.post('/:action', function(req, res){
  var pythonFile = req.params.action+'.py';
  var pyshell = new PythonShell(pythonFile, {
    mode: 'text',
    scriptPath: '/'+global.appDir+'/python'
  });
  pyshell.end(function (err) {
    if (err) {
      res.status(300).send('Error');
      throw err;
    }
    res.status(200).send('Ok');
  });
});

module.exports = router;

var express = require('express');
const app = require('../app');
var router = express.Router();
const path = require('path');

require('dotenv').config();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('index.js ' + ' 시작');
  //res.send('respond with a index');


  const env = process.env.DB_ENV//'test';
  const config = require(__dirname + '/../config/config.js')[env];

  console.log('index listening log ' + 'Test Server 1 pid:' + process.pid + ', port:' + process.env.PORT+' ,ENV_MODE: ' +process.env.ENV_MODE + ' ,TMP_TEST_WORD: ' + process.env.TMP_TEST_WORD);
  res.render('index', { 
    title: `Test Server 1 pid: ${process.pid} 
    , port: ${process.env.PORT}
    ,ENV_MODE: ${process.env.ENV_MODE} ,TMP_TEST_WORD: ${process.env.TMP_TEST_WORD}
    \n,env: ${env}
    \n,config.username: ${config.username} ,config.password: ${config.password}
    \n hello codeDeploy test`
  });
});

module.exports = router;

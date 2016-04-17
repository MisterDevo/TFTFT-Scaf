var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

function testFunc(){
  return "TFTFT";
}
//module.exports = router;
module.exports = {
  router : router,
  testFunc : testFunc
};

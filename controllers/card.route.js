const express = require('express');
const router = express.Router();

router.get('/', function(request, response){
	response.set("Content-Type", "text/html");
	response.render('card', {})
});



module.exports = router;
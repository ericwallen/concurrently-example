const express = require('express');
const app = express();

app.use(express.static('./client/build'));

app.get('/data', function(req, res){
	res.send({item: 'Hello world!'});
});

app.listen(3001);
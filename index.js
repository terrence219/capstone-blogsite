const express = require('express');
const path = require('path');


require('dotenv').config();
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'hbs');

app.use(express.urlencoded({extended: false}))
app.use(express.json());


const indexRouter = require('./router/indexRouter')
app.use('/', indexRouter)

app.get('*', (req, res) => {
	res.render('error', {
		title: '404 Error',
		status: '404',
		errormsg: 'Page not found'
	});
});

app.listen(PORT, () => {
	console.log(`Listening to localhost on port ${PORT}`);
});
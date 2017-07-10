import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

const app = new (express)();
const config = require('../../webpack.client.config');
const compiler = webpack(config);

const isProd = process.env.NODE_ENV === 'production';

app.set('view engine', 'ejs');

app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath.replace(/^\./, "")}));
app.use(webpackHotMiddleware(compiler));

app.use('/builds', express.static('builds'));
app.use('/scripts', express.static('scripts'));

app.get("/", function (req, res) {
	res.render(path.resolve(`${__dirname}/../index.ejs`), { isProd });
});

app.listen(1128, function () {
	console.log('Server listening [port:1128]...');
});

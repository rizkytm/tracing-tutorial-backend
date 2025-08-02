require('./instrument.js');
const Sentry = require('@sentry/node');
const express = require('express');
const productsRoute = require('./routes/products');
const cors = require('cors');

const app = express();

app.use(express.static('public'));

app.use(cors());

app.get('/', (req, res) => {
  res.send('<h1>Hello, Express.js Server here!</h1>');
});

app.get('/products/debug-sentry', (req, res) => {
  console.log('Sentry Error thrown!');
  throw new Error('My first Sentry error!');
});

Sentry.setupExpressErrorHandler(app);

app.use(function onError(err, req, res, next) {
  // The error id is attached to `res.sentry` to be returned
  // and optionally displayed to the user for support.
  console.log('500 error thrown!');
  res.statusCode = 500;
  res.end(res.sentry + '\n');
});

app.use('/products', productsRoute);

// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write('<h1>Hello, Node.js HTTP Sever Here!</h1>');
//     res.end();
// });

const port = 3001;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

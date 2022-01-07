const { createElement } = require('react');
const express = require('express');
const { renderToString } = require('react-dom/server');
const { Ripple, Heart, Hourglass } = require('react-pure-css-spinners');

const port = 3000;
const app = express();

app.get('*', (req, res) => {
  const html1 = renderToString(createElement(Ripple));
  const html2 = renderToString(createElement(Heart));
  const html3 = renderToString(createElement(Hourglass));

  res.send(`
    <!doctype html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Document</title>
    </head>
    <body>
      <div>${html1}</div>
      <div>${html2}</div>
      <div>${html3}</div>
    </body>
    </html>
  `);
});

app.listen(port, () => console.log(`http://localhost:${port}`));

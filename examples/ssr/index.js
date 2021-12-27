const { createElement } = require('react');
const express = require('express');
const { renderToString } = require('react-dom/server');
const { Ripple, Heart } = require('react-css-spinners');

const port = 3000;
const app = express();

app.get('*', (req, res) => {
  const html1 = renderToString(createElement(Ripple));
  const html2 = renderToString(createElement(Heart));

  res.send(`
    <!doctype html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Document</title>
    </head>
    <body>
      ${html1}
      ${html2}
    </body>
    </html>
  `);
});

app.listen(port, () => console.log(`http://localhost:${port}`));

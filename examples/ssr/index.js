const { createElement } = require('react');
const express = require('express');
const { renderToString } = require('react-dom/server');
const { Heart } = require('react-css-spinners');

const port = 3000;
const app = express();

app.get('*', (req, res) => {
  const html = renderToString(createElement(Heart));

  res.send(`
    <!doctype html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Document</title>
    </head>
    <body>
      ${html}
    </body>
    </html>
  `);
});

app.listen(port, () => console.log(`http://localhost:${port}`));

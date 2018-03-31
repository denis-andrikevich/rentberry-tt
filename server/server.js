require('zone.js/dist/zone-node');
require('reflect-metadata');

const { renderModuleFactory } = require('@angular/platform-server');
const { enableProdMode } = require('@angular/core');

const express = require('express');
const bodyParser = require('body-parser')
const { join } = require('path');
const { readFile, readFileSync } = require('fs');
const geoIpMiddleware = require('./middlewares/geo-ip.middleware');
const rentsMiddleware = require('./middlewares/rents-middlware');
const rentController = require('./controllers/rents');

enableProdMode();

const app = express();

const PORT = process.env.PORT || 4000;
const { DIST_FOLDER } = require('./config');

const template = readFileSync(join(DIST_FOLDER, 'browser', 'index.html')).toString();

const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require(join(DIST_FOLDER, 'server', 'main.bundle'));
const { provideModuleMap } = require('@nguniversal/module-map-ngfactory-loader');

app.engine('html', (_, options, callback) => {
  renderModuleFactory(AppServerModuleNgFactory, {
    document: template,
    url: options.req.url,
    extraProviders: [
      provideModuleMap(LAZY_MODULE_MAP),
      {
        provide: 'REQUEST',
        useValue: options.req
      },
      {
        provide: 'ORIGIN_URL',
        useValue: 'http://localhost:4000'
      }
    ]
  }).then(html => {
    callback(null, html);
  });
});

app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'browser'));

app.get('/api/rents', geoIpMiddleware, rentsMiddleware, rentController);

app.get('*.*', express.static(join(DIST_FOLDER, 'browser')));

app.get('*', (req, res) => {
  res.render(join(DIST_FOLDER, 'browser', 'index.html'), { req });
});

app.listen(PORT, () => {
  console.log(`Node server listening on http://localhost:${PORT}`);
});

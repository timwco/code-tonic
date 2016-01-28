import angular from 'angular';

import PortfolioController from './controllers/portfolio.controller';

angular
  .module('app.pages', [])
  .controller('PortfolioController', PortfolioController)
;
import angular from 'angular';
import 'angular-ui-router';


import config from './config';

// Modules
import './app.pages/index';


angular
  .module('app', ['app.pages', 'ui.router'])
  .config(config)
;
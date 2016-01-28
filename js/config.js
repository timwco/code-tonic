let config = function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.tpl.html'
    })
    .state('root.portfolio', {
      url: '/',
      templateUrl: 'templates/portfolio.tpl.html',
      controller: 'PortfolioController as vm'
    })
    .state('root.about', {
      url: '/about',
      templateUrl: 'templates/about.tpl.html'
    })
    .state('root.services', {
      url: '/services',
      templateUrl: 'templates/services.tpl.html'
    })
    .state('root.contact', {
      url: '/contact',
      templateUrl: 'templates/contact.tpl.html'
    })
    ;

};

config.$inject = ['$stateProvider', '$urlRouterProvider'];
export default config;
let PortfolioController = function($http) {
  
  let vm = this;

  activate();

  function activate () {
    $http.get('data/websites.json').then( (res) => {
      vm.sites = res.data;
    });
  }

};

PortfolioController.$inject = ['$http'];
export default PortfolioController;
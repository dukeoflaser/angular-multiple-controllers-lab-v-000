function ContactController() {
  var vm = this;

  vm.name = 'Smokey the Bear';
  vm.email = 'smokey@hotmail.com';
  vm.phone = '(403)876-3376';

  this.changeName = function() {
    vm.name = 'Jacoby Lions';
    vm.email = 'mrIQ@dmail.com';
    vm.phone = '(123)456-7890';
  }
}

angular
  .module('app')
  .controller('ContactController', ContactController);

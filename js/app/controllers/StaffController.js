function StaffController() {
  this.name = 'Some Name';
  this.email = 'Some Email';
  this.phone = 'Some Phone';
}

angular
  .module('app')
  .controller('StaffController', StaffController);

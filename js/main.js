(function(){
	angular.module('main', [])

	.service('SimpleService', function(){})

	.controller('SimpleController', function($scope){
		$scope.data = {
			foo: 'This is foo',
			bar: 'This is bar',
			baz: 'This is baz'
		}
	});
})();
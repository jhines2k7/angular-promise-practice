(function(){
	angular.module('main', [])

	.service('SimpleService', function($http){
		this.getWeather = function(){
			return $http.get('http://api.openweathermap.org/data/2.5/weather?q=narnia')
				.then(function(response){
					return response;
				})
				.catch(function(err){
					return err;
				});
		}
	})

	.controller('SimpleController', function($scope, SimpleService, $log){
		SimpleService.getWeather()
			.then(function(response){
				$scope.weatherData = response.data;
			})
			.catch(function(err){
				$log.error(err);
			});

		$scope.data = {
			foo: 'This is foo',
			bar: 'This is bar',
			baz: 'This is baz'
		}
	});
})();
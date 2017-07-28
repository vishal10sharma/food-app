var foodieApp = angular.module('foodieApp',['ngRoute']);

foodieApp.config(function ($routeProvider) {
	$routeProvider
	.when('/',{
		templateUrl: 'pages/login.html',
		controller: 'loginController'
	})
	.when('/home',{
		templateUrl: 'pages/home.html',
		controller: 'mainController'
	})
	.when('/restaurant/:id', {
		templateUrl: 'pages/restaurant.html',
		controller: 'restaurantController'
	})
})

foodieApp.controller('loginController',function($scope,$location) {
$scope.goToHome= function(){
	// console.log('Do Something')
	$location.url('home')
}
})
foodieApp.controller('restaurantController',function($scope,$routeParams,$http) {
	//Empty
	//console.log($routeParams.id);
	$scope.ingredients = [];


	$scope.getIngredients = function(url) {
	// Do something
	var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}'
	    $http({
	        'method': 'POST',
	        'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
	        'headers': {
	            'Authorization': 'Key affe7e5ac57b4034a26746c9944e6046',
	            'Content-Type': 'application/json'
	        },
	        'data': data

	    }).then(function (response) {
								var ingredients = response.data.outputs[0].data.concepts;
						for (var i =0;i < ingredients.length;i++) {
						$scope.ingredients.push(ingredients[i].name);
						$scope.probabilityvalue.push(ingredients[i].value);
						}
    		// $('.ingredients').html(list);
    		//console.log(list);
        }, function (xhr) {
        	console.log(xhr);
        })
	}

	$scope.restaurantId = $routeParams.id;
	var restaurants = [{
	name: 'Farzi Cafe',
	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '4.2',
	cuisines: 'Modern Indian',
	cost: '2200',
	hours: '12 Noon to 1 AM (Mon-Sun)',
 id:1,
 bestDish: {
 name: 'thali',
 image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBkSTeemnRHo-dVwUNF4SAHBf5XmRvUBcW4DIwxQX-kn6ergWlSg'
					 },
	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
},
{
	name: 'pizza hut',
	address: '12/24, Level 1, Block A , Big Bazzar, Baddi',
	location: 'Baddi',
	category: 'Pizza',
	vote: '4.7',
	cuisines: 'Italian',
	cost: '500',
	hours: '12 Noon to 12 AM (Mon-Sun)',
 id :2,
 bestDish: {
	name: 'Corn Pizza',
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXNtSKvxBmRHUql51CJMTwHGrdL-JSyKmMnmKVzmL7xFPBBxFu9g'
           },
	image: 'http://static5.businessinsider.com/image/53908351ecad04ca746ba577-480/pizza-hut-cmo-sp.jpg'
},
{
	name: 'Ananda Bhavan',
	address: 'SCF 4, Phase 1, Housing Board, Sai Road, Near Old Malhotra Hospital., Baddi, Himachal Pradesh 173205',
	location: 'Connaught Place',
	category: 'Family Restaurant',
	vote: '3.9',
	cuisines: 'Indian',
	cost: '1000',
	hours: '8 AM to 11 PM (Mon-Sun)',
 id:3,
 bestDish: {
 name: 'Corn Pizza',
 image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBkSTeemnRHo-dVwUNF4SAHBf5XmRvUBcW4DIwxQX-kn6ergWlSg'
					 },
	image: 'http://lovethiscitytv.com/wp-content/uploads/2015/06/Top-25-New-Restaurants-in-Toronto2.jpeg'
},
{
	name: 'Pappu Dhaba',
	address: 'Old City, Bathinda, Punjab 151001',
	location: 'Bathinda',
	category: 'Casual Dining',
	vote: '4.3',
	cuisines: 'Indian',
	cost: '400',
	hours: '10 AM to 12 AM (Mon-Sun)',
 id :4,
 bestDish: {
 name: 'pav bhaji',
 image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiiR4kvUd7mg9EpmTMsVgANLKJmsb1_Uckcwlo0O2VCjqsQFQJ'

					 },
	image: 'http://4.bp.blogspot.com/-TlryN0pcF5E/TqJAEMbrT9I/AAAAAAAACfw/A_sO0P2Df_4/s1600/P1030556.JPG'
},
{
	name: 'Pizza Nation',
	address: ' Shop No. 25 A, City Center Complex, Patiala, Punjab 147001',
	location: 'Patiala',
	category: 'Pizza',
	vote: '4.4',
	cuisines: 'Italian',
	cost: '2200',
	hours: '11 AM to 11 PM (Mon-Sun)',
 id :5,
 bestDish: {
	name: 'Layered Mexican Delight',
	image: 'https://irepo.primecp.com/1006/76/182716/Layered-Mexican-Delight_Medium_ID-661394.jpg?v=661394'
          },
	image: 'https://media.timeout.com/images/101564675/630/472/image.jpg'
}]
	$scope.restaurant = restaurants[$routeParams.id - 1];
	$scope.ingredients = [];
			$scope.probabilityvalue=[];

			$scope.checkVegorNonVeg = function() {
				var flag_quit =0;
				ing_list = angular.copy($scope.ingredients); //hard copy
				prob_value= $scope.probabilityvalue;
				var elements = prob_value.filter(function(a){return a > 0.85;});
				ing_list.splice(elements.length,20);
				var nonveg = ["egg","meat","bacon","chicken","sushi","pork","steak"];
				var additionnonveg = "<div><img src='http://21425-presscdn.pagely.netdna-cdn.com/wp-content/uploads/2013/05/non-veg-300x259.jpg' class='vegnonveg' ></div>"
				var additionveg = "<div><img src='http://21425-presscdn.pagely.netdna-cdn.com/wp-content/uploads/2013/05/veg-300x259.jpg' class='vegnonveg' ></div>"

				for(j=0;j<ing_list.length;j++){
					for(i=0;i<nonveg.length;i++){
						if(ing_list[j] == nonveg[i]){
							flag_quit=1;
							break;
						}
					}
				if(flag_quit==1){
					$(".rest-extra").append(additionnonveg);
					break;
				}

			}
			if(flag_quit==0){$(".rest-extra").append(additionveg);}
		}
})
//controller bnaya h....
foodieApp.controller('mainController',function($scope) {
	//what it will do.....
	$scope.restaurants = [{
	name: 'Farzi Cafe',
	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '4.2',
	cuisines: 'Modern Indian',
	cost: '2200',
	hours: '12 Noon to 1 AM (Mon-Sun)',
 id:1,
	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
},
{
	name: 'pizza hut',
	address: '12/24, Level 1, Block A , Big Bazzar, Baddi',
	location: 'Baddi',
	category: 'Pizza',
	vote: '4.7',
	cuisines: 'Italian',
	cost: '500',
	hours: '12 Noon to 12 AM (Mon-Sun)',
 id :2,
	image: 'http://static5.businessinsider.com/image/53908351ecad04ca746ba577-480/pizza-hut-cmo-sp.jpg'
},
{
	name: 'Ananda Bhavan',
	address: 'SCF 4, Phase 1, Housing Board, Sai Road, Near Old Malhotra Hospital., Baddi, Himachal Pradesh 173205',
	location: 'Connaught Place',
	category: 'Family Restaurant',
	vote: '3.9',
	cuisines: 'Indian',
	cost: '1000',
	hours: '8 AM to 11 PM (Mon-Sun)',
 id:3,
	image: 'http://lovethiscitytv.com/wp-content/uploads/2015/06/Top-25-New-Restaurants-in-Toronto2.jpeg'
},
{
	name: 'Pappu Dhaba',
	address: 'Old City, Bathinda, Punjab 151001',
	location: 'Bathinda',
	category: 'Casual Dining',
	vote: '4.3',
	cuisines: 'Indian',
	cost: '400',
	hours: '10 AM to 12 AM (Mon-Sun)',
 id :4,
	image: 'http://restaurant.business.brookes.ac.uk/images/slideshow/restaurant.jpg'
},
{
	name: 'Pizza Nation',
	address: ' Shop No. 25 A, City Center Complex, Patiala, Punjab 147001',
	location: 'Patiala',
	category: 'Pizza',
	vote: '4.4',
	cuisines: 'Italian',
	cost: '2200',
	hours: '11 AM to 11 PM (Mon-Sun)',
 id :5,
	image: 'https://media.timeout.com/images/101564675/630/472/image.jpg'
},
]

})

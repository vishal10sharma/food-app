var foodieApp = angular.module('foodieApp',[]);
console.log(foodieApp);

//now create a controller

foodieApp.controller('mainController',function($scope) {
	
$scope.restaurants = [{
	name: 'Farzi Cafe',
	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '4.1',
	cuisines: 'Modern Indian',
	cost: '2200',
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
},
{
	name: 'Apex Cafe',
	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	location: 'Baddi',
	category: 'Casual Dining, Bar',
	vote: '4.0',
	cuisines: 'Italian',
	cost: '2000',
	hours: '11 Noon to 1 AM (Mon-Sun)',
	image: 'https://www.bbcgoodfood.com/sites/default/files/bream.jpg'
},
{
	name: 'Saffron',
	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	location: 'Chandigarh',
	category: 'Casual Dining, Bar',
	vote: '4.5',
	cuisines: 'French',
	cost: '1900',
	hours: '10 Noon to 1 AM (Mon-Sun)',
	image: 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/blood-orange-madeleines.jpg'
},
{
	name: 'Royal Cafe',
	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '4.2',
	cuisines: 'Chinese',
	cost: '1500',
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: 'https://www.bbcgoodfood.com/sites/default/files/Collections_Chinese_4.jpg'
}]
})

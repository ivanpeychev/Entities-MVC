sessionStorage.setItem('authToken', btoa('guest:guest'));

(function() {
	let router = Sammy(function() {
		let baseUrl = 'https://baas.kinvey.com/';
		let appKey = 'kid_HJzvKOaum';
		let appSecret = '83ec0ffe3f214ac388610f034e8548e6';
		
		let authenticationService = new AuthenticationService(appKey, appSecret);
		
		let requester = new Requester();
		
		let personModel = new PersonModel(baseUrl, appKey, requester, authenticationService);
		
		let personView = new PersonView();
		
		let personController = new PersonController(personModel, personView);

		this.get('#/home', () => {
			$('#wrapper').html($('<button>').on('click', function() { location.hash='#/persons' }).text('List Persons'))
		})

		this.get('#/persons', () => {
			personController.getAllPersons();
		})
	})
	
	router.run('#/home');
}());
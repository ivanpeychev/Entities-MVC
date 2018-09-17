class PersonModel {
	constructor(baseURL, appKey, requester, authenticationService) { 
		this._baseURL = baseURL;
		this._appKey = appKey;
		this._requester = requester;
		this._authenticationService = authenticationService;
	}

	getPerson(id) {
		let requestURL = this._baseURL + 'appdata/' + this._appKey + '/persons/' + id;
		let requestHeaders = this._authenticationService.getHeaders();

		return this._requester.get(requestURL, requestHeaders);
	}

	getAllPersons() {
		let requestURL = this._baseURL + 'appdata/' + this._appKey + '/persons';
		let requestHeaders = this._authenticationService.getHeaders();

		return this._requester.get(requestURL, requestHeaders);
	}

	postPerson(data) {
		let requestURL = this._baseURL + 'appdata/' + this._appKey + '/persons';
		let requestHeaders = this._authenticationService.getHeaders();

		return this._requester.post(requestURL, requestHeaders, data);
	}
}
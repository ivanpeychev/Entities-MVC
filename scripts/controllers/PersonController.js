class PersonController {
	constructor(model, view) { 
		this.model = model;
		this.view = view;
	}

	getPerson(id) {
		let _self = this;

		this.model.getPerson(id)
			.then((responseData) => {
				_self.view.viewPerson(responseData);
			})
			.catch((errorData) => {
				console.log(errorData);
			});
	}

	getAllPersons() {
		let _self = this;

		this.model.getAllPersons()
		.then((responseData) => {
			_self.view.viewAllPersons(responseData);
		})
		.catch((errorData) => {
			console.log(errorData);
		});
	}

	createPerson(data) {
		this.model.postPerson(data)
			.then((responseData) => {
				console.log('Success!');
			})
			.catch((errorData) => {
				console.log(errorData);
			})
	}
}
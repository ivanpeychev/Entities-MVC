class PersonView {
	constructor() { }

	viewPerson(data) {

	}

	viewAllPersons(data) {
		let table = $('<table>').addClass('table table-striped');
		let thead = $('<thead>').addClass('thead-dark');
		let tr = $('<tr>')
			.append( $('<th>').attr('scope', 'col').text('#') )
			.append( $('<th>').attr('scope', 'col').text('Name') )
			.append( $('<th>').attr('scope', 'col').text('Age') )
			.append( $('<th>').attr('scope', 'col').text('Gender') )
		
		let tbody = $('<tbody>');
		tr.appendTo(thead);
		thead.appendTo(table);

		data.forEach((item, idx) => {
			let tr = $('<tr>').attr('key', item._id)
				.append( $('<th>').attr('scope', 'row').text(idx + 1) )
				.append( $('<td>').text(item.name) )
				.append( $('<td>').text(item.age) )
				.append( $('<td>').text(item.gender) )
			tr.appendTo(tbody);
		})
		tbody.appendTo(table);

		let button = $('<button>').on('click', function() { location.hash='#/home' }).text('Home');
		$('#wrapper').html(button);
		$('#wrapper').append(table);
	}
}
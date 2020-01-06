document.addEventListener('DOMContentLoaded', () => {

	setStyle = (element, cssObject) => {
		for (let property in cssObject)
		element.style[property] = cssObject[property];
		console.log(cssObject)
  };

	const root = document.querySelector('#root');

	setStyle(root, {
		'display': 'flex',
		'margin-top': '-8px',
		'height': '100vh',
		'width': '100vw',
		'background': 'lightgrey'
	});

	for(i=0; i < 5; i++) {
		let box = document.createElement('div');
		box.classList.add(`step-${i+1}`);
		box.innerText = `step-${i+1}`;

		setStyle(box, {
			'height': '15vh',
			'width': '15vw',
			'margin': '5px',
			'background': 'white',
			'border': '1px dotted black'
		});

		root.insertAdjacentElement('beforeend', box);

	};

});



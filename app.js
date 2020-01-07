document.addEventListener('DOMContentLoaded', () => {

	setStyle = (element, cssObject) => {
		if(element.nodeType !== 1){return console.log('setStyle requires DOM element node')};
		for (let property in cssObject)
		element.style[property] = cssObject[property];
		// console.log(`${typeof property}: ${property}: ${cssObject[property]}`)
  };

	const root = document.querySelector('#root');
	root.setAttribute('data-name', 'root');
	
	setStyle(root, {
		'text-align': 'center',
		'display': 'flex',
		'margin-top': '-8px',
		'height': '100vh',
		'width': '100vw',
		'background': 'lightgrey'
	});

	for(i=0; i < 5; i++) {
		let box = document.createElement('div');
		box.id = 'step';
		box.classList.add(`step-${i+1}`);
		box.setAttribute('data-id', `${i+1}`);
		box.innerText = `step-${i+1}`;

		setStyle(box, {
			'height': '15vh',
			'width': '15vw',
			'margin': '5px',
			'background': 'white',
			'border': '1px dotted black'
		});

		box.addEventListener('click', () => {
			let elements = Array.from(document.querySelectorAll('#step'));
			let outsideElements = elements.filter(element => element.dataset.id !== box.dataset.id);
			setStyle(box, {
				'background': 'white',
				'color': 'black',
				'text-shadow': 'none'
			});
			outsideElements.forEach(element => setStyle(element, {
				'background': 'lightblue',
				'color': 'transparent',
				'text-shadow': '0 0 5px rgba(0,0,0,0.5)'
			}));
		});

		root.insertAdjacentElement('beforeend', box);

	};
	
	// backgrounds of step elements to white 
	root.addEventListener('click', (e) => {
		if(e.target.dataset.name !== 'root'){return};
		let children = Array.from(root.children);
		children.forEach(element => setStyle(element, {
			'background': 'white',
			'color': 'black',
			'text-shadow': 'none'
		}));
	});

});



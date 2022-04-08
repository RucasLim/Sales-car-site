function toggleClass(content,plus,minus) {
	content.classList.toggle(plus)
	content.classList.toggle(minus)
}

let container = document.getElementsByClassName("container");

for (let i=0; i<container.length; i++){

	container[i].addEventListener('click', function()
		{
		this.classList.toggle('active');
	
		let label = this.children[0]

		toggleClass(label.children[0],'fa-plus-square','fa-minus-square')
	
		}
	)
}
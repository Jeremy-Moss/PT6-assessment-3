console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form Submitted');
}


let form = document.querySelector('#contact');
const duckImg = document.querySelector('img');

form.addEventListener("submit", handleSubmit);

duckImg.addEventListener('mouseover', () => {
	alert('You look fantastic today!')
})





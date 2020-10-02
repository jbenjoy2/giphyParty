console.log("Let's get this party started!");

//selectors and variable declarations
const form = document.querySelector('form');
const search = document.querySelector('#searchVal');
const gifArea = document.querySelector('#gifs');
const remove = document.querySelector('#remove');
const key = '5p9C87GMK7R57sNurdDeoyR8FZ00ucUC';

//search function that makes request and renders
async function searchGifs(searchTerm, key) {
	try {
		const res = await axios.get('http://api.giphy.com/v1/gifs/search', {
			params : { q: searchTerm, api_key: key }
		});
		let gifURL = chooseRandom(res);
		addToPage(gifURL);
	} catch (error) {
		alert('Something went wrong!');
	}
}

// pick random gif from results
function chooseRandom(res) {
	const gifs = res.data.data;
	// console.log(gifs);
	const idx = Math.floor(Math.random() * res.data.data.length);
	// console.log(gifs[idx]);
	const gifToAdd = gifs[idx].images.original.url;
	return gifToAdd;
}

function addToPage(gif) {
	let newGif = document.createElement('img');
	newGif.className = 'col-sm-3 img-fluid m-1 img-thumbnail';
	newGif.setAttribute('src', gif);
	gifArea.append(newGif);
}

//submit form
form.addEventListener('submit', function(e) {
	e.preventDefault();
	let searchTerm = search.value;
	searchGifs(searchTerm, key);
	search.value = '';
});

//remove images
remove.addEventListener('click', function() {
	gifArea.innerHTML = '';
});

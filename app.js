console.log("Let's get this party started!");

//selectors and variable declarations
const form = document.querySelector('form');
const search = document.querySelector('#searchVal');
const key = '5p9C87GMK7R57sNurdDeoyR8FZ00ucUC';

//search function
async function searchGifs(searchTerm, key) {
	const res = await axios.get('http://api.giphy.com/v1/gifs/search', {
		params : { q: searchTerm, api_key: key }
	});
	console.log(res);
}

form.addEventListener('submit', function(e) {
	e.preventDefault();
});

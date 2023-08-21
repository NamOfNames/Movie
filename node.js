const url = 'https://moviesdatabase.p.rapidapi.com/titles/series/%7BseriesId%7D';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '83fcb7fadfmshe81b9904851bb6dp18240bjsne87fa9e95105',
		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
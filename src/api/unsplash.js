import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID 04f953ac97e86197075d22fe22086dfb539734bd9b9cf83788f32a178e040295'
	}
});

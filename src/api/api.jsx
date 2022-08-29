import * as axios from "axios";
import { date } from "yup/lib/locale";

const instance = axios.create({
	baseURL: 'https://62ca9bf51eaf3786ebade9ad.mockapi.io/api/itemsData/',
	//настройки аксиос запроса: widthCredentionals: true, headers: { API-KEY: qweqweqwewq і тд.}
})

export const itemsAPI = {
	getItemsAPI(count) {
		return instance.get(`items?page=1&limit=${count || 10}`,
			{
				//parameters
			})
			.then(response => response.data);
	},
	getCurrentItemAPI(id) {
		return instance.get(`items/${id}`,
			{
				//parameters
			})
			.then(response => response.data);
	},
	postReviews(id, name, value, date) {
		return instance.post(`items/${id}/usersReviews`,
			{
				userName: name,
				userReviews: value,
				currentTime: date,
			})
			.then(response => response.data);
	},
	deleteReviews(id, reviewId) {
		return instance.delete(`items/${id}/usersReviews/${reviewId}`,
			{
			})
			.then(response => response.data);
	},
	getReviews(id, currentPortion, limit) {
		return instance.get(`items/${id}/usersReviews?page=${currentPortion || 1}&limit=${limit || 1000}&sortBy=currentTime&order=desc`,
			{
			})
			.then(response => response.data);
	}
	// Другі методи для роботи з Енд поинтом --- items ---
}


export const userData = {
	getUserDataAPI() {
		return instance.get(`currentUser/1`,
			{
				//parameters
			})
			
			.then(response => response.data);
		
	},
	setUserDataAPI(name, email, password) {
		return instance.post(`userData/`,
			{
				name,
				email,
				password,
			})
			.then(response => response.data);
	},
	setCurrentUserDataAPI(email, password) {
		return instance.post(`currentUser/`,
			{
				email,
				password,
			})
			.then(response => response.data);
	},

}
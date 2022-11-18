import axios from "axios";

export const postDish = async (dish) => {
	try {
		const response = await axios.post(
			"https://frosty-wood-6558.getsandbox.com:443/dishes",
			dish
		);
		alert(`Server response: ${JSON.stringify(response.data)}`);
	} catch (error) {
		console.error(error);
	}
};

import { JenkinsUser, User } from './../../utils/interfaces';
import { getUsers } from './../../utils/api';

const returnOptions = () => {

	const users = retrieveUsers();

	return {
		add: users
	};
}

const retrieveUsers = (): User[] => {
	let users: User[] = [];
	const userResponse = getUsers();
	if (userResponse.status === 200) {
		let usersData = userResponse.response.users as JenkinsUser[];
		usersData.forEach(item => {
			let user: User = {
				name: item.user.fullName,
				url: item.user.absoluteUrl,
				description: item.user.description
			}
			users.push(user);
		});
	} else {
		log(userResponse.response);
	}
	return users;
}

export default returnOptions;
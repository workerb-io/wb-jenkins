// @description Open

import { User } from "../../../utils/interfaces";

if (options.users) {
	const user: User = options.users;
	open(user.url);
}
//  @description Setup jenkins server

let jenkinsUrl: string | null = args[0];

if (!jenkinsUrl) {
	jenkinsUrl = prompt('Enter your Jenkins URL');
}

if (jenkinsUrl) {
	open(jenkinsUrl)
	const currentURL = readURL();

	if (currentURL.indexOf("login") === -1) {
		// user logged in

		// clicking user profile button 
		click("a[class='model-link inside inverse']", {
			method: "by_query_selector",
			expectReload: true
		});

		// get user_name from url  JENKINS_URL/user/user_name/
		let url = readURL()
		let urlParts = url.split("/")
		if (urlParts[urlParts.length - 1] === "") {  // check if there is / in the end
			urlParts.pop()
		}
		let user_name = urlParts[urlParts.length - 1]

		// clicking configure in user profile
		click("a[title='Configure']", {
			method: "by_query_selector",
			expectReload: true
		});

		// clicking button to add new token
		click("Add new Token", {
			method: "by_text"
		});

		const tokenName: string = `workerb-${new Date().getTime()}`;

		// typing the token name
		type(tokenName, 'Default name', { method: 'by_placeholder' });

		// clicking Generate button to generate the API token
		click("Generate", {
			method: "by_text"
		});

		// reading the token
		const token = read("span[class='new-token-value visible']", {
			method: "by_query_selector"
		});

		if (!token) {
			notify("Empty token", "error", 3000)
		} else {
			log(token)
			log(user_name)
			log(jenkinsUrl)
			setVars([
				{
					name: "jenkinsToken",
					value: token,
				},
				{
					name: "jenkinsUser",
					value: user_name,
				},
				{
					name: "jenkinsUrl",
					value: jenkinsUrl
				},
			], { local: true });
			notify("Access token added successfully", 'success', 4000);
			reIndex([]);
		}

	} else {
		// notify user not logged in
		notify("Please login into your Jenkins account", "error", 3000);
	}
} else {
	notify("Jenkins URL is neccessary for setup", "error", 3000)
}
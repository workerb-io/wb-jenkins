//  @description Setup jenkins server

let jenkinsUrl: string | null = args[0];

if (!jenkinsUrl) {
	jenkinsUrl = prompt('Enter your Jenkins URL');
}

if (jenkinsUrl) {
	open(jenkinsUrl)
	const currentURL = readURL();
	if (currentURL.indexOf("login") === -1) {
		// user is loggedin
	} else {
		// notify user not logged in
		notify("Please login into your Jenkins account", "error", 3000);
	}
} else {
	notify("Jenkins URL is neccessary for setup", "error", 3000)
}
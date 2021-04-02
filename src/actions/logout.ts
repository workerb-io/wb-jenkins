// @description Logout from jenkins automation package

setVars([
	{
		name: "jenkinsToken",
		value: '',
	},
	{
		name: "jenkinsUser",
		value: '',
	},
	{
		name: "jenkinsUrl",
		value: ''
	},
], { local: true });

notify('Access token removed successfully', 'success', 3000);

reIndex([]);
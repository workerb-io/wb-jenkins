import { CREATE_NEW_USER_URI, JENKINS_URL } from './../utils/constants';
// @description Create New User

const createNewUserUrl: string = JENKINS_URL + CREATE_NEW_USER_URI;
open(createNewUserUrl);

notify("Enter the user info and click 'Create User'", "success", 3000);
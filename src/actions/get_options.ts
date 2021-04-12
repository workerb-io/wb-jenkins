import { JENKINS_TOKEN, JENKINS_URL, JENKINS_USER } from '../utils/constants'

const returnOptions = () => {
	if (!JENKINS_TOKEN || !JENKINS_URL || !JENKINS_USER) {
		return JSON.stringify({
			// user not logged in
			// removing jenkins related actions
			remove: ['jobs', 'logout', 'new_job', 'new_user']
		});
	} else {
		// user logged in
		// removing setup action
		return JSON.stringify({
			remove: ['setup']
		});
	}
}

export default returnOptions;
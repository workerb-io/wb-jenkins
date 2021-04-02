import { JENKINS_TOKEN, JENKINS_URL, JENKINS_USER } from '../utils/constants'

const returnOptions = () => {
	if (!JENKINS_TOKEN || !JENKINS_URL || !JENKINS_USER) {
		return JSON.stringify({
			remove: ['jobs', 'logout']
		});
	} else {
		return JSON.stringify({
			remove: ['setup']
		});
	}
}

export default returnOptions;
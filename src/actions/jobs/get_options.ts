import { getJobs } from "../../utils/api";
import { Job } from "../../utils/interfaces";

const returnOptions = () => {

	const jobs = retrieveJobs();

	log(JSON.stringify(jobs))

	return {
		add: jobs
	};
}

const retrieveJobs = (): Job[] => {
	let jobs: Job[] = [];
	const jobResponse = getJobs();
	if (jobResponse.status === 200) {
		jobs = jobResponse.response.jobs;
	} else {
		log(jobResponse.response);
	}
	return jobs;
}

export default returnOptions;
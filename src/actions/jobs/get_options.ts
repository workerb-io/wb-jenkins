import { getJobs } from "../../utils/api";
import { truncate } from "../../utils/helper";
import { Job } from "../../utils/interfaces";

const returnOptions = () => {

	const jobs = retrieveJobs();

	return {
		add: jobs
	};
}

const retrieveJobs = (): Job[] => {
	let jobs: Job[] = [];
	const jobResponse = getJobs();
	if (jobResponse.status === 200) {
		jobs = jobResponse.response.jobs;
		if (jobs && jobs.length > 0) {
			jobs.forEach(job => {
				// updating job description
				job.description = truncate(job.description, 20) + ` [${job.lastBuild ? job.lastBuild.result : "NOT BUILT"}]`
			});
		}
	} else {
		log(jobResponse.response);
	}
	return jobs;
}

export default returnOptions;
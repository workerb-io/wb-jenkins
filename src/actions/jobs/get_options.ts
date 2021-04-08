import { getJobs } from "../../utils/api";
import { hasParameters, truncate } from "../../utils/helper";
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
				let description: string = truncate(job.description, 20); // Job description truncated to 20 chracters only
				description += ` [${job.lastBuild ? job.lastBuild.result : "NOT BUILT"}]`; // add last build info
				description += ` ${job.disabled ? "[DISABLED]" : ""}`; // add disabled info

				job.description = description,
					job.isParameterized = hasParameters(job.property)
			});
		}
	} else {
		log(jobResponse.response);
	}
	return jobs;
}

export default returnOptions;
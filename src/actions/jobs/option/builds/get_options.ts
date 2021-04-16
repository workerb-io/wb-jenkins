import { getBuilds } from "../../../../utils/api";
import { truncate } from "../../../../utils/helper";
import { Job, Build } from "../../../../utils/interfaces";

const returnOptions = () => {

	let builds: Build[] = [];

	if (options.jobs) {
		const job: Job = options.jobs;
		builds = retrieveBuilds(job.url);
	}

	return {
		add: builds
	};
}

const retrieveBuilds = (jobUrl: string): Build[] => {
	let builds: Build[] = [];
	let buildsResponse = getBuilds(jobUrl);
	if (buildsResponse.status === 200 && buildsResponse.response) {
		builds = buildsResponse.response.builds
		if (builds && builds.length) {
			builds.forEach(build => {
				build.name = build.displayName;
				let desc = build.description ? truncate(build.description, 20) : "";
				build.description = desc + ` [${build.result}]`;
			})
		}
	} else {
		log(buildsResponse.response);
	}
	return builds;
}

export default returnOptions;
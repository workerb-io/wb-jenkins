// @description Build

import { buildJob } from "../../../utils/api";
import { BUILDS, JOBS, JOB_BUILD_URI } from "../../../utils/constants";
import { Job } from "../../../utils/interfaces";

if (options.jobs) {
	const job = options.jobs as Job;
	const buildUrl: string = job.url + JOB_BUILD_URI;
	buildJob(buildUrl);
	reIndex([JOBS, job.name, BUILDS]);
	notify("Build Successfully Started", "success", 3000)
} else {
	notify("options object not populated", "error", 3000);
}
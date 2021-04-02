// @description Build Job

import { buildJob } from "../../../utils/api";
import { Job } from "../../../utils/interfaces";


if (options.jobs) {
	const job = options.jobs as Job;
	const jobUrl = job.url + "build";
	buildJob(jobUrl);
	notify("Build Successfully Started", "success", 3000)
} else {
	notify("options object not populated", "error", 3000);
}
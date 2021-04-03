// @description Build Job

import { buildJob } from "../../../utils/api";
import { Job } from "../../../utils/interfaces";


if (options.jobs) {
	const job = options.jobs as Job;
	const buildUrl: string = job.url + "build";
	buildJob(buildUrl);
	notify("Build Successfully Started", "success", 3000)
} else {
	notify("options object not populated", "error", 3000);
}
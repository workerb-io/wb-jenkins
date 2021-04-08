// @description Open Job

import { Job } from "../../../utils/interfaces";

if (options.jobs) {
	const job = options.jobs as Job;
	open(job.url);
}
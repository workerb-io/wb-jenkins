// @description Build

import { buildJob } from "../../../utils/api";
import { JOB_BUILD_URI } from "../../../utils/constants";
import { Job } from "../../../utils/interfaces";

/*
	FIXME: build job is not working, 
	Reason: Getting Call stack exceeded error
	Possible package reason: Getting empty response
*/

if (options.jobs) {
	const job = options.jobs as Job;
	const buildUrl: string = job.url + JOB_BUILD_URI;
	buildJob(buildUrl);
	notify("Build Successfully Started", "success", 3000)
} else {
	notify("options object not populated", "error", 3000);
}
// @description Last Build Changes

import { JOB_CHANGES_URI } from "../../../utils/constants";
import { Job } from "../../../utils/interfaces";

if (options.jobs) {
	const job: Job = options.jobs;
	const changesUrl: string = job.url + JOB_CHANGES_URI;
	open(changesUrl);
}
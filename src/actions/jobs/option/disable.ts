// @description Disable Job

import { updateJob } from "../../../utils/api";
import { JOBS, JOB_DISABLE_URI } from "../../../utils/constants";
import { Job } from "../../../utils/interfaces";

if (options.jobs) {
	const job: Job = options.jobs;
	const disableUrl: string = job.url + JOB_DISABLE_URI;

	const updateJobResponse = updateJob(disableUrl);
	if (updateJobResponse.status === 302) {
		reIndex([JOBS])
		notify("Successfully disabled job", "error", 3000);
	} else {
		notify("Failed to disable job", "error", 3000);
	}
}

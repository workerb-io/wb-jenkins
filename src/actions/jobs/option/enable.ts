// @description Enable Job

import { updateJob } from "../../../utils/api";
import { JOBS, JOB_ENABLE_URI } from "../../../utils/constants";
import { Job } from "../../../utils/interfaces";

if (options.jobs) {
	const job: Job = options.jobs;
	const enableUrl: string = job.url + JOB_ENABLE_URI;

	const updateJobResponse = updateJob(enableUrl);
	if (updateJobResponse.status === 302) {
		reIndex([JOBS])
		notify("Successfully enabled job", "success", 3000);
	} else {
		notify("Failed to enable job", "error", 3000);
	}
}

// @description Enable Job

import { updateJob } from "../../../utils/api";
import { JOB_ENABLE_URI } from "../../../utils/constants";
import { Job } from "../../../utils/interfaces";

if (options.jobs) {
	const job: Job = options.jobs;
	const enableUrl: string = job.url + JOB_ENABLE_URI;

	// FIXME: updateJob API return HTML response (server side rendered page)
	// because of that it is throwing an error "RangeError: Maximum call stack size exceeded"
	const updateJobResponse = updateJob(enableUrl);
	if (updateJobResponse.status === 200) {
		notify("Successfully enabled job", "success", 3000);
	} else {
		notify("Failed to enable job", "error", 3000);
	}
}

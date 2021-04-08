// @description Disable Job

import { updateJob } from "../../../utils/api";
import { JOB_DISABLE_URI } from "../../../utils/constants";
import { Job } from "../../../utils/interfaces";

if (options.jobs) {
	const job: Job = options.jobs;
	const disableUrl: string = job.url + JOB_DISABLE_URI;

	// FIXME: updateJob API return HTML response (server side rendered page)
	// because of that it is throwing an error "RangeError: Maximum call stack size exceeded"

	const updateJobResponse = updateJob(disableUrl);
	if (updateJobResponse.status === 200) {
		notify("Successfully disabled job", "error", 3000);
	} else {
		notify("Failed to disable job", "error", 3000);
	}
}

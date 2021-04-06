// @description Delete

import { deleteJob } from "../../../utils/api";
import { JOB_DELETE_URI } from "../../../utils/constants";
import { Job } from "../../../utils/interfaces";

if (options.jobs) {
	const job: Job = options.jobs;
	const deleteUrl = job.url + JOB_DELETE_URI;

	/*
	FIXME: delete is not working, 
	Error: Getting Call stack exceeded error
	Possible Reason: Getting HTML page as response instead of JSON
	*/

	const deleteJobResponse = deleteJob(deleteUrl);
	if (deleteJobResponse.status === 200) {
		notify("Job Deleted Successfully", "success", 3000);
	} else {
		notify("Failed to delete job", "error", 3000);
	}
}
// @description Delete

import { deleteJob } from "../../../utils/api";
import { JOB_DELETE_URI } from "../../../utils/constants";
import { Job } from "../../../utils/interfaces";

/*
	FIXME: delete is not working, 
	Reason: Getting Call stack exceeded error
	Possible package reason: Getting HTML page as response instead of JSON
*/

if (options.jobs) {
	const job: Job = options.jobs;
	const deleteUrl = job.url + JOB_DELETE_URI;
	deleteJob(deleteUrl);
	notify("Job Deleted Successfully", "success", 3000);
}
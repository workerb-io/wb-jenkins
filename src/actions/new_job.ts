// @description Create New Job

import { CREATE_NEW_JOB_URI, JENKINS_URL } from "../utils/constants";

let jobName: string | null = args[0];

if (!jobName) {
	jobName = prompt("Enter Job Name");
}

if (jobName) {
	const newJobUrl: string = JENKINS_URL + CREATE_NEW_JOB_URI;
	open(newJobUrl);
	type(jobName, "name", {
		method: "by_id"
	});
	notify("Select job category and click ok", "success", 3000);
} else {
	notify("Job name cannot be empty", "error", 3000);
}
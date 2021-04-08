// @description Rename

import { JOB_RENAME_REDIRECT_URI, JOB_RENAME_URI } from "../../../utils/constants";
import { Job } from "../../../utils/interfaces";

/* FIXME: rename job API is not working, therefore added automated UI
	Reason: Rename Job API needs body as FormData instead of json
	and FormData is not supported by wbInterpretor. 
*/

if (options.jobs) {
	const job: Job = options.jobs;
	const renameRedirectURL: string = job.url + JOB_RENAME_REDIRECT_URI

	let newName = prompt("Enter new job name");
	if (newName) {
		if (newName === job.name) {
			notify("New name is same as current name", "error", 3000);
		} else {
			// open job rename page
			open(renameRedirectURL);

			// FIXME: type function appends new value to the existing value
			// it should remove the existing value and then enters the new value

			// type new name in input field
			type(newName, "input[name='newName']", {
				method: "by_query_selector"
			});

			// click on rename
			click("yui-gen1-button", {
				method: "by_id",
				expectReload: true
			});

			// TODO: if fixme is done uncomment below code for Rename API Support

			// data.append("newName", newName);
			// renameJob(renameUrl, data);

			notify("Job renamed successfully", "success", 3000);
		}
	} else {
		notify("Cannot have empty job name", "error", 3000);
	}
}
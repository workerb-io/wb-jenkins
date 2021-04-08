// @description Build with parameters

import { Job } from "../../../utils/interfaces";

if (options.jobs) {
	const job = options.jobs as Job;

	// open Job page
	open(job.url)

	// click on Build with Parameters option
	click("a[title='Build with Parameters']", {
		method: "by_query_selector",
		expectReload: true
	});

	notify("Enter the build parameters and click Build", "success", 3000);
}
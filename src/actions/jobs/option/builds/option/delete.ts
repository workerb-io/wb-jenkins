// @description Delete Build

import { deleteBuild } from "../../../../../utils/api";
import { BUILDS, BUILD_DELETE_URI, JOBS } from "../../../../../utils/constants";
import { Build, Job } from "../../../../../utils/interfaces";

if (options.builds && options.jobs) {
	const job: Job = options.jobs;
	const build: Build = options.builds;
	const deleteUrl: string = build.url + BUILD_DELETE_URI;

	const deleteBuildResponse = deleteBuild(deleteUrl);
	if (deleteBuildResponse.status === 200) {
		notify("Build Deleted Successfully", "success", 3000);
		reIndex([JOBS, job.name, BUILDS]);
	} else {
		notify("Failed to delete build", "error", 3000);
	}
}
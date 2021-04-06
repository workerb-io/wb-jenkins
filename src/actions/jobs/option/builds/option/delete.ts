// @description Delete Build

import { deleteBuild } from "../../../../../utils/api";
import { BUILD_DELETE_URI } from "../../../../../utils/constants";
import { Build } from "../../../../../utils/interfaces";

if (options.builds) {
	const build: Build = options.builds;
	const deleteUrl: string = build.url + BUILD_DELETE_URI;

	/*
	FIXME: delete is not working, 
	Error: Getting Call stack exceeded error
	Possible Reason: Getting HTML page as response instead of JSON
	*/

	const deleteBuildResponse = deleteBuild(deleteUrl);
	if (deleteBuildResponse.status === 200) {
		notify("Build Deleted Successfully", "success", 3000);
	} else {
		notify("Failed to delete build", "error", 3000);
	}
}
// @description Open Test Reports

import { BUILD_TESTREPORTS_URI } from "../../../../../utils/constants";
import { Build } from "../../../../../utils/interfaces";

if (options.builds) {
	const build: Build = options.builds;
	const testReportUrl: string = build.url + BUILD_TESTREPORTS_URI
	open(testReportUrl);
}
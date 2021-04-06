// @description Open Console

import { BUILD_CONSOLE_URI } from "../../../../../utils/constants";
import { Build } from "../../../../../utils/interfaces";

if (options.builds) {
	const build: Build = options.builds;
	const consoleUrl: string = build.url + BUILD_CONSOLE_URI
	open(consoleUrl);
}
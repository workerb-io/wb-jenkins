// @description Open Build

import { Build } from "../../../../../utils/interfaces";

if (options.builds) {
	const build: Build = options.builds;
	open(build.url);
}
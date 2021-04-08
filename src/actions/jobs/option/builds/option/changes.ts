// @description Open Changes

import { BUILD_CHANGES_URI } from "../../../../../utils/constants";
import { Build } from "../../../../../utils/interfaces";

if (options.builds) {
	const build: Build = options.builds;
	const changesUrl: string = build.url + BUILD_CHANGES_URI
	open(changesUrl);
}
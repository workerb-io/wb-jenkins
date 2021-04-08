// @description Open Build Parameters

import { BUILD_PARAMETERS_URI } from "../../../../../utils/constants";
import { Build } from "../../../../../utils/interfaces";

if (options.builds) {
	const build: Build = options.builds;
	const parametersUrl: string = build.url + BUILD_PARAMETERS_URI;
	open(parametersUrl);
}
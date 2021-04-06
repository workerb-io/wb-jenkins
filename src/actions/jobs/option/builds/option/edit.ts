// @description Edit Build Info

import { BUILD_CONFIGURE_URI } from "../../../../../utils/constants";
import { Build } from "../../../../../utils/interfaces";

if (options.builds) {
	const build: Build = options.builds;
	const editUrl: string = build.url + BUILD_CONFIGURE_URI;
	open(editUrl);
}
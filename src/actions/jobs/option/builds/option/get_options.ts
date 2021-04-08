import { Job } from "../../../../../utils/interfaces";

const returnOptions = () => {
	const removeAction: string[] = []
	if (options.jobs) {
		const job = options.jobs as Job;
		if (job && !job.isParameterized) {
			// job is not parameterized
			removeAction.push('parameters');
		}
	}
	return JSON.stringify({
		remove: removeAction
	});
}

export default returnOptions;

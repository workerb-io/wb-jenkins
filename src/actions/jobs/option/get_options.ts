import { Job } from "../../../utils/interfaces";

const returnOptions = () => {
	const removeAction: string[] = []
	if (options.jobs) {
		const job = options.jobs as Job;
		if (job) {
			if (job.disabled) {
				// Job is Disabled
				// removing build, parameter build, disable Action
				removeAction.push('build', 'parameter_build', 'disable');
			} else {
				// Job is Enabled
				if (job.isParameterized) {
					// parameterized job
					// removing build without params and enable action
					removeAction.push('build', 'enable');
				} else {
					// job without parameters
					// removing build with params and enable action
					removeAction.push('parameter_build', 'enable');
				}
			}
		}
	}
	return JSON.stringify({
		remove: removeAction
	});
}

export default returnOptions;

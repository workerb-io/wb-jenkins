import { Job } from "../../../utils/interfaces";

const hasParameters = (props: Array<any>): boolean => {
	let hasParams = false;
	props.forEach((prop: any) => {
		if ("parameterDefinitions" in prop && prop["parameterDefinitions"].length > 0) {
			hasParams = true
		}
	});
	return hasParams
}

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
				if (job.property && job.property.length > 0 && hasParameters(job.property)) {
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
